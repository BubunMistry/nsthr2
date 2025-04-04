"use client";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { Upload, Edit2, LogOut, FileText, Briefcase, GraduationCap, Award, User } from "lucide-react";

type Experience = {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
};

type Education = {
  id: number;
  degree: string;
  institution: string;
  year: string;
};

type User = {
  name: string;
  email: string;
  title: string;
  about: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  connections: number;
  profileViews: number;
  cvUrl: string | null;
};

type ActiveTab = "about" | "experience" | "education" | "skills";

export default function ProfessionalProfile() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<User>({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    title: "Senior UX Engineer",
    about: "Innovative designer-developer hybrid with 8+ years creating human-centered digital experiences. Specializing in design systems, front-end architecture, and bridging the gap between design and engineering teams.",
    experience: [
      {
        id: 1,
        title: "Lead Product Designer",
        company: "Nexus Technologies",
        duration: "2020 - Present",
        description: "Leading design system implementation and front-end architecture for enterprise SaaS platform"
      },
      {
        id: 2,
        title: "UX Engineer",
        company: "Digital Horizon",
        duration: "2017 - 2020",
        description: "Built component libraries and design systems for financial applications"
      }
    ],
    education: [
      {
        id: 1,
        degree: "M.Sc Human-Computer Interaction",
        institution: "Tech University",
        year: "2017"
      }
    ],
    skills: ["Design Systems", "Figma", "React", "TypeScript", "UX Research", "Accessibility"],
    connections: 428,
    profileViews: 2150,
    cvUrl: null
  });

  const [activeTab, setActiveTab] = useState<ActiveTab>("about");
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState("");

  // Custom color palette
  const primaryColor = "#29A0D8";
  const primaryDark = "#1E90D8";
  const accentColor = "#E3F4FC";
  const textColor = "#2D3748";

  const handleLogout = () => {
    router.push("/auth/login");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setUser({ ...user, cvUrl: fileUrl });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleEdit = () => {
    setEditData(user.about);
    setIsEditing(true);
  };

  const handleSave = () => {
    setUser({ ...user, about: editData });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold" style={{ color: primaryDark }}>ProfileHub</div>
          </div>
          <button 
            onClick={handleLogout} 
            className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
            style={{ color: textColor }}
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="flex-1">
        {/* Profile Header Background */}
        <div className="relative">
          <div className="h-48 w-full absolute top-0 left-0" style={{ backgroundColor: primaryColor }}></div>
          
          {/* Profile Content */}
          <div className="relative max-w-7xl mx-auto px-6 pt-48 pb-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Picture */}
              <div className="w-full md:w-1/4">
                <div className="relative group -mt-24">
                  <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                    <img 
                      src="https://randomuser.me/api/portraits/men/42.jpg" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                    <Edit2 className="w-4 h-4" style={{ color: primaryDark }} />
                  </button>
                </div>
              </div>

              {/* Profile Info */}
              <div className="w-full md:w-3/4 flex flex-col justify-end pb-4">
                <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-xl mt-1" style={{ color: primaryDark }}>{user.title}</p>
                <div className="flex items-center mt-4 space-x-4">
                  <span className="text-sm text-gray-600">{user.connections} connections</span>
                  <span className="text-sm" style={{ color: primaryDark }}>{user.profileViews} profile views</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Sections */}
        <div className="max-w-7xl mx-auto px-6 pb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column */}
            <div className="w-full lg:w-1/3 space-y-6">
              {/* About Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold" style={{ color: textColor }}>About</h2>
                  <button 
                    onClick={handleEdit}
                    className="text-sm flex items-center space-x-1"
                    style={{ color: primaryDark }}
                  >
                    <Edit2 className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                </div>
                {isEditing ? (
                  <div className="space-y-4">
                    <textarea
                      value={editData}
                      onChange={(e) => setEditData(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      rows={6}
                    />
                    <div className="flex justify-end space-x-3">
                      <button 
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={handleSave}
                        className="px-4 py-2 rounded-md text-white font-medium"
                        style={{ backgroundColor: primaryDark }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-700 leading-relaxed">{user.about}</p>
                )}
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h2 className="text-xl font-bold mb-4" style={{ color: textColor }}>Contact</h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-700">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-700">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-700">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Resume Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold" style={{ color: textColor }}>Resume</h2>
                  <button 
                    onClick={triggerFileInput}
                    className="flex items-center space-x-1 text-sm"
                    style={{ color: primaryDark }}
                  >
                    <Upload className="w-4 h-4" />
                    <span>Upload</span>
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                </div>
                {user.cvUrl ? (
                  <a 
                    href={user.cvUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-md"
                    style={{ 
                      backgroundColor: accentColor,
                      color: primaryDark
                    }}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Resume
                  </a>
                ) : (
                  <div className="text-center py-8">
                    <FileText className="mx-auto w-8 h-8 mb-2" style={{ color: primaryColor }} />
                    <p className="text-sm text-gray-500">No resume uploaded</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-2/3 space-y-6">
              {/* Experience Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold" style={{ color: textColor }}>Experience</h2>
                  <button className="flex items-center space-x-1 text-sm" style={{ color: primaryDark }}>
                    <Edit2 className="w-4 h-4" />
                    <span>Add</span>
                  </button>
                </div>

                <div className="space-y-6">
                  {user.experience.map((exp) => (
                    <div key={exp.id} className="flex">
                      <div className="mr-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                          style={{ backgroundColor: accentColor }}>
                          <Briefcase className="w-5 h-5" style={{ color: primaryDark }} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900">{exp.title}</h3>
                        <p className="text-gray-700">{exp.company}</p>
                        <p className="text-sm text-gray-500 mt-1">{exp.duration}</p>
                        <p className="text-gray-600 mt-2">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold" style={{ color: textColor }}>Education</h2>
                  <button className="flex items-center space-x-1 text-sm" style={{ color: primaryDark }}>
                    <Edit2 className="w-4 h-4" />
                    <span>Add</span>
                  </button>
                </div>

                <div className="space-y-6">
                  {user.education.map((edu) => (
                    <div key={edu.id} className="flex">
                      <div className="mr-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                          style={{ backgroundColor: accentColor }}>
                          <GraduationCap className="w-5 h-5" style={{ color: primaryDark }} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900">{edu.degree}</h3>
                        <p className="text-gray-700">{edu.institution}</p>
                        <p className="text-sm text-gray-500 mt-1">Graduated {edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Card */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold" style={{ color: textColor }}>Skills</h2>
                  <button className="flex items-center space-x-1 text-sm" style={{ color: primaryDark }}>
                    <Edit2 className="w-4 h-4" />
                    <span>Add</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-3">
                  {user.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 rounded-full text-sm font-medium"
                      style={{ 
                        backgroundColor: accentColor,
                        color: primaryDark
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}