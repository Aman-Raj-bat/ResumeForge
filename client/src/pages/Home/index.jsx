import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/animations/PageTransition';
import FadeIn from '../../components/animations/FadeIn';
import { Sparkles, FileText, CheckCircle2, ChevronRight, Wand2, LayoutPanelLeft, FileDown, Briefcase } from 'lucide-react';

const ProductPreview = () => (
  <div className="relative w-full max-w-5xl mx-auto mt-16 rounded-xl border border-border-main bg-background shadow-elevated overflow-hidden flex flex-col md:flex-row h-[500px] text-left">
    {/* Editor Sidebar */}
    <div className="hidden md:flex flex-col w-64 bg-surface border-r border-border-main p-4">
      <div className="text-xs font-semibold text-text-muted mb-4 uppercase tracking-wider">Resume Sections</div>
      {[
        { icon: <Briefcase size={14}/>, label: 'Personal Info' },
        { icon: <FileText size={14}/>, label: 'Experience' },
        { icon: <CheckCircle2 size={14}/>, label: 'Education' },
        { icon: <LayoutDashboard size={14}/>, label: 'Projects' },
        { icon: <Wand2 size={14}/>, label: 'Skills' }
      ].map((item, i) => (
        <div key={i} className={`flex items-center gap-3 p-2 rounded-md text-sm mb-1 ${i === 1 ? 'bg-primary-50 text-primary font-medium' : 'text-text-muted hover:bg-gray-50'}`}>
          {item.icon} {item.label}
        </div>
      ))}
    </div>
    
    {/* Center Document */}
    <div className="flex-1 bg-gray-50 p-6 md:p-10 flex justify-center overflow-hidden">
      <div className="w-full max-w-[400px] h-full bg-white shadow-subtle border border-gray-200 p-6 flex flex-col gap-4 text-[10px] leading-relaxed relative">
        <div className="border-b border-gray-200 pb-3 mb-2">
          <div className="text-lg font-bold text-gray-900">Alex Carter</div>
          <div className="text-gray-500">Senior Frontend Engineer</div>
        </div>
        <div>
          <div className="font-bold text-gray-900 mb-1">Experience</div>
          <div className="mb-2">
            <div className="flex justify-between font-semibold"><span className="text-gray-800">TechFlow Inc.</span><span className="text-gray-400">2021 - Present</span></div>
            <div className="text-gray-600">Lead React Developer</div>
            <ul className="list-disc pl-4 text-gray-600 mt-1 space-y-0.5">
              <li>Architected a scalable design system used by 5+ product teams.</li>
              <li className="bg-primary-50 text-primary -mx-1 px-1 rounded inline-block">Spearheaded the migration to React 18, reducing TTI by 40%.</li>
              <li>Mentored 3 junior developers to full-stack competency.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    {/* Right Contextual / AI Panel */}
    <div className="hidden lg:flex flex-col w-72 bg-surface border-l border-border-main p-5">
      <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-4">
        <Sparkles size={16} /> AI Assistant
      </div>
      <div className="bg-gray-50 rounded-lg p-3 text-sm text-text-muted mb-4 border border-gray-200">
        <div className="text-xs font-semibold mb-1">Original Bullet</div>
        "Upgraded React version and made it faster."
      </div>
      <div className="flex justify-center my-2 text-gray-300">
        <div className="h-4 border-l border-gray-300"></div>
      </div>
      <div className="bg-primary-50 rounded-lg p-3 text-sm text-primary mb-4 border border-primary/20 relative">
        <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-primary rounded-full"></div>
        <div className="text-xs font-semibold mb-1">Improved</div>
        "Spearheaded the migration to React 18, reducing TTI by 40%."
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        <button className="px-3 py-1.5 text-xs bg-white border border-gray-200 rounded text-gray-600 hover:border-primary transition-colors">Improve</button>
        <button className="px-3 py-1.5 text-xs bg-white border border-gray-200 rounded text-gray-600 hover:border-primary transition-colors">Make ATS Friendly</button>
      </div>
    </div>
  </div>
);

// We need a dummy component for the icon since we can't import all
const LayoutDashboard = ({ size }) => <LayoutPanelLeft size={size} />;

const Home = () => {
  return (
    <PageTransition className="flex-grow flex flex-col bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 text-center flex flex-col items-center border-b border-border-main/50">
        <motion.div 
          initial={{ opacity: 0, y: 15 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto w-full"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border-main shadow-subtle text-text-muted font-medium text-xs mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            <span>ResumeForge AI is now available</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-6 tracking-tight leading-[1.1]">
            Build a resume that <br className="hidden sm:block"/> gets you noticed.
          </h1>
          <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto font-medium">
            A professional workspace to craft, refine, and export ATS-optimized resumes. Powered by contextual AI that helps you write like a top-tier candidate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register" className="w-full sm:w-auto bg-text-main text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-black transition-all shadow-subtle hover:shadow-elevated flex items-center justify-center gap-2">
              Start Building <ChevronRight size={16} />
            </Link>
            <div className="text-xs text-text-muted hidden sm:block">No credit card required.</div>
          </div>
          
          <ProductPreview />
        </motion.div>
      </section>

      {/* Editorial Features Section */}
      <section id="features" className="py-24 px-6 bg-surface border-b border-border-main/50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl font-bold text-text-main mb-4 tracking-tight">The resume is the product.</h2>
            <p className="text-lg text-text-muted max-w-xl">We replaced generic forms with a real-time professional workspace. See exactly what your document looks like as you build it.</p>
          </div>

          <div className="space-y-24">
            {/* Feature 1 */}
            <FadeIn>
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-5">
                  <div className="w-10 h-10 rounded bg-primary-50 flex items-center justify-center text-primary">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-text-main">AI-assisted writing, not generated fluff.</h3>
                  <p className="text-text-muted leading-relaxed">
                    Stop staring at a blank page. Select any bullet point and let our contextual AI suggest improvements, quantify achievements, and tailor your experience to specific roles.
                  </p>
                </div>
                <div className="flex-1 w-full bg-gray-50 rounded-xl p-8 border border-border-main flex items-center justify-center">
                  <div className="w-full max-w-sm space-y-4">
                     <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm opacity-50">
                       <p className="text-sm text-gray-500 line-through">Managed a team of developers and delivered projects.</p>
                     </div>
                     <div className="bg-white p-4 rounded-lg border-l-4 border-primary shadow-elevated transform scale-105">
                       <p className="text-sm font-medium text-gray-900">Led a cross-functional team of 6 engineers to deliver the Q3 enterprise dashboard 2 weeks ahead of schedule.</p>
                     </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Feature 2 */}
            <FadeIn delay={0.1}>
              <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                <div className="flex-1 space-y-5">
                  <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-text-main">
                    <LayoutDashboard size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-text-main">Live document preview.</h3>
                  <p className="text-text-muted leading-relaxed">
                    Every edit you make is instantly reflected on a pixel-perfect A4 document. No more guessing how your content will fit or relying on separate preview tabs.
                  </p>
                </div>
                <div className="flex-1 w-full bg-background rounded-xl p-8 border border-border-main flex items-center justify-center overflow-hidden">
                  <div className="relative w-48 h-64 bg-white border border-gray-200 shadow-md transform rotate-[-3deg] transition-transform hover:rotate-0 flex flex-col p-4">
                    <div className="h-2 w-1/2 bg-gray-300 rounded mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-1 w-full bg-gray-200 rounded"></div>
                      <div className="h-1 w-5/6 bg-gray-200 rounded"></div>
                      <div className="h-1 w-4/6 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Feature 3 */}
            <FadeIn delay={0.2}>
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-5">
                  <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-text-main">
                    <FileDown size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-text-main">Flawless PDF export.</h3>
                  <p className="text-text-muted leading-relaxed">
                    Export your resume directly to a high-quality, ATS-readable PDF. Layouts, margins, and fonts are perfectly preserved, exactly as you see them in the editor.
                  </p>
                </div>
                <div className="flex-1 w-full bg-gray-50 rounded-xl p-8 border border-border-main flex items-center justify-center">
                    <div className="bg-white px-6 py-3 rounded-full shadow-elevated border border-gray-200 flex items-center gap-3">
                      <FileDown size={18} className="text-gray-500"/>
                      <span className="text-sm font-medium">Downloading alex_carter_resume.pdf...</span>
                    </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-text-main mb-3 tracking-tight">Professional Templates</h2>
              <p className="text-text-muted max-w-lg">
                Built for humans, optimized for Applicant Tracking Systems. 
              </p>
            </div>
            <Link to="/register" className="text-sm font-semibold text-primary hover:text-primary-hover flex items-center gap-1">
              View all templates <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Minimal', desc: 'Clean, elegant, highly readable.' },
              { name: 'Modern', desc: 'Slightly opinionated typographic layout.' },
              { name: 'Professional', desc: 'Traditional structure for corporate roles.' }
            ].map((template, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[1/1.4] bg-white rounded-lg border border-border-main shadow-subtle mb-4 relative overflow-hidden transition-all group-hover:border-primary group-hover:shadow-elevated">
                  {/* Miniature abstract representation of a template */}
                  <div className="absolute inset-4 flex flex-col">
                    <div className="border-b border-gray-100 pb-2 mb-2">
                      <div className={`h-2.5 w-1/3 bg-gray-800 rounded mb-1.5 ${i===1?'mx-auto':''}`}></div>
                      <div className={`h-1.5 w-1/4 bg-gray-400 rounded ${i===1?'mx-auto':''}`}></div>
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="flex gap-4">
                        {i === 2 && <div className="w-1/4 h-20 bg-gray-50 rounded"></div>}
                        <div className="flex-1 space-y-2">
                          <div className="h-1.5 w-1/5 bg-gray-800 rounded mb-1"></div>
                          <div className="h-1 w-full bg-gray-200 rounded"></div>
                          <div className="h-1 w-full bg-gray-200 rounded"></div>
                          <div className="h-1 w-3/4 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                          <div className="h-1.5 w-1/5 bg-gray-800 rounded mb-1"></div>
                          <div className="h-1 w-full bg-gray-200 rounded"></div>
                          <div className="h-1 w-5/6 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="text-sm font-bold text-text-main">{template.name}</h4>
                <p className="text-xs text-text-muted mt-0.5">{template.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-surface border-t border-border-main text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-text-main mb-6 tracking-tight">Ready to build your resume?</h2>
          <p className="text-text-muted mb-8">Join the professionals who use ResumeForge to present their best selves.</p>
          <Link to="/register" className="inline-flex bg-text-main text-white px-8 py-3.5 rounded-md text-sm font-semibold hover:bg-black transition-all shadow-subtle hover:shadow-elevated items-center gap-2">
            Create Your Resume <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
