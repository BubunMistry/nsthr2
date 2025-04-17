"use client";
import { useEffect, useState } from "react";
import { Plus, Save, Trash2, X, Pencil } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

interface EducationItem {
  edu_id: string;
  id: string;
  degree: string;
  institution: string;
  start_year: string;
  end_year: string;
  description: string;
}

interface EducationAPIItem extends Omit<EducationItem, 'id'> {
  id?: any;
  edu_id?: string;
}

export default function EducationSection({ userToken }: { userToken: string }) {
  const [educationData, setEducationData] = useState<EducationItem[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Partial<EducationItem>>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchEducation();
  }, []);

  const fetchEducation = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        "http://localhost:9000/api/users/education/fetch",
        {},
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      // Normalize each item
      const normalizedData: EducationItem[] = (res.data || []).map((item: any) => ({
        id: item.edu_id || item.id,
        degree: item.degree,
        institution: item.institution,
        start_year: item.start_year,
        end_year: item.end_year,
        description: item.description,
        edu_id: item.edu_id || item.id, // optional fallback
      }));

      setEducationData(normalizedData);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || err.message || "Error fetching education");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEdit = (item: EducationItem) => {
    setEditId(item.id);
    setFormData(item);
    setIsAdding(false);
  };

  const handleAddNew = () => {
    setFormData({
      degree: "",
      institution: "",
      start_year: "",
      end_year: "",
      description: "",
    });
    setIsAdding(true);
    setEditId(null);
  };

  const handleCancel = () => {
    setEditId(null);
    setIsAdding(false);
    setFormData({});
  };

  const createEducation = async () => {
    try {
      setIsLoading(true);
      const { id, ...dataWithoutId } = formData;

      await axios.post(
        "http://localhost:9000/api/users/education/create",
        dataWithoutId,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      toast.success("Education added successfully");
      await fetchEducation(); // Re-fetch from backend to sync
      handleCancel();
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Error adding education");
    } finally {
      setIsLoading(false);
    }
  };

  const updateEducation = async () => {
    try {
      if (!formData.id) return;

      setIsLoading(true);
      const apiData: EducationAPIItem = {
        edu_id: formData.id,
        degree: formData.degree || "",
        institution: formData.institution || "",
        start_year: formData.start_year || "",
        end_year: formData.end_year || "",
        description: formData.description || "",
      };

      await axios.post(
        "http://localhost:9000/api/users/education/update",
        apiData,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      toast.success("Education updated successfully");
      await fetchEducation(); // Re-fetch from backend to sync
      handleCancel();
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Error updating education");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteEducation = async (id: string) => {
    try {
      setIsLoading(true);
      await axios.post(
        "http://localhost:9000/api/users/education/delete",
        { edu_id: id },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      toast.success("Education deleted successfully");
      await fetchEducation(); // Re-fetch from backend to sync
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Error deleting education");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-semibold mb-3">Education</h2>
        {!isAdding && !editId && (
          <button
            onClick={handleAddNew}
            disabled={isLoading}
            className="flex items-center gap-1 text-[#29A0D8]"
          >
            <Plus size={18} />
            Add
          </button>
        )}
      </div>

      {(isAdding || editId) && (
        <div className="bg-white p-4 rounded shadow border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Degree</label>
              <input
                name="degree"
                value={formData.degree || ""}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Institution</label>
              <input
                name="institution"
                value={formData.institution || ""}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Start Year</label>
              <input
                name="start_year"
                value={formData.start_year || ""}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                placeholder="YYYY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">End Year</label>
              <input
                name="end_year"
                value={formData.end_year || ""}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                placeholder="YYYY or Present"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                name="description"
                rows={3}
                value={formData.description || ""}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
              />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              onClick={editId ? updateEducation : createEducation}
              disabled={isLoading}
              className="bg-gradient-to-r from-[#29A0D8] to-[#6DD3FF] rounded-full text-white px-6 py-2 rounded flex items-center gap-1"
            >
              <Save size={16} />
              {isLoading ? "Saving..." : "Save"}
            </button>
            <button
              onClick={handleCancel}
              disabled={isLoading}
              className="bg-red-600 rounded-full text-white px-6 py-2 rounded flex items-center gap-1"
            >
              <X size={16} />
              Cancel
            </button>
          </div>
        </div>
      )}

      {educationData.length === 0 && !isAdding && (
        <div className="text-gray-600 border p-4 rounded shadow bg-white">
          <p>No education history added yet.</p>
        </div>
      )}

      {educationData.map(item => (
        <div key={item.id} className="relative bg-white p-4 rounded shadow border">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold text-lg">{item.degree}</h3>
              <p className="text-sm text-gray-600">{item.institution}</p>
              <p className="text-sm text-gray-500">
                {item.start_year} - {item.end_year}
              </p>
              {item.description && <p className="mt-2">{item.description}</p>}
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(item)} className="text-[#29A0D8] hover:text-[#6DD3FF]">
                <Pencil size={20} />
              </button>
              <button onClick={() => deleteEducation(item.id)} className="text-red-600">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
