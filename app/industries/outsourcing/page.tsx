// app/outsourcing/page.tsx or pages/outsourcing.tsx

'use client';

import { Briefcase, UserCheck, Globe2, ClipboardList } from 'lucide-react';
import CountUp from 'react-countup';
import Image from 'next/image';

const Outsourcing = () => {
  const stats = [
    { value: 120, label: "Projects Delivered", icon: <ClipboardList className="w-8 h-8" /> },
    { value: 80, label: "Clients Served Globally", icon: <Globe2 className="w-8 h-8" /> },
    { value: 300, label: "Skilled Professionals", icon: <UserCheck className="w-8 h-8" /> },
    { value: 10, label: "Years in Staffing Excellence", icon: <Briefcase className="w-8 h-8" /> },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#29A0D8] to-[#6DD3FF] py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">End-to-End Outsourcing Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Leverage our outsourcing services to scale your operations efficiently, reduce costs, and access top talent globally.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Outsourcing Services?</h2>
          <p className="text-gray-700 mb-6 text-justify">
            At nstHr, we understand that businesses today need agile, reliable, and scalable staffing and process solutions. Our outsourcing model is designed to offer you the flexibility to focus on core activities while we manage talent acquisition, operational processes, and day-to-day workforce challenges. 
            From IT and customer service to HR, finance, and data processing — we provide end-to-end support so you can grow without limits.
          </p>
          <p className="text-gray-700 text-justify">
            Whether you are a startup looking to minimize costs or a large enterprise needing dedicated offshore teams, our outsourcing services are customized to your goals. We act as an extension of your team and ensure operational continuity, enhanced productivity, and measurable ROI. 
            Our clients trust us for our transparent communication, strong talent pipeline, and technology-driven execution.
          </p>
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
                  <CountUp end={stat.value} duration={2} />
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Image Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <Image
              src="/images/outsourcing/outsourcing-team.webp"
              alt="Outsourcing Team"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Talent, Local Expertise</h2>
            <p className="text-gray-700 mb-4 text-justify">
              Our talent network spans multiple countries, giving you access to a diverse pool of skilled professionals in tech, finance, customer support, HR, and more.
              We ensure each outsourced role is aligned with your KPIs, culture, and business roadmap.
            </p>
            <p className="text-gray-700 text-justify">
              We don’t just fill roles — we manage, monitor, and optimize processes to give you long-term staffing and business continuity. With nstHr, outsourcing becomes a strategic advantage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outsourcing;
