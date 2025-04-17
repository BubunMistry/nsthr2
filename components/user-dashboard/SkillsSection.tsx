"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

interface SkillItem {
  id: string;
  skill_name: string;
}

export default function SkillsSection({ userToken }: { userToken: string }) {
  const [skills, setSkills] = useState<SkillItem[]>([]);
  const [showInput, setShowInput] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const res = await axios.post(
        "http://localhost:9000/api/users/skills/fetch",
        {},
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );

      if (Array.isArray(res.data.skills)) {
        setSkills(res.data.skills);
      } else {
        toast.error("Unexpected response format while fetching skills.");
        setSkills([]);
      }
    } catch {
      toast.error("Failed to fetch skills.");
    }
  };

  const handleDelete = async (skill_id: string) => {
    try {
      await axios.post(
        "http://localhost:9000/api/users/skills/delete",
        { skill_id },
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      setSkills((prev) => prev.filter((skill) => skill.id !== skill_id));
      toast.success("Skill removed successfully.");
    } catch {
      toast.error("Failed to delete skill.");
    }
  };

  const handleAddSkill = async () => {
    if (!newSkill.trim()) return;

    const newSkillItem = { id: Date.now().toString(), skill_name: newSkill };
    setSkills((prev) =>
      Array.isArray(prev) ? [...prev, newSkillItem] : [newSkillItem]
    );

    try {
      const res = await axios.post(
        "http://localhost:9000/api/users/skills/create",
        { skill_name: newSkill },
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );

      const addedSkill = res.data?.skill;

      if (addedSkill?.id) {
        setSkills((prev) =>
          prev.map((skill) =>
            skill.id === newSkillItem.id ? { ...skill, id: addedSkill.id } : skill
          )
        );
      }

      setNewSkill("");
      setShowInput(false);
      toast.success("Skill added successfully.");
    } catch (err) {
      setSkills((prev) => prev.filter((skill) => skill.id !== newSkillItem.id));

      if (
        axios.isAxiosError(err) &&
        err.response?.status === 400 &&
        err.response.data.error === "Skill already added"
      ) {
        toast.error("This skill is already added!");
      } else {
        toast.error("Failed to add skill.");
      }
    }
  };

  return (
    <section className="mt-6">
      <h2 className="text-2xl font-semibold mb-3">Featured Skills</h2>
      <div className="flex flex-wrap gap-3 mb-4">
        {Array.isArray(skills) &&
          skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-gradient-to-r from-[#6DD3FF] to-[#29A0D8] text-white rounded-full px-4 py-1 flex items-center gap-2"
            >
              <span>{skill.skill_name}</span>
              <button onClick={() => handleDelete(skill.id)}>
                <X size={16} className="hover:text-white transition" />
              </button>
            </div>
          ))}
      </div>

      {showInput ? (
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Enter skill"
            className="border border-[#6DD3FF] hover:border-[#29A0D8] px-3 py-1 rounded-full"
          />
          <button
            onClick={handleAddSkill}
            className="bg-gradient-to-r from-[#6DD3FF] to-[#29A0D8] text-white px-3 py-1 rounded-full"
          >
            Add
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowInput(true)}
          className="text-[#29A0D8] underline hover:text-black"
        >
          Add a new skill
        </button>
      )}
    </section>
  );
}
