import React from 'react';
import { SectionTitle } from './SectionTitle';
import { CodeIcon, PencilRulerIcon, UsersIcon } from 'lucide-react';
export const AboutSection = () => {
  const skillCategories = {
    programming: {
      title: '<programming>',
      skills: [{
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
      }, {
        name: 'Java',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
      }, {
        name: 'C++',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
      }, {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
      }, {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
      }, {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      }]
    },
    tools: {
      title: '<itTools>',
      skills: [{
        name: 'AWS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
      }, {
        name: 'Docker',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
      }, {
        name: 'VS Code',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
      }, {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
      }]
    },
    content: {
      title: '<contentProduction>',
      skills: [{
        name: 'Photoshop',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg'
      }, {
        name: 'Premiere',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg'
      }, {
        name: 'Figma',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
      }]
    }
  };
  const skills = [{
    name: 'React',
    level: 90
  }, {
    name: 'JavaScript',
    level: 85
  }, {
    name: 'TypeScript',
    level: 80
  }, {
    name: 'Node.js',
    level: 75
  }, {
    name: 'UI/UX Design',
    level: 70
  }];
  const services = [{
    icon: <CodeIcon size={36} className="text-blue-600" />,
    title: 'Web Development',
    description: 'I build modern, responsive web applications using the latest technologies and best practices.'
  }, {
    icon: <PencilRulerIcon size={36} className="text-blue-600" />,
    title: 'UI/UX Design',
    description: 'I create intuitive and engaging user experiences with a focus on usability and aesthetics.'
  }, {
    icon: <UsersIcon size={36} className="text-blue-600" />,
    title: 'Consultation',
    description: 'I provide expert advice on web development strategies and technology choices.'
  }];
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle title="About Me" subtitle="Get to know me better" />
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">My Story</h3>
            <p className="text-gray-600 mb-4">
              Hello! I'm John, a passionate Full Stack Developer with over 5
              years of experience in creating digital experiences for a variety
              of clients. My journey in web development began during my college
              years when I built my first website for a local business.
            </p>
            <p className="text-gray-600 mb-4">
              Since then, I've worked with startups and established companies
              alike, helping them achieve their digital goals through clean code
              and thoughtful design. I believe in creating websites that not
              only look great but also provide exceptional user experiences.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me hiking in the mountains,
              experimenting with new recipes, or reading science fiction novels.
              I'm always eager to learn new technologies and techniques to
              improve my craft.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              Technical Skills
            </h3>
            <div className="space-y-12">
              {Object.entries(skillCategories).map(([category, {
              title,
              skills
            }]) => <div key={category} className="space-y-4">
                    <h4 className="text-lg font-medium text-purple-600 font-mono">
                      {title}
                    </h4>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
                      {skills.map(skill => <div key={skill.name} className="relative group">
                          <div className="hex-container bg-gray-900 p-4 rounded-lg transform transition-transform hover:-translate-y-2">
                            <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain filter brightness-100 transition-all group-hover:brightness-110" />
                          </div>
                          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                            {skill.name}
                          </span>
                        </div>)}
                    </div>
                    {category !== 'content' && <h4 className="text-lg font-medium text-purple-600 font-mono">
                        {'</' + category + '>'}
                      </h4>}
                  </div>)}
              <h4 className="text-lg font-medium text-purple-600 font-mono">
                {'/contentProduction>'}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>;
};