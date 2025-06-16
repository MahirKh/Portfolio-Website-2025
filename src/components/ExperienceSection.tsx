import React from "react";
import { SectionTitle } from "./SectionTitle";
import { BriefcaseIcon, GraduationCapIcon } from "lucide-react";
export const ExperienceSection = () => {
  const workExperience = [
    {
      title: "Associate Software Engineer",
      company: "Sun Life Financial",
      period: "January 2024 - Present",
      description:
        "At Sun Life, I’ve contributed to enterprise-scale applications using React, Node.js, Docker, and PostgreSQL. Contributed to key initiatives like a vendor-agnostic authentication system projected to save over $2M and helped build a reusable chatbot widget deployed across multiple platforms. I also supported cross-team DevOps efforts and temporarily stepped into senior developer responsibilities",
    },
    {
      title: "Embedded Software Developer Co-op ",
      company: "Molex",
      period: "January 2022 - August 2022",
      description:
        "Refactored a legacy multi-threaded C codebase into two single-threaded processes, improving performance and reducing race conditions. Built comprehensive test suites and worked in a fast-paced Agile environment.",
    },
    {
      title: "Software Developer Co-op",
      company: "TD Bank",
      period: " September 2021 – December 2021",
      description:
        "Built custom ETL pipelines using C#, SQL, and SSIS to automate RSA Archer function management. Developed 100+ internal tools, enhancing efficiency across multiple teams.",
    },
    {
      title: "Full-Stack Developer",
      company: "MAX Gala",
      period: "June 2021 – August 2021",
      description:
        "Led the development of a Q&A feature using React, Python, and AWS, increasing user engagement by 30%. Implemented performance enhancements like pagination and lazy loading, resulting in a 20% faster site.",
    },
  ];
  const education = [
    {
      degree:
        "Bachelor of Engineering in Electrical and Biomedical Engineering",
      institution: "McMaster University",
      period: "Graduated in 2023",
      description:
        "Completed a multidisciplinary engineering program with a focus on software development and embedded systems. Relevant coursework included object-oriented programming in C, data structures and algorithms in Java, and a year-long capstone project.",
      capstoneTitle: "Capstone Project – Voice Activated Bike Turn Signal:",
      capstoneDescription:
        "Developed a real-time voice-controlled bike signal system using Edge Impulse, TensorFlow, and 50,000+ audio samples from Google Speech Commands, achieving 95% voice recognition accuracy. Deployed the machine learning model to an Arduino Nano 33 BLE, leveraging I2C communication and C++ to trigger LED signals.",
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
                    <p className="text-gray-600 font-bold mt-3">
                      {edu.capstoneTitle}
                    </p>
                    <p className="text-gray-600">{edu.capstoneDescription}</p>
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
