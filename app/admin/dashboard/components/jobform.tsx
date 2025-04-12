// 'use client';

// import { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'sonner';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';

// const JobFormPage = () => {
//   const [form, setForm] = useState({
//     job_title: '',
//     job_location: '',
//     job_type: '',
//     job_opening_number: '',
//     salary: '',
//     description: '',
//     id: '', // required for update/delete
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const getToken = () => {
//     return localStorage.getItem('adminToken');
//   };

//   const handleCreate = async () => {
//     try {
//       const response = await axios.post('http://localhost:9000/api/admin/jobs/create', form, {
//         headers: { Authorization: `Bearer ${getToken()}` },
//       });
//       toast.success('Job created successfully!');
//     } catch (error: any) {
//       toast.error(error.response?.data?.error || 'Create failed');
//     }
//   };

//   const handleUpdate = async () => {
//     try {
//       const response = await axios.post(
//         'http://localhost:9000/api/admin/jobs/update',
//         form,
//         {
//           headers: { Authorization: `Bearer ${getToken()}` },
//         }
//       );
//       toast.success('Job updated successfully!');
//     } catch (error: any) {
//       toast.error(error.response?.data?.error || 'Update failed');
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       const response = await axios.post(
//         'http://localhost:9000/api/admin/jobs/delete',
//         { id: form.id },
//         {
//           headers: { Authorization: `Bearer ${getToken()}` },
//         }
//       );
//       toast.success('Job deleted successfully!');
//     } catch (error: any) {
//       toast.error(error.response?.data?.error || 'Delete failed');
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-4 space-y-4">
//       <h1 className="text-2xl font-bold mb-4">Job Form</h1>

//       <Input name="id" placeholder="Job ID (for update/delete)" value={form.id} onChange={handleChange} />
//       <Input name="job_title" placeholder="Job Title" value={form.job_title} onChange={handleChange} />
//       <Input name="job_location" placeholder="Location" value={form.job_location} onChange={handleChange} />
//       <Input name="job_type" placeholder="Type (Full-time, etc.)" value={form.job_type} onChange={handleChange} />
//       <Input name="job_opening_number" placeholder="Openings" value={form.job_opening_number} onChange={handleChange} />
//       <Input name="salary" placeholder="Salary" value={form.salary} onChange={handleChange} />
//       <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full border rounded-md p-2" />

//       <div className="flex gap-3 mt-4">
//         <Button onClick={handleCreate}>Create</Button>
//         <Button onClick={handleUpdate} variant="outline">Update</Button>
//         <Button onClick={handleDelete} variant="destructive">Delete</Button>
//       </div>
//     </div>
//   );
// };

// export default JobFormPage;



'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type JobType = {
  id: string;
  job_title: string;
  job_location: string;
  job_type: string;
  job_opening_number: string;
  salary: string;
  description: string;
};

const JobFormPage = () => {
  const [form, setForm] = useState<JobType>({
    id: '',
    job_title: '',
    job_location: '',
    job_type: '',
    job_opening_number: '',
    salary: '',
    description: '',
  });

  const [jobs, setJobs] = useState<JobType[]>([]);
  const [loading, setLoading] = useState(false);

  const getToken = () => localStorage.getItem('adminToken');

  const fetchJobs = async () => {
    try {
      const res = await axios.post('http://localhost:9000/api/admin/jobs/list', {});
      console.log('✅ Full Response:', res);
  
      // Check top-level keys
      console.log('🧠 typeof res.data:', typeof res.data);
      console.log('📦 res.data:', res.data);
  
      // Try setting the whole response data to jobs just to confirm structure
      setJobs(Array.isArray(res.data) ? res.data : res.data?.jobs || []);
  
    } catch (err: any) {
      console.error('❌ Error fetching jobs:', err);
      if (err.response) {
        console.error('🔍 Response Error:', err.response.data);
      }
      toast.error(err.response?.data?.error || 'Failed to fetch jobs.');
    }
  };

  
  useEffect(() => {
    fetchJobs();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    try {
      await axios.post('http://localhost:9000/api/admin/jobs/create', form, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      toast.success('Job created!');
      setForm({ id: '', job_title: '', job_location: '', job_type: '', job_opening_number: '', salary: '', description: '' });
      fetchJobs();
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'Create failed');
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.post('http://localhost:9000/api/admin/jobs/update', form, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      toast.success('Job updated!');
      setForm({ id: '', job_title: '', job_location: '', job_type: '', job_opening_number: '', salary: '', description: '' });
      fetchJobs();
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'Update failed');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.post(
        'http://localhost:9000/api/admin/jobs/delete',
        { id },
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      );
      toast.success('Job deleted!');
      fetchJobs();
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'Delete failed');
    }
  };

  const handleEdit = (job: JobType) => {
    setForm(job);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top when editing
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Admin Job Management</h1>

      {/* Job Form */}
      <div className="space-y-4 border p-4 rounded-md shadow-sm bg-white">
        <h2 className="text-xl font-semibold">{form.id ? 'Edit Job' : 'Create New Job'}</h2>

        <Input name="job_title" placeholder="Job Title" value={form.job_title} onChange={handleChange} />
        <Input name="job_location" placeholder="Location" value={form.job_location} onChange={handleChange} />
        <Input name="job_type" placeholder="Type" value={form.job_type} onChange={handleChange} />
        <Input name="job_opening_number" placeholder="Openings" value={form.job_opening_number} onChange={handleChange} />
        <Input name="salary" placeholder="Salary" value={form.salary} onChange={handleChange} />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
        />

        <div className="flex gap-4">
          {form.id ? (
            <Button onClick={handleUpdate}>Update</Button>
          ) : (
            <Button onClick={handleCreate}>Create</Button>
          )}
          {form.id && (
            <Button
              variant="secondary"
              onClick={() =>
                setForm({ id: '', job_title: '', job_location: '', job_type: '', job_opening_number: '', salary: '', description: '' })
              }
            >
              Cancel
            </Button>
          )}
        </div>
      </div>

      {/* Jobs Table */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">All Jobs</h2>
        {jobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          <div className="space-y-3">
            {jobs.map((job) => (
              <div key={job.id} className="border p-4 rounded-md bg-gray-50 flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{job.job_title}</h3>
                  <p className="text-sm text-gray-600">{job.job_location} • {job.job_type}</p>
                  <p className="text-sm text-gray-500 mt-1">{job.description}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" onClick={() => handleEdit(job)}>Edit</Button>
                  <Button variant="destructive" onClick={() => handleDelete(job.id)}>Delete</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobFormPage;
