"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ProfileSection from "@/components/user-dashboard/ProfileSection";
import EducationSection from "@/components/user-dashboard/EducationSection";
import ExperienceSection from "@/components/user-dashboard/ExperienceSection";
import SkillsSection from "@/components/user-dashboard/SkillsSection";

interface Profile {
  fullname: string;
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
  const [skills, setSkills] = useState([]);
  const router = useRouter();

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/register?login=true");
      toast.success("Logout successful...!!");
      return;
    }

    try {
      const resProfile = await fetch("http://localhost:9000/api/users/profile/get", {
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

      const resEdu = await fetch("http://localhost:9000/api/users/education/fetch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ user_id: profileData.user_id }),
      });
      setEducation(await resEdu.json());

      const resExp = await fetch("http://localhost:9000/api/users/experience/fetch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ user_id: profileData.user_id }),
      });
      setExperience(await resExp.json());

      const resSkills = await fetch("http://localhost:9000/api/users/skills/fetch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ user_id: profileData.user_id }),
      });
      setSkills(await resSkills.json());
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
  };

  if (!profile) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Welcome, {profile.fullname}</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>

        <button
          onClick={() => router.push("/auth/form")}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
         Create Account
        </button>

      </div>

      <ProfileSection 
        profile={profile} 
        onUpdate={async (updatedProfile: Profile) => {
          setProfile(updatedProfile);
          toast.success("Profile updated successfully!");
        }} 
      />
      <hr className="my-4" />
      <EducationSection education={education} />
      <ExperienceSection experience={experience} />
      <SkillsSection skills={skills} />
    </div>
  );
}