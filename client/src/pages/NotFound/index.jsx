import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center bg-background px-6 py-20 text-center">
      <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
