"use client";
import { useState } from "react";
import { Pencil, Plus, Trash2, Save, X } from "lucide-react";
import { toast } from "sonner";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  start_date: string;
  end_date: string;
  description: string;
  user_id: string;
}

export default function ExperienceSection({ 
  experience: initialExperience,
  userId 
}: { 
  experience: ExperienceItem[];
  userId: string;
}) {
  const [experience, setExperience] = useState(initialExperience);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [newExperience, setNewExperience] = useState<Partial<ExperienceItem>>({
    role: "",
    company: "",
    start_date: "",
    end_date: "",
    description: "",
    user_id: userId
  });
  const [isAdding, setIsAdding] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = (id: string) => {
    setIsEditing(id);
  };

  const handleCancel = () => {
    setIsEditing(null);
    setIsAdding(false);
    setNewExperience({
      role: "",
      company: "",
      start_date: "",
      end_date: "",
      description: "",
      user_id: userId
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id?: string) => {
    const { name, value } = e.target;
    
    if (id) {
      setExperience(prev => prev.map(exp => 
        exp.id === id ? { ...exp, [name]: value } : exp
      ));
    } else {
      setNewExperience(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleAddExperience = () => {
    setIsAdding(true);
  };

  const createExperience = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:9000/api/users/experience/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(newExperience),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to create experience');

      setExperience(prev => [...prev, data]);
      toast.success('Experience added successfully');
      handleCancel();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Error creating experience');
    } finally {
      setIsLoading(false);
    }
  };

  const updateExperience = async (id: string) => {
    try {
      setIsLoading(true);
      const expToUpdate = experience.find(exp => exp.id === id);
      if (!expToUpdate) return;

      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:9000/api/users/experience/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(expToUpdate),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to update experience');

      toast.success('Experience updated successfully');
      setIsEditing(null);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Error updating experience');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteExperience = async (id: string) => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:9000/api/users/experience/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to delete experience');

      setExperience(prev => prev.filter(exp => exp.id !== id));
      toast.success('Experience deleted successfully');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Error deleting experience');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <section className="mt-6 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <button 
          onClick={handleAddExperience}
          disabled={isAdding || isLoading}
          className="flex items-center gap-1 text-blue-600"
        >
          <Plus size={20} /> Add Experience
        </button>
      </div>

      {isAdding && (
        <div className="mb-6 bg-white p-4 rounded-md shadow border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Role</label>
              <input
                type="text"
                name="role"
                value={newExperience.role}
                onChange={(e) => handleChange(e)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Company</label>
              <input
                type="text"
                name="company"
                value={newExperience.company}
                onChange={(e) => handleChange(e)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Start Date</label>
              <input
                type="date"
                name="start_date"
                value={newExperience.start_date}
                onChange={(e) => handleChange(e)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">End Date</label>
              <input
                type="date"
                name="end_date"
                value={newExperience.end_date}
                onChange={(e) => handleChange(e)}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={newExperience.description}
              onChange={(e) => handleChange(e)}
              rows={3}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={createExperience}
              disabled={isLoading}
              className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded"
            >
              <Save size={16} />
              {isLoading ? 'Saving...' : 'Save'}
            </button>
            <button
              onClick={handleCancel}
              disabled={isLoading}
              className="flex items-center gap-1 bg-gray-500 text-white px-3 py-1 rounded"
            >
              <X size={16} />
              Cancel
            </button>
          </div>
        </div>
      )}

      {experience.map((exp) => (
        <div key={exp.id} className="mb-4 bg-white p-4 rounded-md shadow border">
          {isEditing === exp.id ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Role</label>
                  <input
                    type="text"
                    name="role"
                    value={exp.role}
                    onChange={(e) => handleChange(e, exp.id)}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={exp.company}
                    onChange={(e) => handleChange(e, exp.id)}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Start Date</label>
                  <input
                    type="date"
                    name="start_date"
                    value={exp.start_date}
                    onChange={(e) => handleChange(e, exp.id)}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">End Date</label>
                  <input
                    type="date"
                    name="end_date"
                    value={exp.end_date}
                    onChange={(e) => handleChange(e, exp.id)}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  value={exp.description}
                  onChange={(e) => handleChange(e, exp.id)}
                  rows={3}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => updateExperience(exp.id)}
                  disabled={isLoading}
                  className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded"
                >
                  <Save size={16} />
                  {isLoading ? 'Saving...' : 'Save'}
                </button>
                <button
                  onClick={handleCancel}
                  disabled={isLoading}
                  className="flex items-center gap-1 bg-gray-500 text-white px-3 py-1 rounded"
                >
                  <X size={16} />
                  Cancel
                </button>
                <button
                  onClick={() => deleteExperience(exp.id)}
                  disabled={isLoading}
                  className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded ml-auto"
                >
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </>
          ) : (
            <div className="relative">
              <p className="font-bold text-lg">{exp.role}</p>
              <p className="text-gray-700">{exp.company}</p>
              <p className="text-gray-600">
                {formatDate(exp.start_date)} - {exp.end_date ? formatDate(exp.end_date) : 'Present'}
              </p>
              {exp.description && <p className="mt-2">{exp.description}</p>}
              
              <div className="absolute top-0 right-0 flex gap-2">
                <button
                  onClick={() => handleEdit(exp.id)}
                  className="text-blue-600 hover:text-blue-800"
                  disabled={isLoading}
                >
                  <Pencil size={18} />
                </button>
                <button
                  onClick={() => deleteExperience(exp.id)}
                  className="text-red-600 hover:text-red-800"
                  disabled={isLoading}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}