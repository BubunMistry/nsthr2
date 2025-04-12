"use client";
import { Video, Tv2, Mic2, Users, ThumbsUp, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; 
import { useState, useEffect } from "react";

const Media = () => {
  const services = [
    {
      icon: <Video className="w-10 h-10 text-[#29A0D8]" />,
      title: "Video Production",
      description: "End-to-end video production services from scripting to post-production.",
      image: "/images/media/video-production.webp"
    },
    {
      icon: <Tv2 className="w-10 h-10 text-[#29A0D8]" />,
      title: "Broadcast Talent Staffing",
      description: "Providing top talent for live TV, radio, and digital broadcasts.",
      image: "/images/media/broadcast-staffing.webp"
    },
    {
      icon: <Mic2 className="w-10 h-10 text-[#29A0D8]" />,
      title: "Audio & Podcasting",
      description: "Sound engineering and podcast production services for media houses.",
      image: "/images/media/audio-podcast.webp"
    }
  ];

  const stats = [
    { value: 120, label: "Media Professionals Placed", icon: <Users className="w-8 h-8" /> },
    { value: 90, label: "Client Retention Rate", icon: <ThumbsUp className="w-8 h-8" /> },
    { value: 75, label: "Successful Campaigns", icon: <TrendingUp className="w-8 h-8" /> }
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Media Industry Staffing</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Delivering top creative & technical talent to media houses, studios, and agencies.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Media Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bridging the gap between creativity and technology with high-quality staffing and solutions.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Media Recruitment Expertise</h2>
              <p className="text-gray-600 mb-6">
                We understand the fast-paced, creative, and ever-evolving world of media and entertainment. That’s why we provide:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                  Creative Directors & Producers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                  Cinematographers & Editors
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                  Sound Engineers & VFX Artists
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#29A0D8] rounded-full mr-3"></span>
                  Broadcast & Studio Technicians
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="inline-block bg-[#29A0D8] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1E7CAD] transition-colors">
                  Hire Media Talent
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/images/media/media-recruitment.webp"
                  alt="Media Recruitment"
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

export default Media;
