import React, { useState } from 'react';
import { Menu, X, Lightbulb, Briefcase, Mail } from 'lucide-react';
import ExperienceTree from './ExperienceTree.jsx';
import PortfolioGallery from './PortfolioGallery.jsx';
import GetInTouch from './GetInTouch.jsx';
import AboutSection from './AboutSection.jsx';
import AchievementSection from './AchievementSection.jsx';
const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                THANH DUOC
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-white">
              <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
              <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
              <a href="#resume" className="hover:text-orange-500 transition-colors">Resume</a>
              <a href="#portfolio" className="hover:text-orange-500 transition-colors">Portfolio</a>
              <a href="#achievements" className="hover:text-orange-500 transition-colors">Achievements</a>
              <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-orange-500 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-4 space-y-3 text-white">
              <a href="#home" className="block hover:text-orange-500 transition-colors">Home</a>
              <a href="#about" className="block hover:text-orange-500 transition-colors">About</a>
              <a href="#resume" className="block hover:text-orange-500 transition-colors">Resume</a>
              <a href="#portfolio" className="block hover:text-orange-500 transition-colors">Portfolio</a>
              <a href="#achievements" className="block hover:text-orange-500 transition-colors">Achievements</a>
              <a href="#contact" className="block hover:text-orange-500 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <p className="text-white/70 mb-2">
                I AM THANH DUOC
              </p>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Business <span className="text-orange-500">Analyst</span>
              </h1>
              <a
                href="#contact"
                className="
                group relative inline-block px-8 py-4
                bg-gradient-to-r from-orange-500 to-orange-600
                text-white font-semibold rounded-xl
                shadow-lg shadow-orange-500/50
                hover:shadow-2xl hover:shadow-orange-500/60
                transition-all duration-300
                hover:scale-105
                cursor-pointer
                  "
              >
                <span className="relative z-10">Contact now</span>
                <div
                  className="
                  absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
                  bg-gradient-to-r from-orange-600 to-orange-700
                  transition-opacity duration-300
                "
                />
              </a>



            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-orange-500/20 to-transparent rounded-lg overflow-hidden">
                <img
                  src="img/avatar.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* About Section */}
      {/* <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-orange-500/20 to-transparent rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=600&fit=crop"
                  alt="About"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-orange-500 text-xl mb-4">
                About Me
              </h2>

              <h3 className="text-4xl font-bold mb-6 text-white">
                I am a Business <br />Analyst
              </h3>

              <p className="text-white/80 leading-relaxed">
                I enjoy understanding how people work and helping turn their needs into simple, practical ERP solutions. With experience in inventory, sales, accounting, and POS systems, and a background in web UI development using HTML, CSS/SCSS, JavaScript, React, and Bootstrap, I like building systems that are easy to use and actually helpful for everyday work.
              </p>
            </div>

          </div>
        </div>
      </section> */}

      <AboutSection />


      {/* Resume Section */}
      <section id="resume" className="py-16 px-4 sm:px-6 lg:px-8">
        <ExperienceTree />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8">
        <PortfolioGallery />
      </section>

      {/* Achivement Section */
        <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 py-20 px-4">
          <AchievementSection />
        </section>
      }
      {/* Contact Section */}

      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <GetInTouch />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Thanh Duoc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;