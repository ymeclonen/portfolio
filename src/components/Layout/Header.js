import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Check if path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo flex flex-row items-center gap-4">
          <img src="/assets/logo.svg" alt=""/>
          <Link to="/" className="font-heading text-2xl font-bold text-black">Yme Clonen</Link>
        </div>
        <nav id="navbar">
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link 
                to="/" 
                className={`font-medium text-gray-800 hover:text-primary ${isActive('/') ? 'border-b-2 border-primary pb-1' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`font-medium text-gray-800 hover:text-primary ${isActive('/about') ? 'border-b-2 border-primary pb-1' : ''}`}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link 
                to="/cv" 
                className={`font-medium text-gray-800 hover:text-primary ${isActive('/cv') ? 'border-b-2 border-primary pb-1' : ''}`}
              >
                CV
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={`font-medium text-gray-800 hover:text-primary ${isActive('/projects') ? 'border-b-2 border-primary pb-1' : ''}`}
              >
                Projects
              </Link>
            </li>
          </ul>
          <div 
            className="md:hidden menu-toggle cursor-pointer" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaBars className="text-xl" />
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white w-full py-4 shadow-md ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col space-y-4 px-4">
          <li>
            <Link 
              to="/" 
              className="block py-2 font-medium text-gray-800 hover:text-primary"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="block py-2 font-medium text-gray-800 hover:text-primary"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link 
              to="/cv" 
              className="block py-2 font-medium text-gray-800 hover:text-primary"
            >
              CV
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className="block py-2 font-medium text-gray-800 hover:text-primary"
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;