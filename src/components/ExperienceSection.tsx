import React from "react";
import { SectionTitle } from "./SectionTitle";
import { BriefcaseIcon, GraduationCapIcon } from "lucide-react";
export const ExperienceSection = () => {
  const workExperience = [
    {
      title: "Associate Software Engineer",
      company: "Sun Life Financial",
      period: "2024 - Present",
      description:
        "Lead the frontend development team in creating modern web applications using React and TypeScript. Implemented performance optimizations that improved page load times by 40%.",
    },
    {
      title: "Embedded Software Developer Co-op ",
      company: "Molex",
      period: "January 2022 - August 2022",
      description:
        "Developed responsive web interfaces for various clients. Collaborated with designers to ensure pixel-perfect implementation of UI designs.",
    },
    {
      title: "Software Developer Co-op",
      company: "TD Bank",
      period: " September 2021 – December 2021",
      description:
        "Built websites for small businesses using HTML, CSS, and JavaScript. Assisted senior developers with larger projects and learned modern development practices.",
    },
    {
      title: "Full-Stack Developer",
      company: "MAX Gala",
      period: "June 2021 – August 2021",
      description:
        "Built websites for small businesses using HTML, CSS, and JavaScript. Assisted senior developers with larger projects and learned modern development practices.",
    },
  ];
  const education = [
    {
      degree:
        "Bachelor of Engineering in Electrical and Biomedical Engineering",
      institution: "McMaster University",
      period: "Graduated in 2023",
      description:
        "Specialized in Web Technologies and User Interface Design. Graduated with honors.",
    },
  ];
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle
          title="Experience & Education"
          subtitle="My professional journey"
        />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <BriefcaseIcon size={28} className="text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">
                Work Experience
              </h3>
            </div>
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-blue-200 pb-8"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-gray-800 mb-1">
                      {job.title}
                    </h4>
                    <div className="flex justify-between mb-3">
                      <span className="text-blue-600 font-medium">
                        {job.company}
                      </span>
                      <span className="text-gray-500">{job.period}</span>
                    </div>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center mb-8">
              <GraduationCapIcon size={28} className="text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-blue-200 pb-8"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-gray-800 mb-1">
                      {edu.degree}
                    </h4>
                    <div className="flex justify-between mb-3">
                      <span className="text-blue-600 font-medium">
                        {edu.institution}
                      </span>
                      <span className="text-gray-500">{edu.period}</span>
                    </div>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
