'use client';

import { Code, Cloud, Shield, BrainCircuit, Server, Database, Network, Cpu, BarChart2, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CountUp from 'react-countup';
import { Button } from '@/components/ui/button';

const InformationTechnology = () => {
  const services = [
    {
      icon: <Code className="w-10 h-10 text-[#29A0D8]" />,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs with cutting-edge technologies.",
      image: "/images/it/software.webp"
    },
    {
      icon: <Cloud className="w-10 h-10 text-[#29A0D8]" />,
      title: "Cloud Solutions",
      description: "End-to-end cloud services including migration, management, and optimization.",
      image: "/images/it/cloud.webp"
    },
    {
      icon: <Shield className="w-10 h-10 text-[#29A0D8]" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and infrastructure.",
      image: "/images/it/cyber.webp"
    },
    {
      icon: <BrainCircuit className="w-10 h-10 text-[#29A0D8]" />,
      title: "AI & Machine Learning",
      description: "Transform your business with intelligent automation and data-driven insights.",
      image: "/images/it/ai.webp"
    },
    {
      icon: <Server className="w-10 h-10 text-[#29A0D8]" />,
      title: "DevOps Services",
      description: "Streamline your development and operations with CI/CD pipelines and automation.",
      image: "/images/it/devops.webp"
    },
    {
      icon: <Database className="w-10 h-10 text-[#29A0D8]" />,
      title: "Data Management",
      description: "Data warehousing, analytics, and business intelligence solutions.",
      image: "/images/it/data.webp"
    }
  ];

  const stats = [
    { value: 200, suffix: "+", label: "IT Professionals Placed", icon: <Users className="w-8 h-8" /> },
    { value: 95, suffix: "%", label: "Client Retention Rate", icon: <BarChart2 className="w-8 h-8" /> },
    { value: 50, suffix: "+", label: "Tech Partnerships", icon: <Network className="w-8 h-8" /> },
    { value: 24, suffix: "/7", label: "Support Availability", icon: <Cpu className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#29A0D8] to-[#6DD3FF] py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">IT Solutions & Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering businesses with cutting-edge technology solutions and top-tier IT talent
          </p>
          <div className="mt-8">
          <Link href="/contact" className="inline-block bg-white text-[#29A0D8] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Get Your IT Solution
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
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
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-[#29A0D8]/10 rounded-xl">
                <div className="flex justify-center text-[#29A0D8] mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  <CountUp end={stat.value} duration={5} suffix={stat.suffix} />
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">IT Talent Recruitment</h2>
              <p className="text-gray-600 mb-6">
                At nstHr, we specialize in connecting businesses with exceptional IT professionals across all domains:
              </p>
              <ul className="space-y-3">
                {[
                  "Full-stack developers (React, Angular, Node.js, Python)",
                  "Cloud architects & DevOps engineers",
                  "Cybersecurity specialists",
                  "Data scientists & AI/ML engineers",
                  "IT project managers & Scrum masters"
                ].map((role, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                    {role}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/it-recruitment">
                  <Button className="bg-[#29A0D8] text-white hover:bg-[#1E7CAD]">
                    Find IT Talent
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/images/it/it-recruitment.webp"
                  alt="IT Recruitment"
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

export default InformationTechnology;
