"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "./components/ContactForm"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Message sent successfully!")
  }

  return (
    <div>

      {/* Hero Section */}

      <div className="relative bg-gradient-to-r from-[#29A0D8] to-[#6DD3FF] py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our team
          </p>
        </div>
      </div>
      {/* Contact Form */}
      <section className="p-5 bg-gray-50">
        <ContactForm />

      </section>




{/* Contact Info + Schedule Meeting */}
<section className="py-5 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-4 gap-8">
      {[
        {
          icon: <MapPin className="w-8 h-8" />,
          title: "Our Location",
          content: (
            <p className="text-gray-600 text-sm">
              Unit No. 1112, 11th Floor,<br />
              PS Qube, Action Area I, 2D,<br />
              Newtown, Kolkata, WB 700136
            </p>
          ),
        },
        {
          icon: <Phone className="w-8 h-8" />,
          title: "Call Us",
          content: (
            <a
              href="tel:+916292197307"
              className="text-gray-600 hover:text-[#29A0D8] transition-colors text-sm"
            >
              +91 62921 97307
            </a>
          ),
        },
        {
          icon: <Mail className="w-8 h-8" />,
          title: "Email Us",
          content: (
            <>
              <a
                href="mailto:info@nsthr.com"
                className="text-gray-600 hover:text-[#29A0D8] transition-colors block text-sm"
              >
                info@nsthr.com
              </a>
              <a
                href="mailto:helpdesk@nsthr.com"
                className="text-gray-600 hover:text-[#29A0D8] transition-colors block text-sm"
              >
                helpdesk@nsthr.com
              </a>
            </>
          ),
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3M16 7V3M4 11h16M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          ),
          title: "Schedule Meeting",
          content: (
            <>
              <p className="text-gray-600 mb-2 text-sm">Prefer a 1:1 call?</p>
              <a
                href="mailto:info@nsthr.com?subject=Schedule%20a%20Meeting"
                className="text-sm text-[#29A0D8] font-medium hover:underline"
              >
                Click to schedule via email
              </a>
            </>
          ),
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg border border-[#29A0D8]/30 shadow-[0_0_20px_rgba(41,160,216,0.1)] flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
        >
          <div className="w-16 h-16 bg-[#29A0D8]/10 text-[#29A0D8] rounded-lg flex items-center justify-center mb-4">
            {item.icon}
          </div>
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          {item.content}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Find Us on Map</h2>

            <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                title="Google Map location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.5359904356187!2d88.45098107043806!3d22.621253623897502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89fa6c2f8dcc7%3A0xc9f4ca38c13175fb!2snstHr%20(%20Total%20Hr%20Solutions%20)!5e1!3m2!1sen!2sin!4v1742967496732!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="mt-6" id="map">
            <Link
              target="_blank"
              href="https://www.google.com/maps/dir//nstHr+(+Total+Hr+Solutions+),+Unit+No.+1112,+11th+Floor,+PS+Qube,+Action+Area+I,+2D,+Newtown,+New+Town,+West+Bengal+700136"
            >
              <Button className="flex mx-auto items-center gap-2 group" variant="default" size="lg">
                Get Directions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
