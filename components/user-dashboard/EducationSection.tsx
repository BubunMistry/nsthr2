"use client";
import { useState } from "react";
import { Pencil, Plus, Trash2, Save, X } from "lucide-react";
import { toast } from "sonner";

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  start_year: string;
  end_year: string;
  description: string;
  user_id: string;
}

export default function EducationSection({ 
  education: initialEducation,
  userId 
}: { 
  education: EducationItem[];
  userId: string;
}) {
  const [education, setEducation] = useState(initialEducation);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [newEducation, setNewEducation] = useState<Partial<EducationItem>>({
    degree: "",
    institution: "",
    start_year: "",
    end_year: "",
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
    setNewEducation({
      degree: "",
      institution: "",
      start_year: "",
      end_year: "",
      description: "",
      user_id: userId
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id?: string) => {
    const { name, value } = e.target;
    
    if (id) {
      setEducation(prev => prev.map(edu => 
        edu.id === id ? { ...edu, [name]: value } : edu
      ));
    } else {
      setNewEducation(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleAddEducation = () => {
    setIsAdding(true);
  };

  const createEducation = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:9000/api/users/education/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(newEducation),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to create education');

      setEducation(prev => [...prev, data]);
      toast.success('Education added successfully');
      handleCancel();
    } catch (error) {
      toast.error((error instanceof Error ? error.message : 'Unknown error') || 'Error creating education');
    } finally {
      setIsLoading(false);
    }
  };

  const updateEducation = async (id: string) => {
    try {
      setIsLoading(true);
      const eduToUpdate = education.find(edu => edu.id === id);
      if (!eduToUpdate) return;

      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:9000/api/users/education/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(eduToUpdate),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to update education');

      toast.success('Education updated successfully');
      setIsEditing(null);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Error updating education');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const deleteEducation = async (id: string) => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:9000/api/users/education/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to delete education');

      setEducation(prev => prev.filter(edu => edu.id !== id));
      toast.success('Education deleted successfully');
    } catch (error) {
      toast.error((error instanceof Error ? error.message : 'Unknown error') || 'Error deleting education');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Education</h2>
        <button 
          onClick={handleAddEducation}
          disabled={isAdding || isLoading}
          className="flex items-center gap-1 text-blue-600"
        >
          <Plus size={20} /> Add Education
        </button>
      </div>

      {isAdding && (
        <div className="mb-6 bg-white p-4 rounded-md shadow border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Degree</label>
              <input
                type="text"
                name="degree"
                value={newEducation.degree}
                onChange={(e) => handleChange(e)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Institution</label>
              <input
                type="text"
                name="institution"
                value={newEducation.institution}
                onChange={(e) => handleChange(e)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Start Year</label>
              <input
                type="text"
                name="start_year"
                value={newEducation.start_year}
                onChange={(e) => handleChange(e)}
                className="w-full p-2 border rounded"
                placeholder="YYYY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">End Year</label>
              <input
                type="text"
                name="end_year"
                value={newEducation.end_year}
                onChange={(e) => handleChange(e)}
                className="w-full p-2 border rounded"
                placeholder="YYYY or Present"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={newEducation.description}
              onChange={(e) => handleChange(e)}
              rows={3}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={createEducation}
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

      {education.map((edu) => (
        <div key={edu.id} className="mb-4 bg-white p-4 rounded-md shadow border">
          {isEditing === edu.id ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Degree</label>
                  <input
                    type="text"
                    name="degree"
                    value={edu.degree}
                    onChange={(e) => handleChange(e, edu.id)}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Institution</label>
                  <input
                    type="text"
                    name="institution"
                    value={edu.institution}
                    onChange={(e) => handleChange(e, edu.id)}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Start Year</label>
                  <input
                    type="text"
                    name="start_year"
                    value={edu.start_year}
                    onChange={(e) => handleChange(e, edu.id)}
                    className="w-full p-2 border rounded"
                    placeholder="YYYY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">End Year</label>
                  <input
                    type="text"
                    name="end_year"
                    value={edu.end_year}
                    onChange={(e) => handleChange(e, edu.id)}
                    className="w-full p-2 border rounded"
                    placeholder="YYYY or Present"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  value={edu.description}
                  onChange={(e) => handleChange(e, edu.id)}
                  rows={3}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => updateEducation(edu.id)}
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
                  onClick={() => deleteEducation(edu.id)}
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
              <p className="font-bold text-lg">{edu.degree}</p>
              <p className="text-gray-700">{edu.institution}</p>
              <p className="text-gray-600">{edu.start_year} - {edu.end_year}</p>
              {edu.description && <p className="mt-2">{edu.description}</p>}
              
              <div className="absolute top-0 right-0 flex gap-2">
                <button
                  onClick={() => handleEdit(edu.id)}
                  className="text-blue-600 hover:text-blue-800"
                  disabled={isLoading}
                >
                  <Pencil size={18} />
                </button>
                <button
                  onClick={() => deleteEducation(edu.id)}
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