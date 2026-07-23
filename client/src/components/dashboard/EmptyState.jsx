import { FileText, Plus } from 'lucide-react';

const EmptyState = ({ onCreate }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-surface rounded-xl border border-dashed border-gray-300 text-center">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
        <FileText size={32} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">No resumes yet</h3>
      <p className="text-gray-500 max-w-md mx-auto mb-8">
        Create your first resume to start applying for jobs. Our intelligent builder makes it quick and easy.
      </p>
      <button
        onClick={onCreate}
        className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
      >
        <Plus size={20} />
        Create Resume
      </button>
    </div>
  );
};

export default EmptyState;
