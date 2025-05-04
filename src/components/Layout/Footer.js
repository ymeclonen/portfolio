import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-white text-gray-800 shadow-sm border-t border-gray-100">
        <div className="container mx-auto px-4 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="mb-6 flex flex-col items-center">
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Contact</h3>
              <p className="mb-2 flex items-center">
                <FaEnvelope className="mr-2 text-gray-600"/> ymec.code@gmail.com
              </p>
            </div>
            <div className="mb-6 flex flex-col items-center">
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Social</h3>
              <div className="flex space-x-4">
                <a
                    href="https://github.com/ymeclonen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full flex items-center justify-center transition duration-300"
                >
                  <FaGithub/>
                </a>
                <a
                    href="https://www.linkedin.com/in/yme-clonen-9b2980264/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full flex items-center justify-center transition duration-300"
                >
                  <FaLinkedin/>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 mt-8 border-t border-gray-200">
            <p className="text-gray-600">&copy; {currentYear} Yme Clonen. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;