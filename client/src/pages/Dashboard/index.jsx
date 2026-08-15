import { useEffect, useState } from 'react';
import { useAuthStore } from '../../store/authStore';
import { useResumeStore } from '../../store/resumeStore';
import api from '../../services/api';
import ResumeCard from '../../components/dashboard/ResumeCard';
import EmptyState from '../../components/dashboard/EmptyState';
import { Plus, LayoutGrid, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../../components/animations/PageTransition';
import LoadingSkeleton from '../../components/feedback/LoadingSkeleton';
import { useToast } from '../../components/ui/Toast';

const Dashboard = () => {
  const { user } = useAuthStore();
  const { resumes, setResumes, removeResumeFromList } = useResumeStore();
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState('grid');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      setIsLoading(true);
      const res = await api.get('/resumes');
      if (res?.data?.success) {
        setResumes(res.data.data);
      }
    } catch (error) {
      toast.error(error.message || 'Failed to fetch resumes.');
      console.error('Error fetching resumes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateResume = async () => {
    try {
      const res = await api.post('/resumes', { title: 'Untitled Resume' });
      if (res?.data?.success) {
        toast.success('Resume created successfully!');
        navigate(`/editor/${res.data.data._id}`);
      }
    } catch (error) {
      toast.error(error.message || 'Failed to create resume.');
      console.error('Error creating resume:', error);
    }
  };

  const handleDeleteResume = async (id) => {
    try {
      const res = await api.delete(`/resumes/${id}`);
      if (res?.data?.success) {
        removeResumeFromList(id);
        toast.success('Resume deleted successfully.');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to delete resume.');
      console.error('Error deleting resume:', error);
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <PageTransition className="flex-grow bg-background">
      {/* Workspace Header */}
      <div className="bg-surface border-b border-border-main py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-text-main tracking-tight mb-2">
              {getGreeting()}, {user?.name?.split(' ')[0] || user?.fullName?.split(' ')[0] || 'User'}
            </h1>
            <p className="text-text-muted">Continue building your professional profile.</p>
          </div>
          
          {(!isLoading && resumes.length > 0) && (
            <button
              onClick={handleCreateResume}
              className="flex items-center gap-2 bg-text-main text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-black transition-all shadow-subtle hover:shadow-elevated focus:outline-none"
            >
              <Plus size={16} />
              New Resume
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-10 px-6">
        
        {/* Statistics Section */}
        {(!isLoading && resumes.length > 0) && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-surface border border-border-main rounded-xl p-5">
              <p className="text-text-muted text-sm font-medium mb-1">Total Resumes</p>
              <p className="text-3xl font-bold text-text-main">{resumes.length}</p>
            </div>
            <div className="bg-surface border border-border-main rounded-xl p-5">
              <p className="text-text-muted text-sm font-medium mb-1">Completed</p>
              <p className="text-3xl font-bold text-emerald-400">
                {resumes.filter(r => r.experience?.length > 0 && r.education?.length > 0).length}
              </p>
            </div>
            <div className="bg-surface border border-border-main rounded-xl p-5">
              <p className="text-text-muted text-sm font-medium mb-1">In Progress</p>
              <p className="text-3xl font-bold text-purple-400">
                {resumes.filter(r => !r.experience?.length || !r.education?.length).length}
              </p>
            </div>
            <div className="bg-surface border border-border-main rounded-xl p-5">
              <p className="text-text-muted text-sm font-medium mb-1">AI Suggestions</p>
              <p className="text-3xl font-bold text-text-main">Ready</p>
            </div>
          </div>
        )}

        {(!isLoading && resumes.length > 0) && (
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-text-main">Recent Resumes</h2>
            <div className="flex items-center gap-1 bg-surface border border-border-main rounded-md p-1">
              <button 
                onClick={() => setView('grid')}
                className={`p-1.5 rounded transition-colors ${view === 'grid' ? 'bg-white/10 text-text-main' : 'text-text-muted hover:text-text-main'}`}
                aria-label="Grid view"
              >
                <LayoutGrid size={16} />
              </button>
              <button 
                onClick={() => setView('list')}
                className={`p-1.5 rounded transition-colors ${view === 'list' ? 'bg-white/10 text-text-main' : 'text-text-muted hover:text-text-main'}`}
                aria-label="List view"
              >
                <List size={16} />
              </button>
            </div>
          </div>
        )}

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <LoadingSkeleton key={i} className="aspect-[1/1.2] rounded-xl" />
            ))}
          </div>
        ) : resumes.length === 0 ? (
          <EmptyState onCreate={handleCreateResume} />
        ) : (
          <div className={view === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" 
            : "flex flex-col gap-4"
          }>
            {resumes.map((resume, idx) => (
              <ResumeCard 
                key={resume._id} 
                resume={resume} 
                index={idx}
                view={view}
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
