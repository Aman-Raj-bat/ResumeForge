import { FileText, MoreVertical, Trash2, Edit2, Copy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FadeIn from '../../components/animations/FadeIn';
import { useState } from 'react';

const ResumeCard = ({ resume, onDelete, index = 0, view = 'grid' }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  
  const handleEdit = () => {
    navigate(`/editor/${resume._id}`);
  };

  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Derived state to simulate metadata visually
  const isComplete = resume.experience?.length > 0 && resume.education?.length > 0;

  if (view === 'list') {
    return (
      <FadeIn delay={index * 0.05} className="w-full">
        <div className="bg-surface border border-border-main rounded-lg p-4 flex items-center justify-between hover:border-gray-300 transition-colors group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-16 bg-gray-50 border border-gray-200 rounded flex items-center justify-center">
              <FileText size={20} className="text-gray-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-main cursor-pointer hover:text-primary transition-colors" onClick={handleEdit}>
                {resume.title}
              </h3>
              <p className="text-xs text-text-muted mt-1">Edited {formatDate(resume.updatedAt)}</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className={`hidden md:inline-flex text-xs px-2 py-1 rounded-full ${isComplete ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
              {isComplete ? 'Complete' : 'Draft'}
            </span>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={handleEdit} className="p-1.5 text-text-muted hover:text-text-main rounded hover:bg-gray-100 transition-colors" title="Edit">
                <Edit2 size={16} />
              </button>
              <button onClick={() => onDelete(resume._id)} className="p-1.5 text-text-muted hover:text-red-600 rounded hover:bg-red-50 transition-colors" title="Delete">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </FadeIn>
    );
  }

  // Grid View
  return (
    <FadeIn delay={index * 0.1} className="h-full">
      <div className="bg-surface border border-border-main rounded-xl overflow-hidden hover:shadow-elevated hover:border-gray-300 transition-all group flex flex-col h-full relative">
        {/* Document Preview Area */}
        <div 
          className="aspect-[1/1.2] bg-gray-50 border-b border-border-main p-4 cursor-pointer relative overflow-hidden flex flex-col"
          onClick={handleEdit}
        >
          {/* Abstract representation of the resume */}
          <div className="w-full h-full bg-white shadow-subtle border border-gray-200 p-3 flex flex-col gap-2">
            <div className="border-b border-gray-100 pb-2">
              <div className="h-1.5 w-1/2 bg-gray-800 rounded mb-1"></div>
              <div className="h-1 w-1/3 bg-gray-400 rounded"></div>
            </div>
            <div className="flex-1 space-y-2">
              <div className="h-1 w-1/4 bg-gray-800 rounded"></div>
              <div className="space-y-1">
                <div className="h-0.5 w-full bg-gray-200 rounded"></div>
                <div className="h-0.5 w-full bg-gray-200 rounded"></div>
                <div className="h-0.5 w-4/5 bg-gray-200 rounded"></div>
              </div>
              <div className="h-1 w-1/4 bg-gray-800 rounded mt-3"></div>
              <div className="space-y-1">
                <div className="h-0.5 w-full bg-gray-200 rounded"></div>
                <div className="h-0.5 w-5/6 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="bg-text-main text-white text-xs font-semibold px-4 py-2 rounded-full shadow-elevated">
              Continue Editing
            </span>
          </div>
        </div>
        
        {/* Card Metadata */}
        <div className="p-4 flex flex-col bg-surface">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-sm font-bold text-text-main truncate pr-2 cursor-pointer hover:text-primary transition-colors" title={resume.title} onClick={handleEdit}>
              {resume.title}
            </h3>
            <div className="relative">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMenu(!showMenu);
                }} 
                className="text-text-muted hover:text-text-main p-0.5 rounded-md hover:bg-gray-100 transition-colors -mr-1"
              >
                <MoreVertical size={16} />
              </button>
              
              {showMenu && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setShowMenu(false)}></div>
                  <div className="absolute right-0 top-6 w-36 bg-surface border border-border-main rounded-lg shadow-elevated z-20 py-1 overflow-hidden">
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleEdit(); }}
                      className="w-full text-left px-3 py-2 text-xs font-medium text-text-main hover:bg-gray-50 flex items-center gap-2"
                    >
                      <Edit2 size={14} /> Edit
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); onDelete(resume._id); }}
                      className="w-full text-left px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 flex items-center gap-2"
                    >
                      <Trash2 size={14} /> Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between mt-1">
            <p className="text-[11px] text-text-muted font-medium">
              Edited {formatDate(resume.updatedAt)}
            </p>
            <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${isComplete ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-text-muted'}`}>
              {isComplete ? 'Ready' : 'Draft'}
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default ResumeCard;
