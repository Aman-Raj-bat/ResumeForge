import { useEffect } from 'react';
import { useAppStore } from '../../store';
import { useResumeStore } from '../../store/resumeStore';
import api from '../../services/api';
import ResumeCard from '../../components/dashboard/ResumeCard';
import EmptyState from '../../components/dashboard/EmptyState';
import { Loader2, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAppStore();
  const { resumes, setResumes, isLoading, setLoading, removeResumeFromList } = useResumeStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      setLoading(true);
      const res = await api.get('/resumes');
      if (res.data.success) {
        setResumes(res.data.data);
      }
    } catch (error) {
      console.error('Error fetching resumes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateResume = async () => {
    try {
      const res = await api.post('/resumes', { title: 'Untitled Resume' });
      if (res.data.success) {
        navigate(`/resume/${res.data.data._id}`);
      }
    } catch (error) {
      console.error('Error creating resume:', error);
    }
  };

  const handleDeleteResume = async (id) => {
    try {
      const res = await api.delete(`/resumes/${id}`);
      if (res.data.success) {
        removeResumeFromList(id);
      }
    } catch (error) {
      console.error('Error deleting resume:', error);
    }
  };

  return (
    <div className="flex-grow bg-background py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500 mt-1">Welcome back, {user?.fullName}</p>
          </div>
          
          {resumes.length > 0 && (
            <button
              onClick={handleCreateResume}
              className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              <Plus size={20} />
              New Resume
            </button>
          )}
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 size={40} className="animate-spin text-primary" />
          </div>
        ) : resumes.length === 0 ? (
          <EmptyState onCreate={handleCreateResume} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {resumes.map((resume) => (
              <ResumeCard 
                key={resume._id} 
                resume={resume} 
                onDelete={handleDeleteResume}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
