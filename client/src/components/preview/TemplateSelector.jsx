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
    <div className="flex items-center gap-3">
      <LayoutTemplate size={18} className="text-gray-500" />
      <div className="flex bg-gray-100 rounded-lg p-1">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => setSelectedTemplate(template.id)}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              selectedTemplate === template.id
                ? 'bg-white text-primary shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
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
