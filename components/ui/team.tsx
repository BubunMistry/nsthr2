'use client';

import Image from "next/image";

const teamMembers = [
  {
    name: "Abhishek Raj",
    title: "Founder & Managing Director",
    image: "/images/team/abhishek.svg",
    description:
      "Technology and marketing operations leader with a BTech in Electronics and Communications. Brings entrepreneurial vision and five years of HR service expertise to nstHr.",
  },
  {
    name: "Neha Kesari",
    title: "CEO & Business Head",
    image: "/images/team/neha.svg",
    description:
      "Oversees client relationships and operational excellence with six years of HR domain experience. Specializes in strategic planning and business development.",
  },
  {
    name: "Rajesh Singh",
    title: "Branch Head & Business Coordinator",
    image: "/images/team/rajesh.svg",
    description:
      "Manages regional operations and client coordination with expertise in workforce solutions and talent acquisition strategies.",
  },
  {
    name: "Aprajit Marik",
    title: "Recruitment Manager",
    image: "/images/team/aprajit.svg",
    description:
      "Leads talent acquisition with a focus on matching top candidates to organizational needs. Specializes in IT and healthcare recruitment.",
  },
];

export default function Team() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced team drives nstHr&apos;s success with industry expertise and innovative HR solutions.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-left transform transition-all duration-300 shadow-[0_4px_30px_rgba(41,160,216,0.2)] hover:shadow-[0_8px_50px_rgba(41,160,216,0.4)] hover:scale-[1.05]"
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 mb-4 relative rounded-full overflow-hidden mx-auto shadow-[0_0_25px_rgba(41,160,216,0.5)] hover:shadow-[0_0_40px_rgba(41,160,216,0.7)] transition-shadow duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-[#29A0D8] font-medium text-sm mb-3">{member.title}</p>
              <p className="text-sm text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
