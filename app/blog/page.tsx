import Link from "next/link"
import Image from "next/image"

export default function Blog() {
  // In a real application, this would come from a database or API
  const blogs = [
    {
      id: 1,
      title: "Top Staffing Services in Kolkata: What Makes NSTHR Stand Out",
      excerpt: "nstHr (Next Step Talent Human Resource) is a leading HR consultancy in Kolkata that provides end-to-end recruitment services to businesses of all sizes. ",
      date: "April 05, 2025",
      image: "/blog.svg",
      slug: "Staffing-Services-Kolkata",
    },
    {
      id: 2,
      title: "Executive & IT Recruitment that Drives Business Growth | nstHr, Kolkata",
      excerpt: "One of the trusted recruitment companies in Kolkata, our mission is to connect organizations with exceptional leadership and IT professionals who fuel growth, innovation, and transformation.",
      date: "April 06, 2025",
      image: "/blog2.svg",
      slug: "IT-Recruitment",
    },
    {
      id: 3,
      title: "Top Skills Employers Look for in 2023",
      excerpt: "Stay ahead of the competition by developing these in-demand skills that employers are seeking.",
      date: "January 10, 2023",
      image: "/placeholder.svg?height=300&width=500",
      slug: "top-skills-employers-look-for",
    },
    {
      id: 4,
      title: "How to Write a Resume That Gets Noticed",
      excerpt: "Tips and tricks to create a resume that will catch the attention of hiring managers.",
      date: "December 5, 2022",
      image: "/placeholder.svg?height=300&width=500",
      slug: "write-resume-that-gets-noticed",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#29A0D8] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl">Stay updated with the latest trends and insights in recruitment and HR</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                {/* Clickable area covering the image and text */}
                <Link href={`/blog/${blog.slug}`} className="block">
                  <div className="h-48 relative">
                    <Image
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-[#29A0D8] transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  </div>
                </Link>

                {/* Separate Read More link */}
                <div className="px-6 pb-6">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-[#29A0D8] font-medium hover:text-[#1E90D8] hover:underline transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}