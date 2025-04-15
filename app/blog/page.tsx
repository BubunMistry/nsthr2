"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"

interface Blog {
  blog_id: number
  title: string
  subheading: string
  thumbnail: string
  published_date: string
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.post("http://localhost:9000/api/blogs/all", {})
        setBlogs(res.data.blogs)
      } catch (err) {
        console.error("Error fetching blogs:", err)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Latest Blogs</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link key={blog.blog_id} href={`/blog/${blog.blog_id}`}>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 group">
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-sm text-gray-500 mb-3">{blog.subheading}</p>
                <p className="text-xs text-gray-400">{new Date(blog.published_date).toDateString()}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
