import { useFieldArray } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';

const ExperienceSection = ({ control, register }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experience',
  });

  return (
    <div className="bg-surface p-6 rounded-lg border border-border-main mb-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Experience</h3>
      
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
              <label className="block text-sm text-gray-600 mb-1">Company</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
                {...register(`experience.${index}.company`)} 
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Position</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
                {...register(`experience.${index}.position`)} 
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Location</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
                {...register(`experience.${index}.location`)} 
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Start Date</label>
                <input 
                  type="text" 
                  placeholder="e.g. Jun 2022"
                  className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
                  {...register(`experience.${index}.startDate`)} 
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">End Date</label>
                <input 
                  type="text"
                  placeholder="e.g. Present" 
                  className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
                  {...register(`experience.${index}.endDate`)} 
                />
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Description (Bullet points)</label>
              <textarea 
                rows="4"
                className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none resize-y"
                placeholder="- Developed a new feature..."
                {...register(`experience.${index}.description`)} 
              />
            </div>
          </div>
        </div>
      ))}
      
      <button
        type="button"
        onClick={() => append({ company: '', position: '', location: '', startDate: '', endDate: '', current: false, description: '' })}
        className="mt-4 flex items-center gap-2 text-primary text-sm font-medium hover:underline"
      >
        <Plus size={16} /> Add Experience
      </button>
    </div>
  );
};

export default ExperienceSection;
