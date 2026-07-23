import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="border-b border-border-main bg-surface px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-bold text-primary">
          ResumeForge
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-sm font-medium hover:text-primary transition-colors">
          Login
        </button>
        <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
