import Image from "next/image"

export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#29A0D8] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">ABOUT US</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-base mb-6">
                nstHr is an ISO 9001:2015 certified Kolkata-based, young recruitment agency founded by Mr. Abhishek Raj
                in 2018. nstHr is not only a consultancy but also a HR firm based in Kolkata. We are one of most reputed
                recruitment agency in Kolkata, known for our timely and cost effective approach. We at nstHr team is
                nstHr will guide you in finding the right person for the suitable position at the shortest lead time
                through multiple channels.
              </p>
              <p className="text-base mb-6">
                It has been observed that a jobseeker due to lack of knowledge, often applies randomly for positions
                while job hunting which more works in his/her favor. To solve this problem, our experts at nstHr match
                the company's & candidate's requirements during the recruitment process so as to avoid any mismatch
                afterwards. Nowadays, automated softwares are used by most companies while shortlisting candidates'
                resumes. The accuracy of these softwares is dispenser and ambiguous, as they rely on keywords while
                scanning, hence, we at nstHr, search for talented, capable and productive candidates through hand
                hunting and talent search mechanisms.
              </p>
              <p className="text-base">
                Our firm always remains active in every social employment portal and applying candidates get instant
                replies from our side. Along with recruitment solutions, we also provide services like Background
                verification, IT staffing, Temporary staffing, executive search, Payroll processing, HR Outsourcing and
                other HR related solutions in all industries and sectors. Our motto is to provide service to our clients
                - On time, Every time.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="About Us"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Vision</h2>

          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-base mb-4">
              We aim at providing cost-effective, innovative and timely end to end recruitment and methods of sourcing
            </p>
            <p className="text-base mb-4">We strive to implement impeccable processes of hiring</p>
            <p className="text-base mb-4">
              We help in bridging the employer-employee gap and dispute relationship gaps
            </p>
            <p className="text-base mb-4">
              Our main aim is to recruit more and more candidates with every passing day. We will make sure to help our
              clients by providing them with the best services.
            </p>
            <p className="text-base mb-4">
              Offer innovative services to its clients. nstHr will work faster and more efficiently than its
              competitors.
            </p>
            <p className="text-base mb-4">The company's main objective is to increase its networks all over India.</p>
            <p className="text-base mb-4">
              We aim to provide world class experience for every resource in our network.
            </p>
            <p className="text-base mb-4">
              Many organizations haven't reached out to talent acquisition companies like nstHr yet. So in future nstHr
              will improve its exposure and will get in touch with more firms like IT departments, media, Health
              Organization etc. related industries.
            </p>
            <p className="text-base">
              Our company's objective is to reach millions of followers in nstHr's social employment portal and site as
              well as in other social sites. As far as, numbers are concerned, we have reached the thousand mark. We at
              nstHr target to reach every reputed organization and give our best service. We always try to launch
              innovative services for our clients and we aim to be the number 1 career counseling store.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Mission</h2>

          <div className="mt-12 max-w-3xl mx-auto">
            <p className="text-base mb-4">
              Our mission is to provide exceptional recruitment services that connect talented individuals with the
              right opportunities and help businesses find the perfect candidates to drive their success.
            </p>
            <p className="text-base mb-4">
              We are committed to understanding the unique needs of both job seekers and employers, ensuring a perfect
              match that benefits all parties involved.
            </p>
            <p className="text-base">
              Through innovative approaches, personalized service, and a deep understanding of various industries, we
              aim to be the leading recruitment agency that transforms careers and helps businesses thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">OUR MAIN TEAM</h2>

          <div className="mt-12 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Abhishek Raj"
                    width={200}
                    height={200}
                    className="rounded-lg w-full aspect-square object-cover"
                  />
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold">MR. Abhishek Raj - Founder of nstHr</h3>
                  <p className="mt-2 text-base">
                    He manages Technology along with Marketing Operations at nstHr. He has been functioning in HR
                    Services and marketing for the last three years as the head of nstHr. He has completed his BTech in
                    Electronics and Communications Engineering. He is born with an entrepreneurial instinct and a
                    curious mind and has a passion for learning new things everyday.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Neha Kesari"
                    width={200}
                    height={200}
                    className="rounded-lg w-full aspect-square object-cover"
                  />
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold">Neha Kesari - CEO And Business Head of nstHr</h3>
                  <p className="mt-2 text-base">
                    She handles and coordinates with clients and in turn ensure smooth functioning of nstHr. She has 6
                    years' experience in the HR domain.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Sonny"
                    width={200}
                    height={200}
                    className="rounded-lg w-full aspect-square object-cover"
                  />
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold">Sonny - IT Recruiter and Digital market head of nstHr</h3>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Parama Chowdhury"
                    width={200}
                    height={200}
                    className="rounded-lg w-full aspect-square object-cover"
                  />
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold">Parama Chowdhury - Medical Recruiter of nstHr</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">WHY nstHr?</h2>
              <p className="text-base mb-4">
                nstHr is a high end technology enabled service provider with a team of professional directors and
                managers. We cater to the needs of various industries and different types of clients. We help in hiring
                and training of jobseekers before referring them to our clients. Since, the times are hard and there are
                lots of job seekers in the market competing with each other for their dream jobs, you should take help
                of nstHr for correct guidance and training.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">HOW nstHr WORKS:</h2>
              <p className="text-base mb-4">
                We find out job vacancies in various companies and help in matching a candidate's profile with the
                requirements of our clients. We help in selecting the best candidates with excellent skills for our
                clients. For candidate recruitment, we have our own database. We have multiple databases from different
                job portals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

