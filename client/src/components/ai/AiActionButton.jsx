import { Sparkles } from 'lucide-react';

const AiActionButton = ({ onClick, label = 'AI Assist', className = '' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-primary bg-primary/5 border border-primary/20 rounded-md hover:bg-primary/10 hover:border-primary/30 transition-all shadow-sm ${className}`}
    >
      <Sparkles size={14} className="text-primary" />
      {label}
    </button>
  );
};

export default AiActionButton;
