import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Define your blog data (could also be imported from another file)
const blogs = {
  "Staffing-Services-Kolkata": {
    title: "Top Staffing Services in Kolkata: What Makes NSTHR Stand Out",
    date: "April 05, 2025",
    author: "Abhishek Raj",
    image: "/blog.png",
    excerpt: "Discover how NSTHR is revolutionizing staffing solutions in Kolkata with customized hiring approaches and industry expertise.",
    content: `
    
    <section id="what-makes-nsthr-stand-out" class="mb-10">
  <h2 class="text-2xl font-bold text-[#29A0D8] mb-6 border-b border-[#6DD3FF] pb-2 flex items-center gap-2">
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#29A0D8" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
  >
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="4"/>
    <line x1="4.93" x2="7.76" y1="4.93" y2="7.76"/>
    <line x1="16.24" x2="19.07" y1="7.76" y2="4.93"/>
    <line x1="19.07" x2="16.24" y1="19.07" y2="16.24"/>
    <line x1="7.76" x2="4.93" y1="16.24" y2="19.07"/>
  </svg>
  What Makes nstHr Stand Out?
</h2>


  <div class="mb-8">
    <h3 class="text-xl font-semibold text-[#29A0D8] mb-3">1. Customized Hiring Solutions for Companies</h3>
    <p class="text-gray-700 mb-4">Every company has unique needs — whether it's hiring for a startup team or scaling a large workforce. nstHr offers <a href="/custom-hiring-solutions" class="text-[#29A0D8] hover:underline">custom hiring solutions in Kolkata</a> tailored to each client. From temporary and permanent staffing to HR outsourcing services, their team is equipped to manage all your recruitment challenges.</p>
   <div class="bg-[#6DD3FF] bg-opacity-20 p-4 rounded-lg border border-[#29A0D8] border-opacity-30 mb-4 flex items-start gap-3">
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#29A0D8" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
    class="flex-shrink-0 mt-0.5"
  >
    <path d="M12 20h9"/>
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
  </svg>
  <p class="text-gray-700">
    <strong class="text-[#29A0D8]">Looking to hire skilled professionals?</strong> 
    <a href="/contact" class="text-[#29A0D8] underline font-medium">Contact nstHr today</a>.
  </p>
</div>
  </div>


  <div class="border-t border-[#6DD3FF] border-opacity-30 my-6"></div>


  <div class="mb-8">
    <h3 class="text-xl font-semibold text-[#29A0D8] mb-3">2. Trusted Recruitment Agency in Kolkata</h3>
    <p class="text-gray-700 mb-4">nstHr is known for providing <a href="/recruitment-services-kolkata" class="text-[#29A0D8] hover:underline">recruitment services in Kolkata</a> that deliver results. They focus on long-term placements by ensuring the right match between candidate and company. This trust and consistency have made them a go-to recruitment agency for many businesses in Kolkata.</p>
    
    <div class="bg-[#6DD3FF] bg-opacity-10 p-4 rounded-lg border-l-4 border-[#29A0D8]">
      <p class="text-gray-700"><span class="text-[#29A0D8] font-medium">Client Testimonial:</span></p>
      <blockquote class="text-gray-700 italic pl-4 border-l-2 border-[#29A0D8] mt-2">
        "nstHr helped us build a complete operations team within 3 weeks. Their understanding of our business needs was exceptional."
        <footer class="not-italic text-sm mt-2 text-gray-600">— Operations Manager, Manufacturing Company</footer>
      </blockquote>
    </div>
  </div>


  <div class="border-t border-[#6DD3FF] border-opacity-30 my-6"></div>


  <div class="mb-8">
    <h3 class="text-xl font-semibold text-[#29A0D8] mb-3">3. Comprehensive Job Placement Services</h3>
    <p class="text-gray-700 mb-4">For job seekers, nstHr is not just a <a href="/job-consultancy-kolkata" class="text-[#29A0D8] hover:underline">job consultancy in Kolkata</a> – it's a career partner. They guide freshers and experienced professionals alike through job searches, resume building, and interview preparation. Their goal? To help you land a role where you can grow and thrive.</p>
    
    <div class="bg-[#6DD3FF] bg-opacity-10 p-4 rounded-lg mb-4">
      <h4 class="text-lg font-medium text-[#29A0D8] mb-2">Services for Job Seekers:</h4>
      <ul class="list-disc pl-5 text-gray-700 space-y-2">
        <li>Resume review & improvement</li>
        <li>Career counseling</li>
        <li>Interview preparation</li>
        <li>Industry-specific job recommendations</li>
      </ul>
    </div>
    
    <p class="text-gray-700">🔎 <a href="/jobs-portal" class="text-[#29A0D8] hover:underline font-medium">Explore current job openings at nstHr's Jobs Portal</a></p>
  </div>


  <div class="border-t border-[#6DD3FF] border-opacity-30 my-6"></div>


  <div class="mb-8">
    <h3 class="text-xl font-semibold text-[#29A0D8] mb-3">4. Executive Search Firms in Kolkata – Done Right</h3>
    <p class="text-gray-700 mb-4">Finding leadership talent is no easy task. As one of the few <a href="/executive-search-kolkata" class="text-[#29A0D8] hover:underline">executive search firms in Kolkata</a>, nstHr has a specialized team that focuses on senior and C-level placements. They use a discreet and structured process to identify, approach, and place top-tier professionals.</p>
    
    <div class="bg-[#6DD3FF] bg-opacity-10 p-4 rounded-lg">
      <p class="text-gray-700"><span class="text-[#29A0D8] font-medium">Success Story:</span> Placed a CFO for a growing tech startup within 45 days, reducing their search time by 60% compared to industry average.</p>
    </div>
  </div>


  <div class="border-t border-[#6DD3FF] border-opacity-30 my-6"></div>


  <div class="mb-8">
    <h3 class="text-xl font-semibold text-[#29A0D8] mb-3">5. Industry-Specific Staffing Solutions</h3>
    <p class="text-gray-700 mb-4">nstHr works across multiple industries, offering IT and non-IT recruitment in Kolkata. Whether you need software developers, finance experts, HR managers, or field sales teams, nstHr delivers candidates who are pre-screened and ready to contribute.</p>
    
    <div class="bg-[#6DD3FF] bg-opacity-10 p-4 rounded-lg">
      <h4 class="text-lg font-medium text-[#29A0D8] mb-2">Industries Served:</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
        <div class="flex items-center">
          <span class="w-2 h-2 bg-[#29A0D8] rounded-full mr-2"></span>
          IT & Software
        </div>
        <div class="flex items-center">
          <span class="w-2 h-2 bg-[#29A0D8] rounded-full mr-2"></span>
          Healthcare
        </div>
        <div class="flex items-center">
          <span class="w-2 h-2 bg-[#29A0D8] rounded-full mr-2"></span>
          Retail & FMCG
        </div>
        <div class="flex items-center">
          <span class="w-2 h-2 bg-[#29A0D8] rounded-full mr-2"></span>
          Manufacturing
        </div>
        <div class="flex items-center">
          <span class="w-2 h-2 bg-[#29A0D8] rounded-full mr-2"></span>
          Education
        </div>
        <div class="flex items-center">
          <span class="w-2 h-2 bg-[#29A0D8] rounded-full mr-2"></span>
          Logistics & Warehousing
        </div>
        <div class="flex items-center">
          <span class="w-2 h-2 bg-[#29A0D8] rounded-full mr-2"></span>
          Real Estate
        </div>
      </div>
    </div>
  </div>
</section>
<section id="hr-outsourcing" class="mb-10">
  <div class="flex items-center mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-ccw mr-2">
      <path d="M3 2v6h6"/>
      <path d="M21 12A9 9 0 0 0 6 5.3L3 8"/>
      <path d="M21 22v-6h-6"/>
      <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"/>
    </svg>
    <h2 class="text-2xl font-bold text-[#29A0D8]">HR Outsourcing & Staffing Services for Growing Businesses</h2>
  </div>

  <p class="text-gray-700 mb-4">Managing in-house HR for recruitment can be time-consuming and costly. That's why many SMEs and startups rely on nstHr's <a href="/hr-outsourcing-services" class="text-[#29A0D8] hover:underline">HR outsourcing services</a>. Their expert team takes care of hiring, onboarding, payroll support, and compliance—freeing up your time to focus on core operations.</p>
  
  <div class="bg-[#6DD3FF] bg-opacity-10 p-4 rounded-lg border-l-4 border-[#29A0D8] mb-6">
    <div class="flex items-start">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-2 mt-1 mr-2">
        <line x1="18" x2="18" y1="20" y2="10"/>
        <line x1="12" x2="12" y1="20" y2="4"/>
        <line x1="6" x2="6" y1="20" y2="14"/>
      </svg>
      <p class="text-gray-700">According to a report by Naukri Hiring Insights, companies that outsource HR processes reduce hiring costs by up to 30%.</p>
    </div>
  </div>

  <div class="border-t border-[#6DD3FF] border-opacity-30 my-6"></div>

  <div class="flex items-center mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass mr-2">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>
    <h2 class="text-2xl font-bold text-[#29A0D8]">Why Businesses in Kolkata Prefer nstHr</h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="flex items-start">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle mr-2 mt-1">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <div>
        <h4 class="font-medium text-[#29A0D8]">Local Expertise</h4>
        <p class="text-gray-700 text-sm">Deep understanding of the Kolkata job market</p>
      </div>
    </div>
    
    <div class="flex items-start">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle mr-2 mt-1">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <div>
        <h4 class="font-medium text-[#29A0D8]">Wide Talent Pool</h4>
        <p class="text-gray-700 text-sm">From freshers to senior-level professionals</p>
      </div>
    </div>
    
    <div class="flex items-start">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle mr-2 mt-1">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <div>
        <h4 class="font-medium text-[#29A0D8]">Quick Turnaround Time</h4>
        <p class="text-gray-700 text-sm">Fast hiring process to keep your projects on track</p>
      </div>
    </div>
    
    <div class="flex items-start">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle mr-2 mt-1">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <div>
        <h4 class="font-medium text-[#29A0D8]">Transparent Process</h4>
        <p class="text-gray-700 text-sm">Clear communication and honest timelines</p>
      </div>
    </div>
    
    <div class="flex items-start">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle mr-2 mt-1">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <div>
        <h4 class="font-medium text-[#29A0D8]">Post-placement Support</h4>
        <p class="text-gray-700 text-sm">Regular follow-ups after hiring</p>
      </div>
    </div>
  </div>
</section>
<section id="freshers-support" class="mb-10">
  <div class="flex items-center mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sprout mr-2">
      <path d="M7 20h10"/>
      <path d="M10 20c5.5-2.5.8-6.4 3-10"/>
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/>
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>
    </svg>
    <h2 class="text-2xl font-bold text-[#29A0D8]">Support for Freshers and Entry-Level Job Seekers</h2>
  </div>

  <p class="text-gray-700 mb-6">nstHr is also known as a <a href="/freshers-jobs-kolkata" class="text-[#29A0D8] hover:underline">freshers job consultancy in Kolkata</a>. They help graduates and newcomers get placed in their first job through training support, resume advice, and direct access to hiring companies. In a city where competition is tough, nstHr provides a much-needed stepping stone for fresh talent.</p>

  <div class="border-t border-[#6DD3FF] border-opacity-30 my-6"></div>

  <div class="flex items-center mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone mr-2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
    <h2 class="text-2xl font-bold text-[#29A0D8]">Ready to Hire or Get Hired?</h2>
  </div>

  <p class="text-gray-700 mb-6">nstHr makes it simple for both companies and job seekers to get started.</p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <div class="bg-[#6DD3FF] bg-opacity-10 p-4 rounded-lg">
      <h3 class="text-lg font-semibold text-[#29A0D8] mb-3 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase mr-2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
        For Employers:
      </h3>
      <ul class="list-disc pl-5 text-gray-700 space-y-2">
        <li>Post a job</li>
        <li>Get a dedicated hiring consultant</li>
        <li>Shortlist from a pool of verified candidates</li>
      </ul>
    </div>

    <div class="bg-[#6DD3FF] bg-opacity-10 p-4 rounded-lg">
      <h3 class="text-lg font-semibold text-[#29A0D8] mb-3 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user mr-2">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        For Job Seekers:
      </h3>
      <ul class="list-disc pl-5 text-gray-700 space-y-2">
        <li>Register your profile</li>
        <li>Get personalized job alerts</li>
        <li>Receive career guidance and updates</li>
      </ul>
    </div>
  </div>

  <div class="border-t border-[#6DD3FF] border-opacity-30 my-6"></div>

  <div class="flex items-center mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-puzzle mr-2">
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.23-.23.556-.338.877-.29.493.074.84.504 1.02.968a2.5 2.5 0 1 0 3.237-3.237c-.464-.18-.894-.527-.967-1.02a1.026 1.026 0 0 0 .289-.877l1.568-1.568A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"/>
    </svg>
    <h2 class="text-2xl font-bold text-[#29A0D8]">How nstHr Stays Ahead of Other Placement Agencies</h2>
  </div>

<div class="overflow-x-auto mb-6">
  <table class="min-w-full bg-white rounded-lg overflow-hidden">
    <thead class="bg-[#29A0D8] text-white">
      <tr>
        <th class="py-3 px-4 text-left">Features</th>
        <th class="py-3 px-4 text-left">NSTHR</th>
        <th class="py-3 px-4 text-left">Other Agencies</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr class="hover:bg-[#6DD3FF] hover:bg-opacity-10">
        <td class="py-3 px-4">Customized hiring plans</td>
        <td class="py-3 px-4 text-[#29A0D8] font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
            <path d="M20 6 9 17l-5-5"/>
          </svg>
        </td>
        <td class="py-3 px-4 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        </td>
      </tr>
      
      <tr class="hover:bg-[#6DD3FF] hover:bg-opacity-10">
        <td class="py-3 px-4">Industry-specific recruiters</td>
        <td class="py-3 px-4 text-[#29A0D8] font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
            <path d="M20 6 9 17l-5-5"/>
          </svg>
        </td>
        <td class="py-3 px-4 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        </td>
      </tr>
      
      <tr class="hover:bg-[#6DD3FF] hover:bg-opacity-10">
        <td class="py-3 px-4">Executive-level recruitment</td>
        <td class="py-3 px-4 text-[#29A0D8] font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
            <path d="M20 6 9 17l-5-5"/>
          </svg>
        </td>
        <td class="py-3 px-4 text-gray-500">
          <span class="text-sm">Limited</span>
        </td>
      </tr>
      
      <tr class="hover:bg-[#6DD3FF] hover:bg-opacity-10">
        <td class="py-3 px-4">Freshers support</td>
        <td class="py-3 px-4 text-[#29A0D8] font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
            <path d="M20 6 9 17l-5-5"/>
          </svg>
        </td>
        <td class="py-3 px-4 text-gray-500">
          <span class="text-sm">Rare</span>
        </td>
      </tr>
      
      <tr class="hover:bg-[#6DD3FF] hover:bg-opacity-10">
        <td class="py-3 px-4">HR outsourcing</td>
        <td class="py-3 px-4 text-[#29A0D8] font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
            <path d="M20 6 9 17l-5-5"/>
          </svg>
        </td>
        <td class="py-3 px-4 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        </td>
      </tr>
      
      <tr class="hover:bg-[#6DD3FF] hover:bg-opacity-10">
        <td class="py-3 px-4">Transparent pricing</td>
        <td class="py-3 px-4 text-[#29A0D8] font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
            <path d="M20 6 9 17l-5-5"/>
          </svg>
        </td>
        <td class="py-3 px-4 text-gray-500">
          <span class="text-sm">Often hidden</span>
        </td>
      </tr>
      
      <tr class="hover:bg-[#6DD3FF] hover:bg-opacity-10">
        <td class="py-3 px-4">Kolkata-based expertise</td>
        <td class="py-3 px-4 text-[#29A0D8] font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
            <path d="M20 6 9 17l-5-5"/>
          </svg>
        </td>
        <td class="py-3 px-4 text-gray-500">
          <span class="text-sm">Generic focus</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

  <div class="border-t border-[#6DD3FF] border-opacity-30 my-6"></div>

  <div class="flex items-center mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square mr-2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
    <h2 class="text-2xl font-bold text-[#29A0D8]">Client Experiences</h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <div class="bg-[#6DD3FF] bg-opacity-10 p-4 rounded-lg border-l-4 border-[#29A0D8]">
      <blockquote class="text-gray-700 italic">
        "NSTHR helped us find a qualified finance analyst within days. We've worked with many agencies before, but NSTHR's team is responsive and understands our needs deeply."
      </blockquote>
      <footer class="not-italic text-sm mt-2 text-gray-600">— Rohit Sen, HR Manager at a Finance Firm</footer>
    </div>
    <div class="bg-[#6DD3FF] bg-opacity-10 p-4 rounded-lg border-l-4 border-[#29A0D8]">
      <blockquote class="text-gray-700 italic">
        "As a fresher, I was struggling to get interview calls. NSTHR guided me and helped me land a great role in a reputed company. Highly recommended!"
      </blockquote>
      <footer class="not-italic text-sm mt-2 text-gray-600">— Priya Malhotra, Job Seeker</footer>
    </div>
  </div>

  <div class="border-t border-[#6DD3FF] border-opacity-30 my-6"></div>

  <div class="flex items-center mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket mr-2">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
    <h2 class="text-2xl font-bold text-[#29A0D8]">Looking to grow your team or find the perfect job in Kolkata?</h2>
  </div>

  <p class="text-gray-700 mb-6">nstHr is here to help.</p>

  <div class="text-center mb-10">
    <a href="/contact" class="inline-flex items-center px-6 py-3 bg-[#29A0D8] text-white font-medium rounded-lg hover:bg-[#1a7ca7] transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail mr-2">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
      Contact Us Today
    </a>
  </div>

  <div class="border-t border-[#6DD3FF] border-opacity-30 my-6"></div>

  <div class="flex items-center mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#29A0D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line mr-2">
      <path d="M12 20h9"/>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
    </svg>
    <h2 class="text-2xl font-bold text-[#29A0D8]">Final Thoughts</h2>
  </div>

  <p class="text-gray-700 mb-4">nstHr isn't just another <a href="/hr-consultancy-kolkata" class="text-[#29A0D8] hover:underline">HR consultancy in Kolkata</a> – it's a partner that works closely with both employers and job seekers. Their transparent process, dedicated support, and industry-focused solutions make them a standout choice in the city's crowded recruitment landscape.</p>
  <p class="text-gray-700">If you're a business looking for <a href="/corporate-hiring-kolkata" class="text-[#29A0D8] hover:underline">corporate hiring services in Kolkata</a>, or a job seeker ready to take the next step in your career, NSTHR is your go-to staffing partner.</p>
</section>


    `,
  },









  
  "future-of-hr-technology": {
    title: "The Future of HR Technology: Trends to Watch in 2025",
    date: "March 15, 2025",
    author: "Neha Sharma",
    image: "/images/hr-tech-future.jpg",
    excerpt: "Explore the emerging HR technologies that are transforming recruitment and employee management.",
    content: `
      <section class="mb-10">
        <h2 class="text-2xl font-bold text-[#29A0D8] mb-4 border-b border-[#6DD3FF] pb-2">AI-Powered Recruitment</h2>
        <p class="text-gray-700">Artificial Intelligence is revolutionizing how companies screen and shortlist candidates...</p>
      </section>
    `,
  },



















 
}

export async function generateStaticParams() {
  return Object.keys(blogs).map(slug => ({
    slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogs[params.slug as keyof typeof blogs]

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Back button with icon */}
            <div className="px-8 pt-8">
              <Link href="/blog" className="inline-flex items-center text-[#29A0D8] hover:text-[#1a7ca7] transition-colors font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Blog
              </Link>
            </div>

            {/* Blog header */}
            <div className="px-8 py-6">
              <h1 className="text-3xl md:text-4xl font-bold text-[#29A0D8] mb-3">{post.title}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-[#6DD3FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="mr-4">{post.date}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-[#6DD3FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>By {post.author}</span>
              </div>
              <p className="text-lg text-gray-700 italic border-l-4 border-[#29A0D8] pl-4 py-1">{post.excerpt}</p>
            </div>

            {/* Featured image */}
            <div className="relative h-64 md:h-96 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Blog content */}
            <div className="px-8 py-8">
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Tags/Categories */}
            <div className="px-8 py-6 border-t border-gray-200 bg-gray-50">
              <h3 className="text-lg font-semibold text-[#29A0D8] mb-3">Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                <Link href="/blog/tag/recruitment" className="px-3 py-1 bg-[#6DD3FF] bg-opacity-20 text-[#29A0D8] text-sm rounded-full hover:bg-opacity-30 transition">Recruitment</Link>
                <Link href="/blog/tag/hr-trends" className="px-3 py-1 bg-[#6DD3FF] bg-opacity-20 text-[#29A0D8] text-sm rounded-full hover:bg-opacity-30 transition">HR Trends</Link>
                <Link href="/blog/tag/career-advice" className="px-3 py-1 bg-[#6DD3FF] bg-opacity-20 text-[#29A0D8] text-sm rounded-full hover:bg-opacity-30 transition">Career Advice</Link>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="px-8 py-6 bg-[#29A0D8] text-white">
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="mb-4">Subscribe to our newsletter for the latest HR insights and job market trends.</p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#6DD3FF]"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-white text-[#29A0D8] font-medium rounded hover:bg-opacity-90 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}