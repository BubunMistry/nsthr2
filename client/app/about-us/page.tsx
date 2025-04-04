import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#29A0D8] text-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">About Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Connecting talent with opportunity through innovative recruitment solutions
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Our Story</h2>
              <p className="text-base md:text-lg text-gray-600">
                nstHr is an ISO 9001:2015 certified Kolkata-based recruitment agency founded by Abhishek Raj in 2018. 
                We're not just a consultancy but a full-service HR firm recognized for our timely and cost-effective 
                approach to talent acquisition.
              </p>
              <p className="text-base md:text-lg text-gray-600">
                We solve the common problem of mismatched applications by carefully aligning company requirements with 
                candidate profiles during our recruitment process. Unlike automated systems that rely on keywords, 
                we use hands-on talent search mechanisms to find capable and productive candidates.
              </p>
              <p className="text-base md:text-lg text-gray-600">
                Beyond recruitment, we offer comprehensive HR solutions including background verification, staffing 
                services, payroll processing, and HR outsourcing across all industries. Our commitment: service that's 
                on time, every time.
              </p>
            </div>
            <div className="flex justify-center order-first md:order-last">
              <div className="relative w-full max-w-md aspect-video md:aspect-square">
                <Image
                  src="/about-team.jpg"
                  alt="Our team"
                  fill
                  className="rounded-lg shadow-xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start">
                  <span className="text-[#29A0D8] mr-3">•</span>
                  <span className="text-base md:text-lg text-gray-600">
                    To provide cost-effective, innovative end-to-end recruitment solutions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#29A0D8] mr-3">•</span>
                  <span className="text-base md:text-lg text-gray-600">
                    To implement impeccable hiring processes that bridge the employer-employee gap
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#29A0D8] mr-3">•</span>
                  <span className="text-base md:text-lg text-gray-600">
                    To expand our network across India while maintaining world-class service standards
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#29A0D8] mr-3">•</span>
                  <span className="text-base md:text-lg text-gray-600">
                    To become the leading career counseling resource in our industry
                  </span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                We provide exceptional recruitment services that connect talented individuals with the right opportunities 
                while helping businesses find candidates who drive their success.
              </p>
              <p className="text-base md:text-lg text-gray-600">
                Through personalized service and industry expertise, we transform careers and help organizations thrive 
                in an increasingly competitive landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col sm:flex-row gap-4 md:gap-6 transition-all hover:shadow-lg">
              <div className="sm:w-1/3 flex justify-center sm:justify-start">
                <div className="relative w-40 h-40 sm:w-full sm:h-auto aspect-square">
                  <Image
                    src="/images/team/abhishek.svg"
                    alt="Abhishek Raj"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
              <div className="sm:w-2/3">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">Abhishek Raj</h3>
                <p className="text-[#29A0D8] mb-2 md:mb-4">Founder & Managing Director</p>
                <p className="text-sm md:text-base text-gray-600">
                  Technology and marketing operations leader with a BTech in Electronics and Communications. 
                  Brings entrepreneurial vision and five years of HR service expertise to nstHr.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col sm:flex-row gap-4 md:gap-6 transition-all hover:shadow-lg">
              <div className="sm:w-1/3 flex justify-center sm:justify-start">
                <div className="relative w-40 h-40 sm:w-full sm:h-auto aspect-square">
                  <Image
                    src="/images/team/neha.svg"
                    alt="Neha Kesari"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
              <div className="sm:w-2/3">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">Neha Kesari</h3>
                <p className="text-[#29A0D8] mb-2 md:mb-4">CEO & Business Head</p>
                <p className="text-sm md:text-base text-gray-600">
                  Oversees client relationships and operational excellence with six years of HR domain experience. 
                  Specializes in strategic planning and business development.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col sm:flex-row gap-4 md:gap-6 transition-all hover:shadow-lg">
              <div className="sm:w-1/3 flex justify-center sm:justify-start">
                <div className="relative w-40 h-40 sm:w-full sm:h-auto aspect-square">
                  <Image
                    src="/images/team/rajesh.svg"
                    alt="Rajesh Singh"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
              <div className="sm:w-2/3">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">Rajesh Singh</h3>
                <p className="text-[#29A0D8] mb-2 md:mb-4">Branch Head & Business Coordinator</p>
                <p className="text-sm md:text-base text-gray-600">
                  Manages regional operations and client coordination with expertise in workforce solutions 
                  and talent acquisition strategies.
                </p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col sm:flex-row gap-4 md:gap-6 transition-all hover:shadow-lg">
              <div className="sm:w-1/3 flex justify-center sm:justify-start">
                <div className="relative w-40 h-40 sm:w-full sm:h-auto aspect-square">
                  <Image
                    src="/images/team/aprajit.svg"
                    alt="Aprajit Marik"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
              <div className="sm:w-2/3">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">Aprajit Marik</h3>
                <p className="text-[#29A0D8] mb-2 md:mb-4">Recruitment Manager</p>
                <p className="text-sm md:text-base text-gray-600">
                  Leads talent acquisition with a focus on matching top candidates to organizational needs. 
                  Specializes in IT and healthcare recruitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Why Choose nstHr?</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12">
              We combine technology with human expertise to deliver exceptional recruitment results
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
              <div className="bg-white p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">Our Approach</h3>
                <p className="text-sm md:text-base text-gray-600">
                  As a technology-enabled service provider, we maintain extensive candidate databases and use 
                  sophisticated matching algorithms alongside personal interviews to ensure perfect placements.
                </p>
              </div>
              
              <div className="bg-white p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">Our Process</h3>
                <p className="text-sm md:text-base text-gray-600">
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