import { useFieldArray } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';

const ProjectsSection = ({ control, register }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'projects',
  });

  return (
    <div className="bg-surface p-6 rounded-lg border border-border-main mb-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Projects</h3>
      
      {fields.map((field, index) => (
        <div key={field.id} className="mb-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0 last:mb-0 relative">
          <button 
            type="button"
            onClick={() => remove(index)}
            className="absolute -right-2 -top-2 text-red-400 hover:text-red-600 p-2"
          >
            <Trash2 size={18} />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Project Name</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
                {...register(`projects.${index}.name`)} 
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">URL (Optional)</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
                {...register(`projects.${index}.url`)} 
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Technologies Used</label>
              <input 
                type="text" 
                placeholder="React, Node.js, MongoDB"
                className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
                {...register(`projects.${index}.technologies`)} 
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Description</label>
              <textarea 
                rows="3"
                className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none resize-y"
                {...register(`projects.${index}.description`)} 
              />
            </div>
          </div>
        </div>
      ))}
      
      <button
        type="button"
        onClick={() => append({ name: '', description: '', url: '', technologies: '' })}
        className="mt-4 flex items-center gap-2 text-primary text-sm font-medium hover:underline"
      >
        <Plus size={16} /> Add Project
      </button>
    </div>
  );
};

export default ProjectsSection;
