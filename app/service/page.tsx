// app/services/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import { Briefcase, Search, Phone, Users,DollarSign,Shield, FileText, CheckCircle, Mail, Linkedin, X, Facebook, Youtube, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Recruitment Services | NSTHR - End-to-End Hiring Solutions',
  description: 'Comprehensive recruitment services including candidate sourcing, screening, RPO, and payroll management.',
  alternates: {
    canonical: 'https://nsthr.in/services',
  },
};

const companyLogos = [
    { id: 1, name: "Asian Paints", logo: "/images/clients/Asian Paints.png" },
    { id: 2, name: "BigBasket", logo: "/images/clients/BigBasket.png" },
    { id: 3, name: "KFC", logo: "/images/clients/kfc.png" },
    { id: 4, name: "idfc", logo: "/images/clients/idfc.png" },
    { id: 5, name: "Domino", logo: "/images/clients/Dominos Pizza.png" },
    { id: 6, name: "Bosch", logo: "/images/clients/Bosch-logo.png" },
    { id: 7, name: "Peerless", logo: "/images/clients/Peerless.png" },
    { id: 8, name: "Lux", logo: "/images/clients/lux.png" },
    { id: 9, name: "Siddha", logo: "/images/clients/siddha.webp" },
    { id: 10, name: "Apollo", logo: "/images/clients/Apollo.png" },
    { id: 11, name: "minu", logo: "/images/clients/minu.png" },
    { id: 12, name: "instone", logo: "/images/clients/instone.png" },
    { id: 13, name: "Udyogi", logo: "/images/clients/Udyogi.png" },
    { id: 14, name: "Anvation", logo: "/images/clients/anvation.jpeg" },
    { id: 15, name: "Goliath", logo: "/images/clients/goliath.jpeg" },
    { id: 16, name: "Cove", logo: "/images/clients/cove.png" },
    { id: 17, name: "encore.png", logo: "/images/clients/encore.png" },
    { id: 18, name: "eureka.png", logo: "/images/clients/eureka.png" },
    { id: 19, name: "kpexport", logo: "/images/clients/kpexport.png" },
    { id: 20, name: "Medica", logo: "/images/clients/medica.png" },
    { id: 21, name: "europe", logo: "/images/clients/europe.png" },
    { id: 22, name: "Ruby", logo: "/images/clients/ruby.jpg" },
    { id: 23, name: "Saburi", logo: "/images/clients/saburi.png" },
    { id: 24, name: "lawani", logo: "/images/clients/lawani.png" },
    { id: 25, name: "kedia", logo: "/images/clients/kedia.jpeg" },
    { id: 26, name: "carrental", logo: "/images/clients/carrental.jpeg" },
    { id: 27, name: "teximo", logo: "/images/clients/teximo.jpeg" },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#29A0D8] to-[#6DD3FF] text-white py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Complete Recruitment Partner</h1>
          <p className="text-xl mb-8">From sourcing to onboarding, we handle every step of your hiring process</p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-white text-[#29A0D8] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Get Started <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#29A0D8]">Our 10-Step Recruitment Process</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-2">
          <ProcessStep 
            step="1"
            icon={<Search size={24} />}
            title="Multi-Portal Sourcing"
            description="Aggressive search across Naukri, Monster, LinkedIn, Indeed, and GitHub"
            
          />
          
          <ProcessStep 
            step="2"
            icon={<FileText size={24} />}
            title="AI-Powered Screening"
            description="JD-matched CV filtering with our proprietary algorithm"
          />
          
          <ProcessStep 
            step="3"
            icon={<Phone size={24} />}
            title="Telephonic Round"
            description="30-min preliminary screening for communication & basics"
          />
          
          <ProcessStep 
            step="4"
            icon={<Users size={24} />}
            title="F2F Technical Round"
            description="In-depth assessment at our offices"
          />
          
          <ProcessStep 
            step="5"
            icon={<Briefcase size={24} />}
            title="Client Shortlisting"
            description="Presentation of top 3 candidates per role"
          />
          
          <ProcessStep 
            step="6"
            icon={<Users size={24} />}
            title="Client Interview"
            description="Final round at client's location/virtually"
          />
          
          <ProcessStep 
            step="7"
            icon={<DollarSign size={24} />}
            title="Salary Negotiation"
            description="Market-aligned compensation discussions"
          />
          
          <ProcessStep 
            step="8"
            icon={<Mail size={24} />}
            title="Offer Management"
            description="Drafting offer letters & joining kits"
          />
          
          <ProcessStep 
            step="9"
            icon={<CheckCircle size={24} />}
            title="Onboarding Support"
            description="Background verification & induction"
          />
          
          <ProcessStep 
            step="10"
            icon={<Shield size={24} />}
            title="Retention Program"
            description="Quarterly engagement surveys & grievance resolution"
          />
        </div>
      </section>

      {/* Service Highlights */}
      <section className="bg-[#F7FCFF] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#29A0D8]">Our Comprehensive Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Full-Cycle Recruitment"
              features={[
                'End-to-end hiring management',
                'Dedicated account manager',
                'Monthly talent pipeline reports'
              ]}
              icon={<Briefcase size={32} />}
            />
            
            <ServiceCard 
              title="RPO Solutions"
              features={[
                'Recruitment Process Outsourcing',
                'Employer branding',
                'Candidate experience management'
              ]}
              icon={<Users size={32} />}
            />
            
            <ServiceCard 
              title="Talent Mapping"
              features={[
                'Market intelligence reports',
                'Competitor analysis',
                'Passive candidate sourcing'
              ]}
              icon={<Search size={32} />}
            />
            
            <ServiceCard 
              title="Payroll Services"
              features={[
                'Statutory compliance',
                'Automated payroll processing',
                'Tax filing support'
              ]}
              icon={<DollarSign size={32} />}
            />
            
            <ServiceCard 
              title="Background Checks"
              features={[
                'Employment verification',
                'Criminal record checks',
                'Education validation'
              ]}
              icon={<Shield size={32} />}
            />
            
            <ServiceCard 
              title="Exit Management"
              features={[
                'Attrition analysis',
                'Relieving letters',
                'Knowledge transfer support'
              ]}
              icon={<FileText size={32} />}
            />
          </div>
        </div>
      </section>

      {/* Client Trust Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#29A0D8]">Trusted by 100+ Leading Companies</h2>
          <p className="text-lg mb-12 text-gray-600">We've successfully placed candidates across industries</p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {companyLogos.map((company) => (
              <div key={company.name} className="flex items-center justify-center w-32 h-20">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="max-h-12 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="bg-gradient-to-r from-[#29A0D8] to-[#6DD3FF] py-16 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Connect With Our Talent Community</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <SocialButton 
              href="https://www.facebook.com/nsthrsolutions" 
              icon={<Facebook size={20} />} 
              label="Facebook"
            />
            <SocialButton 
              href="https://www.linkedin.com/company/nsthrsolutions/" 
              icon={<Linkedin size={20} />} 
              label="LinkedIn"
            />
            <SocialButton 
              href="https://www.youtube.com/@nsthr208" 
              icon={<Youtube size={20} />} 
              label="YouTube"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable Components
function ProcessStep({ step, icon, title, description }: { step: string; icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-[#29A0D8] transition group">
      <div className="flex items-start">
        <div className="bg-[#29A0D8] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
          {step}
        </div>
        <div>
          <div className="text-[#29A0D8] mb-2 group-hover:text-[#6DD3FF] transition">{icon}</div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, features, icon }: { title: string; features: string[]; icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
      <div className="text-[#29A0D8] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle className="mr-2 mt-1 flex-shrink-0" size={16} style={{ color: '#6DD3FF' }} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition backdrop-blur-sm border border-white/30"
    >
      <span className="mr-2">{icon}</span>
      {label}
    </a>
  );
}