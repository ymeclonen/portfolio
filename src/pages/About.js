import React from 'react';
import PageHeader from '../components/Sections/PageHeader';
import aboutData from '../data/about';

const About = () => {
  return (
      <>
        <PageHeader title="About Me" />

        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Top section - Who I Am & Why ACS with image on right */}
            <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto mb-16">
              {/* About Content */}
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-heading font-bold mb-6">Who I Am</h2>
                <p className="text-gray-700 mb-6">{aboutData.introduction}</p>

                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">
                  Why Applied Computer Science?
                </h3>
                {aboutData.whyField.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                ))}
              </div>

              {/* Profile Image - Now on right */}
              <div className="lg:w-1/3 flex justify-center">
                <div className="rounded-lg overflow-hidden shadow-lg max-w-xs">
                  <img
                      src={aboutData.profileImage}
                      alt={aboutData.name}
                      className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Bottom section - Hobbies and Future Dreams side by side */}
            <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
              {/* Hobbies */}
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">
                  My Unique Hobbies
                </h3>
                <div className="space-y-6">
                  {aboutData.hobbies.map((hobby, index) => (
                      <div key={index} className="flex items-start">
                        <div className="text-primary text-2xl mr-4 mt-1">
                          <hobby.icon />
                        </div>
                        <div>
                          <h4 className="text-xl font-heading font-medium mb-2">{hobby.title}</h4>
                          <p className="text-gray-700">{hobby.description}</p>
                        </div>
                      </div>
                  ))}
                </div>
              </div>

              {/* Future Dreams */}
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">
                  Future Dreams & Professional Ambitions
                </h3>
                {aboutData.ambitions.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default About;