import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/animations/PageTransition';
import FadeIn from '../../components/animations/FadeIn';
import { Sparkles, FileText, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <PageTransition className="flex-grow flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6 text-center bg-surface flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8">
            <Sparkles size={16} />
            <span>Now with Gemini AI Integration</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Craft the Perfect Resume with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">ResumeForge</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Create professional, ATS-friendly resumes in minutes using our intelligent builder. Export to a flawless PDF with a single click.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register" className="w-full sm:w-auto bg-primary text-white px-8 py-3.5 rounded-md text-lg font-medium hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Create Your Resume
            </Link>
            <Link to="/login" className="w-full sm:w-auto bg-white text-gray-700 border border-gray-300 px-8 py-3.5 rounded-md text-lg font-medium hover:bg-gray-50 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
              Sign In
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-background border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">Why Choose ResumeForge?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                <div className="w-14 h-14 bg-blue-50 rounded-xl mb-6 flex items-center justify-center text-blue-600"><FileText size={28} /></div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Professional Templates</h3>
                <p className="text-gray-600 leading-relaxed">Choose from meticulously crafted, print-ready templates designed to pass ATS systems and impress recruiters.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                <div className="w-14 h-14 bg-purple-50 rounded-xl mb-6 flex items-center justify-center text-purple-600"><Sparkles size={28} /></div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">AI-Powered Assistant</h3>
                <p className="text-gray-600 leading-relaxed">Stuck on what to write? Our Gemini integration generates bullet points, rewrites experience, and suggests skills instantly.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                <div className="w-14 h-14 bg-green-50 rounded-xl mb-6 flex items-center justify-center text-green-600"><CheckCircle2 size={28} /></div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Flawless Export</h3>
                <p className="text-gray-600 leading-relaxed">Generate 100% private, pixel-perfect A4 PDF files entirely in your browser without sacrificing quality or layout.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-800 opacity-90"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Ready to land your dream job?</h2>
          <p className="text-primary-50 text-lg mb-10 opacity-90 max-w-xl mx-auto">Join thousands of professionals who have already built their perfect resume with ResumeForge.</p>
          <Link to="/register" className="inline-block bg-white text-primary px-8 py-4 rounded-md text-lg font-bold hover:bg-gray-50 transition-colors cursor-pointer shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
            Get Started for Free
          </Link>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
