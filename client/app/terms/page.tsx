'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Mail, FileText, Briefcase, DollarSign, Linkedin, X, Shield, User, CreditCard, Lock, ChevronRight, Globe, Phone, MapPin, Facebook, Twitter, Instagram, Youtube  } from 'lucide-react';

export default function TermsContent() {
  const [openSection, setOpenSection] = useState<string | null>('candidates');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#29A0D8' }}>Terms and Conditions</h1>
        <p className="text-lg text-gray-600">Effective Date: {currentDate}</p>
      </section>

      {/* Introduction */}
      <SectionContainer icon={<FileText size={20} />} title="1. Introduction">
        <p className="mb-4">
          Welcome to <Link href="/" className="font-semibold" style={{ color: '#29A0D8' }}>NSTHR</Link>. These terms govern your use of our recruitment services.
        </p>
        <p>
          By accessing our platform, you agree to these terms and our <Link href="/privacy" className="underline" style={{ color: '#29A0D8' }}>Privacy Policy</Link>.
        </p>
      </SectionContainer>

      {/* Candidate Terms */}
      <SectionContainer icon={<User size={20} />} title="2. Candidate Terms">
        <button
          onClick={() => toggleSection('candidates')}
          className="flex items-center justify-between w-full py-3 text-left"
        >
          <span className="font-semibold">Candidate Responsibilities</span>
          <ChevronDown size={20} className={`transition-transform ${openSection === 'candidates' ? 'rotate-180' : ''}`} />
        </button>
        
        {openSection === 'candidates' && (
          <div className="mt-4 space-y-4">
            <h3 className="font-medium">When using our services, you agree to:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Not misrepresent your qualifications</li>
              <li>Respond promptly to interview requests</li>
              <li>Notify NSTHR when accepting offers</li>
            </ul>

            <div className="p-4 bg-blue-50 rounded-lg border-l-4" style={{ borderColor: '#29A0D8' }}>
              <h4 className="font-semibold mb-2">Placement Fees:</h4>
              <p>Candidates <strong>never pay fees</strong> for our services.</p>
            </div>
          </div>
        )}
      </SectionContainer>

      {/* Client Terms */}
      <SectionContainer icon={<Briefcase size={20} />} title="3. Client Terms">
        <button
          onClick={() => toggleSection('clients')}
          className="flex items-center justify-between w-full py-3 text-left"
        >
          <span className="font-semibold">*As per communication standard</span>
          <ChevronDown size={20} className={`transition-transform ${openSection === 'clients' ? 'rotate-180' : ''}`} />
        </button>
        
 {/*  {openSection === 'clients' && (
          <div className="mt-4 space-y-4">
            <h3 className="font-medium">By engaging NSTHR, employers agree to:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pay recruitment fees within 14 days</li>
              <li>Not directly contact candidates for 12 months</li>
              <li>Provide accurate job descriptions</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <DollarSign size={16} className="mr-2" style={{ color: '#29A0D8' }} />
                  Fee Structure
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Permanent hires: 15-25% of salary</li>
                  <li>Contract roles: 10-15%</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Shield size={16} className="mr-2" style={{ color: '#29A0D8' }} />
                  Guarantee Period
                </h4>
                <p>90-day replacement guarantee</p>
              </div>
            </div>
          </div>
        )}  

*/}


      </SectionContainer>

      {/* General Terms */}
      <SectionContainer icon={<Shield size={20} />} title="4. General Terms">
        <div className="space-y-4">
          <h3 className="font-semibold">Intellectual Property</h3>
          <p>All content remains property of NSTHR or respective owners.</p>

          <h3 className="font-semibold mt-4">Limitation of Liability</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Not liable for misrepresentation</li>
            <li>Not liable for hiring decisions</li>
          </ul>
        </div>
      </SectionContainer>

      {/* Contact Section */}
      <SectionContainer icon={<Mail size={20} />} title="Contact Us">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Legal & Support:</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={18} className="mr-3" style={{ color: '#29A0D8' }} />
                <a href="mailto:legal@nsthr.com" className="underline" style={{ color: '#29A0D8' }}>info@nsthr.com</a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3" style={{ color: '#29A0D8' }} />
                <a href="mailto:clients@nsthr.com" className="underline" style={{ color: '#29A0D8' }}>helpdesk@nsthr.com</a>
              </div>
            </div>
          </div>

          <div>
                        <h3 className="font-semibold mb-3">Social Media:</h3>

                        <div className="flex gap-3">

                       
                            <Link
                                href="https://www.facebook.com/nsthrsolutions" target="_blank" rel="noopener noreferrer"
                                className="text-white hover:text-white/80 bg-[#29A0D8] rounded-full flex p-2 items-center justify-center"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </Link>
                           
                            <Link
                                href="https://www.instagram.com/nsthrsolutions/" target="_blank" rel="noopener noreferrer"
                                className="text-white hover:text-white/80 bg-[#29A0D8] rounded-full flex p-2 items-center justify-center"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/nsthrsolutions" target="_blank" rel="noopener noreferrer"
                                className="text-white hover:text-white/80 bg-[#29A0D8] rounded-full flex p-2 items-center justify-center"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://www.youtube.com/@nsthr208" target="_blank" rel="noopener noreferrer"
                                className="text-white hover:text-white/80 bg-[#29A0D8] rounded-full flex p-2 items-center justify-center"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-5 h-5" />
                            </Link>
                        </div>


                    </div>
        </div>
      </SectionContainer>
    </main>
  );
}

// Reusable Components
function SectionContainer({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-full mr-3" style={{ backgroundColor: '#29A0D8', color: 'white' }}>
          {icon}
        </div>
        <h2 className="text-2xl font-semibold" style={{ color: '#29A0D8' }}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100"
    >
      <span className="mr-2" style={{ color: '#29A0D8' }}>{icon}</span>
      {label}
    </a>
  );
}