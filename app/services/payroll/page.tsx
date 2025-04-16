// app/services/payroll/page.tsx

import { BadgeCheck, Banknote, ShieldCheck, FileText, Users, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Head from 'next/head';

const PayrollPage = () => {
  const payrollSolutions = [
    {
      icon: <BadgeCheck className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Full-Service Payroll Processing',
      highlights: ['Salary Calculations', 'Payslip Generation', 'Direct Deposits'],
      description: 'Accurate and timely payroll for your entire workforce, ensuring compliance and confidentiality.',
      details: [
        'Automated payroll processing tailored to your structure',
        'TDS, PF, ESI, and statutory deductions included',
        'Custom salary components and CTC structures',
        'Dedicated payroll manager for your account'
      ]
    },
    {
      icon: <Banknote className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Compliance & Statutory Management',
      highlights: ['PF/ESI Filings', 'TDS Returns', 'Labor Law Compliance'],
      description: 'Stay compliant with all labor laws and government regulations.',
      details: [
        'Timely filing of PF, ESI, PT, and TDS returns',
        'Labor law audit assistance and documentation',
        'Support for Shops & Establishment Act, Gratuity, Bonus, etc.',
        'Govt. liaison for compliance issues'
      ]
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Employee Benefits Administration',
      highlights: ['Leave Tracking', 'Reimbursements', 'Insurance Coordination'],
      description: 'End-to-end benefits handling from leave management to health insurance.',
      details: [
        'Automated leave and attendance management',
        'Medical, travel, and LTA reimbursements processing',
        'Insurance policy enrollments and claims handling',
        'Custom perks and benefit plans setup'
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Payroll Documentation & MIS',
      highlights: ['Payslips', 'Form 16', 'Reports'],
      description: 'Easy access to employee payslips, reports, and audit trails.',
      details: [
        'Downloadable payslips and tax forms',
        'Monthly, quarterly, and annual MIS reports',
        'Data backup and archival for audits',
        'Custom report generation on request'
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Outsourced HR Payroll Support',
      highlights: ['Employee Queries', 'HR Coordination', 'Policy Implementation'],
      description: 'Free up your HR team by outsourcing operational payroll support.',
      details: [
        'Employee helpdesk for payroll issues',
        'Attendance integration with your existing tools',
        'End-to-end payroll SOPs and policy documentation',
        'Dedicated support team and SLAs'
      ]
    }
  ];

  const benefits = [
    { icon: <ShieldCheck className="w-6 h-6" />, text: '100% Statutory Compliance' },
    { icon: <Banknote className="w-6 h-6" />, text: 'Cost-Effective Payroll Management' },
    { icon: <BadgeCheck className="w-6 h-6" />, text: 'Dedicated Payroll Experts' },
    { icon: <FileText className="w-6 h-6" />, text: 'Zero Error Processing' }
  ];

  return (
    <>
      <Head>
        <title>Payroll Management Services | nstHr</title>
        <meta name="description" content="Reliable and compliant payroll outsourcing services with statutory compliance and real-time reporting across India." />
        <meta name="keywords" content="payroll outsourcing, salary processing, payroll compliance, PF ESI TDS filing, nstHr payroll" />
        <meta property="og:title" content="Payroll Management Services | nstHr" />
        <meta property="og:description" content="Streamline payroll, reduce risk and ensure compliance with nstHr’s expert team." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nsthr.com/services/payroll" />
      </Head>

      <div className="bg-gradient-to-b from-secondary/10 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Payroll <span className="text-[#29A0D8]">Management</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert payroll services tailored to your business needs, with full compliance and zero headaches.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact">
              <Button><Mail className="w-5 h-5" /> Get a Quote</Button>
            </Link>
          </div>
        </section>

        {/* Service Cards */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Payroll Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive suite of payroll solutions for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {payrollSolutions.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-blue-300 shadow-blue-100 transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.highlights.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-secondary/20 text-[#29A0D8] rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#29A0D8] mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose nstHr for Payroll</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Trusted by startups, SMEs, and large enterprises for streamlined payroll operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#29A0D8]">
                    {item.icon}
                  </div>
                  <p className="font-medium text-gray-800">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="bg-gradient-to-r from-[#6DD3FF] to-secondary p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Simplify Your Payroll?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Let our experts handle it all — from salary to compliance — while you focus on business growth.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-white text-[#29A0D8] px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              <Mail className="w-5 h-5" /> Get Started
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default PayrollPage;
