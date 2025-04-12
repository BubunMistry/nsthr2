"use client";

import {
  ShoppingCart,
  Truck,
  Users,
  Star,
  Warehouse,
  DollarSign,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const FMCG = () => {
  const { ref: statsRef, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  const services = [
    {
      icon: <ShoppingCart className="w-10 h-10 text-[#29A0D8]" />,
      title: "Retail Sales Workforce",
      description: "We supply trained sales representatives for in-store promotion, upselling, and customer engagement.",
      image: "/images/fmcg/retail.webp"
    },
    {
      icon: <Truck className="w-10 h-10 text-[#29A0D8]" />,
      title: "Logistics & Supply Chain",
      description: "Efficient manpower solutions for warehousing, delivery, and supply chain management.",
      image: "/images/fmcg/logistics.webp"
    },
    {
      icon: <Warehouse className="w-10 h-10 text-[#29A0D8]" />,
      title: "Warehouse Management",
      description: "From inventory management to order fulfillment, we provide skilled personnel for smooth operations.",
      image: "/images/fmcg/warehouse.webp"
    },
    {
      icon: <Users className="w-10 h-10 text-[#29A0D8]" />,
      title: "Promotional Staffing",
      description: "Trained promoters and field agents for FMCG activations, sampling, and brand visibility campaigns.",
      image: "/images/fmcg/promotional-staff.webp"
    }
  ];

  const stats = [
    { value: 300, suffix: "+", label: "FMCG Staff Deployed", icon: <Briefcase className="w-8 h-8" /> },
    { value: 120, suffix: "+", label: "Retail Locations Covered", icon: <ShoppingCart className="w-8 h-8" /> },
    { value: 50, suffix: "+", label: "FMCG Clients Served", icon: <Star className="w-8 h-8" /> },
    { value: 95, suffix: "%", label: "Client Satisfaction Rate (%)", icon: <DollarSign className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#29A0D8] to-[#6DD3FF] py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">FMCG Staffing & Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Driving success in the FMCG industry with specialized staffing, supply chain support, and market execution.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our FMCG Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive manpower and operational support to FMCG companies across sales, distribution, warehousing, and promotional campaigns.
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
      <div className="py-16 bg-white" ref={statsRef}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-[#29A0D8]/10 rounded-xl">
                <div className="flex justify-center text-[#29A0D8] mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {startCount ? (
                    <CountUp end={stat.value} duration={4.5} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recruitment Info */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose nstHr for FMCG?</h2>
              <p className="text-gray-600 mb-6">
                FMCG is a fast-paced industry where agility, scalability, and reliability are crucial. At nstHr, we help companies overcome staffing challenges by:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                  Rapid deployment of skilled resources across cities and towns.
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                  Extensive database of FMCG talent—sales, merchandisers, warehouse staff.
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                  Real-time attendance & performance monitoring systems.
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                  Payroll and compliance management tailored for mass hiring.
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="inline-block bg-[#29A0D8] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1E7CAD] transition-colors">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/images/fmcg/fmcg.webp"
                  alt="FMCG Recruitment"
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

export default FMCG;
