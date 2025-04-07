import { Code, Cloud, Shield, BrainCircuit, Laptop2,PencilRuler , Users, Globe, BadgeCheck, BarChart2, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
const ITStaffPage = () => {
  const itRoles = [
    {
      icon: <Code className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Software Developers',
      skills: ['Full Stack', 'Frontend', 'Backend'],
      description: 'Seasoned developers who build scalable, high-performance applications'
    },
    {
      icon: <Cloud className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'Kubernetes', 'Docker'],
      description: 'Experts in cloud infrastructure and CI/CD pipelines'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Cybersecurity',
      skills: ['Network Security', 'Ethical Hacking', 'Compliance'],
      description: 'Protect your digital assets with vetted security professionals'
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-[#29A0D8]" />,
      title: 'AI/ML Specialists',
      skills: ['Python', 'TensorFlow', 'LLMs', 'Data Analytics'],
      description: 'Transform data into business insights with AI/ML talent'
    },
    {
      icon: <PencilRuler className="w-8 h-8 text-[#29A0D8]" />,
      title: 'UI/UX Designer',
      skills: ['Product Management', 'UI/UX', ' Engineering'],
      description: 'Complete product teams from concept to market'
    }
    
,
    {
      icon: <Laptop2 className="w-8 h-8 text-[#29A0D8]" />,
      title: 'Product & Design',
      skills: ['Product Management', 'UI/UX', 'QA Engineering'],
      description: 'Complete product teams from concept to market'
    }
    
  ];

  const benefits = [
    { icon: <Globe className="w-6 h-6" />, text: 'PAN India Hiring Network' },
    { icon: <BarChart2 className="w-6 h-6" />, text: 'Future-Ready Skills Mapping' },
    { icon: <Users className="w-6 h-6" />, text: 'Cultural Fit Assessment' },
    { icon: <BadgeCheck className="w-6 h-6" />, text: 'Satisfaction Guarantee' }
  ];

  return (
    <div className="bg-gradient-to-b from-secondary/10 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          IT Recruitment That <span className="text-[#29A0D8]">Drives Growth</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Connecting Kolkata businesses with India's top tech talent for digital transformation
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/contact" 
            className=""
          >
          <Button>  <Mail className="w-5 h-5" /> Hire Talent</Button>
          </Link>
        </div>
      </section>

      {/* IT Specializations */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our IT Recruitment Focus</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We stay updated with top IT skills in demand for 2025 to deliver future-ready talent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itRoles.map((role, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                {role.icon}
                <h3 className="text-xl font-semibold text-gray-900">{role.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {role.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-secondary/20 text-[#29A0D8] rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-gray-600">{role.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Companies Trust nstHr</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kolkata-based recruitment partner with PAN India hiring capabilities
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

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-[#6DD3FF] to-secondary p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Build Your Tech Team?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need a single specialist or an entire development team, we'll find you talent that delivers.
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
  );
};

export default ITStaffPage;