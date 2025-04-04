import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BlogPostParams {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogPostParams) {
  // In a real application, this would come from a database or API
  const blogs = {
    "how-to-prepare-for-job-interview": {
      title: "How to Prepare for a Job Interview",
      date: "March 15, 2023",
      author: "Abhishek Raj",
      image: "/placeholder.svg?height=500&width=1000",
      content: `
        <p>Job interviews can be nerve-wracking, but with the right preparation, you can walk in with confidence and leave a lasting impression. Here are some strategies to help you prepare for your next job interview:</p>
        
        <h2>Research the Company</h2>
        <p>Before your interview, take time to research the company thoroughly. Visit their website, read their mission statement, and familiarize yourself with their products or services. Understanding the company's values and goals will help you tailor your responses to align with their culture.</p>
        
        <h2>Practice Common Interview Questions</h2>
        <p>While you can't predict every question you'll be asked, practicing responses to common interview questions can help you feel more prepared. Some questions to practice include:</p>
        <ul>
          <li>Tell me about yourself.</li>
          <li>Why are you interested in this position?</li>
          <li>What are your strengths and weaknesses?</li>
          <li>Where do you see yourself in five years?</li>
          <li>Why should we hire you?</li>
        </ul>
        
        <h2>Prepare Questions to Ask</h2>
        <p>At the end of most interviews, you'll be asked if you have any questions. This is your opportunity to demonstrate your interest in the role and the company. Prepare thoughtful questions about the position, team dynamics, or company culture.</p>
        
        <h2>Dress Appropriately</h2>
        <p>First impressions matter, so dress professionally for your interview. Research the company's dress code and aim to dress slightly more formally. When in doubt, it's better to be overdressed than underdressed.</p>
        
        <h2>Practice Good Body Language</h2>
        <p>Your body language can communicate as much as your words. Practice maintaining eye contact, sitting up straight, and offering a firm handshake. These non-verbal cues can convey confidence and professionalism.</p>
        
        <h2>Prepare Your Materials</h2>
        <p>Bring multiple copies of your resume, a list of references, and any other relevant documents. Also, consider bringing a notebook and pen to take notes during the interview.</p>
        
        <h2>Plan Your Journey</h2>
        <p>Know exactly where your interview is taking place and how you'll get there. If possible, do a practice run to ensure you know the route. Plan to arrive at least 15 minutes early to allow time for unexpected delays and to collect your thoughts before the interview.

<h2>Follow Up After the Interview</h2>
<p>Send a thank-you email within 24 hours of your interview. Express your appreciation for the opportunity, reiterate your interest in the position, and briefly mention something specific from your conversation that reinforces why you're a good fit for the role.</p>

<p>By following these preparation strategies, you'll be well-equipped to make a positive impression during your job interview. Remember, preparation builds confidence, and confidence is key to interview success.</p>
      `,
    },
    "future-of-remote-work": {
      title: "The Future of Remote Work",
      date: "February 28, 2023",
      author: "Neha Kesari",
      image: "/placeholder.svg?height=500&width=1000",
      content: `
        <p>The COVID-19 pandemic accelerated the adoption of remote work across industries, transforming it from a rare perk to a mainstream work arrangement. As we move forward, what does the future of remote work look like, and how will it impact job seekers and employers?</p>
        
        <h2>Hybrid Work Models</h2>
        <p>Many companies are adopting hybrid work models that combine remote and in-office work. This approach offers flexibility while maintaining opportunities for in-person collaboration. Job seekers should be prepared to adapt to these hybrid arrangements, which may require them to be in the office a few days a week.</p>
        
        <h2>Global Talent Pools</h2>
        <p>Remote work has expanded the talent pool for employers, allowing them to hire the best candidates regardless of location. For job seekers, this means more opportunities but also increased competition. Developing specialized skills and highlighting your ability to work effectively in a remote environment can help you stand out.</p>
        
        <h2>Technology Advancements</h2>
        <p>Expect continued advancements in remote collaboration tools and technologies. Virtual reality meetings, enhanced project management platforms, and AI-powered productivity tools are likely to become more prevalent. Staying current with these technologies will be essential for remote workers.</p>
        
        <h2>Focus on Results</h2>
        <p>Remote work is shifting management styles from monitoring hours worked to evaluating outcomes and results. This results-oriented approach benefits both employers and employees, as it focuses on productivity rather than presence.</p>
        
        <h2>Work-Life Integration</h2>
        <p>Remote work blurs the lines between professional and personal life. Finding a healthy balance will be crucial for remote workers' well-being and productivity. Employers are increasingly recognizing the importance of supporting work-life balance through flexible schedules and wellness initiatives.</p>
        
        <h2>Remote Work Policies</h2>
        <p>Companies are developing more structured remote work policies that address expectations, communication protocols, and performance metrics. These policies help create clarity and consistency for remote teams.</p>
        
        <h2>Conclusion</h2>
        <p>The future of remote work offers exciting possibilities for both job seekers and employers. By embracing flexibility, developing relevant skills, and leveraging technology, you can thrive in this evolving landscape. Whether you're looking for a fully remote position or a hybrid arrangement, understanding these trends will help you navigate the changing world of work.</p>
      `,
    },
    "top-skills-employers-look-for": {
      title: "Top Skills Employers Look for in 2023",
      date: "January 10, 2023",
      author: "Sonny",
      image: "/placeholder.svg?height=500&width=1000",
      content: `
        <p>As the job market evolves, so do the skills that employers value most. Staying ahead of these trends can give you a competitive edge in your job search. Here are the top skills employers are looking for in 2023:</p>
        
        <h2>Digital Literacy</h2>
        <p>With technology continuing to transform industries, digital literacy is no longer optional. Employers expect candidates to be comfortable with digital tools, data analysis, and online collaboration platforms. Familiarity with industry-specific software is also highly valued.</p>
        
        <h2>Adaptability</h2>
        <p>In a rapidly changing business environment, adaptability is crucial. Employers seek candidates who can quickly learn new skills, adjust to changing priorities, and thrive in uncertain situations. Highlighting examples of how you've successfully navigated change can make you stand out.</p>
        
        <h2>Emotional Intelligence</h2>
        <p>Emotional intelligence—the ability to understand and manage emotions, both your own and others'—is increasingly recognized as essential in the workplace. Skills like empathy, self-awareness, and effective communication contribute to stronger team dynamics and leadership.</p>
        
        <h2>Critical Thinking</h2>
        <p>With information overload being a common challenge, employers value candidates who can analyze data, evaluate sources, and make sound decisions. Critical thinking allows you to solve complex problems and contribute innovative solutions.</p>
        
        <h2>Cybersecurity Awareness</h2>
        <p>As cyber threats become more sophisticated, basic cybersecurity awareness is important across roles. Understanding best practices for data protection and recognizing potential security risks can make you a more valuable employee.</p>
        
        <h2>Remote Collaboration</h2>
        <p>With remote and hybrid work becoming permanent fixtures, the ability to collaborate effectively from a distance is essential. This includes virtual communication skills, digital project management, and self-discipline.</p>
        
        <h2>Sustainability Mindset</h2>
        <p>As companies focus more on environmental and social responsibility, employees who understand sustainability principles and can contribute to these initiatives are increasingly valued.</p>
        
        <h2>How to Develop These Skills</h2>
        <p>Consider online courses, certifications, or workshops to develop these in-demand skills. Many platforms offer affordable or free options. Additionally, seek opportunities in your current role to practice and demonstrate these abilities.</p>
        
        <h2>Showcasing Your Skills</h2>
        <p>When applying for jobs, don't just list these skills on your resume—provide specific examples of how you've applied them. During interviews, be prepared to discuss situations where you've demonstrated these capabilities and the results you achieved.</p>
        
        <p>By focusing on developing and highlighting these key skills, you'll position yourself as a valuable candidate in today's competitive job market.</p>
      `,
    },
    "write-resume-that-gets-noticed": {
      title: "How to Write a Resume That Gets Noticed",
      date: "December 5, 2022",
      author: "Parama Chowdhury",
      image: "/placeholder.svg?height=500&width=1000",
      content: `
        <p>In today's competitive job market, your resume needs to stand out to catch the attention of hiring managers. With many companies using applicant tracking systems (ATS) to screen resumes, it's more important than ever to create a document that appeals to both technology and human readers. Here's how to write a resume that gets noticed:</p>
        
        <h2>Tailor Your Resume for Each Job</h2>
        <p>One of the biggest mistakes job seekers make is using the same generic resume for every application. Take the time to customize your resume for each position, highlighting the skills and experiences most relevant to that specific role. Use keywords from the job description to help your resume pass through ATS filters.</p>
        
        <h2>Create a Strong Summary Statement</h2>
        <p>Replace the outdated objective statement with a powerful professional summary. This brief paragraph at the top of your resume should highlight your most impressive qualifications and give hiring managers a quick overview of what you bring to the table.</p>
        
        <h2>Focus on Achievements, Not Just Duties</h2>
        <p>Instead of simply listing job responsibilities, emphasize your accomplishments. Use quantifiable results whenever possible—numbers, percentages, and specific outcomes make your contributions concrete and impressive. For example, "Increased social media engagement by 45% over six months" is more impactful than "Managed social media accounts."</p>
        
        <h2>Use a Clean, Professional Format</h2>
        <p>Your resume should be easy to scan quickly. Use a clean, professional design with consistent formatting, clear section headings, and plenty of white space. Stick to standard fonts like Arial, Calibri, or Times New Roman in 10-12 point size. For most professionals, a resume should be limited to one or two pages.</p>
        
        <h2>Include Relevant Skills</h2>
        <p>Create a dedicated skills section that highlights both technical and soft skills relevant to the position. Be specific about your technical proficiencies, including software programs, programming languages, or specialized equipment you're experienced with.</p>
        
        <h2>Proofread Carefully</h2>
        <p>Typos and grammatical errors can immediately disqualify you in the eyes of hiring managers. Proofread your resume multiple times, and consider asking a friend or colleague to review it as well. Reading your resume aloud can help you catch errors you might otherwise miss.</p>
        
        <h2>Update Your Contact Information</h2>
        <p>Ensure your contact information is current and professional. Include your phone number, email address, and LinkedIn profile. If you have a personal website or portfolio relevant to your field, include that as well.</p>
        
        <h2>Consider Adding a Skills-Based Section</h2>
        <p>If you're changing careers or have gaps in your employment history, a skills-based resume format might be more effective. This approach emphasizes your relevant skills and qualifications rather than your chronological work history.</p>
        
        <p>Remember, your resume is often your first opportunity to make an impression on potential employers. By following these guidelines, you can create a compelling document that showcases your qualifications and increases your chances of landing an interview.</p>
      `,
    },
  }

  const post = blogs[params.slug as keyof typeof blogs]

  if (!post) {
    notFound()
  }

  return (
    <div>
      <article className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
              &larr; Back to Blog
            </Link>

            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center text-gray-600 mb-6">
                <span className="mr-4">{post.date}</span>
                <span>By {post.author}</span>
              </div>

              <div className="relative h-[400px] w-full mb-8">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

