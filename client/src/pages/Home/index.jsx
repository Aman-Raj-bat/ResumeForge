import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import PageTransition from '../../components/animations/PageTransition';

import HeroSection from './sections/HeroSection';
import ProductSection from './sections/ProductSection';
import TemplatesSection from './sections/TemplatesSection';
import AIAssistantSection from './sections/AIAssistantSection';
import FeaturesSection from './sections/FeaturesSection';
import PricingSection from './sections/PricingSection';
import CTASection from './sections/CTASection';
import Footer from './sections/Footer';

const Home = () => {
  const [activeSection, setActiveSection] = useState('');

  // Dummy data required for TemplatesSection
  const dummyData = {
    personalInfo: {
      fullName: 'Aarav Sharma',
      email: 'aarav.sharma@example.in',
      phone: '+91 98765 43210',
      location: 'Bengaluru, Karnataka',
      linkedIn: 'linkedin.com/in/aaravsharma',
      website: 'aarav.dev'
    },
    summary: 'Passionate software engineer with 5+ years of experience in building scalable web applications. Proven ability to lead teams and deliver high-quality software on time.',
    experience: [
      {
        company: 'Tech Innovations Ltd',
        position: 'Senior Developer',
        location: 'Bengaluru',
        startDate: '2020',
        endDate: 'Present',
        current: true,
        description: 'Led the frontend team to rebuild the core platform.\nImproved performance by 40%.'
      }
    ],
    education: [
      {
        institution: 'Indian Institute of Technology',
        degree: 'B.Tech',
        fieldOfStudy: 'Computer Science',
        startDate: '2015',
        endDate: '2019'
      }
    ],
    skills: [{ name: 'React' }, { name: 'Node.js' }, { name: 'TypeScript' }],
    projects: [],
    certifications: [],
    languages: []
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['product', 'templates', 'ai-assistant', 'features', 'pricing'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in the middle of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            return;
          }
        }
      }
      
      // If we are at the very top, clear active section (Hero)
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'product', label: 'Product' },
    { id: 'templates', label: 'Templates' },
    { id: 'ai-assistant', label: 'AI Assistant' },
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' }
  ];

  return (
    <PageTransition className="flex-grow flex flex-col bg-[#0B0C10] text-white font-sans overflow-hidden selection:bg-purple-500/30">
      
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-[#0B0C10]/80 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white group">
            <Sparkles size={20} className="text-[#a855f7] group-hover:scale-110 transition-transform" fill="currentColor" />
            ResumeForge
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                className={`transition-colors relative ${activeSection === link.id ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-purple-500 rounded-t-md"></span>
                )}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm text-gray-300 hover:text-white font-medium hidden sm:block transition-colors">Log in</Link>
          <Link to="/register" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all border border-white/10">
            Create Resume →
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <HeroSection />
        <ProductSection />
        <TemplatesSection dummyData={dummyData} />
        <AIAssistantSection />
        <FeaturesSection />
        <PricingSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
      
    </PageTransition>
  );
};

export default Home;
