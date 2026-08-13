import { FileText, Plus } from 'lucide-react';

const EmptyState = ({ onCreate }) => {
  return (
    <div className="flex flex-col items-center justify-center p-16 bg-surface rounded-xl border border-border-main shadow-subtle text-center">
      <div className="w-16 h-16 bg-background border border-border-main rounded-2xl flex items-center justify-center text-text-muted mb-6 shadow-sm">
        <FileText size={28} strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-bold text-text-main mb-2 tracking-tight">No resumes yet</h3>
      <p className="text-text-muted max-w-sm mx-auto mb-8 text-sm">
        Create your first resume to start applying for jobs. Our professional workspace makes it quick and easy.
      </p>
      <button
        onClick={onCreate}
        className="flex items-center gap-2 bg-text-main text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-black transition-all shadow-subtle hover:shadow-elevated"
      >
        <Plus size={16} />
        Create Resume
      </button>
    </div>
  );
};

export default EmptyState;
