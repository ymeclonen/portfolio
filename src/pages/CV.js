import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import PageHeader from '../components/Sections/PageHeader';
import Button from '../components/UI/Button';
import { 
  FaDownload, FaUser, FaGraduationCap, FaBriefcase, 
  FaProjectDiagram, FaLaptopCode 
} from 'react-icons/fa';
import { personalInfo, education } from '../data/cv';
import projects from '../data/projects';
import { technicalSkills } from '../data/skills';

const CV = () => {
  const cvRef = useRef();

  const handleDownloadPDF = () => {
    const element = cvRef.current;
    const opt = {
      margin: 0.5,
      filename: 'CV_YmeClonen.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] } 
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <>
      <PageHeader title="Curriculum Vitae" />

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Download Button */}
            <div className="bg-gray-100 py-6 px-4 rounded-t-lg text-center">
              <Button onClick={handleDownloadPDF} primary className="inline-flex items-center">
                <FaDownload className="mr-2" /> Download CV as PDF
              </Button>
            </div>

            {/* CV Content */}
            <div ref={cvRef} className="bg-white rounded-b-lg shadow-md p-6 md:p-10">
              {/* CV Header */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 pb-8 border-gray-200 mb-8">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <img 
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-heading font-bold mb-2">{personalInfo.name}</h2>
                  <p className="text-lg text-gray-600 mb-4">{personalInfo.title}</p>
                  <div className="flex flex-col md:flex-row gap-4 flex-wrap justify-center md:justify-start">
                    <p className="flex items-center">
                      <FaUser className="text-primary mr-2" /> {personalInfo.contact.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="mb-8 page-break-inside-avoid">
                <h3 className="text-xl font-heading font-semibold mb-4 pb-2 border-b border-gray-200 flex items-center">
                  <FaUser className="text-primary mr-2" /> Professional Summary
                </h3>
                <p className="text-gray-700">{personalInfo.summary}</p>
              </div>

              

              {/* Technical Skills */}
              <div className="mb-8 page-break-inside-avoid">
                <h3 className="text-xl font-heading font-semibold mb-4 pb-2 border-b border-gray-200 flex items-center">
                  <FaLaptopCode className="text-primary mr-2" /> Technical Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Programming Languages */}
                  <div>
                    <h4 className="text-lg font-medium text-primary mb-2">Programming Languages</h4>
                    <ul className="space-y-1">
                      {technicalSkills.programmingLanguages.map((skill, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-primary mr-2">•</span> {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies & Frameworks */}
                  <div>
                    <h4 className="text-lg font-medium text-primary mb-2">Technologies & Frameworks</h4>
                    <ul className="space-y-1">
                      {technicalSkills.technologiesFrameworks.map((skill, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-primary mr-2">•</span> {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Data Skills */}
                  <div>
                    <h4 className="text-lg font-medium text-primary mb-2">Data Skills</h4>
                    <ul className="space-y-1">
                      {technicalSkills.aiDataSkills.map((skill, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-primary mr-2">•</span> {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mb-8">
                <h3 className="text-xl font-heading font-semibold mb-4 pb-2 border-b border-gray-200 flex items-center">
                  <FaGraduationCap className="text-primary mr-2" /> Education
                </h3>
                {education.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-4 mb-6 page-break-inside-avoid">
                    <div className="md:w-1/4">
                      <p className="font-medium text-primary">{item.period}</p>
                    </div>
                    <div className="md:w-3/4">
                      <h4 className="text-lg font-medium mb-1">{item.degree}</h4>
                      <p className="text-gray-600 mb-2">{item.institution}</p>
                      {item.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-700 mb-1">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-xl font-heading font-semibold mb-4 pb-2 border-b border-gray-200 flex items-center">
                  <FaProjectDiagram className="text-primary mr-2" /> Projects
                </h3>
                {projects.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-4 mb-6 page-break-inside-avoid">
                    <div className="md:w-3/4">
                      <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CV;