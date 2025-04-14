"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Users,
  Truck,
  ClipboardCheck,
  TrendingUp,
  BadgeDollarSign,
  Store,
} from "lucide-react";

const Retail = () => {
  const services = [
    {
      icon: <Store className="w-10 h-10 text-[#29A0D8]" />,
      title: "Store Operations",
      description:
        "We recruit store managers, cashiers, floor supervisors, and inventory handlers to keep retail operations seamless.",
      image: "/images/retail/store-operations.webp",
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-[#29A0D8]" />,
      title: "Retail Sales Staffing",
      description:
        "Skilled sales executives and product promoters trained to boost in-store conversions and upselling.",
      image: "/images/retail/sales-staff.webp",
    },
    {
      icon: <Truck className="w-10 h-10 text-[#29A0D8]" />,
      title: "Logistics & Supply Chain",
      description:
        "We deploy delivery executives, warehouse packers, and dispatch handlers for quick retail fulfillment.",
      image: "/images/retail/logistics.webp",
    },
    {
      icon: <BadgeDollarSign className="w-10 h-10 text-[#29A0D8]" />,
      title: "POS & Billing Specialists",
      description:
        "Experienced billing staff and POS experts for fast, error-free checkout experiences at all outlets.",
      image: "/images/retail/pos.webp",
    },
    {
      icon: <ClipboardCheck className="w-10 h-10 text-[#29A0D8]" />,
      title: "Bulk Festival Hiring",
      description:
        "We help retailers ramp up seasonal workforce quickly during festive or clearance sale periods.",
      image: "/images/retail/festive-hiring.webp",
    },
  ];

  const stats = [
    { value: 5, label: "Days to Staff Store", icon: <ClipboardCheck className="w-8 h-8" />, suffix: " days" },
    { value: 200, label: "Sales Associates Placed", icon: <Users className="w-8 h-8" />, suffix: "+" },
    { value: 120, label: "Logistics Personnel Hired", icon: <TrendingUp className="w-8 h-8" />, suffix: "+" },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Retail Staffing Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Smart hiring for store operations, retail sales, and supply chain efficiency.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Hiring for the Retail Sector</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We deliver workforce solutions across offline and e-commerce retail, helping brands operate efficiently and scale on demand.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking for Quick Retail Hiring?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We help brands build retail teams rapidly across locations. Speak to us for fast, flexible staffing support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <button className="bg-[#29A0D8] hover:bg-[#1E7CAD] text-white px-8 py-3 rounded-lg font-medium transition-all">
                Get in Touch
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

export default Retail;
