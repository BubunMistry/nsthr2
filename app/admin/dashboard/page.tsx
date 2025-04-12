"use client";

import { useState, useEffect } from "react";
import {
  Briefcase,
  FileText,
  Mail,
  Settings,
  LogOut,
  PlusCircle,
  Trash2,
  Edit,
  User,
} from "lucide-react";
import axios from "axios";
import JobForm from "./components/jobform";
import BlogForm from "./components/BlogForm";

const AdminDashboard = () => {
  // State for active tab and data
  const [activeTab, setActiveTab] = useState("jobs");
  const [jobs, setJobs] = useState<
    {
      _id: string;
      title: string;
      description: string;
      location: string;
      type: string;
      image?: string;
    }[]
  >([]);
  const [blogs, setBlogs] = useState<
    {
      _id: string;
      title: string;
      content: string;
      author: string;
      image?: string;
    }[]
  >([]);
  const [contacts, setContacts] = useState<
    {
      id: string;
      first_name: string;
      last_name: string;
      email: string;
      mobile: string;
      company: string;
      subject: string;
      message: string;
      submitted_at: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [jobForm, setJobForm] = useState<{
    title: string;
    description: string;
    location: string;
    type: string;
    image: File | null;
  }>({
    title: "",
    description: "",
    location: "",
    type: "Full-time",
    image: null,
  });
  const [blogForm, setBlogForm] = useState<{
    title: string;
    content: string;
    author: string;
    image: File | null;
  }>({
    title: "",
    content: "",
    author: "",
    image: null,
  });

  // Fetch data based on active tab
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let endpoint = "";

        if (activeTab === "jobs") {
          endpoint = "http://localhost:9000/api/admin/jobs/list";
        } else if (activeTab === "blogs") {
          endpoint = "http://localhost:9000/api/admin/blogs";
        } else if (activeTab === "contacts") {
          endpoint = "http://localhost:9000/api/contact/all";
        }

        const response = await axios.post(endpoint);

        if (activeTab === "jobs") {
          setJobs(response.data);
        } else if (activeTab === "blogs") {
          setBlogs(response.data);
        } else {
          setContacts(response.data);
        }

        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          if (err instanceof Error) {
            if (err instanceof Error) {
              if (err instanceof Error) {
                if (err instanceof Error) {
                  setError(err.message);
                } else {
                  setError("An unknown error occurred");
                }
              } else {
                setError("An unknown error occurred");
              }
            } else {
              setError("An unknown error occurred");
            }
          } else {
            setError("An unknown error occurred");
          }
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  // Handle form submissions
  interface JobForm {
    title: string;
    description: string;
    location: string;
    type: string;
    image: File | null;
  }

  const handleJobSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", jobForm.title);
      formData.append("description", jobForm.description);
      formData.append("location", jobForm.location);
      formData.append("type", jobForm.type);
      if (jobForm.image) {
        formData.append("image", jobForm.image);
      }

      await axios.post(
        "http://localhost:9000/api/admin/jobs/list/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Refresh jobs list
      const response = await axios.get(
        "http://localhost:9000/api/admin/jobs/list"
      );
      setJobs(response.data);
      setJobForm({
        title: "",
        description: "",
        location: "",
        type: "Full-time",
        image: null,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  interface BlogForm {
    title: string;
    content: string;
    author: string;
    image: File | null;
  }

  const handleBlogSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", blogForm.title);
      formData.append("content", blogForm.content);
      formData.append("author", blogForm.author);
      if (blogForm.image) {
        formData.append("image", blogForm.image);
      }

      await axios.post(
        "http://localhost:9000/api/admin/blogs/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Refresh blogs list
      const response = await axios.get("http://localhost:9000/api/admin/blogs");
      setBlogs(response.data);
      setBlogForm({
        title: "",
        content: "",
        author: "",
        image: null,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  // Handle logout
  const handleLogout = () => {
    console.log("Logging out...");
  };

  // Delete functions
  interface DeleteJobParams {
    id: string;
  }

  const deleteJob = async ({ id }: DeleteJobParams): Promise<void> => {
    try {
      await axios.delete(`http://localhost:9000/api/admin/jobs/delete/${id}`);
      setJobs(jobs.filter((job) => job._id !== id));
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  interface DeleteBlogParams {
    id: string;
  }

  const deleteBlog = async ({ id }: DeleteBlogParams): Promise<void> => {
    try {
      await axios.delete(`http://localhost:9000/api/admin/blogs/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className="w-64 bg-white shadow-md"
        style={{ backgroundColor: "#29A0D8" }}
      >
        <div className="p-4 flex items-center space-x-3 border-b border-blue-200">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <User className="text-[#29A0D8]" />
          </div>
          <div>
            <h2 className="text-white font-semibold">Admin Panel</h2>
            <p className="text-xs text-blue-100">nstHr Solutions</p>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {/* Jobs Tab */}
          <button
            onClick={() => setActiveTab("jobs")}
            className={`flex items-center space-x-2 w-full p-3 rounded-lg transition-all duration-300 ${
              activeTab === "jobs"
                ? "bg-white text-[--primary] shadow-md"
                : "text-white hover:bg-[--primary] hover:bg-opacity-20 hover:text-white hover:shadow-sm"
            }`}
          >
            <Briefcase className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="transition-all duration-300">Job Postings</span>
          </button>

          {/* Blogs Tab */}
          <button
            onClick={() => setActiveTab("blogs")}
            className={`flex items-center space-x-2 w-full p-3 rounded-lg transition-all duration-300 ${
              activeTab === "blogs"
                ? "bg-white text-[--primary] shadow-md"
                : "text-white hover:bg-[--primary] hover:bg-opacity-20 hover:text-white hover:shadow-sm"
            }`}
          >
            <FileText className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="transition-all duration-300">Blog Posts</span>
          </button>

          {/* Contacts Tab */}
          <button
            onClick={() => setActiveTab("contacts")}
            className={`flex items-center space-x-2 w-full p-3 rounded-lg transition-all duration-300 ${
              activeTab === "contacts"
                ? "bg-white text-[--primary] shadow-md"
                : "text-white hover:bg-[--primary] hover:bg-opacity-20 hover:text-white hover:shadow-sm"
            }`}
          >
            <Mail className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="transition-all duration-300">Contact Forms</span>
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 w-full p-3 rounded-lg text-white 
             hover:bg-[--primary] hover:bg-opacity-30 transition-all duration-300 
             hover:shadow-sm mt-8 group"
          >
            <LogOut className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="transition-all duration-300">Logout</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm p-4">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize">
            {activeTab === "jobs" && "Job Postings"}
            {activeTab === "blogs" && "Blog Management"}
            {activeTab === "contacts" && "Contact Forms"}
          </h1>
        </header>

        <main className="p-6">
          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
              <p>{error}</p>
            </div>
          )}

          {/* Jobs Tab */}
          {activeTab === "jobs" && (
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <PlusCircle
                    className="w-5 h-5 mr-2"
                    style={{ color: "#29A0D8" }}
                  />
                  Create New Job Posting
                </h2>
                <form onSubmit={handleJobSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Job Title
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={jobForm.title}
                        onChange={(e) =>
                          setJobForm({ ...jobForm, title: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={jobForm.location}
                        onChange={(e) =>
                          setJobForm({ ...jobForm, location: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Job Type
                      </label>
                      <select
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={jobForm.type}
                        onChange={(e) =>
                          setJobForm({ ...jobForm, type: e.target.value })
                        }
                      >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Remote">Remote</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Featured Image
                      </label>
                      <input
                        type="file"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setJobForm({
                              ...jobForm,
                              image: e.target.files[0],
                            });
                          }
                        }}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea
                        className="w-full p-2 border border-gray-300 rounded-md h-32"
                        value={jobForm.description}
                        onChange={(e) =>
                          setJobForm({
                            ...jobForm,
                            description: e.target.value,
                          })
                        }
                        required
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-4 px-4 py-2 rounded-md text-white font-medium"
                    style={{ backgroundColor: "#29A0D8" }}
                  >
                    Post Job
                  </button>
                </form>
              </div>

              <h2 className="text-xl font-semibold mb-4">
                Current Job Postings
              </h2>
              {loading ? (
                <p>Loading jobs...</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobs.map((job) => (
                    <div
                      key={job._id}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      {job.image && (
                        <img
                          src={`http://localhost:9000${job.image}`}
                          alt={job.title}
                          className="w-full h-40 object-cover"
                        />
                      )}
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1">
                          {job.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {job.location} • {job.type}
                        </p>
                        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                          {job.description}
                        </p>
                        <div className="flex justify-end space-x-2">
                          <button className="p-2 text-[#29A0D8] hover:bg-[#29A0D8] rounded-full">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteJob({ id: job._id })}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <JobForm/>
            </div>
          )}

          {/* Blogs Tab */}
          {activeTab === "blogs" && (
            <div>
              <BlogForm/>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <PlusCircle
                    className="w-5 h-5 mr-2"
                    style={{ color: "#29A0D8" }}
                  />
                  Create New Blog Post
                </h2>
                <form onSubmit={handleBlogSubmit}>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Title
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={blogForm.title}
                        onChange={(e) =>
                          setBlogForm({ ...blogForm, title: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Author
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={blogForm.author}
                        onChange={(e) =>
                          setBlogForm({ ...blogForm, author: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Featured Image
                      </label>
                      <input
                        type="file"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setBlogForm({
                              ...blogForm,
                              image: e.target.files[0],
                            });
                          }
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Content
                      </label>
                      <textarea
                        className="w-full p-2 border border-gray-300 rounded-md h-48"
                        value={blogForm.content}
                        onChange={(e) =>
                          setBlogForm({ ...blogForm, content: e.target.value })
                        }
                        required
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-4 px-4 py-2 rounded-md text-white font-medium"
                    style={{ backgroundColor: "#29A0D8" }}
                  >
                    Publish Blog
                  </button>
                </form>
              </div>

              <h2 className="text-xl font-semibold mb-4">
                Published Blog Posts
              </h2>
              {loading ? (
                <p>Loading blogs...</p>
              ) : (
                <div className="space-y-6">
                  {blogs.map((blog) => (
                    <div
                      key={blog._id}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="font-semibold text-xl">
                            {blog.title}
                          </h3>
                          <div className="flex space-x-2">
                            <button className="p-2 text-[#29A0D8] hover:bg-blue-50 rounded-full">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => deleteBlog({ id: blog._id })}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        {blog.image && (
                          <img
                            src={`http://localhost:9000${blog.image}`}
                            alt={blog.title}
                            className="w-full h-48 object-cover mb-4 rounded"
                          />
                        )}
                        <p className="text-gray-600 mb-2">By {blog.author}</p>
                        <p className="text-gray-700 line-clamp-3">
                          {blog.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Contacts Tab */}
          {activeTab === "contacts" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Contact Form Submissions
              </h2>
              {loading ? (
                <p>Loading contacts...</p>
              ) : (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          First Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Last Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Mobile
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Company
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Subject
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Message
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {contacts.map((contact) => (
                        <tr key={contact._id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {contact.first_name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {contact.last_name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {contact.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {contact.mobile}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {contact.company}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {contact.subject}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                            {contact.message}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(contact.submitted_at).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
