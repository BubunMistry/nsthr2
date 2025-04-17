"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface Blog {
  blog_id: number;
  title: string;
  subheading: string;
  thumbnail: string;
  coverImg: string
  bodyImg: string
  published_date: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.post("http://localhost:9000/api/blogs/all", {});
        setBlogs(res.data.blogs);
        console.log("Blogs data:", res.data.blogs); // Debugging the blogs data
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, []);
  const getImageUrl = (thumbnail: string) => {
    // If thumbnail already starts with "http", return it as-is
    if (thumbnail.startsWith("http")) return thumbnail;

    // Else, assume it's a relative path from backend
    return `http://localhost:9000${thumbnail}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Latest Blogs</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => {
          console.log("Thumbnail path:", blog.thumbnail); // 👈 Console the image path

          const getImageUrl = (thumbnail: string) => {
            if (thumbnail.startsWith("http")) return thumbnail;
            return `http://localhost:9000/uploads/blogs/${thumbnail}`;
          };

          return (
            <Link key={blog.blog_id} href={`/blog/${blog.blog_id}`}>
              <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 group">
                <img
                  src={getImageUrl(blog.thumbnail)}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-sm text-gray-500 mb-3">
                    {blog.subheading}
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date(blog.published_date).toDateString()}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
