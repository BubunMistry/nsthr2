"use client";
import { Pencil } from "lucide-react";
import { toast } from "sonner";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  start_date: string;
  end_date: string;
  description: string;
}

export default function ExperienceSection({ experience }: { experience: ExperienceItem[] }) {
  const handleEdit = () => {
    toast.info("Edit experience clicked");
  };

  return (
    <section className="mt-6 relative">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <button onClick={handleEdit} className="text-blue-600">
          <Pencil size={20} />
        </button>
      </div>
      {experience.map((exp) => (
        <div key={exp.id} className="mb-4 bg-gray-100 p-3 rounded-md">
          <p>
            <strong>{exp.role}</strong> at {exp.company} (
            {new Date(exp.start_date).toLocaleDateString()} -{" "}
            {new Date(exp.end_date).toLocaleDateString()})
          </p>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
}