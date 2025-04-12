'use client';

import {
  Users,
  Briefcase,
  Clock,
  ClipboardCheck,
  Globe,
  ShieldCheck,
  UserCheck,
  UserPlus,
  BadgeCheck,
  Building2
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const TemporaryStaffing = () => {
  const services = [
    {
      icon: <Briefcase className="w-10 h-10 text-[#29A0D8]" />,
      title: "Flexible Workforce",
      description: "Access on-demand talent to meet seasonal spikes or special projects without long-term commitments.",
      image: "/images/staffing/temp-flexibility.webp"
    },
    {
      icon: <Clock className="w-10 h-10 text-[#29A0D8]" />,
      title: "Quick Turnaround",
      description: "Rapid deployment of skilled professionals when and where you need them the most.",
      image: "/images/staffing/temp-quick.webp"
    },
    {
      icon: <ClipboardCheck className="w-10 h-10 text-[#29A0D8]" />,
      title: "Pre-Vetted Candidates",
      description: "All temporary hires are pre-screened, saving you time and ensuring high quality.",
      image: "/images/staffing/temp-screened.webp"
    },
    {
      icon: <Globe className="w-10 h-10 text-[#29A0D8]" />,
      title: "Industry Versatility",
      description: "We serve diverse sectors including IT, healthcare, manufacturing, and administration.",
      image: "/images/staffing/temp-industries.webp"
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#29A0D8]" />,
      title: "Compliance & Payroll",
      description: "We handle contracts, payroll, and legal compliance for all temporary placements.",
      image: "/images/staffing/temp-compliance.webp"
    },
    {
      icon: <UserCheck className="w-10 h-10 text-[#29A0D8]" />,
      title: "Staff Replacement Guarantee",
      description: "We offer swift replacements in case of dropouts or mismatches.",
      image: "/images/staffing/temp-replacement.webp"
    }
  ];

  const stats = [
    { value: "1000+", label: "Temporary Staff Placed", icon: <Users className="w-8 h-8" /> },
    { value: "48 Hrs", label: "Average Fulfillment Time", icon: <Clock className="w-8 h-8" /> },
    { value: "99%", label: "Client Satisfaction Rate", icon: <BadgeCheck className="w-8 h-8" /> },
    { value: "300+", label: "Partner Companies", icon: <Building2 className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#29A0D8] to-[#6DD3FF] py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Temporary Staffing Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Scalable staffing solutions to meet your evolving business needs
          </p>
          <div className="mt-8">
            <Link href="/contact" className="inline-block bg-white text-[#29A0D8] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Hire Temporary Talent
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Temp Staffing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide fast, reliable, and flexible workforce solutions tailored to your needs
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
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Approach Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">NSTHR’s Staffing Approach</h2>
              <p className="text-gray-600 mb-6">
                Our temporary staffing service ensures you get the right people, right when you need them.
                Whether it’s filling last-minute gaps or scaling for a big project, NSTHR handles sourcing,
                vetting, and placement with precision.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                  Staffing for short-term projects and seasonal demand
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                  Immediate availability of skilled candidates
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                  Seamless onboarding and offboarding process
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="inline-block bg-[#29A0D8] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1E7CAD] transition-colors">
                  Request Staff Now
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/images/staffing/temp-staffing.webp"
                  alt="Temporary Staffing"
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

export default TemporaryStaffing;
