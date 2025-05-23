"use client"

import Image from "next/image";
import { ChevronDown, ChevronUp} from 'lucide-react';
import { useState } from "react";
export default function AboutUs() {

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);



  return (
    <div className="bg-white">
      {/* Hero Section */}
    
      <div className="relative bg-gradient-to-r from-[#29A0D8] to-[#6DD3FF] py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
          Connecting talent with opportunity through innovative recruitment solutions
          </p>
        </div>
      </div>

      {/* About Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Our Story</h2>
              <p className="text-base md:text-lg text-gray-600">
                nstHr is an ISO 9001:2015 certified Kolkata-based recruitment agency founded by Abhishek Raj in 2018. 
                We're not just a consultancy but a full-service HR firm recognized for our timely and cost-effective 
                approach to talent acquisition.
              </p>
              <p className="text-base md:text-lg text-gray-600">
                We solve the common problem of mismatched applications by carefully aligning company requirements with 
                candidate profiles during our recruitment process. Unlike automated systems that rely on keywords, 
                we use hands-on talent search mechanisms to find capable and productive candidates.
              </p>
              <p className="text-base md:text-lg text-gray-600">
                Beyond recruitment, we offer comprehensive HR solutions including background verification, staffing 
                services, payroll processing, and HR outsourcing across all industries. Our commitment: service that's 
                on time, every time.
              </p>
            </div>
            <div className="flex justify-center order-first md:order-last">
              <div className="relative w-full max-w-md aspect-video md:aspect-square">
                <Image
                  src="/nsthrteam.jpg"
                  alt="Our team"
                  fill
                  className="rounded-lg shadow-xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start">
                  <span className="text-[#29A0D8] mr-3">•</span>
                  <span className="text-base md:text-lg text-gray-600">
                    To provide cost-effective, innovative end-to-end recruitment solutions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#29A0D8] mr-3">•</span>
                  <span className="text-base md:text-lg text-gray-600">
                    To implement impeccable hiring processes that bridge the employer-employee gap
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#29A0D8] mr-3">•</span>
                  <span className="text-base md:text-lg text-gray-600">
                    To expand our network across India while maintaining world-class service standards
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#29A0D8] mr-3">•</span>
                  <span className="text-base md:text-lg text-gray-600">
                    To become the leading career counseling resource in our industry
                  </span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                We provide exceptional recruitment services that connect talented individuals with the right opportunities 
                while helping businesses find candidates who drive their success.
              </p>
              <p className="text-base md:text-lg text-gray-600">
                Through personalized service and industry expertise, we transform careers and help organizations thrive 
                in an increasingly competitive landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Team Section */}
<section className="py-12 md:py-16 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
      Our Leadership Team
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Team Member */}
      {[
        {
          name: "Abhishek Raj",
          title: "Founder & Managing Director",
          img: "/images/team/abhishek.svg",
          desc: "Technology and marketing operations leader with a BTech in Electronics and Communications. Brings entrepreneurial vision and five years of HR service expertise to nstHr.",
        },
        {
          name: "Neha Kesari",
          title: "CEO & Business Head",
          img: "/images/team/neha.svg",
          desc: "Oversees client relationships and operational excellence with six years of HR domain experience. Specializes in strategic planning and business development.",
        },
        {
          name: "Rajesh Singh",
          title: "Branch Head & Business Coordinator",
          img: "/images/team/rajesh.svg",
          desc: "Manages regional operations and client coordination with expertise in workforce solutions and talent acquisition strategies.",
        },
        {
          name: "Aprajit Marik",
          title: "Recruitment Manager",
          img: "/images/team/aprajit.svg",
          desc: "Leads talent acquisition with a focus on matching top candidates to organizational needs. Specializes in IT and healthcare recruitment.",
        },
      ].map((member, index) => (
        <div
          key={index}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-md flex flex-col sm:flex-row gap-4 md:gap-6 items-center transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_0_25px_#29A0D855]"
        >
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 sm:w-36 sm:h-36">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="rounded-full object-cover border-4 border-[#29A0D8] shadow-lg transition-transform duration-300 hover:rotate-1"
              />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              {member.name}
            </h3>
            <p className="text-[#29A0D8] mb-2">{member.title}</p>
            <p className="text-sm md:text-base text-gray-600">{member.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Value Proposition */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Why Choose nstHr?</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12">
              We combine technology with human expertise to deliver exceptional recruitment results
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
              <div className="bg-white p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">Our Approach</h3>
                <p className="text-sm md:text-base text-gray-600">
                  As a technology-enabled service provider, we maintain extensive candidate databases and use 
                  sophisticated matching algorithms alongside personal interviews to ensure perfect placements.
                </p>
              </div>
              
              <div id="faq" className="bg-white p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">Our Process</h3>
                <p className="text-sm md:text-base text-gray-600">
                  We identify vacancies, match candidate profiles with client requirements, and provide pre-employment 
                  training to ensure seamless onboarding and long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>




{/* FAQ Section */}
<section className="py-12 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">FAQ (Frequently Asked Questions)</h2>
    <div className="max-w-3xl mx-auto space-y-4">
      {[
        {
          question: "What services does NSTHR offer?",
          answer:
            "NSTHR provides recruitment, executive search, RPO, temporary staffing, HR outsourcing, and payroll management services to businesses of all sizes.",
        },
        {
          question: "How does NSTHR ensure quality hiring?",
          answer:
            "We use a rigorous screening process, including CV shortlisting, telephonic interviews, skill assessments, and face-to-face interactions to find the best talent.",
        },
        {
          question: "What industries does NSTHR specialize in?",
          answer:
            "We specialize in IT, BFSI, FMCG, telecom, healthcare, infrastructure, manufacturing, and more.",
        },
        {
          question: "Can NSTHR help with temporary staffing?",
          answer:
            "Yes! We provide temporary staffing solutions for businesses looking to hire skilled professionals on a short-term basis.",
        },
        {
          question: "How can I contact NSTHR?",
          answer:
            "You can contact us through our website, email, or social media channels. Visit www.nsthr.in for more details.",
        },
      ].map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-4 bg-white text-left font-medium hover:bg-gray-100 transition"
            onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
          >
            {faq.question}
            {openFAQ === index ? (
              <ChevronUp className="w-5 h-5 text-[#29A0D8]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#29A0D8]" />
            )}
          </button>
          {openFAQ === index && (
            <div className="p-4 bg-gray-100 text-gray-700">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>









    </div>
  );
}