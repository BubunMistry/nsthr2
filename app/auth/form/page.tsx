"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { toast } from "sonner"

export default function Form() {
  const [formData, setFormData] = useState({
    fullname: "",
    mobile: "",
    email: "",
    location: "",
    about: "",
    profile_image: null,
    resume_file: null,
    experiences: [{ company: "", role: "", start_date: "", end_date: "", description: "" }],
    education: [{ institution: "", degree: "", start_year: "", end_year: "", description: "" }],
    skills: [""],
  })

  const handleChange = (e: any) => {
    const { name, value, files } = e.target
    if (files) {
      setFormData({ ...formData, [name]: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleArrayChange = (e: any, index: number, section: keyof typeof formData) => {
    const newArray = [...(formData[section] as Array<Record<string, string>>)]
    newArray[index][e.target.name] = e.target.value
    setFormData({ ...formData, [section]: newArray })
  }

  const handleSkillChange = (e: any, index: number) => {
    const newSkills = [...formData.skills]
    newSkills[index] = e.target.value
    setFormData({ ...formData, skills: newSkills })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    // Clean up empty entries
    const experiences = formData.experiences.filter(exp => exp.company && exp.role)
    const education = formData.education.filter(edu => edu.institution && edu.degree)
    const skills = formData.skills.filter(skill => skill.trim() !== "")

    const form = new FormData()
    form.append("fullname", formData.fullname)
    form.append("mobile", formData.mobile)
    form.append("email", formData.email)
    form.append("location", formData.location)
    form.append("about", formData.about)
    if (formData.profile_image) form.append("profile_image", formData.profile_image)
    if (formData.resume_file) form.append("resume_file", formData.resume_file)

    try {
      const response = await axios.post("http://localhost:9000/api/users/profile/create", form, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      console.log("Profile Created:", response.data)

      for (const exp of experiences) {
        const expResponse = await axios.post("http://localhost:9000/api/users/experience/create", exp)
        console.log("Experience Created:", expResponse.data)
      }

      for (const edu of education) {
        const eduResponse = await axios.post("http://localhost:9000/api/users/education/create", edu)
        console.log("Education Created:", eduResponse.data)
      }

      for (const skill_name of skills) {
        const skillResponse = await axios.post("http://localhost:9000/api/users/skills/create", { skill_name })
        console.log("Skill Created:", skillResponse.data)
      }

      toast.success("Profile created successfully!")
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        console.error("Axios error:", err.response?.data || err.message)
        toast.error(`Error: ${err.response?.data?.message || err.message}`)
      } else {
        console.error("Unexpected error:", err)
        toast.error("Something went wrong!")
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        <Input name="fullname" placeholder="Full Name" onChange={handleChange} required />
        <Input name="mobile" placeholder="Mobile" onChange={handleChange} required />
        <Input name="email" placeholder="Email" onChange={handleChange} required />
        <Input name="location" placeholder="Location" onChange={handleChange} required />
      </div>
      <Textarea name="about" placeholder="About you" onChange={handleChange} required />

      <div className="grid grid-cols-2 gap-4">
        <Label>Profile Image <Input type="file" name="profile_image" onChange={handleChange} /></Label>
        <Label>Resume File <Input type="file" name="resume_file" onChange={handleChange} /></Label>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Experience</h3>
        {formData.experiences.map((exp, i) => (
          <div key={i} className="grid grid-cols-2 gap-4">
            <Input name="company" placeholder="Company" onChange={(e) => handleArrayChange(e, i, "experiences")} />
            <Input name="role" placeholder="Role" onChange={(e) => handleArrayChange(e, i, "experiences")} />
            <Input name="start_date" placeholder="Start Date" type="date" onChange={(e) => handleArrayChange(e, i, "experiences")} />
            <Input name="end_date" placeholder="End Date" type="date" onChange={(e) => handleArrayChange(e, i, "experiences")} />
            <Textarea name="description" placeholder="Description" onChange={(e) => handleArrayChange(e, i, "experiences")} />
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Education</h3>
        {formData.education.map((edu, i) => (
          <div key={i} className="grid grid-cols-2 gap-4">
            <Input name="institution" placeholder="Institution" onChange={(e) => handleArrayChange(e, i, "education")} />
            <Input name="degree" placeholder="Degree" onChange={(e) => handleArrayChange(e, i, "education")} />
            <Input name="start_year" placeholder="Start Year" onChange={(e) => handleArrayChange(e, i, "education")} />
            <Input name="end_year" placeholder="End Year" onChange={(e) => handleArrayChange(e, i, "education")} />
            <Textarea name="description" placeholder="Description" onChange={(e) => handleArrayChange(e, i, "education")} />
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Skills</h3>
        {formData.skills.map((skill, i) => (
          <Input key={i} value={skill} placeholder="Skill" onChange={(e) => handleSkillChange(e, i)} />
        ))}
      </div>

      <Button type="submit">Submit</Button>
    </form>
  )
}
