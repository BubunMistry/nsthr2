"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "next/navigation"

interface BlogDetails {
  blog_id: number
  title: string
  subheading: string
  content: string
  conclusion: string
  coverImg: string
  bodyImg: string
  published_date: string
}

export default function SingleBlogPage() {
  const { id } = useParams()
  const [blog, setBlog] = useState<BlogDetails | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchBlog = async () => {
      try {
        const res = await axios.post(`http://localhost:9000/api/blogs/get/${id}`)
        setBlog(res.data.blog)
      } catch (err) {
        console.error("Error fetching blog:", err)
      }
    }

    fetchBlog()
  }, [id])

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold text-red-600">Blog not found</h1>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {blog.coverImg && (
        <img
          src={blog.coverImg}
          alt="Cover"
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      )}
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <p className="text-lg text-gray-500 mb-4">{blog.subheading}</p>
      <p className="text-sm text-gray-400 mb-10">
        Published on {new Date(blog.published_date).toDateString()}
      </p>

      <div className="prose prose-lg max-w-none mb-10" dangerouslySetInnerHTML={{ __html: blog.content }} />

      {blog.bodyImg && (
        <img
          src={blog.bodyImg}
          alt="Body"
          className="w-full h-72 object-cover rounded-md mb-8"
        />
      )}

      <div className="prose prose-lg max-w-none">
        <h2>Conclusion</h2>
        <p>{blog.conclusion}</p>
      </div>
    </div>
  )
}
