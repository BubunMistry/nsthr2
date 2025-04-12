"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import { Factory, Hammer, ShieldCheck, Users, TrendingUp } from "lucide-react";

const IronAndSteel = () => {
  const services = [
    {
      icon: <Factory className="w-10 h-10 text-[#29A0D8]" />,
      title: "Manufacturing Workforce",
      description: "Skilled manpower for rolling mills, blast furnaces, and fabrication units.",
      image: "/images/iron/safety-training.webp",
    },
    {
      icon: <Hammer className="w-10 h-10 text-[#29A0D8]" />,
      title: "Maintenance & Engineering",
      description: "Technicians and engineers for equipment upkeep and infrastructure maintenance.",
      image: "/images/iron/engineering-team.webp",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#29A0D8]" />,
      title: "Safety & Compliance",
      description: "Staff trained in industrial safety protocols and compliance practices.",
      image: "/images/iron/iron-workers.webp",
    },
  ];

  const stats = [
    { value: 300, label: "Steel Projects Supported", icon: <Factory className="w-8 h-8" /> },
    { value: 120, label: "Trained Engineers", icon: <Hammer className="w-8 h-8" /> },
    { value: 95, label: "Client Retention Rate", icon: <TrendingUp className="w-8 h-8" /> },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Iron & Steel Industry Staffing</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering India’s core industry with skilled and reliable manpower solutions.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Industrial Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We support the iron and steel sector with experienced staff for operations, maintenance, and safety.
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
                    <div className="p-2 bg-[#29A0D8]/10 rounded-lg mr-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div ref={ref} className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-[#29A0D8]/10 rounded-xl">
                <div className="flex justify-center text-[#29A0D8] mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {startCount && <CountUp end={stat.value} duration={4.5} suffix={stat.label.includes("%") ? "%" : "+"} />}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose NSTHR */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose NSTHR?</h2>
              <p className="text-gray-600 mb-6">
                With deep domain knowledge in the iron and steel industry, we provide tailored staffing that meets operational standards and regulatory compliance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                  Immediate deployment and PAN-India presence
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                  Skilled workers with industry certifications
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                  Safety and compliance focused workforce
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="inline-block bg-[#29A0D8] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1E7CAD] transition-colors">
                  Let’s Connect
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/images/iron/iron.webp"
                  alt="Iron and Steel Recruitment"
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

export default IronAndSteel;
