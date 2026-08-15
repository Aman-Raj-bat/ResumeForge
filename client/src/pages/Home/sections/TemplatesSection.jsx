import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutTemplate, ArrowRight } from 'lucide-react';
import ModernTemplate from '../../../components/templates/ModernTemplate';
import MinimalTemplate from '../../../components/templates/MinimalTemplate';
import ProfessionalTemplate from '../../../components/templates/ProfessionalTemplate';
import CreativeTemplate from '../../../components/templates/CreativeTemplate';

const TemplatesSection = ({ dummyData }) => {
  return (
    <section id="templates" className="py-24 px-6 md:px-10 lg:px-20 max-w-[1600px] mx-auto w-full relative z-10 bg-[#0B0C10]">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4 text-purple-400 text-xs font-bold uppercase tracking-wider">
          <LayoutTemplate size={14}/> Templates
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Professional templates for every industry</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">Choose from our collection of ATS-optimized designs. From strict corporate to bold creative.</p>
        
        <Link to="/templates" className="inline-flex items-center gap-2 text-white hover:text-purple-400 font-medium transition-colors border-b border-transparent hover:border-purple-400 pb-1">
          View all templates <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { id: 'minimal', name: 'Minimal', Component: MinimalTemplate, desc: 'Clean and editorial.', ats: true },
          { id: 'modern', name: 'Modern', Component: ModernTemplate, desc: 'Contemporary layout.', ats: true },
          { id: 'professional', name: 'Professional', Component: ProfessionalTemplate, desc: 'Corporate structure.', ats: true },
          { id: 'creative', name: 'Creative', Component: CreativeTemplate, desc: 'Visually expressive.', ats: false },
        ].map((template) => (
          <div key={template.id} className="group flex flex-col items-center">
            <div className="relative w-full aspect-[1/1.414] bg-white rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 group-hover:border-purple-500/50 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]">
              <div className="absolute inset-0 origin-top-left scale-[0.3] md:scale-[0.25] lg:scale-[0.22] xl:scale-[0.28] w-[794px] h-[1123px] pointer-events-none transition-transform duration-500 group-hover:scale-[0.32] md:group-hover:scale-[0.27] lg:group-hover:scale-[0.24] xl:group-hover:scale-[0.3]">
                <template.Component data={dummyData} />
              </div>
              
              <div className="absolute inset-0 bg-[#0B0C10]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 backdrop-blur-[2px]">
                {template.ats && (
                  <div className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-400 text-[10px] uppercase font-bold px-2 py-1 rounded">
                    ATS-Friendly
                  </div>
                )}
                <h4 className="text-white text-xl font-bold mb-2">{template.name}</h4>
                <p className="text-gray-300 text-sm text-center mb-6">{template.desc}</p>
                
                <Link to="/register" className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-6 py-2.5 rounded-lg font-semibold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all text-sm w-full text-center">
                  Use Template
                </Link>
              </div>
            </div>
            <h3 className="text-white text-lg font-bold mt-5 tracking-wide group-hover:text-purple-400 transition-colors">{template.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TemplatesSection;
