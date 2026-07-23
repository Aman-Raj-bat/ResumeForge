import { Sparkles } from 'lucide-react';

const AiActionButton = ({ onClick, label = 'AI Assist', className = '' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-purple-700 bg-purple-50 border border-purple-200 rounded-md hover:bg-purple-100 hover:border-purple-300 transition-colors ${className}`}
    >
      <Sparkles size={14} className="text-purple-600" />
      {label}
    </button>
  );
};

export default AiActionButton;
