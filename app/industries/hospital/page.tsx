"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Hospital,
  Users,
  Stethoscope,
  Syringe,
  Thermometer,
  HeartPulse,
  BedDouble,
  Ambulance,
  Activity,
  Plus
} from "lucide-react";

const HospitalRecruitment = () => {
  const services = [
    {
      icon: <Stethoscope className="w-10 h-10 text-[#29A0D8]" />,
      title: "Doctor Staffing",
      description: "Top-tier physicians and specialists for clinics, hospitals, and private practices.",
      image: "/images/hospital/doctor-staffing.webp",
    },
    {
      icon: <Syringe className="w-10 h-10 text-[#29A0D8]" />,
      title: "Nursing Recruitment",
      description: "Trained and certified nurses for general, ICU, OT, and emergency departments.",
      image: "/images/hospital/nursing.webp",
    },
    {
      icon: <Thermometer className="w-10 h-10 text-[#29A0D8]" />,
      title: "Healthcare Assistants",
      description: "Qualified support staff to assist nurses and ensure smooth patient care.",
      image: "/images/hospital/assistants.webp",
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-[#29A0D8]" />,
      title: "Cardiology Experts",
      description: "Recruitment of cardiologists, technicians, and support staff for cardiac units.",
      image: "/images/hospital/cardiology.webp",
    },
    {
      icon: <BedDouble className="w-10 h-10 text-[#29A0D8]" />,
      title: "Hospital Admin Staff",
      description: "From receptionists to billing and HR executives, we cover every administrative need.",
      image: "/images/hospital/admin.webp",
    },
    {
      icon: <Ambulance className="w-10 h-10 text-[#29A0D8]" />,
      title: "Emergency Response",
      description: "Trained EMTs and paramedics ready for round-the-clock emergency services.",
      image: "/images/hospital/emergency.webp",
    },
    {
      icon: <Activity className="w-10 h-10 text-[#29A0D8]" />,
      title: "Technicians & Lab Staff",
      description: "Lab technicians, radiologists, and other skilled diagnostic staff.",
      image: "/images/hospital/lab.webp",
    },
    {
      icon: <Plus className="w-10 h-10 text-[#29A0D8]" />,
      title: "Support Staff",
      description: "Facility managers, cleaning crew, and ward boys to maintain hospital hygiene.",
      image: "/images/hospital/support.webp",
    },
  ];

  const stats = [
    { value: 500, label: "Healthcare Professionals Deployed", icon: <Users className="w-8 h-8" /> },
    { value: 97, label: "Client Satisfaction Rate", icon: <HeartPulse className="w-8 h-8" /> },
    { value: 300, label: "Hospitals Partnered", icon: <Hospital className="w-8 h-8" /> },
  ];

  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#29A0D8] to-[#6DD3FF] py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hospital & Healthcare Recruitment</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive staffing solutions for hospitals, clinics, and healthcare facilities.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Healthcare Recruitment Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Delivering skilled healthcare professionals to support institutions with world-class care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-[#29A0D8]/10 rounded-lg mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={ref} className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-[#29A0D8]/10 rounded-xl">
                <div className="flex justify-center text-[#29A0D8] mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {startCount && (
                    <CountUp end={stat.value} duration={2} suffix={stat.label.includes("%") ? "%" : "+"} />
                  )}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose NSTHR for Healthcare Hiring?</h2>
              <p className="text-gray-600 mb-6">
                Our specialized healthcare recruitment ensures that every hire meets your institution's standards for excellence, compassion, and commitment to patient well-being.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                  Access to a wide network of certified professionals
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                  Fast deployment for urgent roles and emergency care
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                  Nationwide coverage across urban and rural hospitals
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild className="px-8 py-3 text-white bg-[#29A0D8] hover:bg-[#1E7CAD]">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/images/hospital/hospital.webp"
                  alt="Hospital and Healthcare Recruitment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalRecruitment;
