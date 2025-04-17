"use client";
import { useEffect, useState } from "react";
import { Trash2, Pencil, Plus } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  start_date: string;
  end_date: string;
  description: string;
}

export default function ExperienceSection({ userToken }: { userToken: string }) {
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<ExperienceItem>>({});

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await axios.post(
          "http://localhost:9000/api/users/experience/fetch",
          {},
          {
            headers: { Authorization: `Bearer ${userToken}` },
          }
        );
        setExperiences(res.data.result || []);
      } catch {
        toast.error("Failed to fetch experiences");
      }
    };
    fetchExperiences();
  }, [userToken]);

  const handleDelete = async (id: string) => {
    try {
      await axios.post(
        "http://localhost:9000/api/users/experience/delete",
        { exp_id: id },
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      setExperiences((prev) => prev.filter((exp) => exp.id !== id));
      toast.success("Experience deleted");
    } catch {
      toast.error("Failed to delete experience");
    }
  };

  const handleEditClick = (exp: ExperienceItem) => {
    setEditId(exp.id);
    setFormData({ ...exp });
  };

  const handleSave = async () => {
    try {
      if (editId === "new") {
        const res = await axios.post(
          "http://localhost:9000/api/users/experience/create",
          formData,
          {
            headers: { Authorization: `Bearer ${userToken}` },
          }
        );
        const newExp = {
          ...formData,
          id: res.data.result?.id || crypto.randomUUID(),
        } as ExperienceItem;
        setExperiences((prev) => [...prev, newExp]);
        toast.success("Experience added");
      } else {
        const payload = {
          exp_id: formData.id,
          ...formData,
        };
        delete payload.id;

        await axios.post(
          "http://localhost:9000/api/users/experience/update",
          payload,
          {
            headers: { Authorization: `Bearer ${userToken}` },
          }
        );

        setExperiences((prev) =>
          prev.map((exp) =>
            exp.id === formData.id ? { ...exp, ...formData } as ExperienceItem : exp
          )
        );
        toast.success("Experience updated");
      }

      setEditId(null);
      setFormData({});
    } catch {
      toast.error("Failed to save experience");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const renderForm = () => (
    <div className="mb-6 p-4 border rounded-xl bg-white shadow">
      <input
        type="text"
        name="role"
        value={formData.role || ""}
        onChange={handleChange}
        placeholder="Role"
        className="w-full mb-3 p-3 border rounded-lg outline-none focus:border-[#29A0D8]"
      />
      <input
        type="text"
        name="company"
        value={formData.company || ""}
        onChange={handleChange}
        placeholder="Company"
        className="w-full mb-3 p-3 border rounded-lg outline-none focus:border-[#29A0D8]"
      />
      <div className="flex gap-4 mb-3">
        <input
          type="date"
          name="start_date"
          value={formData.start_date || ""}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg outline-none focus:border-[#29A0D8]"
        />
        <input
          type="date"
          name="end_date"
          value={formData.end_date || ""}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg outline-none focus:border-[#29A0D8]"
        />
      </div>
      <textarea
        name="description"
        value={formData.description || ""}
        onChange={handleChange}
        placeholder="Description"
        className="w-full mb-3 p-3 border rounded-lg outline-none focus:border-[#29A0D8]"
        rows={3}
      />
      <div className="flex gap-3">
        <button
          onClick={handleSave}
          className="bg-gradient-to-r from-[#6DD3FF] to-[#29A0D8] text-white px-6 py-2 rounded-full"
        >
          Save
        </button>
        <button
          onClick={() => {
            setEditId(null);
            setFormData({});
          }}
          className="border border-gray-400 text-gray-600 px-6 py-2 rounded-full hover:bg-gray-100"
        >
          Cancel
        </button>
      </div>
    </div>
  );

  return (
    <section className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Experience</h2>
        {editId !== "new" && (
          <button
            onClick={() => {
              setEditId("new");
              setFormData({});
            }}
            className="text-[#29A0D8] flex items-center gap-1 hover:underline"
          >
            <Plus size={18} />
            Add
          </button>
        )}
      </div>

      {editId === "new" && renderForm()}

      {experiences.length === 0 && editId !== "new" && (
        <p className="text-gray-500">No experience added yet.</p>
      )}

      {experiences.map((exp) => {
        if (!exp || !exp.id) return null;

        return editId !== "new" && editId === exp.id ? (
          <div key={exp.id}>{renderForm()}</div>
        ) : (
          <div
            key={exp.id}
            className="relative bg-white p-5 rounded-xl shadow border mb-4"
          >
            <div className="absolute right-3 top-3 flex gap-2">
              <button onClick={() => handleEditClick(exp)}>
                <Pencil size={20} className="text-[#29A0D8] hover:text-[#6DD3FF]" />
              </button>
              <button onClick={() => handleDelete(exp.id)}>
                <Trash2 size={20} className="text-red-600" />
              </button>
            </div>
            <p className="font-semibold text-lg">
              {exp.role} at {exp.company}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              {new Date(exp.start_date).toLocaleDateString()} -{" "}
              {new Date(exp.end_date).toLocaleDateString()}
            </p>
            <p>{exp.description}</p>
          </div>
        );
      })}
    </section>
  );
}
