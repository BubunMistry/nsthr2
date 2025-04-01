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
]

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
<section id="services" className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="section-title">Services</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {/* Service 1 - Recruitment Services */}
      <div className="service-card bg-white rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl">
        <div className="p-6 flex flex-col items-start text-left">
          <div className="w-16 h-16 bg-[#29A0D8] rounded-full flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-xl text-[#333] mb-4">Recruitment Services</h3>
          <p className="text-sm text-gray-600 mb-4">
            We specialize in connecting businesses with the best talent for both permanent and temporary positions. Our recruitment process ensures that we match the right candidates with your organizational needs.
          </p>
          <p className="text-sm text-gray-600">
            From entry-level roles to senior management, our recruitment team works diligently to find skilled candidates across various industries such as IT, healthcare, finance, and more.
          </p>
        </div>
      </div>

      {/* Service 2 - IT Staffing */}
      <div className="service-card bg-white rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl">
        <div className="p-6 flex flex-col items-start text-left">
          <div className="w-16 h-16 bg-[#29A0D8] rounded-full flex items-center justify-center mb-4">
            <Search className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-xl text-[#333] mb-4">IT Staffing</h3>
          <p className="text-sm text-gray-600 mb-4">
            Our IT staffing services provide businesses with top-tier technical talent. Whether you need developers, system architects, or network engineers, we have the expertise to find professionals who meet your requirements.
          </p>
          <p className="text-sm text-gray-600">
            We ensure that each candidate is thoroughly vetted for both technical skills and cultural fit, helping you build teams that drive innovation and deliver results.
          </p>
        </div>
      </div>

      {/* Service 3 - Project Hiring */}
      <div className="service-card bg-white rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl">
        <div className="p-6 flex flex-col items-start text-left">
          <div className="w-16 h-16 bg-[#29A0D8] rounded-full flex items-center justify-center mb-4">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-xl text-[#333] mb-4">Project Hiring</h3>
          <p className="text-sm text-gray-600 mb-4">
            Our project hiring solutions are designed for businesses that require specialized skills for short-term projects. We connect you with professionals who can hit the ground running and deliver results within your project timelines.
          </p>
          <p className="text-sm text-gray-600">
            We handle everything from recruiting to onboarding, ensuring that your project team is ready to deliver value immediately.
          </p>
        </div>
      </div>

      {/* Service 4 - Temporary Staffing */}
      <div className="service-card bg-white rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl">
        <div className="p-6 flex flex-col items-start text-left">
          <div className="w-16 h-16 bg-[#29A0D8] rounded-full flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-xl text-[#333] mb-4">Temporary Staffing</h3>
          <p className="text-sm text-gray-600 mb-4">
            When your business needs extra help for a limited time, our temporary staffing services ensure that you get the right talent for short-term roles. Whether it's seasonal work or filling in for an employee on leave, we’ve got you covered.
          </p>
          <p className="text-sm text-gray-600">
            We provide temporary staff in various industries, ensuring that you can maintain productivity during peak seasons or while managing project surges.
          </p>
        </div>
      </div>

      {/* Service 5 - RPO (Recruitment Process Outsourcing) */}
      <div className="service-card bg-white rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl">
        <div className="p-6 flex flex-col items-start text-left">
          <div className="w-16 h-16 bg-[#29A0D8] rounded-full flex items-center justify-center mb-4">
            <Cpu className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-xl text-[#333] mb-4">RPO (Recruitment Process Outsourcing)</h3>
          <p className="text-sm text-gray-600 mb-4">
            With our RPO services, you can outsource your entire recruitment process to experts who can find the best candidates for you. From job postings to interviewing and onboarding, we manage all aspects of recruitment for your business.
          </p>
          <p className="text-sm text-gray-600">
            We provide a customized approach to meet your hiring goals, improving efficiency and reducing hiring costs while maintaining a high standard of talent acquisition.
          </p>
        </div>
      </div>

      {/* Service 6 - Executive Search */}
      <div className="service-card bg-white rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl">
        <div className="p-6 flex flex-col items-start text-left">
          <div className="w-16 h-16 bg-[#29A0D8] rounded-full flex items-center justify-center mb-4">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-xl text-[#333] mb-4">Executive Search</h3>
          <p className="text-sm text-gray-600 mb-4">
            Our executive search services are designed to help businesses find high-level leaders who can drive organizational growth and transformation. We identify top executives for your most critical roles, ensuring they align with your company’s culture and vision.
          </p>
          <p className="text-sm text-gray-600">
            With our extensive network and deep industry expertise, we ensure that we bring the best candidates who can make a significant impact at the executive level.
          </p>
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
            Brings entrepreneurial vision and three years of HR service expertise to nstHr.
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
          <p className="text-[#29A0D8] font-semibold mb-4">Recruiter Manager</p>
          <p className="text-gray-600">
            Leads talent acquisition with a focus on matching top candidates to organizational needs. 
            Specializes in IT and healthcare recruitment.
          </p>
         
        </div>
      </div>
    </div>
  </div>
</section>




<ClientsSection/>




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