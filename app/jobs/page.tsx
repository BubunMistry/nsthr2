"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

type Job = {
  id: number;
  job_title: string;
  job_location: string;
  job_type: string;
  job_opening_number: number;
  salary: number;
  description: string;
  created_at: string;
  updated_at: string;
};

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [applyingJobId, setApplyingJobId] = useState<number | null>(null);

  const fetchJobs = async (filters = { keyword: "", location: "" }) => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:9000/api/admin/jobs/list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters),
      });

      const data = await res.json();

      if (!res.ok) {
        setJobs([]);
        setError("No jobs found");
        return;
      }

      if (!Array.isArray(data)) {
        throw new Error("Unexpected response from server");
      }

      setJobs(data);
      setError("");
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Error fetching jobs");
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async (id: number) => {
    console.log("Apply clicked for job ID:", id); // ✅ Check if this logs
    try {
      const token = localStorage.getItem("token");
  
      if (!token) {
        alert("You must be logged in to apply for a job.");
        return;
      }
  
      console.log("Auth Token:", token); // 🔍 Log the token
  
      setApplyingJobId(id);
  
      const res = await fetch("http://localhost:9000/api/applications/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // 🛡 Include token
        },
        body: JSON.stringify({ job_id: id }),
      });
  
      const result = await res.json();
  
      if (!res.ok) {
        alert(result.message || "Failed to apply for the job.");
        return;
      }
  
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error applying for job:", error);
      alert("Something went wrong while applying.");
    } finally {
      setApplyingJobId(null);
    }
  };
  

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      {/* Hero Section */}
     

      <div className="relative bg-gradient-to-r from-[#29A0D8] to-[#6DD3FF] py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Jobs</h1>
          <p className="text-xl max-w-3xl mx-auto">
          Find your dream job opportunity
          </p>
        </div>
      </div>


      {/* Job Search Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="keyword" className="block text-sm font-medium text-gray-700 mb-1">
                    Keywords
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="keyword"
                      placeholder="Job title, skills, or company"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md pl-10 focus:ring-2 focus:ring-[#29A0D8] focus:border-transparent"
                    />
                    <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  </div>
                </div>
                <div className="flex-1">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    placeholder="City, state, or zip code"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-transparent"
                  />
                </div>
                <div className="self-end">
                  <Button onClick={() => fetchJobs({ keyword, location })} className="items-center" variant="default" size="lg">
                    Search Jobs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {loading ? (
            <p className="text-center">Loading jobs...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <>
              {/* Table View - Desktop */}
              <div className="overflow-x-auto hidden md:block">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-[#29A0D8]/10">
                      <th className="py-3 px-4 text-left border-b">#</th>
                      <th className="py-3 px-4 text-left border-b">Job Title</th>
                      <th className="py-3 px-4 text-left border-b">Location</th>
                      <th className="py-3 px-4 text-left border-b">Job Type</th>
                      <th className="py-3 px-4 text-left border-b">Openings</th>
                      <th className="py-3 px-4 text-left border-b">Salary</th>
                      <th className="py-3 px-4 text-left border-b">Description</th>
                      <th className="py-3 px-4 text-left border-b">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job, index) => (
                      <tr key={job.id} className="hover:bg-[#29A0D8]/5">
                        <td className="py-3 px-4 border-b">{index + 1}</td>
                        <td className="py-3 px-4 border-b font-medium">{job.job_title}</td>
                        <td className="py-3 px-4 border-b">{job.job_location}</td>
                        <td className="py-3 px-4 border-b">{job.job_type}</td>
                        <td className="py-3 px-4 border-b">{job.job_opening_number}</td>
                        <td className="py-3 px-4 border-b">₹{job.salary}</td>
                        <td className="py-3 px-4 border-b">{job.description}</td>
                        <td className="py-3 px-4 border-b">
                          <Button
                            size="sm"
                            onClick={() => handleApply(job.id)}
                            disabled={applyingJobId === job.id}
                          >
                            {applyingJobId === job.id ? "Applying..." : "Apply"}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Card View - Mobile */}
              <div className="md:hidden space-y-4">
                {jobs.map((job) => (
                  <div key={job.id} className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                    <h2 className="text-lg font-semibold">{job.job_title}</h2>
                    <p className="text-sm text-gray-500">{job.job_location}</p>
                    <div className="mt-2 text-sm">
                      <p><strong>Type:</strong> {job.job_type}</p>
                      <p><strong>Openings:</strong> {job.job_opening_number}</p>
                      <p><strong>Salary:</strong> ₹{job.salary}</p>
                      <p className="mt-1">{job.description}</p>
                    </div>
                    <Button
                      size="sm"
                      className="mt-3 w-full"
                      onClick={() => handleApply(job.id)}
                      disabled={applyingJobId === job.id}
                    >
                      {applyingJobId === job.id ? "Applying..." : "Apply"}
                    </Button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

