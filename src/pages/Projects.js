import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/Sections/PageHeader';
import ProjectCard from '../components/Cards/ProjectCard';
import projects from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isGrid, setIsGrid] = useState(true);
  
  // Get only visible projects (where visible is not explicitly false)
  const visibleProjects = projects.filter(project => project.visible !== false);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(visibleProjects);
    } else {
      setFilteredProjects(visibleProjects.filter(project => project.category === filter));
    }
  }, [filter]);

  const handleFilterClick = (filterValue) => {
    setFilter(filterValue);
  };

  const toggleView = () => {
    setIsGrid(!isGrid);
  };

  // Get categories only from visible projects
  const categories = ['all', ...new Set(visibleProjects.map(project => project.category))];

  // Split projects into two groups (only visible ones)
  const thomasMoreProjects = filteredProjects.filter(project => project.school === 'Thomas More');
  const outsideProjects = filteredProjects.filter(project => project.school === 'Outside');

  const renderProjectSection = (title, projectsArray) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
      {projectsArray.length > 0 ? (
        <div className={`
          ${isGrid ?
              'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' :
              'flex flex-col space-y-6'
          }`}
        >
          {projectsArray.map(project => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className={`${!isGrid && 'bg-white rounded-xl shadow-sm overflow-hidden'} transition-all duration-300 hover:shadow-md`}
            >
              {isGrid ? (
                <ProjectCard project={project} />
              ) : (
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-48 md:h-auto relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => (
                        <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-end">
                      <span className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No projects in this section.</p>
      )}
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader title="My Projects" />

      <div className="container mx-auto px-4 py-8">
        {/* Filter & View Toggle */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleFilterClick(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex items-center bg-white rounded-lg border border-gray-200 p-1 w-fit">
            <button
              onClick={() => setIsGrid(true)}
              className={`p-2 rounded ${isGrid ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500'}`}
              aria-label="Grid view"
            >
              {/* Grid icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </button>
            <button
              onClick={() => setIsGrid(false)}
              className={`p-2 rounded ${!isGrid ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500'}`}
              aria-label="List view"
            >
              {/* List icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Project Counter */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredProjects.length}</span>
            {filter !== 'all' && <span> {filter}</span>} projects
          </p>
        </div>

        {/* Project Sections */}
        {renderProjectSection('Projects at Thomas More', thomasMoreProjects)}
        {renderProjectSection('Projects Outside', outsideProjects)}

        {/* No projects found fallback */}
        {filteredProjects.length === 0 && (
          <div className="bg-white rounded-xl p-12 text-center shadow-sm">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No projects found</h3>
            <p className="mt-1 text-gray-500">No projects match your current filter selection.</p>
            <div className="mt-6">
              <button
                onClick={() => setFilter('all')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
              >
                View all projects
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;