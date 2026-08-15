import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#07080a] pt-20 pb-10 px-6 md:px-10 lg:px-20 z-10 relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white mb-4">
              <Sparkles size={20} className="text-[#a855f7]" fill="currentColor" />
              ResumeForge
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Build better resumes. Professional, ATS-friendly, and designed to get you hired.
            </p>
          </div>

          {/* Product Links */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#product" className="text-sm text-gray-400 hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#templates" className="text-sm text-gray-400 hover:text-white transition-colors">Templates</a></li>
              <li><a href="#ai-assistant" className="text-sm text-gray-400 hover:text-white transition-colors">AI Assistant</a></li>
              <li><a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4">Account</h4>
            <ul className="space-y-3">
              <li><Link to="/login" className="text-sm text-gray-400 hover:text-white transition-colors">Log In</Link></li>
              <li><Link to="/register" className="text-sm text-gray-400 hover:text-white transition-colors">Create Resume</Link></li>
              <li><Link to="/templates" className="text-sm text-gray-400 hover:text-white transition-colors">Explore Templates</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} ResumeForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
