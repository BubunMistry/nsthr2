import Link from 'next/link';
import Image from 'next/image';
import { Mail, Shield, User, CreditCard, Lock, ChevronRight, Globe, X , Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube  } from 'lucide-react';

export const metadata = {
    title: 'Privacy Policy | NSTHR - Recruitment Data Practices',
    description: 'How NSTHR handles candidate data, payments, and hiring processes. Compliant with GDPR and global recruitment standards.',
    alternates: {
        canonical: 'https://nsthr.com/privacy',
    },
};

export default function PrivacyPolicy() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            {/* Header */}
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4" style={{ color: '#29A0D8' }}>Privacy Policy</h1>
                <p className="text-lg text-gray-600">Last Updated: {currentDate}</p>
            </section>

            {/* Introduction */}
            <SectionContainer icon={<Globe size={20} />} title="1. Introduction">
                <p className="mb-4">
                    At <Link href="/" className="font-semibold" style={{ color: '#29A0D8' }}>NSTHR</Link>, we specialize in connecting top talent with leading employers. This policy outlines how we collect, use, and protect candidate and client data during the recruitment process.
                </p>
                <p>
                    By using our services, you agree to the terms outlined in this policy and our <Link href="/terms" className="underline" style={{ color: '#29A0D8' }}>Terms of Service</Link>.
                </p>
            </SectionContainer>

            {/* Data Collection (Recruitment-Focused) */}
            <SectionContainer icon={<User size={20} />} title="2. Data We Collect">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-semibold mb-2">Candidate Data:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Resume, work history, and salary expectations</li>
                            <li>Contact details (email, phone, LinkedIn)</li>
                            <li>Interview feedback and assessment results</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Client Data:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Job descriptions and hiring budgets</li>
                            <li>Company contact information</li>
                            <li>Payment details (encrypted)</li>
                        </ul>
                    </div>
                </div>
            </SectionContainer>

            {/* Data Usage */}
            <SectionContainer icon={<Shield size={20} />} title="3. How We Use Your Data">
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>For Candidates:</strong> Match you with relevant job openings and share profiles <em>only with your consent</em>.</li>
                    <li><strong>For Clients:</strong> Source qualified candidates and process recruitment fees securely.</li>
                    <li><strong>Legal Compliance:</strong> Disclose data if required by laws like <a href="https://gdpr-info.eu/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#29A0D8' }}>GDPR</a>.</li>
                </ul>
            </SectionContainer>

            {/* Data Security */}
            <SectionContainer icon={<Lock size={20} />} title="4. Data Security">
                <p>We implement:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Encrypted storage and transmissions</li>
                    <li>Role-based access controls</li>
                    <li>Regular security audits</li>
                </ul>
            </SectionContainer>

            {/* Your Rights */}
            <SectionContainer icon={<User size={20} />} title="5. Your Rights">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-semibold mb-2">Access & Control:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Request data deletion</li>
                            <li>Withdraw application consent</li>
                            <li>Opt out of marketing</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Contact for Requests:</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <Mail size={16} className="mr-2" style={{ color: '#29A0D8' }} />
                                <a href="mailto:helpdesk@nsthr.com" className="underline" style={{ color: '#29A0D8' }}>helpdesk@nsthr.com</a> (for applications)
                            </li>
                            <li className="flex items-center">
                                <Mail size={16} className="mr-2" style={{ color: '#29A0D8' }} />
                                <a href="mailto:info@nsthr.com" className="underline" style={{ color: '#29A0D8' }}>info@nsthr.com</a> (general queries)
                            </li>
                        </ul>
                    </div>
                </div>
            </SectionContainer>

            {/* Contact & Socials */}
            <SectionContainer icon={<Mail size={20} />} title="Connect With Us">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-semibold mb-3">Email Support:</h3>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <Mail size={18} className="mr-3" style={{ color: '#29A0D8' }} />
                                <div>
                                    <p className="font-medium">General Inquiries</p>
                                    <a href="mailto:info@nsthr.com" className="underline" style={{ color: '#29A0D8' }}>info@nsthr.com</a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Mail size={18} className="mr-3" style={{ color: '#29A0D8' }} />
                                <div>
                                    <p className="font-medium">Application Support</p>
                                    <a href="mailto:helpdesk@nsthr.com" className="underline" style={{ color: '#29A0D8' }}>helpdesk@nsthr.com</a>
                                </div>
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

// Reusable Section Component
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