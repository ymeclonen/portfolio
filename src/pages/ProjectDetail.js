import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';
import PageHeader from '../components/Sections/PageHeader';
import CustomCarousel from "../components/UI/CustomSlider";
import Button from '../components/UI/Button';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('next');
    const [isAnimating, setIsAnimating] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const sliderRef = useRef(null);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            handleNext();
        }
        if (touchStart - touchEnd < -50) {
            handlePrev();
        }
    };

    const handleNext = () => {
        setSlideDirection('next');
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentImageIndex(prev =>
                prev === project.screenshots.length - 1 ? 0 : prev + 1
            );
            setTimeout(() => setIsAnimating(false), 50);
        }, 300);
    };

    const handlePrev = () => {
        setSlideDirection('prev');
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentImageIndex(prev =>
                prev === 0 ? project.screenshots.length - 1 : prev - 1
            );
            setTimeout(() => setIsAnimating(false), 50);
        }, 300);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        const foundProject = projects.find(p => p.id === id);
        if (foundProject) {
            setProject(foundProject);
        }
        setLoading(false);
    }, [id]);

    useEffect(() => {
        if (project?.screenshots?.length > 1 && isAutoPlaying) {
            const interval = setInterval(() => {
                handleNext();
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [project, isAutoPlaying]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
                <p className="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
                <Link to="/projects" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary transition-colors">
                    Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <PageHeader title={project.title} />

            <div className="container mx-auto px-4 py-8">
                <Link
                    to="/projects"
                    className="inline-flex items-center mb-6 text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Projects
                </Link>

                <div className="bg-white rounded-xl overflow-hidden shadow-md mb-8">
                    <div className="p-6 flex flex-col lg:flex-row gap-8">
                        <div className="flex-1">
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map(tech => (
                                    <span
                                        key={tech}
                                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">About this project</h2>
                                <p className="text-gray-700 mb-4">{project.description}</p>

                                {project.longDescription && (
                                    <div className="text-gray-700 space-y-4">
                                        {project.longDescription.split('\n\n').map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {project.workOn?.length > 0 && (
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold mb-4">What I Worked On</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        {project.workOn.map((workOn, index) => (
                                            <li key={index}>{workOn}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {project.challenges && (
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
                                    <div className="text-gray-700 space-y-4">
                                        {project.challenges.split('\n\n').map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Project buttons */}
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
                                {project.link && (
                                    <Button
                                        href={project.link}
                                        primary
                                        target="_blank"
                                    >
                                        View Live Project
                                    </Button>
                                    
                                )}
                                {project.proofLink && (
                                    <Button
                                        href={project.proofLink}
                                        secondary
                                        target="_blank"
                                    >
                                        View Proof
                                    </Button>
                                )}
                            </div>
                        </div>

                        {project.screenshots?.length > 0 && (
                            <div className="lg:w-2/5 flex flex-col">
                                <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>

                                <CustomCarousel>
                                    {project.screenshots.map((item, index) => (
                                        <img
                                            key={index}
                                            src={item.image}
                                            alt={item.caption || `Screenshot ${index + 1}`}
                                            className="w-full h-96 object-cover rounded-lg shadow"
                                        />
                                    ))}
                                </CustomCarousel>

                                {/* Reflection section */}
                                {project.reflection && (
                                    <div className="mt-8">
                                        <h2 className="text-2xl font-bold mb-4">Reflection</h2>
                                        <div className="text-gray-700 space-y-4">
                                            {project.reflection.split('\n\n').map((paragraph, index) => (
                                                <p key={index}>{paragraph}</p>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
