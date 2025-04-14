"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ApplicantsTable() {
  const [applicants, setApplicants] = useState<
    {
      job_location: string;
      job_title: string;
      application_id: string;
      fullname: string;
      email: string;
      mobile: string;
      status?: string;
      applied_at: string;
    }[]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [jobId, setJobId] = useState(""); // State to hold job ID for filtering
  const fetchApplicants = async () => {
    const token = localStorage.getItem("adminToken");
    console.log("Fetched Token:", token); // ✅ Add this to debug

    if (!token) {
      console.error("No token found. User is not authenticated.");
      return;
    }

    try {
      const url = jobId
        ? `http://localhost:9000/api/applications/${jobId}`
        : "http://localhost:9000/api/applications/all";

      const res = await axios.post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setApplicants(res.data);
    } catch (err) {
      console.error("Error fetching applicants:", err);
    }
  };

  // 🔹 Update Application Status
  const handleUpdateStatus = async (application_id: string) => {
    const newStatus = prompt(
      "Enter new status (e.g., Shortlisted, Rejected, Hired):"
    );
    if (!newStatus) return;

    const token = localStorage.getItem("adminToken");
    try {
      const res = await axios.post(
        "http://localhost:9000/api/applications/update-status",
        { application_id, status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert(res.data.message || "Status updated successfully");
      fetchApplicants(); // Refresh table
    } catch (err) {
      console.error("Status update failed:", err);
      alert("Failed to update status.");
    }
  };

  // 🔹 Delete Application
  const handleDeleteApplication = async (application_id: string) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this application?"
    );
    if (!confirmDelete) return;

    const token = localStorage.getItem("adminToken");
    try {
      const res = await axios.post(
        "http://localhost:9000/api/applications/delete",
        { application_id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert(res.data.message || "Application deleted successfully");
      fetchApplicants(); // Refresh table
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete application.");
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, [jobId]); // Re-fetch applicants when jobId changes

  // Filter applicants based on search term (name search)
  const filteredApplicants = applicants.filter((applicant) =>
    `${applicant.fullname}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      {/* Job ID filter and search */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-3 py-1 rounded-md shadow-sm"
          />
          <input
            type="text"
            placeholder="Search by Job ID..."
            value={jobId}
            onChange={(e) => setJobId(e.target.value)}
            className="border px-3 py-1 rounded-md shadow-sm"
          />
        </div>
        <button
          onClick={fetchApplicants} // Fetch applicants based on updated jobId
          className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-4 py-2 rounded-md"
        >
          Filter Applicants
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border">
          <thead className="bg-gray-100 text-xs uppercase">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Job Title</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Applied At</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplicants.map((app, index) => (
              <tr
                key={app.application_id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{app.fullname}</td>
                <td className="px-4 py-2">{app.email}</td>
                <td className="px-4 py-2">{app.mobile}</td>
                <td className="px-4 py-2">{app.job_title}</td>
                <td className="px-4 py-2">{app.job_location}</td>
                <td className="px-4 py-2">{app.status || "Pending"}</td>
                <td className="px-4 py-2">
                  {new Date(app.applied_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-2 py-1 rounded"
                    onClick={() => handleUpdateStatus(app.application_id)}
                  >
                    Update Status
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded"
                    onClick={() => handleDeleteApplication(app.application_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredApplicants.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-4 text-gray-500">
                  No applicants found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
