"use client";
import { Pencil } from "lucide-react";
import { toast } from "sonner";

interface SkillItem {
  id: string;
  skill_name: string;
}

export default function SkillsSection({ skills }: { skills: SkillItem[] }) {
  const handleEdit = () => {
    toast.info("Edit skills clicked");
  };

  return (
    <section className="mt-6 relative">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <button onClick={handleEdit} className="text-blue-600">
          <Pencil size={20} />
        </button>
      </div>
      <ul className="list-disc list-inside">
        {skills.map((skill) => (
          <li key={skill.id}>{skill.skill_name}</li>
        ))}
      </ul>
    </section>
  );
}