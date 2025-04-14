"use client";
import Image from "next/image";
import { Pencil, Save, X, Upload, Download } from "lucide-react";
import { toast } from "sonner";
import { useState, ChangeEvent } from "react";

interface Profile {
  fullname: string;
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

export default function ProfileSection({ 
  profile: initialProfile,
  userId 
}: { 
  profile: Profile;
  userId: string;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<Profile & {
    profile_image?: string | FileWithPreview;
    resume_file?: string | File;
  }>(initialProfile);
  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => {
    setProfile(initialProfile);
    setIsEditing(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileWithPreview = Object.assign(file, {
        preview: URL.createObjectURL(file)
      });
      setProfile(prev => ({ ...prev, profile_image: fileWithPreview }));
    }
  };

  const handleResumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfile(prev => ({ ...prev, resume_file: e.target.files![0] }));
    }
  };

  const uploadFile = async (file: File, type: 'profile_image' | 'resume_file') => {
    const formData = new FormData();
    formData.append(type, file);
    formData.append('user_id', userId);

    try {
      const endpoint = type === 'profile_image' 
        ? '/api/users/profile/update' 
        : '/api/users/profile/update';
      
      const response = await fetch(`http://localhost:9000${endpoint}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Upload failed');

      return data[type];
    } catch (error) {
      toast.error(error instanceof Error ? error.message : `Failed to upload ${type}`);
      throw error;
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      
      // Upload files if they were changed
      let updatedProfile = { ...profile };
      
      if (profile.profile_image && typeof profile.profile_image !== 'string') {
        updatedProfile.profile_image = await uploadFile(profile.profile_image, 'profile_image');
      }
      
      if (profile.resume_file && typeof profile.resume_file !== 'string') {
        updatedProfile.resume_file = await uploadFile(profile.resume_file, 'resume_file');
      }

      // Update profile data
      const response = await fetch('http://localhost:9000/api/users/profile/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(updatedProfile),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Update failed');

      toast.success('Profile updated successfully');
      setIsEditing(false);
      setProfile(data); // Update with returned profile data
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  const getImageSrc = () => {
    if (!profile.profile_image) return null;
    if (typeof profile.profile_image === 'string') {
      return `http://localhost:9000/uploads/${profile.profile_image}`;
    }
    return profile.profile_image.preview;
  };

  const imageSrc = getImageSrc();

  return (
    <div className="my-6 bg-white rounded-lg shadow-md p-6 relative">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Image Section */}
        <div className="flex-shrink-0">
          <div className="relative group">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full w-[150px] h-[150px] object-cover border-4 border-gray-200"
                onLoad={() => {
                  if (
                    typeof profile.profile_image !== 'string' &&
                    profile.profile_image && 'preview' in profile.profile_image &&
                    profile.profile_image && 'preview' in profile.profile_image ? (profile.profile_image as FileWithPreview).preview : undefined
                  ) {
                    if (profile.profile_image && typeof profile.profile_image !== 'string' && 'preview' in profile.profile_image) {
                      if (profile.profile_image.preview) {
                        URL.revokeObjectURL(profile.profile_image.preview);
                      }
                    }
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullname"
                    value={profile.fullname}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={profile.mobile}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={profile.location}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">About</label>
                <textarea
                  name="about"
                  value={profile.about}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Resume</label>
                <div className="flex items-center gap-3">
                  {profile.resume_file && typeof profile.resume_file === 'string' ? (
                    <a
                      href={`http://localhost:9000/uploads/${profile.resume_file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                    >
                      <Download size={16} />
                      Current Resume
                    </a>
                  ) : (
                    <span className="text-gray-500">No resume uploaded</span>
                  )}
                  <label className="flex items-center gap-1 text-blue-600 hover:text-blue-800 cursor-pointer">
                    <Upload size={16} />
                    {profile.resume_file ? 'Change Resume' : 'Upload Resume'}
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
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors disabled:opacity-50"
                >
                  <X size={18} />
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  <Save size={18} />
                  {isLoading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-800">{profile.fullname}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600"><span className="font-semibold">Email:</span> {profile.email}</p>
                  <p className="text-gray-600"><span className="font-semibold">Mobile:</span> {profile.mobile}</p>
                </div>
                <div>
                  <p className="text-gray-600"><span className="font-semibold">Location:</span> {profile.location}</p>
                </div>
              </div>

              {profile.about && (
                <div className="pt-2">
                  <h3 className="font-semibold text-gray-700">About</h3>
                  <p className="text-gray-600 whitespace-pre-line">{profile.about}</p>
                </div>
              )}

              {profile.resume_file && typeof profile.resume_file === 'string' && (
                <div className="pt-2">
                  <a
                    href={`http://localhost:9000/uploads/${profile.resume_file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 w-fit"
                  >
                    <Download size={16} />
                    Download Resume
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {!isEditing && (
        <button
          onClick={handleEdit}
          disabled={isLoading}
          className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition-colors disabled:opacity-50"
        >
          <Pencil size={16} />
          Edit Profile
        </button>
      )}
    </div>
  );
}