import { FileText, Edit2, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ResumeCard = ({ resume, onDelete }) => {
  const navigate = useNavigate();
  
  const handleEdit = () => {
    navigate(`/resume/${resume._id}`);
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${resume.title}"?`)) {
      onDelete(resume._id);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-surface border border-border-main rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
      <div className="h-40 bg-gray-100 flex items-center justify-center border-b border-border-main relative">
        <FileText size={48} className="text-gray-300" />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <button 
            onClick={handleEdit}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform"
            title="Edit Resume"
          >
            <Edit2 size={18} />
          </button>
          <button 
            onClick={handleDelete}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-500 hover:scale-110 transition-transform"
            title="Delete Resume"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 truncate">{resume.title || 'Untitled Resume'}</h3>
        <p className="text-xs text-gray-500 mt-1">
          Last updated {formatDate(resume.updatedAt)}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
