import React, { useState } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import { useAssessmentForm } from '../../contexts/AssessmentFormContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openForm } = useAssessmentForm();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-neutral-800 shadow-lg sticky top-0 z-50 border-b border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center space-x-2">
            <Compass className="h-6 w-6 sm:h-8 sm:w-8 text-tactical-400" />
            <span className="text-lg sm:text-xl font-bold text-neutral-100">TrekSnout</span>
          </div>
          
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="#services" className="text-neutral-300 hover:text-tactical-400 transition-colors font-medium text-sm lg:text-base">Services</a>
            <a href="#programs" className="text-neutral-300 hover:text-tactical-400 transition-colors font-medium text-sm lg:text-base">Programs</a>
            <a href="#facility" className="text-neutral-300 hover:text-tactical-400 transition-colors font-medium text-sm lg:text-base">Facility</a>
            <a href="#about" className="text-neutral-300 hover:text-tactical-400 transition-colors font-medium text-sm lg:text-base">About</a>
            <a href="#contact" className="text-neutral-300 hover:text-tactical-400 transition-colors font-medium text-sm lg:text-base">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <button 
              onClick={openForm}
              className="hidden md:block bg-tactical-600 text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg hover:bg-tactical-700 transition-colors font-semibold text-sm lg:text-base"
            >
              Book Free Assessment
            </button>

            <button 
              className="md:hidden p-2 text-neutral-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-neutral-800 border-t border-neutral-700">
              <a 
                href="#services" 
                className="block px-3 py-3 text-neutral-300 hover:text-tactical-400 font-medium transition-colors"
                onClick={closeMenu}
              >
                Services
              </a>
              <a 
                href="#programs" 
                className="block px-3 py-3 text-neutral-300 hover:text-tactical-400 font-medium transition-colors"
                onClick={closeMenu}
              >
                Programs
              </a>
              <a 
                href="#facility" 
                className="block px-3 py-3 text-neutral-300 hover:text-tactical-400 font-medium transition-colors"
                onClick={closeMenu}
              >
                Facility
              </a>
              <a 
                href="#about" 
                className="block px-3 py-3 text-neutral-300 hover:text-tactical-400 font-medium transition-colors"
                onClick={closeMenu}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-3 text-neutral-300 hover:text-tactical-400 font-medium transition-colors"
                onClick={closeMenu}
              >
                Contact
              </a>
              <button 
                onClick={openForm}
                className="w-full mt-3 bg-tactical-600 text-white px-4 py-3 rounded-lg hover:bg-tactical-700 transition-colors font-semibold"
              >
                Book Free Assessment
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}