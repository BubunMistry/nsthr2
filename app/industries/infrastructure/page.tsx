"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import { Building2, Wrench, ClipboardList, ShieldCheck, Users, TrendingUp } from "lucide-react";

const Infrastructure = () => {
    const services = [
        {
            icon: <Building2 className="w-10 h-10 text-[#29A0D8]" />,
            title: "Infrastructure Planning",
            description:
                "Comprehensive infrastructure strategies aligned with business goals and future expansion.",
            image: "/images/infrastructure/infrastructure-planning.webp",
        },
        {
            icon: <Wrench className="w-10 h-10 text-[#29A0D8]" />,
            title: "Project Management",
            description:
                "Seamless execution and monitoring of infrastructure projects with expert oversight.",
            image: "/images/infrastructure/project-management.webp",
        },
        {
            icon: <ClipboardList className="w-10 h-10 text-[#29A0D8]" />,
            title: "Resource Allocation",
            description:
                "Effective resource deployment for timely project delivery and optimal productivity.",
            image: "/images/infrastructure/resource-allocation.webp",
        },
        {
            icon: <ShieldCheck className="w-10 h-10 text-[#29A0D8]" />,
            title: "Safety & Compliance",
            description:
                "Ensure regulatory compliance and top-tier safety standards across all infrastructure projects.",
            image: "/images/infrastructure/safety-compliance.webp",
        },
        {
            icon: <TrendingUp className="w-10 h-10 text-[#29A0D8]" />,
            title: "Sustainable Development",
            description:
                "Eco-conscious planning and construction practices for a greener tomorrow.",
            image: "/images/infrastructure/sustainable-development.webp",
        },
    ];

    const stats = [
        { value: 300, label: "Infrastructure Projects", icon: <ClipboardList className="w-8 h-8" /> },
        { value: 97, label: "Client Satisfaction Rate", icon: <TrendingUp className="w-8 h-8" /> },
        { value: 200, label: "Expert Engineers & PMs", icon: <Users className="w-8 h-8" /> },
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Infrastructure Solutions</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Building robust and scalable infrastructure through expert-driven strategies and execution.
                    </p>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We offer end-to-end infrastructure planning, staffing, and management solutions to support growth and compliance in every sector.
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

            {/* CTA Section */}
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Infrastructure Talent Strategy?</h2>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Partner with NSTHR to access top infrastructure professionals, optimize hiring, and scale smarter. Let’s build the future together.
                    </p>
                    <Link href="/contact">
                        <button className="bg-[#29A0D8] hover:bg-[#1E7CAD] text-white px-8 py-3 rounded-lg font-medium transition-all">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Infrastructure;
