import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-transparent px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8 text-gray-400">
          <Search size={40} />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center justify-center bg-primary text-white px-8 py-3.5 rounded-md text-lg font-medium hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-primary/30"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
