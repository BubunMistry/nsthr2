"use client"

import type React from "react"
import { useState } from "react"

export default function EmployerForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    industry: "",
    jobTitle: "",
    jobDescription: "",
    requiredSkills: "",
    experienceLevel: "",
    educationRequirements: "",
    salaryRange: "",
    location: "",
    jobType: "Full-time",
    applicationDeadline: "",
    additionalInformation: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the data to a server
    console.log("Form submitted:", formData)
    alert("Form submitted successfully!")
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#29A0D8] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Best Employees</h1>
          <p className="text-xl">Complete the form below to post a job and find qualified candidates</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#29A0D8]">Employer Information Form</h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-transparent"
                  >
                    <option value="">Select Industry</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Construction">Construction</option>
                    <option value="Tour & Travel">Tour & Travel</option>
                    <option value="Automobile">Automobile</option>
                    <option value="Banking">Banking</option>
                    <option value="Technical">Technical</option>
                    <option value="Oil & Gas">Oil & Gas</option>
                    <option value="Advertising">Advertising</option>
                    <option value="IT Software">IT Software</option>
                    <option value="Power and Energy">Power and Energy</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Description *
                </label>
                <textarea
                  id="jobDescription"
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-transparent"
                ></textarea>
              </div>

              <div className="mt-6">
                <label htmlFor="requiredSkills" className="block text-sm font-medium text-gray-700 mb-1">
                  Required Skills *
                </label>
                <textarea
                  id="requiredSkills"
                  name="requiredSkills"
                  value={formData.requiredSkills}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-transparent"
                  placeholder="List the skills required for this position"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700 mb-1">
                    Experience Level *
                  </label>
                  <select
                    id="experienceLevel"
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-transparent"
                  >
                    <option value="">Select Experience Level</option>
                    <option value="Entry Level">Entry Level</option>
                    <option value="1-3 Years">1-3 Years</option>
                    <option value="3-5 Years">3-5 Years</option>
                    <option value="5-10 Years">5-10 Years</option>
                    <option value="10+ Years">10+ Years</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="educationRequirements" className="block text-sm font-medium text-gray-700 mb-1">
                    Education Requirements
                  </label>
                  <input
                    type="text"
                    id="educationRequirements"
                    name="educationRequirements"
                    value={formData.educationRequirements}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-transparent"
                    placeholder="e.g., Bachelor's Degree in Computer Science"
                  />
                </div>

                <div>
                  <label htmlFor="salaryRange" className="block text-sm font-medium text-gray-700 mb-1">
                    Salary Range
                  </label>
                  <input
                    type="text"
                    id="salaryRange"
                    name="salaryRange"
                    value={formData.salaryRange}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-transparent"
                    placeholder="e.g., ₹30,000 - ₹50,000 per month"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Job Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-1">
                    Job Type *
                  </label>
                  <select
                    id="jobType"
                    name="jobType"
                    value={formData.jobType}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-transparent"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Temporary">Temporary</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="applicationDeadline" className="block text-sm font-medium text-gray-700 mb-1">
                    Application Deadline
                  </label>
                  <input
                    type="date"
                    id="applicationDeadline"
                    name="applicationDeadline"
                    value={formData.applicationDeadline}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="additionalInformation" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <textarea
                  id="additionalInformation"
                  name="additionalInformation"
                  value={formData.additionalInformation}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#29A0D8] focus:border-transparent"
                  placeholder="Any other details you'd like to share about the position or company"
                ></textarea>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="bg-[#29A0D8] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1E90D8] transition-colors"
                >
                  Submit Job Posting
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}