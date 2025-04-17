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
  const params = useParams()
  const id = Array.isArray(params.id) ? params.id[0] : params.id
  const [blog, setBlog] = useState<BlogDetails | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return

    const fetchBlog = async () => {
      try {
        const res = await axios.post(`http://localhost:9000/api/blogs/get/${id}`)
        setBlog(res.data.blog)
        console.log("Blog data:", res.data.blog) // Debugging the blog data
      } catch (err) {
        console.error("Error fetching blog:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [id])

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <p className="text-gray-500 text-lg">Loading blog...</p>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold text-red-600">Blog not found</h1>
      </div>
    )
  }  // Debugging the image URLs
  console.log("Cover image URL:", `http://localhost:9000/uploads/blogs/${blog.coverImg}`)
  console.log("Body image URL:", `http://localhost:9000/uploads/blogs/${blog.bodyImg}`)

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {blog.coverImg && (
        
        <img
          src={`http://localhost:9000/uploads/blogs/${blog.coverImg}`}
          alt="Cover"
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      )}

      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <p className="text-lg text-gray-500 mb-4">{blog.subheading}</p>
      <p className="text-sm text-gray-400 mb-10">
        Published on {new Date(blog.published_date).toDateString()}
      </p>

      <div
        className="prose prose-lg max-w-none mb-10"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {blog.bodyImg && (
        <img
          src={`http://localhost:9000/uploads/blogs/${blog.bodyImg}`}
          alt="Body"
          className="w-full h-72 object-cover rounded-md mb-8"
        />
      )}

      <div className="prose prose-lg max-w-none">
        <h2>this is conculation</h2>
        <p>{blog.conclusion}</p>
      </div>
    </div>
  )
}
