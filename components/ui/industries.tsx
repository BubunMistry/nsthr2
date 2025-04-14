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
  Plus,
  Briefcase,
  MonitorSmartphone,
  Banknote,
  LineChart,
  Building2
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: <MonitorSmartphone className="w-10 h-10 text-[#29A0D8]" />, title: "Information Technology",
      description: "Top-tier tech talent for software, infrastructure, and support.",
      image: "/images/industries/it.webp", href: "/industries/information-technology",
    },
    {
      icon: <MonitorSmartphone className="w-10 h-10 text-[#29A0D8]" />, title: "IT Enabled Services",
      description: "Expertise in managing ITES roles across various domains.",
      image: "/images/industries/data.webp", href: "/industries/it-enabled",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-[#29A0D8]" />, title: "Temporary Staffing",
      description: "Flexible workforce solutions across multiple domains.",
      image: "/images/industries/Temporary Staffing Services.webp", href: "/industries/staffing",
    },
  
    {
      icon: <Banknote className="w-10 h-10 text-[#29A0D8]" />, title: "Outsourcing",
      description: "Efficient business process outsourcing to optimize operations.",
      image: "/images/industries/out.webp", href: "/industries/outsourcing",
    },

    {
      icon: <LineChart className="w-10 h-10 text-[#29A0D8]" />, title: "FMCG",
      description: "Talent acquisition for supply chain, sales, and marketing.",
      image: "/images/industries/fmcg.webp", href: "/industries/fmcg",
    },
    {
      icon: <LineChart className="w-10 h-10 text-[#29A0D8]" />, title: "Research and Analytics",
      description: "Skilled analysts and research professionals for data-driven decisions.",
      image: "/images/industries/research-analytics.webp", href: "/industries/research-analytics",
    },
    {
      icon: <Activity className="w-10 h-10 text-[#29A0D8]" />, title: "Telecom",
      description: "Experts in network engineering, support and telecom infra.",
      image: "/images/industries/telecom.webp", href: "/industries/telecom",
    },
    {
      icon: <Building2 className="w-10 h-10 text-[#29A0D8]" />, title: "Media",
      description: "Creative, production, and broadcast professionals.",
      image: "/images/industries/media.webp", href: "/industries/media-field",
    },
    {
      icon: <Building2 className="w-10 h-10 text-[#29A0D8]" />, title: "Infrastructure",
      description: "Engineering and management talent for infrastructure projects.",
      image: "/images/industries/infrastructure.webp", href: "/industries/infrastructure",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-[#29A0D8]" />, title: "Manufacturing",
      description: "Recruitment solutions for production, quality and operations.",
      image: "/images/industries/manufacturing.webp", href: "/industries/manufacturing",
    },
    {
      icon: <Building2 className="w-10 h-10 text-[#29A0D8]" />, title: "Travel and Hospitality",
      description: "Talent for hotels, airlines, and travel service industries.",
      image: "/images/industries/hospitality.webp", href: "/industries/travel",
    },
    {
      icon: <Building2 className="w-10 h-10 text-[#29A0D8]" />, title: "Retail",
      description: "Retail staffing for operations, sales, and logistics.",
      image: "/images/industries/retail.webp", href: "/industries/retail",
    },
    {
      icon: <Building2 className="w-10 h-10 text-[#29A0D8]" />, title: "Iron & Steel",
      description: "Specialized manpower solutions for metallurgy and steel plants.",
      image: "/images/industries/iron.webp", href: "/industries/iron-steel",
    },
    {
      icon: <Building2 className="w-10 h-10 text-[#29A0D8]" />, title: "Pharma",
      description: "Recruiting for pharma R&D, manufacturing, and sales.",
      image: "/images/industries/pharma.webp", href: "/industries/pharma",
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-[#29A0D8]" />, title: "Hospital",
      description: "Skilled professionals for hospitals and clinics.",
      image: "/images/industries/hospital.webp", href: "/industries/hospital",
    },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Specialized recruitment solutions tailored for diverse industry needs.
          </p>
        </div>
      </div>

      {/* Industries Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Industry Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connecting skilled talent with the right sectors for impactful results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Link key={index} href={industry.href} className="block">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image src={industry.image} alt={industry.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-[#29A0D8]/10 rounded-lg mr-4">
                        {industry.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{industry.title}</h3>
                    </div>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={ref} className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              { value: 1000, label: "Professionals Deployed", icon: <Users className="w-8 h-8" /> },
              { value: 95, label: "Client Satisfaction Rate", icon: <HeartPulse className="w-8 h-8" /> },
              { value: 500, label: "Companies Partnered", icon: <Briefcase className="w-8 h-8" /> },
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-[#29A0D8]/10 rounded-xl">
                <div className="flex justify-center text-[#29A0D8] mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {startCount && (
                    <CountUp end={stat.value} duration={5} suffix={stat.label.includes("%") ? "%" : "+"} />
                  )}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
