'use client';

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


  console.log(fetchJobs)


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
                  <Button
                    onClick={() => fetchJobs({ keyword, location })}
                    className="items-center"
                    variant="default"
                    size="lg"
                  >
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
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-[#29A0D8]/10">
                    <th className="py-3 px-4 text-left border-b border-[#29A0D8]/20">#</th>
                    <th className="py-3 px-4 text-left border-b border-[#29A0D8]/20">Job Title</th>
                    <th className="py-3 px-4 text-left border-b border-[#29A0D8]/20">Location</th>
                    <th className="py-3 px-4 text-left border-b border-[#29A0D8]/20">Job Type</th>
                    <th className="py-3 px-4 text-left border-b border-[#29A0D8]/20">Openings</th>
                    <th className="py-3 px-4 text-left border-b border-[#29A0D8]/20">Salary</th>
                    <th className="py-3 px-4 text-left border-b border-[#29A0D8]/20">Description</th>
                    <th className="py-3 px-4 text-left border-b border-[#29A0D8]/20">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job, index) => (
                    <tr key={job.id} className="hover:bg-[#29A0D8]/5">
                      <td className="py-3 px-4 border-b border-[#29A0D8]/10">{index + 1}</td>
                      <td className="py-3 px-4 border-b border-[#29A0D8]/10 font-medium">{job.job_title}</td>
                      <td className="py-3 px-4 border-b border-[#29A0D8]/10">{job.job_location}</td>
                      <td className="py-3 px-4 border-b border-[#29A0D8]/10">{job.job_type}</td>
                      <td className="py-3 px-4 border-b border-[#29A0D8]/10">{job.job_opening_number}</td>
                      <td className="py-3 px-4 border-b border-[#29A0D8]/10">₹{job.salary}</td>
                      <td className="py-3 px-4 border-b border-[#29A0D8]/10">{job.description}</td>
                      <td className="py-3 px-4 border-b border-[#29A0D8]/10">
                        <Button size="sm" variant="default">Apply</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
