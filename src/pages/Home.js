import React, { useEffect, useState } from 'react';
import Button from '../components/UI/Button';
import SkillCard from '../components/Cards/SkillCard';
import FeaturedProject from '../components/Sections/FeaturedProject';
import { skills } from '../data/skills';
import projects from '../data/projects';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const name = "Yme Clonen";
  const featuredProject = projects.find(project => project.featured);

  console.log(featuredProject);
  
  // Typing effect
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < name.length) {
        setTypedText(name.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Hello, I'm <span className="text-primary">{typedText}</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
                Artificial Intelligence Student
              </h2>
              <p className="text-lg mb-8 max-w-xl">
                I have a strong interest in  Artificial Intelligence, App and Web Development, as well as Electronics, ICT. I'm eager to rapidly expand my knowledge and skills in these areas.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button to="/projects" primary>
                  View My Projects
                </Button>
                <Button to="/about" secondary>
                  About Me
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl">
                <img 
                  src="/assets/images/yme.png" 
                  alt="Profile Image" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Skills Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map(skill => (
              <SkillCard 
                key={skill.id}
                title={skill.title}
                description={skill.description}
                Icon={skill.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <FeaturedProject project={featuredProject} />
      )}
    </>
  );
};

export default Home;