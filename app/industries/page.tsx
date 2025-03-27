import Link from "next/link"
import { UserRound, Building, Bus, Car, Building2, Cog, Fuel, BarChart, Laptop, Wind } from "lucide-react"

export default function Industries() {
  const industries = [
    {
      id: "insurance",
      name: "Insurance",
      icon: <UserRound className="w-10 h-10" />,
      description:
        "We provide specialized recruitment services for the insurance sector, connecting companies with qualified professionals in underwriting, claims, actuarial, and more.",
    },
    {
      id: "construction",
      name: "Construction",
      icon: <Building className="w-10 h-10" />,
      description:
        "Our construction industry recruitment services help companies find skilled workers, project managers, engineers, and other professionals for construction projects.",
    },
    {
      id: "tour-travel",
      name: "Tour & Travel",
      icon: <Bus className="w-10 h-10" />,
      description:
        "We connect travel agencies, tour operators, and hospitality companies with experienced professionals who can enhance their services and customer experience.",
    },
    {
      id: "automobile",
      name: "Automobile",
      icon: <Car className="w-10 h-10" />,
      description:
        "Our recruitment services for the automobile industry focus on finding skilled technicians, engineers, sales professionals, and management personnel.",
    },
    {
      id: "banking",
      name: "Banking",
      icon: <Building2 className="w-10 h-10" />,
      description:
        "We help banking institutions find qualified professionals for roles in retail banking, investment banking, loan processing, financial analysis, and more.",
    },
    {
      id: "technical",
      name: "Technical",
      icon: <Cog className="w-10 h-10" />,
      description:
        "Our technical recruitment services cover a wide range of industries, connecting companies with skilled engineers, technicians, and other technical professionals.",
    },
    {
      id: "oil-gas",
      name: "Oil & Gas",
      icon: <Fuel className="w-10 h-10" />,
      description:
        "We provide specialized recruitment services for the oil and gas industry, helping companies find qualified professionals for exploration, production, and refining operations.",
    },
    {
      id: "advertising",
      name: "Advertising",
      icon: <BarChart className="w-10 h-10" />,
      description:
        "Our advertising industry recruitment services connect agencies and companies with creative professionals, marketing experts, and account managers.",
    },
    {
      id: "it-software",
      name: "IT Software",
      icon: <Laptop className="w-10 h-10" />,
      description:
        "We help IT companies find skilled software developers, engineers, project managers, and other IT professionals to drive their technology initiatives.",
    },
    {
      id: "power-energy",
      name: "Power and Energy",
      icon: <Wind className="w-10 h-10" />,
      description:
        "Our recruitment services for the power and energy sector focus on connecting companies with professionals experienced in renewable energy, power generation, and distribution.",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#29A0D8] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl">Specialized recruitment solutions for various sectors</p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div 
                key={industry.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-[#29A0D8]/10 text-[#29A0D8] rounded-full flex items-center justify-center mr-4">
                      {industry.icon}
                    </div>
                    <h2 className="text-xl font-bold">{industry.name}</h2>
                  </div>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <Link 
                    href={`/industries/${industry.id}`} 
                    className="text-[#29A0D8] font-medium hover:text-[#1E90D8] hover:underline transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Industry Expertise</h2>
            <p className="text-lg text-gray-600 mb-8">
              With years of experience in recruitment across various industries, we understand the unique challenges and
              requirements of each sector. Our specialized teams are equipped with industry-specific knowledge to
              provide tailored recruitment solutions.
            </p>
            <Link
              href="/contact"
              className="bg-[#29A0D8] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1E90D8] transition-colors inline-block"
            >
              Discuss Your Requirements
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}