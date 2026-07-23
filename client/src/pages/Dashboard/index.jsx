import { useEffect, useState } from 'react';
import { useAuthStore } from '../../store/authStore';
import { useResumeStore } from '../../store/resumeStore';
import api from '../../services/api';
import ResumeCard from '../../components/dashboard/ResumeCard';
import EmptyState from '../../components/dashboard/EmptyState';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../../components/animations/PageTransition';
import LoadingSkeleton from '../../components/feedback/LoadingSkeleton';
import { useToast } from '../../components/ui/Toast';

const Dashboard = () => {
  const { user } = useAuthStore();
  const { resumes, setResumes, removeResumeFromList } = useResumeStore();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      setIsLoading(true);
      const res = await api.get('/resumes');
      if (res.data.success) {
        setResumes(res.data.data);
      }
    } catch (error) {
      toast.error('Failed to fetch resumes.');
      console.error('Error fetching resumes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateResume = async () => {
    try {
      const res = await api.post('/resumes', { title: 'Untitled Resume' });
      if (res.data.success) {
        toast.success('Resume created successfully!');
        navigate(`/editor/${res.data.data._id}`);
      }
    } catch (error) {
      toast.error('Failed to create resume.');
      console.error('Error creating resume:', error);
    }
  };

  const handleDeleteResume = async (id) => {
    try {
      const res = await api.delete(`/resumes/${id}`);
      if (res.data.success) {
        removeResumeFromList(id);
        toast.success('Resume deleted successfully.');
      }
    } catch (error) {
      toast.error('Failed to delete resume.');
      console.error('Error deleting resume:', error);
    }
  };

  return (
    <PageTransition className="flex-grow bg-background py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500 mt-1">Welcome back, {user?.name || user?.fullName || 'User'}</p>
          </div>
          
          {(!isLoading && resumes.length > 0) && (
            <button
              onClick={handleCreateResume}
              className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-md font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <Plus size={20} />
              New Resume
            </button>
          )}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <LoadingSkeleton key={i} className="h-56 rounded-xl" />
            ))}
          </div>
        ) : resumes.length === 0 ? (
          <EmptyState onCreate={handleCreateResume} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {resumes.map((resume, idx) => (
              <ResumeCard 
                key={resume._id} 
                resume={resume} 
                index={idx}
                onDelete={handleDeleteResume}
              />
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Dashboard;
