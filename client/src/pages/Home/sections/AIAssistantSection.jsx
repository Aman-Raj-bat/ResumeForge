import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronRight, Wand2, Zap, RefreshCw, Minimize2 } from 'lucide-react';
import FadeIn from '../../../components/animations/FadeIn';

const AIAssistantSection = () => {
  const [activeSuggestion, setActiveSuggestion] = useState('impact');

  const suggestions = {
    original: "Built a website using React.",
    impact: "Developed a responsive React-based web application with reusable components and optimized performance across devices.",
    concise: "Engineered high-performance React web application.",
    ats: "Developed a React web application, utilizing component-driven architecture to improve load times by 30%."
  };

  return (
    <section id="ai-assistant" className="relative py-32 px-6 md:px-10 lg:px-20 max-w-[1400px] mx-auto w-full z-10 min-h-screen flex items-center">
      <div className="flex flex-col lg:flex-row items-center gap-16 w-full">
        
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 text-purple-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14}/> AI Writer
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Your experience, <br/>rewritten with impact.</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
              Struggling to find the right words? Our context-aware AI analyzes your raw experience and transforms it into compelling, results-driven bullet points that grab attention.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Fix grammar and punctuation instantly', 'Tailor tone for different industries', 'Highlight measurable achievements'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <CheckIcon />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Right: Interactive AI Panel */}
        <div className="w-full lg:w-1/2">
          <FadeIn delay={0.2} className="relative w-full max-w-[500px] mx-auto">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-purple-600/20 blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="relative bg-[#111218] border border-white/10 rounded-2xl p-6 md:p-8 shadow-[30px_30px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl">
               
               <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                 <div className="flex items-center gap-3 text-white font-semibold">
                   <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                     <Wand2 size={16} className="text-white"/>
                   </div>
                   ResumeForge AI
                 </div>
               </div>
               
               {/* Original Text */}
               <div className="mb-6">
                 <div className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wider">User Input</div>
                 <div className="bg-[#1a1c23] border border-white/5 rounded-xl p-4 text-gray-300 shadow-inner text-sm line-through decoration-gray-600">
                   {suggestions.original}
                 </div>
               </div>
               
               {/* AI Suggestion */}
               <div className="mb-8 relative">
                 <div className="flex items-center gap-2 text-xs text-purple-400 mb-2 font-medium uppercase tracking-wider">
                   <Sparkles size={12}/> AI Suggestion
                 </div>
                 
                 <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/30 rounded-xl p-4 shadow-[inset_0_0_20px_rgba(168,85,247,0.1)] relative overflow-hidden min-h-[100px] flex items-center">
                   {/* Scanning Effect */}
                   <motion.div 
                     className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-purple-400 to-transparent blur-[2px]"
                     animate={{ left: ['0%', '100%', '0%'] }}
                     transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                   />
                   
                   <AnimatePresence mode="wait">
                     <motion.div
                       key={activeSuggestion}
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -10 }}
                       transition={{ duration: 0.3 }}
                       className="text-sm text-purple-50 font-medium leading-relaxed relative z-10"
                     >
                       {suggestions[activeSuggestion]}
                     </motion.div>
                   </AnimatePresence>
                 </div>
               </div>

               {/* Action Buttons */}
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 border-b border-white/10 pb-6">
                 <button 
                   onClick={() => setActiveSuggestion('impact')}
                   className={`flex items-center justify-center gap-2 text-xs py-2.5 rounded-lg font-medium transition-all ${activeSuggestion === 'impact' ? 'bg-white/10 text-white border border-white/20' : 'bg-transparent text-gray-400 hover:bg-white/5 border border-transparent hover:border-white/10'}`}
                 >
                   <Zap size={14}/> Add Impact
                 </button>
                 <button 
                   onClick={() => setActiveSuggestion('concise')}
                   className={`flex items-center justify-center gap-2 text-xs py-2.5 rounded-lg font-medium transition-all ${activeSuggestion === 'concise' ? 'bg-white/10 text-white border border-white/20' : 'bg-transparent text-gray-400 hover:bg-white/5 border border-transparent hover:border-white/10'}`}
                 >
                   <Minimize2 size={14}/> Make Concise
                 </button>
                 <button 
                   onClick={() => setActiveSuggestion('ats')}
                   className={`flex items-center justify-center gap-2 text-xs py-2.5 rounded-lg font-medium transition-all ${activeSuggestion === 'ats' ? 'bg-white/10 text-white border border-white/20' : 'bg-transparent text-gray-400 hover:bg-white/5 border border-transparent hover:border-white/10'}`}
                 >
                   <RefreshCw size={14}/> ATS Focus
                 </button>
               </div>

               {/* Final Apply Button */}
               <button className="w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white text-sm py-3.5 rounded-xl font-semibold transition-all shadow-lg flex items-center justify-center gap-2">
                 Apply to Resume <ChevronRight size={16}/>
               </button>

            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default AIAssistantSection;
