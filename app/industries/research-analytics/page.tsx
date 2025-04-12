"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import { BarChart3, Search, FileText, BrainCog, Users, TrendingUp } from "lucide-react";

const ResearchAndAnalytics = () => {
  const services = [
    {
      icon: <Search className="w-10 h-10 text-[#29A0D8]" />,
      title: "Market Research",
      description: "Comprehensive market insights to guide data-driven decisions.",
      image: "/images/research/market-research.webp",
    },
    {
      icon: <FileText className="w-10 h-10 text-[#29A0D8]" />,
      title: "Survey Analysis",
      description: "Professional data collection and analysis of consumer behavior.",
      image: "/images/research/survey-analysis.webp",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-[#29A0D8]" />,
      title: "Business Intelligence",
      description: "Turn raw data into meaningful business insights and strategies.",
      image: "/images/research/business-intelligence.webp",
    },
    {
      icon: <BrainCog className="w-10 h-10 text-[#29A0D8]" />,
      title: "Predictive Analytics",
      description: "Leverage AI and machine learning to forecast future trends.",
      image: "/images/research/predictive-analytics.webp",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-[#29A0D8]" />,
      title: "Competitive Analysis",
      description: "Identify opportunities through competitor benchmarking.",
      image: "/images/research/competitive-analysis.webp",
    },
    {
      icon: <Users className="w-10 h-10 text-[#29A0D8]" />,
      title: "Customer Profiling",
      description: "Understand customer personas to enhance targeting.",
      image: "/images/research/customer-profiling.webp",
    },
  ];

  const stats = [
    { value: 250, label: "Projects Delivered", icon: <FileText className="w-8 h-8" /> },
    { value: 98, label: "Client Satisfaction Rate", icon: <TrendingUp className="w-8 h-8" /> },
    { value: 150, label: "Experts in Network", icon: <Users className="w-8 h-8" /> },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research & Analytics</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Unlock data-driven growth with our tailored research and analytics solutions.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From market research to advanced analytics, we help businesses make smarter decisions.
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

      {/* Recruitment Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <p className="text-gray-600 mb-6">
                We provide in-depth, actionable insights that empower your organization to stay ahead of the curve. Our team includes experts in data science, research methodologies, and analytics platforms.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                  Custom research solutions for every business size
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                  Expert analysts across industries
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                  Timely and actionable insights
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="inline-block bg-[#29A0D8] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1E7CAD] transition-colors">
                  Let’s Talk Data
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/images/research/research.webp"
                  alt="Research and Analytics Recruitment"
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

export default ResearchAndAnalytics;
