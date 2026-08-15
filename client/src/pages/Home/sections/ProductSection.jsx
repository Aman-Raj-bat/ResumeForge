import React from 'react';
import { motion } from 'framer-motion';
import { Edit3, Sparkles, LayoutTemplate, Download } from 'lucide-react';
import FadeIn from '../../../components/animations/FadeIn';

const ProductSection = () => {
  return (
    <section id="product" className="relative py-32 px-6 md:px-10 lg:px-20 max-w-[1400px] mx-auto w-full z-10 min-h-screen flex flex-col justify-center">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Your resume, from first draft to final PDF.</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Experience a seamless workflow where raw career data transforms into a polished, professional document in real-time.</p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto bg-[#12131a] rounded-[2rem] border border-white/10 p-8 md:p-12 shadow-2xl overflow-hidden">
        {/* Abstract Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Workflow Diagram */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          
          {/* Step 1: Input */}
          <FadeIn delay={0.1} className="flex flex-col items-center flex-1 w-full text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#1a1c23] border border-white/10 flex items-center justify-center mb-6 relative group">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <Edit3 size={24} className="text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-white font-bold mb-2">01 Build</h3>
            <p className="text-gray-400 text-xs leading-relaxed max-w-[180px]">Enter your raw experience, education, and skills.</p>
          </FadeIn>

          {/* Arrow */}
          <div className="hidden lg:block w-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Step 2: Refine */}
          <FadeIn delay={0.2} className="flex flex-col items-center flex-1 w-full text-center">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 relative group">
              <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-md"></div>
              <Sparkles size={24} className="text-purple-400" />
            </div>
            <h3 className="text-white font-bold mb-2">02 Refine</h3>
            <p className="text-gray-400 text-xs leading-relaxed max-w-[180px]">Our AI enhances your bullet points for maximum impact.</p>
          </FadeIn>

          {/* Arrow */}
          <div className="hidden lg:block w-8 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

          {/* Step 3: Preview */}
          <FadeIn delay={0.3} className="flex flex-col items-center flex-1 w-full text-center">
             <div className="w-16 h-16 rounded-2xl bg-[#1a1c23] border border-white/10 flex items-center justify-center mb-6 relative group">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <LayoutTemplate size={24} className="text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-white font-bold mb-2">03 Preview</h3>
            <p className="text-gray-400 text-xs leading-relaxed max-w-[180px]">Watch your document update instantly in real-time.</p>
          </FadeIn>

          {/* Arrow */}
          <div className="hidden lg:block w-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Step 4: Export */}
          <FadeIn delay={0.4} className="flex flex-col items-center flex-1 w-full text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#1a1c23] border border-white/10 flex items-center justify-center mb-6 relative group">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <Download size={24} className="text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-white font-bold mb-2">04 Export</h3>
            <p className="text-gray-400 text-xs leading-relaxed max-w-[180px]">Generate a flawless, ATS-friendly PDF in one click.</p>
          </FadeIn>

        </div>

        {/* Large Visual Metamorphosis Composition */}
        <div className="mt-20 relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden flex items-center justify-center border border-white/5 bg-[#0B0C10]/50 backdrop-blur-sm">
           {/* Left side: Messy data */}
           <motion.div 
             initial={{ x: -50, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="absolute left-[5%] md:left-[15%] w-48 space-y-4 opacity-50 blur-[1px]"
           >
              <div className="h-4 w-3/4 bg-gray-600 rounded"></div>
              <div className="h-3 w-1/2 bg-gray-700 rounded"></div>
              <div className="h-3 w-full bg-gray-700 rounded"></div>
              <div className="h-3 w-5/6 bg-gray-700 rounded"></div>
              <div className="h-4 w-1/3 bg-gray-600 rounded mt-6"></div>
              <div className="h-3 w-full bg-gray-700 rounded"></div>
           </motion.div>

           {/* Center transition magic */}
           <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="w-32 h-32 rounded-full border border-purple-500/20 border-t-purple-500 flex items-center justify-center"
             >
                <div className="w-24 h-24 rounded-full border border-pink-500/20 border-b-pink-500 animate-spin-slow"></div>
             </motion.div>
             <Sparkles size={32} className="text-white absolute z-30 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
           </div>

           {/* Right side: Polished Resume */}
           <motion.div 
             initial={{ x: 50, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="absolute right-[5%] md:right-[15%] w-[200px] h-[280px] bg-white rounded shadow-2xl p-4 overflow-hidden"
           >
              <div className="w-1/2 h-4 bg-gray-900 rounded mb-2"></div>
              <div className="w-1/3 h-2 bg-purple-600 rounded mb-6"></div>
              
              <div className="w-1/4 h-2 bg-gray-400 rounded mb-2"></div>
              <div className="w-full h-1.5 bg-gray-200 rounded mb-1"></div>
              <div className="w-full h-1.5 bg-gray-200 rounded mb-1"></div>
              <div className="w-4/5 h-1.5 bg-gray-200 rounded mb-6"></div>
              
              <div className="w-1/4 h-2 bg-gray-400 rounded mb-2"></div>
              <div className="w-3/4 h-2 bg-gray-800 rounded mb-1"></div>
              <div className="w-full h-1.5 bg-gray-200 rounded mb-1"></div>
              <div className="w-full h-1.5 bg-gray-200 rounded mb-1"></div>
              <div className="w-5/6 h-1.5 bg-gray-200 rounded"></div>
           </motion.div>
           
           {/* Particle lines connecting them */}
           <div className="absolute top-1/2 left-1/4 w-1/4 h-px bg-gradient-to-r from-gray-500 to-purple-500 opacity-50"></div>
           <div className="absolute top-1/2 right-1/4 w-1/4 h-px bg-gradient-to-l from-gray-200 to-pink-500 opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
