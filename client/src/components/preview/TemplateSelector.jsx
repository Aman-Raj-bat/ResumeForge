import { useResumeStore } from '../../store/resumeStore';
import { LayoutTemplate } from 'lucide-react';

const templates = [
  { id: 'modern', name: 'Modern' },
  { id: 'minimal', name: 'Minimal' },
  { id: 'professional', name: 'Professional' },
];

const TemplateSelector = () => {
  const { selectedTemplate, setSelectedTemplate } = useResumeStore();

  return (
    <div className="flex items-center gap-2">
      <LayoutTemplate size={16} className="text-text-muted hidden md:block" />
      <div className="flex bg-surface border border-border-main rounded-md p-1 shadow-sm">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => setSelectedTemplate(template.id)}
            className={`px-3 py-1.5 text-xs font-semibold rounded transition-all ${
              selectedTemplate === template.id
                ? 'bg-gray-100 text-text-main shadow-subtle'
                : 'text-text-muted hover:text-text-main hover:bg-gray-50'
            }`}
          >
            {template.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
