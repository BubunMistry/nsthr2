import Link from "next/link"
import Image from "next/image"
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
  Bolt
} from "lucide-react"

import Carousel from "@/components/carousel"
import HeroSection from "@/components/ui/hero-section"

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
    text: "nstHr has been instrumental in helping us find the right talent for our technical positions. Their understanding of our requirements and quick turnaround time is impressive.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Director, Global Finance",
    image: "/client6.jpg",
    text: "We've been working with nstHr for over two years now, and they consistently deliver quality candidates. Their team is professional, responsive, and truly understands our company culture.",
  },
  {
    id: 3,
    name: "Amit Patel",
    position: "CEO, Innovate Solutions",
    image: "/client3.jpg",
    text: "nstHr's approach to recruitment is refreshing. They take the time to understand our business needs and provide candidates who not only have the right skills but also fit our company culture.",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    position: "Team Lead, Digital Marketing",
    image: "/client5.jpg",
    text: "The quality of candidates provided by nstHr is exceptional. They have helped us build a strong team of digital marketers who have contributed significantly to our growth.",
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
];
const clients = [
  { id: 1, name: "Asian Paints", logo: "/Asian Paints.svg?height=100&width=150" },
  { id: 2, name: "Bosch logo", logo: "/Bosch-logo.svg?height=100&width=150" },
  { id: 3, name: "Dominos Pizza", logo: "/Dominos Pizza.svg?height=100&width=150" },
  { id: 4, name: "Hover New", logo: "/Hover New.svg?height=100&width=150" },
  { id: 5, name: "Kfc.", logo: "/kfc.svg?height=100&width=150" },
  { id: 6, name: "Leggs New", logo: "/Leggs New.svg?height=100&width=150" },
  { id: 7, name: "Panareha", logo: "/Panareha.svg?height=100&width=150" },
  { id: 8, name: "TATA Cliq New", logo: "/TATA Cliq New.svg?height=100&width=150" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Job Search Section */}
      <section className="bg-[#29A0D8] text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/jobs"
              className="bg-[#1E90D8] hover:bg-[#1682C8] transition-colors p-4 rounded-md flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              <span className="font-medium">FIND YOUR DREAM JOB</span>
            </Link>
            <Link
              href="/employer-form"
              className="bg-[#1E90D8] hover:bg-[#1682C8] transition-colors p-4 rounded-md flex items-center justify-center gap-2"
            >
              <UserRound className="w-5 h-5" />
              <span className="font-medium">FIND YOUR BEST EMPLOYEES</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Services</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            <div className="service-card">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#29A0D8] rounded-full flex items-center justify-center mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold mb-2">Recruitment Services</h3>
              </div>
            </div>

            <div className="service-card">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#29A0D8] rounded-full flex items-center justify-center mb-4">
                  <Search className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold mb-2">IT Staffing</h3>
              </div>
            </div>

            <div className="service-card">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#29A0D8] rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold mb-2">Project Hiring</h3>
              </div>
            </div>

            <div className="service-card">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#29A0D8] rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold mb-2">Temporary Staffing</h3>
              </div>
            </div>

            <div className="service-card">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#29A0D8] rounded-full flex items-center justify-center mb-4">
                  <Cpu className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold mb-2">RPO</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="team-card">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Abhishek Raj"
                width={300}
                height={300}
                className="w-full aspect-square object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">Abhishek Raj</h3>
                <p className="text-gray-600">Founder of nstHr</p>
                <p className="mt-2 text-sm">
                  He manages Technology along with Marketing Operations at nstHr. He has been functioning in HR Services
                  and marketing for the last three years as the head of nstHr.
                </p>
              </div>
            </div>

            <div className="team-card">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Neha Kesari"
                width={300}
                height={300}
                className="w-full aspect-square object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">Neha Kesari</h3>
                <p className="text-gray-600">CEO And Business Head of nstHr</p>
                <p className="mt-2 text-sm">
                  She handles and coordinates with clients and in turn ensure smooth functioning of nstHr. She has 6
                  years' experience in the HR domain.
                </p>
              </div>
            </div>

            <div className="team-card">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Sonny"
                width={300}
                height={300}
                className="w-full aspect-square object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">Sonny</h3>
                <p className="text-gray-600">IT Recruiter and Digital market head of nstHr</p>
              </div>
            </div>

            <div className="team-card">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Parama Chowdhury"
                width={300}
                height={300}
                className="w-full aspect-square object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">Parama Chowdhury</h3>
                <p className="text-gray-600">Medical Recruiter of nstHr</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section - Improved Hover */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Industries We Serve</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#29A0D8] hover:text-white hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-[#29A0D8]/10 text-[#29A0D8] rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-[#29A0D8] transition-colors duration-300">
                  {industry.icon}
                </div>
                <h3 className="font-medium">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Clients Section - Unchanged */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Clients</h2>

          <div className="mt-12">
            <Carousel autoSlideInterval={3000}>
              {/* Group clients in sets of 4 for desktop, 2 for mobile */}
              {[0, 1].map((startIdx) => (
                <div key={startIdx} className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
                  {clients.slice(startIdx * 4, startIdx * 4 + 4).map((client) => (
                    <div key={client.id} className="flex items-center justify-center p-4">
                      <Image
                        src={client.logo || "/placeholder.svg"}
                        alt={client.name}
                        width={150}
                        height={100}
                        className="client-logo"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>


      {/* Testimonials Section - Unchanged */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Testimonial</h2>

          <div className="mt-12">
            <Carousel>
              {/* Group testimonials in sets of 3 for desktop, 1 for mobile */}
              {[0, 1].map((startIdx) => (
                <div key={startIdx} className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                  {testimonials.slice(startIdx * 3, startIdx * 3 + 3).map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-card">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                      <p className="text-sm text-gray-600 mt-4">"{testimonial.text}"</p>
                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>


    </div>
  )
}