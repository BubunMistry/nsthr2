import Link from "next/link"
import { Search } from "lucide-react"

export default function Jobs() {
  // In a real application, this would come from a database or API
  const jobs = [
    {
      id: 1,
      title: "Software Developer",
      location: "Unit No. 1112, 11th Floor, PS Qube, Action Area I, 2D, Newtown, Kolkata, West Bengal 700136",
      jobType: "developer (fullstack)",
      opening: "subcontract/saas/GASC",
      salary: "45000",
      description:
        "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has? Lorem Ipsum has been the industry's",
    },
    {
      id: 2,
      title: "Mobile Apps Developer",
      location: "Kolkata",
      jobType: "developer",
      opening: "testing testing",
      salary: "30000-35000",
      description:
        "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has? Lorem Ipsum has been the industry's",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Kolkata",
      jobType: "designer",
      opening: "fulltime",
      salary: "40000-50000",
      description:
        "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has? Lorem Ipsum has been the industry's",
    },
    {
      id: 4,
      title: "HR Manager",
      location: "Kolkata",
      jobType: "management",
      opening: "fulltime",
      salary: "50000-60000",
      description:
        "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has? Lorem Ipsum has been the industry's",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#29A0D8] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Job</h1>
          <p className="text-xl">Find your dream job opportunity</p>
        </div>
      </section>

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
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-transparent"
                  />
                </div>
                <div className="self-end">
                  <button className="bg-[#29A0D8] text-white p-3 rounded-md font-medium hover:bg-[#1E90D8] transition-colors w-full md:w-auto">
                    Search Jobs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Button */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/jobs/apply"
            className="inline-block bg-[#29A0D8] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1E90D8] transition-colors"
          >
            Apply For Jobs
          </Link>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-[#29A0D8]/10">
                  <th className="py-3 px-4 text-left border-b border-[#29A0D8]/20">#</th>
                  <th className="py-3 px-4 text-left border-b border-[#29A0D8]/20">Job Title</th>
                  <th className="py-3 px-4 text-left border-b border-[#29A0D8]/20">Location</th>
                  <th className="py-3 px-4 text-left border-b border-[#29A0D8]/20">Job type</th>
                  <th className="py-3 px-4 text-left border-b border-[#29A0D8]/20">Opening</th>
                  <th className="py-3 px-4 text-left border-b border-[#29A0D8]/20">Salary</th>
                  <th className="py-3 px-4 text-left border-b border-[#29A0D8]/20">Description</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, index) => (
                  <tr key={job.id} className="hover:bg-[#29A0D8]/5">
                    <td className="py-3 px-4 border-b border-[#29A0D8]/10">{index + 1}</td>
                    <td className="py-3 px-4 border-b border-[#29A0D8]/10 font-medium">{job.title}</td>
                    <td className="py-3 px-4 border-b border-[#29A0D8]/10">{job.location}</td>
                    <td className="py-3 px-4 border-b border-[#29A0D8]/10">{job.jobType}</td>
                    <td className="py-3 px-4 border-b border-[#29A0D8]/10">{job.opening}</td>
                    <td className="py-3 px-4 border-b border-[#29A0D8]/10">{job.salary}</td>
                    <td className="py-3 px-4 border-b border-[#29A0D8]/10">
                      <p className="truncate max-w-xs">{job.description}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}