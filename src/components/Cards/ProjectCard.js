import React from 'react';

const ProjectCard = ({ project }) => {
  return (
      <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 h-full flex flex-col">
        <div className="relative">
          <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 left-2">
          <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">
            {project.category}
          </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map(tech => (
                <span
                    key={tech}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
              {tech}
            </span>
            ))}
            {project.technologies.length > 3 && (
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              +{project.technologies.length - 3}
            </span>
            )}
          </div>

          <div className="mt-auto">
          <span className="text-indigo-600 font-medium inline-flex items-center hover:text-indigo-800 transition-colors">
            View Details
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
              />
            </svg>
          </span>
          </div>
        </div>
      </div>
  );
};

export default ProjectCard;