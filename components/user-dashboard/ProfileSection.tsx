"use client";
import Image from "next/image";
import { Pencil, Save, X, Upload, Download } from "lucide-react";
import { toast } from "sonner";
import { useState, ChangeEvent, useEffect } from "react";

interface Profile {
  name: string;
  email: string;
  mobile: string;
  location: string;
  about: string;
  profile_image?: string | FileWithPreview;
  resume_file?: string | File;
  user_id?: string;
}

interface FileWithPreview extends File {
  preview?: string;
}

interface ProfileSectionProps {
  profile: Profile;
  userId: string;
  onUpdate?: (updatedProfile: Profile) => void;
}

export default function ProfileSection({
  profile: initialProfile,
  userId,
  onUpdate,
}: ProfileSectionProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<Profile & { profile_image?: string | FileWithPreview; resume_file?: string | File }>(initialProfile);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load the profile data when component mounts
    setProfile(initialProfile);
  }, [initialProfile]);

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => {
    setProfile(initialProfile);
    setIsEditing(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileWithPreview = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
      setProfile((prev) => ({ ...prev, profile_image: fileWithPreview }));
    }
  };

  const handleResumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfile((prev) => ({ ...prev, resume_file: e.target.files![0] }));
    }
  };

  const uploadFile = async (file: File, type: "profile_image" | "resume_file") => {
    const formData = new FormData();
    formData.append(type, file);
    formData.append("user_id", userId);

    try {
      const endpoint =
        type === "profile_image" ? "/api/users/auth/update" : "/api/users/auth/update";

      const response = await fetch(`http://localhost:9000${endpoint}`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Upload failed");

      return data[type];
    } catch (error) {
      toast.error(error instanceof Error ? error.message : `Failed to upload ${type}`);
      throw error;
    }
  };

  const handleSubmit = async () => {
    const previousProfile = { ...profile };
    try {
      setIsLoading(true);

      const updatedProfile = { ...profile };

      // Upload new profile image
      if (profile.profile_image && typeof profile.profile_image !== "string") {
        const uploadedImage = await uploadFile(profile.profile_image, "profile_image");
        updatedProfile.profile_image = uploadedImage;
      }

      // Upload new resume file
      if (profile.resume_file && typeof profile.resume_file !== "string") {
        const uploadedResume = await uploadFile(profile.resume_file, "resume_file");
        updatedProfile.resume_file = uploadedResume;
      }

      // Now send the final profile data to the backend
      const response = await fetch("http://localhost:9000/api/users/auth/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(updatedProfile),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Update failed");

      // Update local state and notify parent
      setProfile(data);
      if (onUpdate) onUpdate(data);

      toast.success("Profile updated successfully");

      setIsEditing(false);

      // Optionally, trigger a page refresh to reflect the changes across the app
      window.location.reload();  // This will force a page refresh to apply any changes

    } catch (error) {
      setProfile(previousProfile);
      if (onUpdate) onUpdate(previousProfile);

      toast.error(error instanceof Error ? error.message : "Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  const getImageSrc = () => {
    if (!profile.profile_image) return null;
    if (typeof profile.profile_image === "string") {
      return `http://localhost:9000/uploads/${profile.profile_image}`;
    }
    return profile.profile_image.preview;
  };

  const imageSrc = getImageSrc();

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Image Section */}
        <div className="flex-shrink-0 flex justify-center items-center">
          <div className="relative group">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full w-[150px] h-[150px] object-cover border-4 border-gray-200"
                onLoad={() => {
                  // Clean up object URL if this is a preview image
                  if (
                    typeof profile.profile_image !== "string" &&
                    profile.profile_image?.preview
                  ) {
                    URL.revokeObjectURL(profile.profile_image.preview);
                  }
                }}
              />
            ) : (
              <div className="w-[150px] h-[150px] rounded-full bg-gray-200 flex items-center justify-center border-4 border-gray-200">
                <span className="text-gray-500 text-lg">No Image</span>
              </div>
            )}

            {isEditing && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <label className="flex items-center justify-center w-full h-full cursor-pointer">
                  <Upload className="text-white" size={24} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    disabled={isLoading}
                  />
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Profile Info Section */}
        <div className="flex-1">
          {isEditing ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-[#29A0D8] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      readOnly
                      className="w-full p-3 border rounded-md bg-gray-100 cursor-not-allowed focus:ring-2 focus:ring-[#29A0D8] focus:border-[#29A0D8] transition-all"
                    />
                  ) : (
                    <p className="w-full p-3 border border-transparent rounded-md text-gray-600">
                      {profile.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={profile.mobile}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-[#29A0D8] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={profile.location}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-[#29A0D8] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  About
                </label>
                <textarea
                  name="about"
                  value={profile.about}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-[#29A0D8] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Resume
                </label>
                <div className="flex items-center gap-3">
                  {profile.resume_file && typeof profile.resume_file === "string" ? (
                    <a
                      href={`http://localhost:9000/uploads/${profile.resume_file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#000] hover:text-[#29A0D8]"
                    >
                      <Download size={16} />
                      Current Resume
                    </a>
                  ) : (
                    <span className="text-gray-500">No resume uploaded</span>
                  )}
                  <label className="flex items-center gap-1 text-[#29A0D8] hover:text-[#29A0D8] cursor-pointer">
                    <Upload size={16} />
                    {profile.resume_file ? "Change Resume" : "Upload Resume"}
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleResumeChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={handleCancel}
                  disabled={isLoading}
                  className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-full transition-all disabled:opacity-50"
                >
                  <X size={18} />
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#29A0D8] to-[#6DD3FF] text-white rounded-full transition-all disabled:opacity-50"
                >
                  <Save size={18} />
                  {isLoading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-gray-800">{profile.name}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-lg text-gray-600">
                    <span className="font-semibold">Email:</span> {profile.email}
                  </p>
                  <p className="text-lg text-gray-600">
                    <span className="font-semibold">Mobile:</span> {profile.mobile}
                  </p>
                  <p className="text-lg text-gray-600">
                    <span className="font-semibold">Location:</span> {profile.location}
                  </p>
                </div>

                <div>
                  <p className="text-lg text-gray-600">
                    <span className="font-semibold">About:</span> {profile.about}
                  </p>
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  onClick={handleEdit}
                  className="flex items-center gap-2 px-6 py-2  bg-gradient-to-r from-[#29A0D8] to-[#6DD3FF] text-white rounded-full"
                >
                  <Pencil size={18} />
                  Edit Profile
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
