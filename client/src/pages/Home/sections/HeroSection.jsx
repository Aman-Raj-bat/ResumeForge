import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, User, FileText, Briefcase, CheckCircle2, Wand2, LayoutPanelLeft, ChevronRight } from 'lucide-react';

const HeroGraphics = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center perspective-[2000px] overflow-hidden md:overflow-visible">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#4f46e5] rounded-full blur-[120px] opacity-40"></div>
      
      <div className="relative w-full max-w-[600px] h-full" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-12deg) rotateX(4deg) scale(0.95)' }}>
        <div className="absolute left-10 bottom-32 w-12 h-12 bg-purple-500 rounded-full blur-[2px] shadow-[0_0_30px_#a855f7] transform translateZ(20px)"></div>
        <div className="absolute left-0 bottom-20 w-48 h-48 border border-purple-500/20 rounded-full transform rotateX(70deg) translateZ(-50px)"></div>

        <div className="absolute left-0 top-24 w-48 bg-[#0f1015] border border-white/10 rounded-xl p-4 shadow-[20px_20px_50px_rgba(0,0,0,0.8)] transform translateZ(30px) backdrop-blur-xl">
          <div className="text-[9px] text-gray-500 mb-4 uppercase tracking-wider font-semibold">Sections</div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 p-2 rounded text-gray-400 text-xs hover:bg-white/5"><User size={14}/> Personal Info</div>
            <div className="flex items-center gap-2 p-2 rounded text-gray-400 text-xs hover:bg-white/5"><FileText size={14}/> Summary</div>
            <div className="flex items-center gap-2 p-2 rounded bg-purple-500/20 text-purple-400 text-xs border border-purple-500/20 shadow-[inset_0_0_10px_rgba(168,85,247,0.1)]"><Briefcase size={14}/> Experience</div>
            <div className="flex items-center gap-2 p-2 rounded text-gray-400 text-xs hover:bg-white/5"><CheckCircle2 size={14}/> Education</div>
            <div className="flex items-center gap-2 p-2 rounded text-gray-400 text-xs hover:bg-white/5"><Wand2 size={14}/> Skills</div>
            <div className="flex items-center gap-2 p-2 rounded text-gray-400 text-xs hover:bg-white/5"><LayoutPanelLeft size={14}/> Projects</div>
          </div>
        </div>

        <div className="absolute left-[35%] top-10 w-[380px] h-[520px] bg-[#f8f9fa] rounded-lg shadow-[0_30px_60px_rgba(0,0,0,0.7)] p-8 transform translateZ(70px) text-left overflow-hidden">
          <div className="text-gray-900 font-bold text-2xl tracking-tight">ALEX CARTER</div>
          <div className="text-gray-600 text-xs mb-4 font-medium">Frontend Developer</div>
          <div className="flex gap-4 text-[9px] text-gray-500 mb-6">
            <span>alex.carter@email.com</span>
            <span>+1 (415) 123-4567</span>
          </div>
          
          <div className="text-[9px] font-bold text-gray-400 mb-2 tracking-widest uppercase border-b border-gray-200 pb-1">Summary</div>
          <div className="text-[10px] text-gray-700 mb-6 leading-relaxed">
            Frontend developer with 4+ years of experience building responsive, user-focused web applications. Passionate about clean code, performance, and great user experiences.
          </div>

          <div className="text-[9px] font-bold text-gray-400 mb-2 tracking-widest uppercase border-b border-gray-200 pb-1">Experience</div>
          <div className="space-y-4">
             <div>
               <div className="flex justify-between items-baseline mb-0.5">
                 <div className="text-[11px] font-bold text-gray-800">TechFlow Inc.</div>
                 <div className="text-[9px] text-gray-500">2021 - Present</div>
               </div>
               <div className="text-[10px] text-gray-600 mb-1.5 font-medium">Senior Frontend Developer</div>
               <div className="space-y-1.5 pl-3 border-l-2 border-gray-200">
                 <div className="h-1.5 w-11/12 bg-gray-200 rounded"></div>
                 <div className="h-1.5 w-4/5 bg-gray-200 rounded"></div>
                 <div className="p-1.5 -ml-1.5 bg-purple-100/50 border border-purple-200 rounded my-1 shadow-sm relative">
                   <div className="absolute -left-[7px] top-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                   <div className="text-[9px] text-purple-900 leading-tight">Improved application performance by 40% through code-splitting and lazy loading.</div>
                 </div>
                 <div className="h-1.5 w-10/12 bg-gray-200 rounded"></div>
               </div>
             </div>
          </div>
        </div>

        <div className="absolute right-[-40px] top-32 w-64 bg-[#111218] border border-white/10 rounded-xl p-5 shadow-[30px_30px_60px_rgba(0,0,0,0.9)] transform translateZ(120px) backdrop-blur-xl">
           <div className="flex items-center justify-between mb-5 border-b border-white/10 pb-3">
             <div className="flex items-center gap-2 text-white text-sm font-semibold">
               <Sparkles size={14} className="text-purple-400"/> AI Assistant
             </div>
             <div className="w-4 h-4 rounded-full hover:bg-white/10 flex items-center justify-center cursor-pointer">
               <span className="text-gray-400 text-xs">×</span>
             </div>
           </div>
           
           <div className="text-[10px] text-gray-400 mb-2">Improve this bullet</div>
           <div className="bg-[#1a1c23] border border-white/5 rounded-lg p-3 mb-4 text-[11px] text-gray-300 shadow-inner">
             "Improved application performance by 40%."
           </div>
           
           <div className="text-[10px] text-purple-400 mb-2 font-medium">Suggested</div>
           <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-3 mb-4 text-[11px] text-purple-100 shadow-[inset_0_0_15px_rgba(168,85,247,0.05)]">
             Optimized application performance by 40% by implementing code-splitting, lazy loading, and caching strategies.
           </div>

           <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
             <button className="flex-1 bg-[#4f46e5] hover:bg-[#4338ca] text-white text-xs py-2 rounded-md font-medium transition-colors">Apply</button>
             <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs py-2 rounded-md font-medium transition-colors">Regenerate</button>
           </div>
           
           <div className="space-y-2">
             <div className="text-[10px] text-gray-400 hover:text-white cursor-pointer flex items-center justify-between">Make it more concise <ChevronRight size={10}/></div>
             <div className="text-[10px] text-gray-400 hover:text-white cursor-pointer flex items-center justify-between">Add more impact <ChevronRight size={10}/></div>
             <div className="text-[10px] text-gray-400 hover:text-white cursor-pointer flex items-center justify-between">Fix grammar & tone <ChevronRight size={10}/></div>
           </div>
        </div>

      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-6 md:px-10 lg:px-20 max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center z-10 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, x: -30 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full lg:w-[45%] z-20 text-left pr-0 lg:pr-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <span className="bg-purple-500/20 text-purple-300 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
            <Sparkles size={10}/> New
          </span>
          <span className="text-gray-300 text-xs font-medium">AI-Powered Writing is here!</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-[70px] font-bold text-white mb-6 tracking-tight leading-[1.05]">
          Transform your <br/>
          <span className="bg-gradient-to-r from-purple-200 via-purple-400 to-pink-500 bg-clip-text text-transparent">experience into</span><br/>
          <span className="bg-gradient-to-r from-purple-200 via-purple-400 to-pink-500 bg-clip-text text-transparent">opportunity.</span>
        </h1>
        
        <p className="text-gray-400 text-base md:text-lg mb-10 max-w-md leading-relaxed font-medium">
          ResumeForge is your all-in-one workspace to create, refine, and export ATS-friendly resumes that open doors.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <Link to="/register" className="w-full sm:w-auto bg-[#4f46e5] hover:bg-[#4338ca] text-white px-6 py-3.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(79,70,229,0.4)]">
            Start Building — It's Free <ArrowRight size={16} />
          </Link>
          <a href="#templates" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center">
            Explore Templates
          </a>
        </div>
        
        <div className="flex items-center gap-4">
           <div className="flex -space-x-3">
             <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-9 h-9 rounded-full border-2 border-[#0B0C10] relative z-30" />
             <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-9 h-9 rounded-full border-2 border-[#0B0C10] relative z-20" />
             <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-9 h-9 rounded-full border-2 border-[#0B0C10] relative z-10" />
           </div>
           <span className="text-xs text-gray-400 font-medium">Trusted by 25,000+ professionals worldwide</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        className="w-full lg:w-[55%] mt-16 lg:mt-0"
      >
        <HeroGraphics />
      </motion.div>
    </section>
  );
};

export default HeroSection;
