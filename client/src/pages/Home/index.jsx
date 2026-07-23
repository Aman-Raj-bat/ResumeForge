import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="flex-grow flex flex-col">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center bg-surface">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Craft the Perfect Resume with <span className="text-primary">ResumeForge</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Create professional, ATS-friendly resumes in minutes using our intelligent builder.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-md text-lg font-medium hover:opacity-90 transition-opacity cursor-pointer">
            Create Your Resume
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ResumeForge?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-surface p-8 rounded-xl shadow-sm border border-border-main">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mb-6 flex items-center justify-center text-primary font-bold">{item}</div>
                <h3 className="text-xl font-semibold mb-3">Powerful Feature</h3>
                <p className="text-gray-600">Placeholder text for feature description. This highlights the benefits and what makes our platform unique.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Professional Templates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-background h-80 rounded-xl flex items-center justify-center text-gray-400 border border-border-main shadow-sm">
                Template {item} Preview
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Powered by AI</h2>
          <p className="text-xl text-gray-600 mb-10">
            Let our AI assistant help you write compelling bullet points, summaries, and optimize for ATS.
          </p>
          <div className="h-64 bg-surface border border-border-main rounded-xl shadow-sm flex items-center justify-center text-gray-500">
            [AI Feature Interactive Demo Placeholder]
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-white text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to land your dream job?</h2>
        <button className="bg-white text-primary px-8 py-3 rounded-md text-lg font-bold hover:bg-gray-50 transition-colors cursor-pointer">
          Get Started for Free
        </button>
      </section>
    </div>
  );
};

export default Home;
