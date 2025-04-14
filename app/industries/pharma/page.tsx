"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import {
  FlaskConical,
  Stethoscope,
  Syringe,
  PackageSearch,
  ShieldCheck,
  Users,
  LineChart,
  CheckCircle2,
} from "lucide-react";

const PharmaStaffing = () => {
  const services = [
    {
      icon: <FlaskConical className="w-10 h-10 text-[#29A0D8]" />,
      title: "Pharmaceutical Scientists",
      description:
        "Experts in drug development, testing, and research for innovative pharmaceutical solutions.",
      image: "/images/pharma/pharmaceutical-scientist.webp",
    },
    {
      icon: <Syringe className="w-10 h-10 text-[#29A0D8]" />,
      title: "Clinical Research Associates",
      description:
        "Professionals to manage clinical trials, monitor safety data, and ensure regulatory compliance.",
      image: "/images/pharma/clinical-research.webp",
    },
    {
      icon: <PackageSearch className="w-10 h-10 text-[#29A0D8]" />,
      title: "Regulatory Affairs Specialists",
      description:
        "Skilled personnel for managing documentation, approvals, and international pharma regulations.",
      image: "/images/pharma/regulatory-affairs.webp",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#29A0D8]" />,
      title: "Quality Control & Assurance",
      description:
        "Staff for quality testing, assurance, and ensuring GMP, GLP, and ISO compliance.",
      image: "/images/pharma/quality-control.webp",
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-[#29A0D8]" />,
      title: "Pharmacovigilance Officers",
      description:
        "Monitor drug safety, adverse event reporting, and compliance with pharmacovigilance standards.",
      image: "/images/pharma/pharmacovigilance.webp",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-[#29A0D8]" />,
      title: "Production & Manufacturing",
      description:
        "Operators and supervisors for pharmaceutical production lines and packaging.",
      image: "/images/pharma/production.webp",
    },
  ];

  const stats = [
    { value: 180, label: "Pharma Clients Served", suffix: "+" , icon: <Users className="w-8 h-8" /> },
    { value: 98.7, label: "Compliance Accuracy", suffix: "%", icon: <ShieldCheck className="w-8 h-8" /> },
    { value: 1200, label: "Specialists Deployed", suffix: "+", icon: <LineChart className="w-8 h-8" /> },
  ];

  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-[#29A0D8] to-[#6DD3FF] py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pharma Staffing Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Trusted pharma staffing for R&D, clinical trials, compliance, and manufacturing excellence.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Pharma Talent Pool</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide highly trained pharma professionals across the drug development lifecycle—ensuring operational efficiency, quality control, and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
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

      {/* Stats */}
      <div ref={ref} className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Industry Stats</h2>
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
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
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

      {/* CTA */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Pharma Professionals Fast?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            NSTHR provides ready-to-deploy pharma experts—from labs to manufacturing lines—with a commitment to quality and speed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <button className="bg-[#29A0D8] hover:bg-[#1E7CAD] text-white px-8 py-3 rounded-lg font-medium transition-all">
                Request Pharma Staffing
              </button>
            </Link>
            <Link href="/pharma-case-studies">
              <button className="border border-[#29A0D8] text-[#29A0D8] hover:bg-[#29A0D8]/10 px-8 py-3 rounded-lg font-medium transition-all">
                View Case Studies
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmaStaffing;
