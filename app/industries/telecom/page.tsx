"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import { Wifi, Server, Radio, Phone, Satellite, Settings, TrendingUp, Users, ClipboardList, Globe } from "lucide-react";

const TelecomStaffing = () => {
    const services = [
        {
            icon: <Radio className="w-10 h-10 text-[#29A0D8]" />,
            title: "Telecom Network Engineers",
            description: "Certified experts in network setup, maintenance, and optimization for high-performance telecom infrastructure.",
            image: "/images/telecom/network-engineers.webp",
        },
        {
            icon: <Wifi className="w-10 h-10 text-[#29A0D8]" />,
            title: "Wireless Communication Specialists",
            description: "Skilled professionals in 4G/5G deployment, troubleshooting, and support services.",
            image: "/images/telecom/wireless-communication.webp",
        },
        {
            icon: <Phone className="w-10 h-10 text-[#29A0D8]" />,
            title: "Customer Support Executives",
            description: "24/7 call center staff for telecom customer onboarding, issue resolution, and billing support.",
            image: "/images/telecom/customer-support.webp",
        },
        {
            icon: <Server className="w-10 h-10 text-[#29A0D8]" />,
            title: "Infrastructure Specialists",
            description: "Professionals for tower maintenance, cabling, and telecom infrastructure rollout.",
            image: "/images/telecom/infrastructure.webp",
        },
        {
            icon: <Satellite className="w-10 h-10 text-[#29A0D8]" />,
            title: "Satellite Communication Experts",
            description: "Technicians for satellite systems, broadcast, and remote telecom solutions.",
            image: "/images/telecom/satellite-communication.webp",
        },
        {
            icon: <Settings className="w-10 h-10 text-[#29A0D8]" />,
            title: "Field Installation Technicians",
            description: "On-site experts for equipment setup, signal testing, and service activation.",
            image: "/images/telecom/field-technicians.webp",
        },
    ];

    const stats = [
        { value: 120, label: "Telecom Clients Served", icon: <Users className="w-8 h-8" /> },
        { value: 95, label: "Service Uptime (%)", icon: <TrendingUp className="w-8 h-8" /> },
        { value: 99, label: "Client Satisfaction Rate", icon: <ClipboardList className="w-8 h-8" /> },
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Telecom Staffing Solutions</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Hire top telecom talent for infrastructure, network support, and customer engagement.
                    </p>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Telecom Expertise</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            From network engineers to field technicians, we provide full-spectrum staffing for the telecom industry to help scale operations and maintain service quality.
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
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Performance Stats</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="p-6 bg-[#29A0D8]/10 rounded-xl">
                                <div className="flex justify-center text-[#29A0D8] mb-4">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl font-bold text-gray-900 mb-2">
                                    {startCount && (
                                        <CountUp 
                                            end={stat.value} 
                                            duration={2} 
                                            suffix={stat.label.includes("%") ? "%" : ""} 
                                        />
                                    )}
                                </div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking to Strengthen Your Telecom Team?</h2>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        NSTHR delivers experienced telecom professionals ready to take on complex network and infrastructure challenges.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact">
                            <button className="bg-[#29A0D8] hover:bg-[#1E7CAD] text-white px-8 py-3 rounded-lg font-medium transition-all">
                                Request Telecom Staffing
                            </button>
                        </Link>
                        <Link href="/industries">
                            <button className="border border-[#29A0D8] text-[#29A0D8] hover:bg-[#29A0D8]/10 px-8 py-3 rounded-lg font-medium transition-all">
                                 View More Sectors
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TelecomStaffing;
