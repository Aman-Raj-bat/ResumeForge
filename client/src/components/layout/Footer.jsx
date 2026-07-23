import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border-main bg-surface py-12 mt-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-bold text-primary mb-4 block">
            ResumeForge
          </Link>
          <p className="text-sm text-gray-500 max-w-sm">
            Build your professional resume in minutes with our AI-powered tools. 
            Stand out from the crowd and land your dream job.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
            <li><a href="#templates" className="hover:text-primary transition-colors">Templates</a></li>
            <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Socials</h4>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-200 hover:bg-primary transition-colors cursor-pointer" title="Twitter Placeholder"></div>
            <div className="w-8 h-8 rounded-full bg-gray-200 hover:bg-primary transition-colors cursor-pointer" title="LinkedIn Placeholder"></div>
            <div className="w-8 h-8 rounded-full bg-gray-200 hover:bg-primary transition-colors cursor-pointer" title="GitHub Placeholder"></div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} ResumeForge. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
