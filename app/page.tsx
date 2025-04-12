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
  Bolt
} from "lucide-react"
import ClientsSection from "@/components/ui/ClientsSection"
import Carousel from "@/components/carousel"
import HeroSection from "@/components/ui/hero-section"
import Industries from "@/components/ui/industries";

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

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Job Search Section */}
      <section className="bg-white text-white py-6">
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
              href="/contact"
              className="bg-white border border-[#1E90D8] transition-colors p-4 rounded-md flex items-center justify-center gap-2"
            >
              <UserRound className="w-5 h-5" />
              <span className="font-medium text-[#1E90D8]">FIND BEST EMPLOYERS FOR YOUR COMPANY</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="pb-20 bg-gray-50">


        <div className="relative bg-gradient-to-r from-[#29A0D8] to-[#6DD3FF] py-20">
          <div className="container mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering skills development through innovative training, research, and infrastructure solutions.
            </p>
          </div>
        </div>

        <div className="text-center mb-16 pt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">NSTRH Core Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide specialized training programs, research initiatives, and infrastructure support to enhance workforce skills and drive economic growth.
          </p>
        </div>

        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Recruitment Services */}
            <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#29A0D8] rounded-full flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#333] mb-3">Recruitment Services</h3>
              <p className="text-sm text-gray-600">
                Connecting businesses with top talent across industries, from entry-level to executive roles.
              </p>
            </div>

            {/* IT Staffing */}
            <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#29A0D8] rounded-full flex items-center justify-center mb-4">
                <Search className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#333] mb-3">IT Staffing</h3>
              <p className="text-sm text-gray-600">
                Providing skilled IT professionals like developers, engineers, and architects to fuel tech-driven growth.
              </p>
            </div>

            {/* Project Hiring */}
            <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#29A0D8] rounded-full flex items-center justify-center mb-4">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#333] mb-3">Project Hiring</h3>
              <p className="text-sm text-gray-600">
                Quick and reliable staffing for short-term or project-based roles to meet tight deadlines and delivery goals.
              </p>
            </div>

            {/* Temporary Staffing */}
            <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#29A0D8] rounded-full flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#333] mb-3">Temporary Staffing</h3>
              <p className="text-sm text-gray-600">
                On-demand staffing for short durations—ideal for seasonal needs, replacements, or peak workloads.
              </p>
            </div>

            {/* RPO */}
            <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#29A0D8] rounded-full flex items-center justify-center mb-4">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#333] mb-3">RPO (Recruitment Process Outsourcing)</h3>
              <p className="text-sm text-gray-600">
                End-to-end recruitment outsourcing for streamlined hiring, cost-efficiency, and expert candidate selection.
              </p>
            </div>

            {/* Executive Search */}
            <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#29A0D8] rounded-full flex items-center justify-center mb-4">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#333] mb-3">Executive Search</h3>
              <p className="text-sm text-gray-600"id="industries">
                Specialized in finding top-tier leadership talent that aligns with your business goals and culture.
              </p>
            </div>
          </div>
        </div>
      </section>

     
        <Industries />
 

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced team drives nstHr's success with industry expertise and innovative HR solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="relative aspect-square">
                <Image
                  src="images/team/abhishek.svg"
                  alt="Abhishek Raj"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Abhishek Raj</h3>
                <p className="text-[#29A0D8] font-semibold mb-4">Founder & Managing Director</p>
                <p className="text-gray-600">
                  Technology and marketing operations leader with a BTech in Electronics and Communications.
                  Brings entrepreneurial vision and five years of HR service expertise to nstHr.
                </p>

              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="relative aspect-square">
                <Image
                  src="images/team/neha.svg"
                  alt="Neha Kesari"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Neha Kesari</h3>
                <p className="text-[#29A0D8] font-semibold mb-4">CEO & Business Head</p>
                <p className="text-gray-600">
                  Oversees client relationships and operational excellence with six years of HR domain experience.
                  Specializes in strategic planning and business development.
                </p>

              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="relative aspect-square">
                <Image
                  src="images/team/rajesh.svg"
                  alt="Rajesh Singh"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Rajesh Singh</h3>
                <p className="text-[#29A0D8] font-semibold mb-4">Branch Head & Business Coordinator</p>
                <p className="text-gray-600">
                  Manages regional operations and client coordination with expertise in workforce solutions
                  and talent acquisition strategies.
                </p>

              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="relative aspect-square">
                <Image
                  src="images/team/aprajit.svg"
                  alt="Aprojit Marik"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Aprajit Marik</h3>
                <p className="text-[#29A0D8] font-semibold mb-4">Recruitment Manager</p>
                <p className="text-gray-600">
                  Leads talent acquisition with a focus on matching top candidates to organizational needs.
                  Specializes in IT and healthcare recruitment.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-[#29A0D8] to-[#6DD3FF] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with nstHr for comprehensive IT solutions and top-tier technology talent
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="inline-block bg-white text-[#29A0D8] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Get Started
            </Link>
            <Link href="/industries/Information-Technology" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#29A0D8] transition-colors">
              View IT Our Services
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