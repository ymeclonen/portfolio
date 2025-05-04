import React from 'react';
import Button from '../UI/Button';

const FeaturedProject = ({ project }) => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          Featured Project
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-heading font-semibold mb-2">{project.title}</h3>
            <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-primary rounded-full mb-4">
              {project.category}
            </span>
            <p className="text-gray-700 mb-6">{project.description}</p>
            <Button to={`/projects/${project.id}`} primary>
              View Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;