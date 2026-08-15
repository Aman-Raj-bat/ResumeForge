import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 px-6 md:px-10 lg:px-20 max-w-[1400px] mx-auto w-full relative z-10 mb-20">
      <div className="relative rounded-[2rem] border border-white/10 overflow-hidden bg-[#12131a] p-16 md:p-24 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Metamorphosis Background Glows */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-600/30 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Subtle Resume Outline visual behind text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] border border-white/5 rounded-lg opacity-20 pointer-events-none flex flex-col p-6">
          <div className="h-4 w-1/2 bg-white/10 rounded mb-8"></div>
          <div className="h-2 w-full bg-white/10 rounded mb-2"></div>
          <div className="h-2 w-3/4 bg-white/10 rounded mb-2"></div>
          <div className="h-2 w-full bg-white/10 rounded mb-8"></div>
          <div className="h-2 w-full bg-white/10 rounded mb-2"></div>
          <div className="h-2 w-5/6 bg-white/10 rounded"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight max-w-2xl">Turn your experience into your next opportunity.</h2>
          <p className="text-gray-400 mb-10 max-w-xl text-lg">Don't let a poorly formatted resume hold you back. Let ResumeForge handle the design so you can focus on the interview.</p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/register" className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#0B0C10] px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 text-base">
              Create Your Resume <ArrowRight size={18}/>
            </Link>
            <a href="#templates" className="w-full sm:w-auto bg-[#1a1c23] hover:bg-[#252830] border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 text-base">
              Explore Templates
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-6 font-medium">No credit card required. Free forever plan available.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
