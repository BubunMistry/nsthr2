"use client"


import Link from "next/link"
import Image from "next/image"
import { Trophy } from "lucide-react";
import {
  UserRound, Search, Briefcase, Users, Clock, Cpu, Stethoscope,
  Hammer,
  Bus,
  Car,
  Banknote,
  Settings,
  Fuel,
  Megaphone,
  Code,
  Bolt, Headset
} from "lucide-react"
import ClientsSection from "@/components/ui/ClientsSection"
import Carousel from "@/components/carousel"
import HeroSection from "@/components/ui/hero-section"
import Industries from "@/components/ui/industries";
import Team from "@/components/ui/team";
import PopContact from "@/components/ui/popcontact";
import Modal from "@/components/ui/modal";

const industries = [
  { name: "Insurance", icon: <Stethoscope className="w-8 h-8" /> },
  { name: "Construction", icon: <Hammer className="w-8 h-8" /> },
  { name: "Tour & Travel", icon: <Bus className="w-8 h-8" /> },
  { name: "Automobile", icon: <Car className="w-8 h-8" /> },
  { name: "Banking", icon: <Banknote className="w-8 h-8" /> },
  { name: "Technical", icon: <Settings className="w-8 h-8" /> },
  { name: "Oil & Gas", icon: <Fuel className="w-8 h-8" /> },
  { name: "Advertising", icon: <Megaphone className="w-8 h-8" /> },
  { name: "IT Software", icon: <Code className="w-8 h-8" /> },
  { name: "Power and Energy", icon: <Bolt className="w-8 h-8" /> },
];

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "HR Manager, Tech Solutions",
    image: "/client1.jpg",
    text: "nstHr has been instrumental in helping us find the right talent. Their understanding of our requirements and quick turnaround time is impressive.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Director, Global Finance",
    image: "/client6.jpg",
    text: "We've been working with nstHr for over two years now. Their team is professional, responsive, and truly understands our company culture.",
  },
  {
    id: 3,
    name: "Amit Patel",
    position: "CEO, Innovate Solutions",
    image: "/client3.jpg",
    text: "nstHr's approach to recruitment is refreshing. They take the time to understand our business needs and provide candidates who fit our company.",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    position: "Team Lead, Digital Marketing",
    image: "/client5.jpg",
    text: "The quality of candidates provided by nstHr is exceptional. They have helped us build a strong team of digital marketers who have contributed to our growth.",
  },
  {
    id: 5,
    name: "Vikram Singh",
    position: "Operations Manager, Logistics Inc.",
    image: "/client2.jpg",
    text: "nstHr's industry knowledge and professional approach make them our preferred recruitment partner. They have consistently delivered on their promises.",
  },
  {
    id: 6,
    name: "Arjun Mehta",
    position: "CTO, Software Innovations",
    image: "/client4.jpg",
    text: "nstHr's technical screening process saved us countless hours. The candidates they sent were all interview-ready and perfectly matched our requirements.",
  }
]

import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      <>
      {/* Job Search Section */}
      <section className="bg-white text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            
            {/* Job Button */}
            <Link
              href="/jobs"
              className="bg-gradient-to-r from-[#6DD3FF] to-[#29A0D8] hover:from-[#4AB8E8] hover:to-[#1E7CAD]
              transition-all px-4 py-3 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base 
              shadow hover:shadow-md text-white text-center"
            >
              <Search className="w-5 h-5 sm:w-5 sm:h-5" />
              <span className="font-medium">FIND YOUR DREAM JOB</span>
            </Link>

            {/* Employer Button as Modal Trigger */}
            <div
              onClick={() => setIsOpen(true)}
              className="cursor-pointer bg-white border border-[#1E90D8] hover:bg-[#F0FAFF] transition-all px-4 py-3 
              rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base shadow hover:shadow-md 
              text-[#1E90D8] text-center"
            >
              <Headset className="w-5 h-5 sm:w-5 sm:h-5" />
              <span className="font-medium">FIND THE BEST EMPLOYEES</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modal with PopContact form */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PopContact onSuccess={() => setIsOpen(false)} />
      </Modal>
    </>


      {/* Services Section */}
      <section id="services" className="pb-20 bg-gray-50">

        {/* Gradient Banner */}
        <div className="relative bg-gradient-to-r from-[#29A0D8] to-[#6DD3FF] py-20">
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering skills development through innovative training, research, and infrastructure solutions.
            </p>
          </div>
        </div>

        {/* Services Overview */}
        <div className="text-center mb-16 pt-12 px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">nstHr Core Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide specialized training programs, research initiatives, and infrastructure support to enhance workforce skills and drive economic growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Recruitment Services",
                icon: <Users className="w-7 h-7 text-white" />,
                link: "/services/recruitment-services",
                description: "Connecting businesses with top talent across industries, from entry-level to executive roles.",
              },
              {
                title: "IT Staffing",
                icon: <Search className="w-7 h-7 text-white" />,
                link: "/services/it-staffing",
                description: "Providing skilled IT professionals like developers, engineers, and architects to fuel tech-driven growth.",
              },
              {
                title: "Project Hiring",
                icon: <Briefcase className="w-7 h-7 text-white" />,
                link: "/services/project-hiring",
                description: "Quick and reliable staffing for short-term or project-based roles to meet tight deadlines and delivery goals.",
              },
              {
                title: "Temporary Staffing",
                icon: <Clock className="w-7 h-7 text-white" />,
                link: "/services/temporary-Staffing",
                description: "On-demand staffing for short durations—ideal for seasonal needs, replacements, or peak workloads.",
              },
              {
                title: "RPO (Recruitment Process Outsourcing)",
                icon: <Cpu className="w-7 h-7 text-white" />,
                link: "/services/rpo",
                description: "End-to-end recruitment outsourcing for streamlined hiring, cost-efficiency, and expert candidate selection.",
              },
              {
                title: "PAYROLL MANAGEMENT",
                icon: <Trophy className="w-7 h-7 text-white" />,
                link: "/services/payroll",
                description: "Comprehensive payroll processing ensuring timely and compliant salary disbursals for your workforce.",
              },
            ].map((service, idx) => (
              <a
                key={idx}
                href={service.link}
                className="bg-white rounded-2xl shadow-md shadow-[#bae6fd] hover:shadow-lg hover:shadow-[#60c4f8] p-6 transition-all hover:-translate-y-1.5 block"
              >
                <div className="w-14 h-14 bg-[#29A0D8] rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#333] mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </a>
            ))}

          </div>
        </div>
      </section>


      <Industries />



      <Team />

      {/* CTA Section */}
      <div className="py-16 sm:py-20 bg-gradient-to-r from-[#29A0D8] to-[#6DD3FF] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Partner with nstHr for comprehensive IT solutions and top-tier technology talent.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#29A0D8] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto text-center"
            >
              Get Started
            </Link>
            <Link
              href="/industries/Information-Technology"
              className="border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-white hover:text-[#29A0D8] transition-colors w-full sm:w-auto text-center"
            >
              View IT Services
            </Link>
          </div>
        </div>
      </div>

      <ClientsSection />



      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        {/* Large Screens: Show 3 Testimonials at a Time */}
        <div className="hidden container mx-auto md:block">
          <Carousel>
            {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-2 px-4">
                {testimonials.slice(index * 3, index * 3 + 3).map((testimonial) => (
                  <div key={testimonial.id} className="bg-white p-6 my-10 rounded-2xl shadow-md text-center">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                    <p className="text-gray-700 mt-4 text-sm md:text-base italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
        </div>

        {/* Small Screens: Show One Testimonial at a Time */}
        <div className="block md:hidden">
          <Carousel>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-white p-8 mx-4 my-9 rounded-2xl shadow-md text-center">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                  <p className="text-gray-700 mt-4 text-sm md:text-base italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>





    </div>
  )
}