import { Users, Clock, BarChart, Shield, Settings, Globe, Award, Mail, ClipboardList, Hash, Zap, CalendarCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Head from 'next/head';

const RpoPage = () => {
  const rpoModels = [
    {
      icon: <Users className="w-8 h-8 text-[#29A0D8]" />,
      title: 'End-to-End RPO',
      skills: ['Full Cycle Hiring', 'Employer Branding', 'Candidate Experience'],
      description: 'Complete outsourcing of your recruitment function from sourcing to onboarding',
      details: [
        'Ideal for companies scaling rapidly or entering new markets',
        'Dedicated recruitment team working as an extension of your HR',
        'Average 40% reduction in time-to-hire',
        'Includes analytics and continuous improvement'
      ]
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Project-Based RPO',
      skills: ['Volume Hiring', 'Seasonal Staffing', 'Market Expansion'],
      description: 'Targeted solutions for specific hiring initiatives or peak periods',
      details: [
        'Perfect for hiring 50+ roles within 3-6 months',
        'Customizable service level agreements',
        'Specialized recruiters for your industry',
        'Pay-per-hire or monthly fee options'
      ]
    },
    {
      icon: <Hash className="w-8 h-8 text-[#29A0D8]" />,
      title: 'High-Volume RPO',
      skills: ['Bulk Hiring', 'Campus Recruitment', 'Mass Hiring Events'],
      description: 'Scalable solutions for large-scale recruitment needs',
      details: [
        'Handled 500+ hires per quarter for clients',
        'Proprietary candidate assessment tools',
        'Automated screening and scheduling',
        'Dedicated recruitment command center'
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-[#29A0D8]" />,
      title: 'On-Demand RPO',
      skills: ['Just-in-Time Hiring', 'Skill Gap Coverage', 'Surge Capacity'],
      description: 'Flexible recruitment support when you need it most',
      details: [
        '48-hour recruiter deployment',
        'No long-term contracts',
        'Perfect for unexpected turnover or project wins',
        'Scalable up or down weekly'
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Hybrid RPO',
      skills: ['Partial Outsourcing', 'Process Optimization', 'Technology Enablement'],
      description: 'Blend of in-house and outsourced recruitment functions',
      details: [
        'We handle hard-to-fill or specialized roles',
        'Your team retains control over key positions',
        'Shared ATS and reporting dashboard',
        'Knowledge transfer included'
      ]
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Enterprise RPO',
      skills: ['Global Hiring', 'Multi-Location', 'Multi-Department'],
      description: 'Comprehensive solution for large organizations with complex needs',
      details: [
        'Mature organizations with 1000+ employees',
        'Dedicated account management team',
        'Integration with your HR tech stack',
        'Quarterly business reviews'
      ]
    }
  ];

  const benefits = [
    { icon: <Globe className="w-6 h-6" />, text: '70% Faster Hiring' },
    { icon: <BarChart className="w-6 h-6" />, text: '40% Cost Reduction' },
    { icon: <Award className="w-6 h-6" />, text: '90% Retention Rate' },
    { icon: <Shield className="w-6 h-6" />, text: 'ISO Certified Processes' }
  ];

  return (
    <>
      <Head>
        <title>RPO Services | nstHr - Recruitment Process Outsourcing Experts</title>
        <meta name="description" content="Transform your hiring with our RPO solutions. 70% faster hiring, 40% cost reduction. End-to-end, project-based, and high-volume RPO services." />
        <meta name="keywords" content="RPO services, recruitment outsourcing, hiring solutions, talent acquisition, staffing solutions, HR outsourcing" />
        <meta property="og:title" content="RPO Services | nstHr" />
        <meta property="og:description" content="Transform your hiring with our Recruitment Process Outsourcing solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nsthr.com/rpo" />
      </Head>

      <div className="bg-gradient-to-b from-secondary/10 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Recruitment Process <span className="text-[#29A0D8]">Outsourcing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your hiring with flexible RPO solutions that scale with your business
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="">
              <Button><Mail className="w-5 h-5" /> Request RPO Demo</Button>
            </Link>
          </div>
        </section>

        {/* RPO Models */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our RPO Engagement Models</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Customized solutions for every stage of your talent acquisition journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rpoModels.map((model, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  {model.icon}
                  <h3 className="text-xl font-semibold text-gray-900">{model.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {model.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-secondary/20 text-[#29A0D8] rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{model.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {model.details.map((detail, i) => (
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

        {/* Why Choose Us */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Why nstHr for RPO?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kolkata-based RPO specialists with PAN-India hiring capabilities since 2018
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

        {/* Our Process */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our 5-Step RPO Methodology</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proven framework for recruitment transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#29A0D8]">
                <span className="font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600 text-sm">2-week deep dive into your hiring challenges and goals</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#29A0D8]">
                <span className="font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Design</h3>
              <p className="text-gray-600 text-sm">Custom RPO blueprint with SLAs and success metrics</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#29A0D8]">
                <span className="font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">Dedicated team onboarding and process integration</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#29A0D8]">
                <span className="font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Execution</h3>
              <p className="text-gray-600 text-sm">Active recruiting with weekly performance reporting</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#29A0D8]">
                <span className="font-bold">5</span>
              </div>
              <h3 className="font-semibold mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">Continuous improvement based on data insights</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="bg-gradient-to-r from-[#6DD3FF] to-secondary p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your Hiring?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Our RPO solutions deliver 70% faster hiring at 40% lower cost
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-white text-[#29A0D8] px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              <Mail className="w-5 h-5" /> Get RPO Proposal
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default RpoPage;