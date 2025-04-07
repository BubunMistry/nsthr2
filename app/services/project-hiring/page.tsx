import { Briefcase, Clock, Layers, ShieldCheck, Users, Cpu, Globe, BarChart2, Award, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Head from 'next/head';

const ProjectHiringPage = () => {
  const projectTypes = [
    {
      icon: <Briefcase className="w-8 h-8 text-[#29A0D8]" />,
      title: 'End-to-End Project Teams',
      skills: ['Project Managers', 'Developers', 'QA Engineers', 'UI/UX Designers'],
      description: 'Complete cross-functional teams assembled for your entire project lifecycle with dedicated account management',
      details: [
        'Ideal for new product development or large-scale implementations',
        'Teams typically include 5-15 members across all required disciplines',
        'Average deployment time: 2-3 weeks for complete team assembly',
        'Includes weekly progress reporting and risk management'
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Time-Bound Staffing',
      skills: ['3 Months', '6 Months', '1 Year+', 'Flexible Extensions'],
      description: 'Flexible staffing solutions for projects with defined timelines and deliverables',
      details: [
        'Perfect for seasonal workloads or specific project phases',
        'Contract terms can be adjusted as project needs evolve',
        '30-day notice period for any contract adjustments',
        'Option to convert to permanent hires after contract completion'
      ]
    },
    {
      icon: <Layers className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Specialized Skill Teams',
      skills: ['ERP Implementation', 'Cloud Migration', 'Digital Transformation', 'Legacy Modernization'],
      description: 'Pre-vetted experts for complex technical implementations and transformations',
      details: [
        'Teams with 3+ years average experience in specific technologies',
        'Includes solution architects for technical guidance',
        'Specialized onboarding for your tech stack',
        'Post-implementation support available'
      ]
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Managed Project Services',
      skills: ['Dedicated PMO', 'Agile Coaches', 'Scrum Masters', 'Delivery Managers'],
      description: 'Complete project governance with our experienced leadership team',
      details: [
        'End-to-end project management and delivery accountability',
        'Weekly stakeholder reporting and risk mitigation',
        'Quality assurance and compliance oversight',
        'Budget and timeline management included'
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Staff Augmentation',
      skills: ['Individual Contributors', 'Team Extensions', 'Skill Gap Fillers'],
      description: 'Scale your existing team quickly with vetted professionals',
      details: [
        '48-hour turnaround for most standard roles',
        'Seamless integration with your existing workflows',
        'Daily or weekly time tracking available',
        'No long-term commitment required'
      ]
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Technical Center of Excellence',
      skills: ['AI/ML Teams', 'Data Science', 'Blockchain', 'IoT Specialists'],
      description: 'Cutting-edge technology teams for innovation projects',
      details: [
        'PhD and research-level talent available',
        'Proof-of-concept development support',
        'Technology consulting and roadmap planning',
        'IP protection and confidentiality agreements'
      ]
    }
  ];

  const benefits = [
    { icon: <Globe className="w-6 h-6" />, text: 'PAN India Talent Pool' },
    { icon: <BarChart2 className="w-6 h-6" />, text: 'Project-Specific Skills Matching' },
    { icon: <Award className="w-6 h-6" />, text: 'Proven Delivery Track Record' },
    { icon: <Clock className="w-6 h-6" />, text: 'Rapid Team Deployment' }
  ];

  return (
    <>
      <Head>
        <title>Project Hiring Solutions | nstHr - Assemble Teams in Days</title>
        <meta name="description" content="Complete project teams assembled in days, not months. Kolkata-based staffing with PAN India capabilities for IT projects, implementations, and digital transformations." />
        <meta name="keywords" content="project hiring, team staffing, IT project teams, Kolkata recruiters, tech staffing solutions" />
        <meta property="og:title" content="Project Hiring Solutions | nstHr" />
        <meta property="og:description" content="Complete teams for your projects - assembled in days, not months" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nsthr.com/project-hiring" />
      </Head>

      <div className="bg-gradient-to-b from-secondary/10 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Project Hiring <span className="text-[#29A0D8]">Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Complete teams for your projects - assembled in days, not months
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="">
              <Button><Mail className="w-5 h-5" /> Request Team</Button>
            </Link>
          </div>
        </section>

        {/* Project Types */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Project Hiring Models</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible engagement options tailored to your project needs across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  {project.icon}
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-secondary/20 text-[#29A0D8] rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {project.details.map((detail, i) => (
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
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Projects Succeed with nstHr</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kolkata-based project staffing experts with nationwide execution capabilities since 2018
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our 4-Step Project Team Assembly</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Streamlined approach to deliver your perfect project team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#29A0D8]">
                <span className="font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Requirement Analysis</h3>
              <p className="text-gray-600 text-sm">2-3 day deep dive into your project scope, tech stack, and success metrics</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#29A0D8]">
                <span className="font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Team Assembly</h3>
              <p className="text-gray-600 text-sm">Matching from our 15,000+ pre-vetted professionals database</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#29A0D8]">
                <span className="font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Client Interviews</h3>
              <p className="text-gray-600 text-sm">3-stage screening including technical assessments</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#29A0D8]">
                <span className="font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Onboarding</h3>
              <p className="text-gray-600 text-sm">Seamless integration with your tools and workflows in 5-7 days</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="bg-gradient-to-r from-[#6DD3FF] to-secondary p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need a Project Team Quickly?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              We can assemble specialized teams in as little as 72 hours for your critical projects
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-white text-[#29A0D8] px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              <Mail className="w-5 h-5" /> Discuss Your Project
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectHiringPage;