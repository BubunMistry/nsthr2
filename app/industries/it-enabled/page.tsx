"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import { Globe, Headset, Cpu, Database, BarChart2, Users, ClipboardList, TrendingUp,ShieldCheck } from "lucide-react";

const ITEnabledServices = () => {
    const services = [
        {
            icon: <Headset className="w-10 h-10 text-[#29A0D8]" />,
            title: "Customer Support Specialists",
            description: "Multilingual support teams for 24/7 customer service, technical support, and help desk solutions.",
            image: "/images/it-enabled/customer-support.webp",
        },
        {
            icon: <Database className="w-10 h-10 text-[#29A0D8]" />,
            title: "Data Processing Experts",
            description: "Skilled professionals for data entry, management, analytics, and business intelligence services.",
            image: "/images/it-enabled/data-processing.webp",
        },
        {
            icon: <Cpu className="w-10 h-10 text-[#29A0D8]" />,
            title: "Technical Support Teams",
            description: "Certified IT professionals for infrastructure management, software support, and troubleshooting.",
            image: "/images/it-enabled/technical-support.webp",
        },
        {
            icon: <BarChart2 className="w-10 h-10 text-[#29A0D8]" />,
            title: "Back-Office Processing",
            description: "Efficient teams for accounting, HR, claims processing, and other administrative functions.",
            image: "/images/it-enabled/back-office.webp",
        },
        {
            icon: <Globe className="w-10 h-10 text-[#29A0D8]" />,
            title: "Global BPO Solutions",
            description: "Cost-effective offshore/nearshore staffing for all your business process outsourcing needs.",
            image: "/images/it-enabled/bpo-solutions.webp",
        },
        {
            icon: <Users className="w-10 h-10 text-[#29A0D8]" />,
            title: "Consulting & Transformation",
            description: "Experts to help digitize and optimize your business processes through technology.",
            image: "/images/it-enabled/consulting.webp",
        },
    ];

    const stats = [
        { value: 85, label: "Cost Reduction (%)", icon: <TrendingUp className="w-8 h-8" /> },
        { value: 200, label: "Global Clients Served", icon: <Globe className="w-8 h-8" /> },
        { value: 98, label: "Client Satisfaction Rate", icon: <ClipboardList className="w-8 h-8" /> },
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">IT Enabled Services Staffing</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Transform your business operations with our specialized ITES talent solutions
                    </p>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our ITES Staffing Solutions</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We provide specialized talent for all IT Enabled Services needs, helping businesses optimize operations, reduce costs, 
                            and enhance customer experiences through technology-driven solutions.
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

            {/* Value Proposition Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our ITES Staffing?</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div className="flex items-start">
                            <div className="bg-[#29A0D8]/10 p-3 rounded-lg mr-4">
                                <TrendingUp className="w-6 h-6 text-[#29A0D8]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Cost Optimization</h3>
                                <p className="text-gray-600">
                                    Reduce operational costs by up to 85% through our strategic offshore/nearshore staffing models.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-[#29A0D8]/10 p-3 rounded-lg mr-4">
                                <Globe className="w-6 h-6 text-[#29A0D8]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Global Talent Pool</h3>
                                <p className="text-gray-600">
                                    Access to specialized ITES professionals across multiple geographies and time zones.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-[#29A0D8]/10 p-3 rounded-lg mr-4">
                                <Cpu className="w-6 h-6 text-[#29A0D8]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Technology Integration</h3>
                                <p className="text-gray-600">
                                    Professionals trained in the latest IT systems to transform your business processes.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-[#29A0D8]/10 p-3 rounded-lg mr-4">
                                <ShieldCheck className="w-6 h-6 text-[#29A0D8]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                                <p className="text-gray-600">
                                    Rigorous training and quality control processes to ensure exceptional service delivery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div ref={ref} className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
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

            {/* CTA Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Operations?</h2>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Our ITES staffing solutions can help you reduce costs while improving efficiency and customer satisfaction.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact">
                            <button className="bg-[#29A0D8] hover:bg-[#1E7CAD] text-white px-8 py-3 rounded-lg font-medium transition-all">
                                Request Staffing Solutions
                            </button>
                        </Link>
                        <Link href="/industries">
                            <button className="border border-[#29A0D8] text-[#29A0D8] hover:bg-[#29A0D8]/10 px-8 py-3 rounded-lg font-medium transition-all">
                            Explore More Sectors
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ITEnabledServices;