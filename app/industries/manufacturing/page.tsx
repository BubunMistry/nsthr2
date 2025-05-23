"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import {
  Hammer,
  PackageCheck,
  ShieldCheck,
  ClipboardList,
  TrendingUp,
  Wrench,
  Users,
  BarChart3,
} from "lucide-react";

const Manufacture = () => {
  const services = [
    {
      icon: <Hammer className="w-10 h-10 text-[#29A0D8]" />,
      title: "Production Staffing",
      description:
        "Trained machine operators, assembly line workers, and shift supervisors for efficient, lean manufacturing.",
      image: "/images/manufacturing/production.webp",
    },
    {
      icon: <PackageCheck className="w-10 h-10 text-[#29A0D8]" />,
      title: "Quality Assurance & Control",
      description:
        "QC inspectors and lab technicians familiar with GMP, ISO, and regulatory compliance for top-quality output.",
      image: "/images/manufacturing/quality.webp",
    },
    {
      icon: <Wrench className="w-10 h-10 text-[#29A0D8]" />,
      title: "Maintenance & Operations",
      description:
        "Skilled electricians, mechanics, and safety officers to ensure smooth, cost-effective plant operations.",
      image: "/images/manufacturing/maintenance.webp",
    },
    {
      icon: <Users className="w-10 h-10 text-[#29A0D8]" />,
      title: "Bulk & Contract Hiring",
      description:
        "Quick deployment of production surge staff and temporary workforce for seasonal or urgent needs.",
      image: "/images/manufacturing/contract-hiring.webp",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-[#29A0D8]" />,
      title: "Operational Excellence",
      description:
        "Supervisors and plant managers with expertise in lean systems, Kaizen, and Six Sigma implementation.",
      image: "/images/manufacturing/operations.webp",
    },
  ];

  const stats = [
    { value: 7, label: "Day Hiring Turnaround", icon: <ClipboardList className="w-8 h-8" />, suffix: " days" },
    { value: 150, label: "QA Staff Scaled", icon: <ShieldCheck className="w-8 h-8" />, suffix: "+" },
    { value: 60, label: "Line Operators Deployed", icon: <TrendingUp className="w-8 h-8" />, suffix: "+" },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Manufacturing Staffing Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Recruitment for production, quality, and operations to drive industrial growth and efficiency.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Manufacturing Recruitment Expertise</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide certified professionals and skilled labor across key roles in the manufacturing sector, tailored for factory-floor efficiency and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
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

      {/* Stats Section */}
      <div ref={ref} className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-[#29A0D8]/10 rounded-xl">
                <div className="flex justify-center text-[#29A0D8] mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {startCount && (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Skilled Manufacturing Talent Fast?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            NSTHR offers agile, dependable hiring for manufacturing roles—get factory-ready staff within days.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <button className="bg-[#29A0D8] hover:bg-[#1E7CAD] text-white px-8 py-3 rounded-lg font-medium transition-all">
                Get a Hiring Proposal
              </button>
            </Link>
            <Link href="/industries">
              <button className="border border-[#29A0D8] text-[#29A0D8] hover:bg-[#29A0D8]/10 px-8 py-3 rounded-lg font-medium transition-all">
                Explore Other Industries
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacture;
