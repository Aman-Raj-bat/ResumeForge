import React from 'react';
import { motion } from 'framer-motion';
import { LayoutTemplate, FileDown, ShieldCheck, FileText } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-10 lg:px-20 max-w-[1400px] mx-auto w-full relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Everything you need to stand out.</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">A powerful suite of tools designed to remove the friction from resume building.</p>
      </div>

      <div className="space-y-32">
        {/* Feature 1: Live Preview (Left Text / Right Visual) */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6 text-pink-400">
              <LayoutTemplate size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Live Resume Preview</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Stop guessing what your exported file will look like. Every change you make in the editor is instantly reflected on a pixel-perfect A4 document right next to it.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300 text-sm"><CheckIcon color="text-pink-400"/> True 1:1 scale representation</li>
              <li className="flex items-center gap-3 text-gray-300 text-sm"><CheckIcon color="text-pink-400"/> Instant visual feedback</li>
              <li className="flex items-center gap-3 text-gray-300 text-sm"><CheckIcon color="text-pink-400"/> No rendering delays</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="bg-[#12131a] border border-white/10 rounded-2xl p-6 md:p-8 flex items-center justify-center relative overflow-hidden h-[350px]">
              <div className="absolute top-1/2 right-0 w-64 h-64 bg-pink-500/10 blur-[80px] rounded-full"></div>
              {/* Mockup split screen */}
              <div className="flex gap-4 w-full h-full relative z-10">
                <div className="flex-1 bg-[#1a1c23] border border-white/5 rounded-lg p-4 shadow-inner">
                  <div className="h-3 w-1/3 bg-gray-700 rounded mb-4"></div>
                  <div className="h-2 w-full bg-gray-600 rounded mb-2"></div>
                  <div className="h-2 w-full bg-gray-600 rounded mb-2"></div>
                  <div className="h-2 w-4/5 bg-gray-600 rounded"></div>
                </div>
                <div className="flex-1 bg-white rounded-lg shadow-xl p-4 overflow-hidden transform rotate-2">
                  <div className="h-3 w-1/3 bg-gray-900 rounded mb-4"></div>
                  <div className="h-2 w-full bg-gray-300 rounded mb-2"></div>
                  <div className="h-2 w-full bg-gray-300 rounded mb-2"></div>
                  <div className="h-2 w-4/5 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: ATS Friendly (Right Text / Left Visual) */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 order-1 lg:order-1">
            <div className="bg-[#12131a] border border-white/10 rounded-2xl p-6 md:p-8 flex items-center justify-center relative overflow-hidden h-[350px]">
              <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full"></div>
              {/* Mockup Annotated Document */}
              <div className="w-[60%] h-full bg-white rounded-lg shadow-xl p-6 relative z-10">
                <div className="w-full h-4 bg-gray-900 rounded mb-6"></div>
                <div className="relative">
                   <div className="w-1/3 h-2 bg-blue-600 rounded mb-2"></div>
                   <div className="absolute -left-10 top-0 bg-blue-100 text-blue-700 text-[8px] font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1 border border-blue-200">
                     <ShieldCheck size={10}/> Standard Heading
                   </div>
                </div>
                <div className="w-full h-1.5 bg-gray-300 rounded mb-1"></div>
                <div className="w-5/6 h-1.5 bg-gray-300 rounded mb-6"></div>
                
                <div className="relative">
                   <div className="w-1/4 h-2 bg-blue-600 rounded mb-2"></div>
                   <div className="absolute -right-8 top-0 bg-emerald-100 text-emerald-700 text-[8px] font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1 border border-emerald-200">
                     <ShieldCheck size={10}/> Parseable Lists
                   </div>
                </div>
                <div className="w-3/4 h-1.5 bg-gray-300 rounded mb-1"></div>
                <div className="w-full h-1.5 bg-gray-300 rounded mb-1"></div>
                <div className="w-4/5 h-1.5 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-2 lg:order-2">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">ATS-Friendly Structure</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Our templates are engineered from the ground up to be readable by Applicant Tracking Systems. We use proper semantic structuring so your data doesn't get lost in translation.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300 text-sm"><CheckIcon color="text-blue-400"/> Clear document hierarchy</li>
              <li className="flex items-center gap-3 text-gray-300 text-sm"><CheckIcon color="text-blue-400"/> Machine-readable text layers</li>
              <li className="flex items-center gap-3 text-gray-300 text-sm"><CheckIcon color="text-blue-400"/> Standardized section markers</li>
            </ul>
          </div>
        </div>

        {/* Feature 3: One-Click Export (Left Text / Right Visual) */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400">
              <FileDown size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">One-Click PDF Export</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              When you're ready to apply, grab your pixel-perfect PDF in a single click. No complex formatting dialogs, no unexpected layout shifts. Just a professional document ready to send.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300 text-sm"><CheckIcon color="text-emerald-400"/> High-resolution output</li>
              <li className="flex items-center gap-3 text-gray-300 text-sm"><CheckIcon color="text-emerald-400"/> Preserved text selection</li>
              <li className="flex items-center gap-3 text-gray-300 text-sm"><CheckIcon color="text-emerald-400"/> Clickable links included</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="bg-[#12131a] border border-white/10 rounded-2xl p-6 md:p-8 flex items-center justify-center relative overflow-hidden h-[350px]">
              <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full"></div>
              
              {/* Mockup Export Animation */}
              <div className="relative flex flex-col items-center">
                 <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                   className="w-32 h-40 bg-white rounded-lg shadow-2xl p-3 relative z-20 mb-4"
                 >
                    <div className="w-full h-3 bg-gray-900 rounded mb-4"></div>
                    <div className="w-full h-1 bg-gray-300 rounded mb-1"></div>
                    <div className="w-full h-1 bg-gray-300 rounded mb-1"></div>
                    <div className="w-4/5 h-1 bg-gray-300 rounded"></div>
                 </motion.div>
                 
                 <motion.div
                   className="absolute top-16 z-30"
                   animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 >
                   <div className="bg-emerald-500 text-white p-3 rounded-full shadow-lg shadow-emerald-500/30">
                     <FileDown size={24}/>
                   </div>
                 </motion.div>

                 <div className="bg-[#1a1c23] border border-white/10 px-4 py-2 rounded-lg text-sm text-gray-300 flex items-center gap-2 mt-4 relative z-10 shadow-xl">
                   <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                   Downloading alex_carter_resume.pdf
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 4: Resume Management (Right Text / Left Visual) */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 order-1 lg:order-1">
            <div className="bg-[#12131a] border border-white/10 rounded-2xl p-6 md:p-8 flex items-center justify-center relative overflow-hidden h-[350px]">
              <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full"></div>
              {/* Mockup Dashboard */}
              <div className="w-[90%] bg-[#1a1c23] rounded-xl border border-white/10 shadow-2xl overflow-hidden relative z-10">
                <div className="border-b border-white/5 p-4 flex items-center justify-between">
                  <div className="text-sm font-bold text-white">My Resumes</div>
                  <div className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-1 rounded">3 Resumes</div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="bg-[#12131a] p-3 rounded-lg border border-white/5 flex items-center justify-between group hover:border-amber-500/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-10 bg-white rounded shadow-sm"></div>
                      <div>
                        <div className="text-sm font-medium text-white mb-0.5">Frontend Developer</div>
                        <div className="text-[10px] text-gray-500">Edited 2 hours ago</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#12131a] p-3 rounded-lg border border-white/5 flex items-center justify-between group hover:border-amber-500/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-10 bg-white rounded shadow-sm"></div>
                      <div>
                        <div className="text-sm font-medium text-white mb-0.5">Full Stack Role</div>
                        <div className="text-[10px] text-gray-500">Edited 3 days ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-2 lg:order-2">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 text-amber-400">
              <FileText size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Manage Multiple Profiles</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Applying for different types of roles? Create and manage multiple versions of your resume from a single dashboard. Tailor your experience to the specific job without losing your master copy.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300 text-sm"><CheckIcon color="text-amber-400"/> Duplicate existing resumes</li>
              <li className="flex items-center gap-3 text-gray-300 text-sm"><CheckIcon color="text-amber-400"/> Centralized dashboard</li>
              <li className="flex items-center gap-3 text-gray-300 text-sm"><CheckIcon color="text-amber-400"/> Easy template switching</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckIcon = ({ color }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={color}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default FeaturesSection;
