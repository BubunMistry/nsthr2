"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ProfileSection from "@/components/user-dashboard/ProfileSection";
import EducationSection from "@/components/user-dashboard/EducationSection";
import ExperienceSection from "@/components/user-dashboard/ExperienceSection";
import SkillsSection from "@/components/user-dashboard/SkillsSection";

interface Profile {
  name: string;
  email: string;
  mobile: string;
  location: string;
  about: string;
  profile_image?: string;
  resume_file?: string;
  user_id?: string;
}

export default function UserDashboard() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [userToken, setUserToken] = useState<string | null>(null);
  const router = useRouter();

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/register?login=true");
      toast.success("Logout successful...!!");
      return;
    }
    setUserToken(token); // Save token to pass to SkillsSection

    try {
      const resProfile = await fetch("http://localhost:9000/api/users/auth/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_id: JSON.parse(atob(token.split(".")[1])).id,
        }),
      });
      const profileData = await resProfile.json();
      setProfile(profileData);
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/auth/register?login=true");
    toast.success("Profile Logged out successfully!");
  };

  if (!profile || !userToken) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between py-10 items-center">
        <h1 className="text-3xl font-bold">Welcome, {profile.name}</h1>

      </div>

      <ProfileSection
        profile={profile}
        onUpdate={async (updatedProfile: Profile) => {
          setProfile(updatedProfile);
          toast.success("Profile updated successfully!");
        }}
      />
      <hr className="my-4" />

      <ExperienceSection userToken={userToken} />
      <EducationSection userToken={userToken} />
      <SkillsSection userToken={userToken} />
      <div className="py-8">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-5 py-2 float-end rounded-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
