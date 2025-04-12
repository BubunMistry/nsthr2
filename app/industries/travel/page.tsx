"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import { PlaneTakeoff, Globe2, CalendarDays, Users, Compass, TicketPercent } from "lucide-react";
import { Button } from "@/components/ui/button";

const TravelIndustry = () => {
  const services = [
    {
      icon: <PlaneTakeoff className="w-10 h-10 text-[#29A0D8]" />,
      title: "Travel Consultants",
      description: "We recruit experienced consultants to handle itineraries, bookings, and customer support for travel agencies.",
      image: "/images/travel/travel-consultant.webp",
    },
    {
      icon: <Globe2 className="w-10 h-10 text-[#29A0D8]" />,
      title: "Tour Coordinators",
      description: "Staffing professionals who manage group travel operations, local arrangements, and vendor coordination.",
      image: "/images/travel/tour-coordinator.webp",
    },
    {
      icon: <CalendarDays className="w-10 h-10 text-[#29A0D8]" />,
      title: "Event Travel Staffing",
      description: "Specialized recruitment for destination events, including hospitality managers and travel executives.",
      image: "/images/travel/event-staff.webp",
    },
    {
      icon: <Compass className="w-10 h-10 text-[#29A0D8]" />,
      title: "Adventure Guides & Escorts",
      description: "Hire certified guides and field escorts for adventure and eco-tourism experiences.",
      image: "/images/travel/adventure-guide.webp",
    },
    {
      icon: <TicketPercent className="w-10 h-10 text-[#29A0D8]" />,
      title: "Ticketing & Reservation Agents",
      description: "Recruit skilled ticketing agents with GDS experience (Amadeus, Galileo, Sabre).",
      image: "/images/travel/ticketing-agent.webp",
    },
    {
      icon: <Users className="w-10 h-10 text-[#29A0D8]" />,
      title: "Hospitality & Support Staff",
      description: "Front-desk executives, concierge, and operations staff for hotels, cruises, and travel agencies.",
      image: "/images/travel/hospitality-staff.webp",
    },
  ];

  const stats = [
    { value: 150, label: "Travel Professionals Placed", icon: <Users className="w-8 h-8" /> },
    { value: 60, label: "Tourism Brands Served", icon: <Globe2 className="w-8 h-8" /> },
    { value: 98, label: "Client Satisfaction Rate", icon: <PlaneTakeoff className="w-8 h-8" /> },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Travel & Tourism Staffing Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Helping travel businesses scale with top-tier talent across hospitality, adventure, and corporate travel roles.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Travel Hiring Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end recruitment support to travel companies, helping them hire for core and seasonal roles with ease.
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

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button className="bg-[#29A0D8] hover:bg-[#1E7CAD] text-white px-6 py-3 rounded-lg">
                Let’s Talk Travel Staffing
              </Button>
            </Link>
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
                  {startCount ? (
                    <CountUp end={stat.value} duration={2} suffix={stat.label.includes("%") ? "%" : "+"} />
                  ) : (
                    `0${stat.label.includes("%") ? "%" : "+"}`
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

export default TravelIndustry;
