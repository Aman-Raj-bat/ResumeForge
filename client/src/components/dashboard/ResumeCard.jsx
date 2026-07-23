import { FileText, Edit2, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FadeIn from '../../components/animations/FadeIn';

const ResumeCard = ({ resume, onDelete, index = 0 }) => {
  const navigate = useNavigate();
  
  const handleEdit = () => {
    navigate(`/editor/${resume._id}`);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <FadeIn delay={index * 0.1} className="h-full">
      <div className="bg-surface border border-border-main rounded-xl overflow-hidden hover:shadow-md transition-shadow group flex flex-col h-full">
        <div className="h-40 bg-gray-100 flex items-center justify-center border-b border-border-main relative">
          <FileText size={48} className="text-gray-300" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <button 
              onClick={handleEdit}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              title="Edit Resume"
            >
              <Edit2 size={18} />
            </button>
            <button 
              onClick={() => onDelete(resume._id)}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-500 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              title="Delete Resume"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-900 truncate mb-1" title={resume.title}>
            {resume.title}
          </h3>
          <p className="text-xs text-gray-500 mt-auto">
            Last updated {formatDate(resume.updatedAt)}
          </p>
        </div>
      </div>
    </FadeIn>
  );
};

export default ResumeCard;
