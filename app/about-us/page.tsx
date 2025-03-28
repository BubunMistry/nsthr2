import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#29A0D8] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Connecting talent with opportunity through innovative recruitment solutions
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-600">
                nstHr is an ISO 9001:2015 certified Kolkata-based recruitment agency founded by Abhishek Raj in 2018. 
                We're not just a consultancy but a full-service HR firm recognized for our timely and cost-effective 
                approach to talent acquisition.
              </p>
              <p className="text-lg text-gray-600">
                We solve the common problem of mismatched applications by carefully aligning company requirements with 
                candidate profiles during our recruitment process. Unlike automated systems that rely on keywords, 
                we use hands-on talent search mechanisms to find capable and productive candidates.
              </p>
              <p className="text-lg text-gray-600">
                Beyond recruitment, we offer comprehensive HR solutions including background verification, staffing 
                services, payroll processing, and HR outsourcing across all industries. Our commitment: service that's 
                on time, every time.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/about-team.jpg"
                alt="Our team"
                width={600}
                height={450}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Vision</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#29A0D8] mr-3">•</span>
                  <span className="text-lg text-gray-600">
                    To provide cost-effective, innovative end-to-end recruitment solutions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#29A0D8] mr-3">•</span>
                  <span className="text-lg text-gray-600">
                    To implement impeccable hiring processes that bridge the employer-employee gap
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#29A0D8] mr-3">•</span>
                  <span className="text-lg text-gray-600">
                    To expand our network across India while maintaining world-class service standards
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#29A0D8] mr-3">•</span>
                  <span className="text-lg text-gray-600">
                    To become the leading career counseling resource in our industry
                  </span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We provide exceptional recruitment services that connect talented individuals with the right opportunities 
                while helping businesses find candidates who drive their success.
              </p>
              <p className="text-lg text-gray-600">
                Through personalized service and industry expertise, we transform careers and help organizations thrive 
                in an increasingly competitive landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Leadership Team</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <Image
                  src="/abhishek-raj.jpg"
                  alt="Abhishek Raj"
                  width={200}
                  height={200}
                  className="rounded-lg w-full aspect-square object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-gray-800">Abhishek Raj</h3>
                <p className="text-[#29A0D8] mb-4">Founder</p>
                <p className="text-gray-600">
                  Technology and marketing operations leader with a BTech in Electronics and Communications Engineering. 
                  Brings entrepreneurial vision and three years of HR service expertise to nstHr.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <Image
                  src="/neha-kesari.jpg"
                  alt="Neha Kesari"
                  width={200}
                  height={200}
                  className="rounded-lg w-full aspect-square object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-gray-800">Neha Kesari</h3>
                <p className="text-[#29A0D8] mb-4">CEO & Business Head</p>
                <p className="text-gray-600">
                  Coordinates client relationships and ensures operational excellence. Brings six years of HR domain 
                  experience to her leadership role.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <Image
                  src="/sonny.jpg"
                  alt="Sonny"
                  width={200}
                  height={200}
                  className="rounded-lg w-full aspect-square object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-gray-800">Sonny</h3>
                <p className="text-[#29A0D8] mb-4">IT Recruiter & Digital Marketing Head</p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <Image
                  src="/parama-chowdhury.jpg"
                  alt="Parama Chowdhury"
                  width={200}
                  height={200}
                  className="rounded-lg w-full aspect-square object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-gray-800">Parama Chowdhury</h3>
                <p className="text-[#29A0D8] mb-4">Medical Recruiter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose nstHr?</h2>
            <p className="text-xl text-gray-600 mb-12">
              We combine technology with human expertise to deliver exceptional recruitment results
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Approach</h3>
                <p className="text-gray-600">
                  As a technology-enabled service provider, we maintain extensive candidate databases and use 
                  sophisticated matching algorithms alongside personal interviews to ensure perfect placements.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Process</h3>
                <p className="text-gray-600">
                  We identify vacancies, match candidate profiles with client requirements, and provide pre-employment 
                  training to ensure seamless onboarding and long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}