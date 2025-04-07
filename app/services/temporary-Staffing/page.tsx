import { Clock, UserCheck, Calendar, Zap, Layers, Shield, Globe, BarChart2, Award, Mail, Briefcase, Users } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Head from 'next/head';

const TemporaryStaffingPage = () => {
  const staffingTypes = [
    {
      icon: <Clock className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Short-Term Placements',
      skills: ['Seasonal', 'Event Staffing', 'Peak Periods'],
      description: 'Immediate temporary staff for urgent business needs',
      details: [
        '24-72 hour placement for most roles',
        'Perfect for unexpected staff shortages',
        'No long-term contracts',
        'Daily or weekly billing options'
      ]
    },
    {
      icon: <Calendar className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Long-Term Temporaries',
      skills: ['3-12 Months', 'Project-Based', 'Interim Roles'],
      description: 'Extended staffing solutions for ongoing needs',
      details: [
        'Ideal for maternity leaves or long-term projects',
        'Monthly performance reviews',
        'Option to convert to permanent',
        'Cost-effective alternative to direct hires'
      ]
    },
    {
      icon: <UserCheck className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Specialized Temporaries',
      skills: ['IT Professionals', 'Healthcare Staff', 'Skilled Labor'],
      description: 'Vetted professionals with niche skill sets',
      details: [
        'Pre-screened technical candidates',
        'Industry-specific onboarding',
        'Immediate productivity',
        'Ongoing skills verification'
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Temp-to-Hire',
      skills: ['Evaluation Period', 'Reduced Risk', 'Trial Employment'],
      description: 'Test candidates before permanent commitment',
      details: [
        'Typically 3-6 month trial periods',
        'Seamless transition to permanent',
        'No additional fees for conversion',
        'Performance metrics provided'
      ]
    },
    {
      icon: <Layers className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Bulk Temporary Hiring',
      skills: ['50+ Staff', 'Mass Recruitment', 'Location-Based'],
      description: 'Large-scale staffing for expansions or events',
      details: [
        'Managed recruitment campaigns',
        'On-site coordination available',
        'Uniform screening standards',
        'Dedicated account manager'
      ]
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Executive Temporaries',
      skills: ['Interim Management', 'C-Level', 'Consultants'],
      description: 'High-level temporary professionals',
      details: [
        '10+ years experience minimum',
        'Strategic leadership capacity',
        'Confidentiality agreements',
        'Immediate impact focus'
      ]
    }
  ];

  const benefits = [
    { icon: <Globe className="w-6 h-6" />, text: 'PAN India Coverage' },
    { icon: <BarChart2 className="w-6 h-6" />, text: '48-Hour Placements' },
    { icon: <Award className="w-6 h-6" />, text: '95% Fill Rate' },
    { icon: <Shield className="w-6 h-6" />, text: 'Full Compliance' }
  ];

  return (
    <>
      <Head>
        <title>Temporary Staffing Solutions | nstHr - Flexible Workforce Partners</title>
        <meta name="description" content="Scalable temporary staffing solutions with 48-hour placements. Seasonal, project-based, and specialized temporary employees across all industries." />
        <meta name="keywords" content="temporary staffing, temp agency, flexible workforce, contract staffing, Kolkata temp agency, seasonal hiring" />
        <meta property="og:title" content="Temporary Staffing Solutions | nstHr" />
        <meta property="og:description" content="Flexible workforce solutions with rapid 48-hour placements" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nsthr.com/temporary-staffing" />
      </Head>

      <div className="bg-gradient-to-b from-secondary/10 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Flexible <span className="text-[#29A0D8]">Temporary Staffing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Scalable workforce solutions with 48-hour placements for your changing business needs
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="">
              <Button><Mail className="w-5 h-5" /> Request Staff</Button>
            </Link>
          </div>
        </section>

        {/* Staffing Types */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">6 Temporary Staffing Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Right-fit temporary professionals for every business scenario
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffingTypes.map((type, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  {type.icon}
                  <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {type.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-secondary/20 text-[#29A0D8] rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {type.details.map((detail, i) => (
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Why nstHr for Temporary Staffing?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kolkata's most responsive temporary staffing partner since 2018
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our 4-Step Staffing Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Rapid yet thorough approach to temporary placements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#29A0D8]">
                <span className="font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Need Assessment</h3>
              <p className="text-gray-600 text-sm">Same-day analysis of your staffing requirements</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#29A0D8]">
                <span className="font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Candidate Matching</h3>
              <p className="text-gray-600 text-sm">Selection from our 10,000+ active temporary professionals</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#29A0D8]">
                <span className="font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Verification</h3>
              <p className="text-gray-600 text-sm">Background checks, skills testing, and reference validation</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#29A0D8]">
                <span className="font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Deployment</h3>
              <p className="text-gray-600 text-sm">On-site or remote onboarding within 48 hours</p>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Industries We Serve</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Temporary staffing solutions tailored to your sector
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {['IT & Tech', 'Healthcare', 'Manufacturing', 'Retail', 'Hospitality', 'Logistics', 'Banking', 'Education'].map((industry, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                  <p className="font-medium text-gray-800">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="bg-gradient-to-r from-[#6DD3FF] to-secondary p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Temporary Staff Quickly?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              We can provide qualified temporary professionals in as little as 24 hours
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-white text-[#29A0D8] px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              <Mail className="w-5 h-5" /> Request Staff Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default TemporaryStaffingPage;