import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, X } from 'lucide-react';
import FadeIn from '../../../components/animations/FadeIn';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-32 px-6 md:px-10 lg:px-20 max-w-[1200px] mx-auto w-full relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Simple, transparent pricing.</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Start building your resume for free. Upgrade when you need advanced features.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
        
        {/* Free Tier */}
        <FadeIn>
          <div className="bg-[#12131a] border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col h-full hover:border-white/20 transition-colors">
            <h3 className="text-white text-2xl font-bold mb-2">Free</h3>
            <p className="text-gray-400 text-sm mb-8">For getting started.</p>
            
            <div className="text-white text-5xl font-bold tracking-tight mb-8">
              $0<span className="text-lg text-gray-500 font-medium">/forever</span>
            </div>
            
            <Link to="/register" className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-center py-3.5 rounded-xl font-semibold transition-all mb-10">
              Start for free
            </Link>
            
            <div className="space-y-4 flex-grow">
              <FeatureItem text="1 Resume Profile" />
              <FeatureItem text="Basic Templates (Minimal, Modern)" />
              <FeatureItem text="Standard PDF Export" />
              <FeatureItem text="Basic Formatting Tools" />
              <FeatureItem text="AI Assistant" disabled />
              <FeatureItem text="Premium Templates" disabled />
            </div>
          </div>
        </FadeIn>

        {/* Pro Tier */}
        <FadeIn delay={0.2}>
          <div className="relative bg-[#1a1c23] border border-purple-500/50 rounded-3xl p-8 lg:p-10 flex flex-col h-full shadow-[0_0_50px_rgba(168,85,247,0.15)]">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
              Most Popular
            </div>

            <h3 className="text-white text-2xl font-bold mb-2">Pro</h3>
            <p className="text-purple-200/70 text-sm mb-8">For serious job seekers.</p>
            
            <div className="text-white text-5xl font-bold tracking-tight mb-8">
              $15<span className="text-lg text-gray-500 font-medium">/month</span>
            </div>
            
            <Link to="/register" className="w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white text-center py-3.5 rounded-xl font-semibold transition-all mb-10 shadow-[0_0_20px_rgba(79,70,229,0.3)]">
              Upgrade to Pro
            </Link>
            
            <div className="space-y-4 flex-grow">
              <FeatureItem text="Unlimited Resume Profiles" />
              <FeatureItem text="All Premium Templates" />
              <FeatureItem text="High-Resolution PDF Export" />
              <FeatureItem text="Advanced Layout Control" />
              <FeatureItem text="AI Writing Assistant" highlighted />
              <FeatureItem text="ATS Score Optimization" highlighted />
            </div>
          </div>
        </FadeIn>

      </div>
      
      {/* Disclaimer */}
      <p className="text-center text-gray-600 text-xs mt-12">
        Pricing is conceptual for this showcase. No actual payments are integrated.
      </p>
    </section>
  );
};

const FeatureItem = ({ text, disabled, highlighted }) => (
  <div className={`flex items-start gap-3 ${disabled ? 'opacity-50' : ''}`}>
    {disabled ? (
      <X size={18} className="text-gray-600 shrink-0 mt-0.5" />
    ) : (
      <CheckCircle2 size={18} className={`${highlighted ? 'text-purple-400' : 'text-emerald-400'} shrink-0 mt-0.5`} />
    )}
    <span className={disabled ? 'text-gray-500' : (highlighted ? 'text-purple-100 font-medium' : 'text-gray-300')}>{text}</span>
  </div>
);

export default PricingSection;
