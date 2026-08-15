import { Sparkles } from 'lucide-react';
import { useResumeStore } from '../../store/resumeStore';

const SummarySection = ({ register, getValues }) => {
  return (
    <div className="bg-surface rounded-xl p-5 md:p-7 border border-border-main shadow-subtle group hover:border-white/20 transition-colors">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider">Professional Summary</h3>
        <button 
          type="button"
          onClick={() => {
            useResumeStore.getState().setActiveAiContext({
              field: 'summary',
              label: 'Professional Summary'
            });
          }}
          className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 px-2 py-1 rounded transition-colors"
        >
          <Sparkles size={12} />
          Ask AI
        </button>
      </div>
      <div>
        <textarea 
          rows="4"
          className="w-full bg-[#1a1c23] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-y"
          placeholder="A brief summary of your professional background and goals."
          {...register('summary')} 
        />
      </div>
    </div>
  );
};

export default SummarySection;
