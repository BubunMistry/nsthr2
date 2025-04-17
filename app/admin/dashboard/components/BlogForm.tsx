
"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

interface Blog {
  blog_id: number;
  title: string;
  subheading: string;
  content: string;
  conclusion: string;
  hyperlinks: string;
  thumbnail?: string;
  coverImg?: string;
  bodyImg?: string;
}

interface BlogFormProps {
  token?: string;
  onSuccess?: () => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ token, onSuccess }) => {
  const [form, setForm] = useState({
    title: "",
    subheading: "",
    content: "",
    conclusion: "",
    hyperlinks: "",
    thumbnail: null as File | null,
    coverImg: null as File | null,
    bodyImg: null as File | null,
  });

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);

  const authToken = token || localStorage.getItem("adminToken") || "";

  const fetchBlogs = async () => {
    try {
      const res = await axios.post("http://localhost:9000/api/blogs/all");
      setBlogs(res.data.blogs);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    const file = files?.[0];
    if (file) {
      setForm((prev) => ({ ...prev, [name]: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("subheading", form.subheading);
      formData.append("content", form.content);
      formData.append("conclusion", form.conclusion);
      formData.append("hyperlinks", form.hyperlinks);
      if (form.thumbnail) formData.append("thumbnail", form.thumbnail);
      if (form.coverImg) formData.append("coverImg", form.coverImg);
      if (form.bodyImg) formData.append("bodyImg", form.bodyImg);

      const url = editingId
        ? `http://localhost:9000/api/blogs/update/${editingId}`
        : "http://localhost:9000/api/blogs/add";

      await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setStatus("success");
      setForm({
        title: "",
        subheading: "",
        content: "",
        conclusion: "",
        hyperlinks: "",
        thumbnail: null,
        coverImg: null,
        bodyImg: null,
      });
      setEditingId(null);
      fetchBlogs();
      onSuccess?.();
    } catch (err: any) {
      setStatus("error");
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axios.post(`http://localhost:9000/api/blogs/delete/${id}`, null, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setBlogs((prev) => prev.filter((blog) => blog.blog_id !== id));
    } catch (err: any) {
      alert(err.response?.data?.message || "Failed to delete blog");
    }
  };

  const handleEdit = (blog: Blog) => {
    setForm({
      title: blog.title,
      subheading: blog.subheading,
      content: blog.content,
      conclusion: blog.conclusion,
      hyperlinks: blog.hyperlinks,
      thumbnail: null,
      coverImg: null,
      bodyImg: null,
    });
    setEditingId(blog.blog_id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10 p-4">
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">
          {editingId ? "Update Blog" : "Create Blog"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="subheading"
            value={form.subheading}
            onChange={handleChange}
            placeholder="Subheading"
            className="w-full p-2 border rounded"
          />
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Content"
            rows={5}
            required
            className="w-full p-2 border rounded"
          />
          <textarea
            name="conclusion"
            value={form.conclusion}
            onChange={handleChange}
            placeholder="Conclusion"
            rows={3}
            className="w-full p-2 border rounded"
          />
          <input
            name="hyperlinks"
            value={form.hyperlinks}
            onChange={handleChange}
            placeholder="Hyperlinks (comma separated or JSON)"
            className="w-full p-2 border rounded"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              name="thumbnail"
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
            />
            <input
              name="coverImg"
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
            />
            <input
              name="bodyImg"
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            {status === "loading"
              ? "Submitting..."
              : editingId
              ? "Update Blog"
              : "Submit Blog"}
          </button>

          {status === "success" && (
            <p className="text-green-600">Blog submitted successfully!</p>
          )}
          {status === "error" && <p className="text-red-600">Error: {error}</p>}
        </form>
      </div>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog.blog_id}
              className="bg-white p-4 rounded shadow space-y-2"
            >
              {blog.thumbnail && (
                <img
                  src={`http://localhost:9000/uploads/blogs/${blog.thumbnail}`}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded"
                />
              )}
              <h2 className="text-lg font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-600">{blog.subheading}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleEdit(blog)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.blog_id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No blogs available
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogForm;
