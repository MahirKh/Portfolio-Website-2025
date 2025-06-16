import React from "react";
import { GithubIcon, LinkedinIcon } from "lucide-react";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: <GithubIcon size={20} />,
      url: "https://github.com/MahirKh",
      label: "GitHub",
    },
    {
      icon: <LinkedinIcon size={20} />,
      url: "https://linkedin.com/in/mahir-khandaker",
      label: "LinkedIn",
    },
  ];
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-white mb-2">
              Mahir Khandaker
            </div>
            <p className="text-gray-400 text-center">Full Stack Developer</p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Mahir Khandaker. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
