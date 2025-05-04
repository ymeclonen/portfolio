import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialLinks = ({ className = '' }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <a 
        href="https://github.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition duration-300"
        aria-label="GitHub"
      >
        <FaGithub className="text-white" />
      </a>
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition duration-300"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-white" />
      </a>
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition duration-300"
        aria-label="Twitter"
      >
        <FaTwitter className="text-white" />
      </a>
    </div>
  );
};

export default SocialLinks;