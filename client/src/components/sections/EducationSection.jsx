import { useFieldArray } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';

const EducationSection = ({ control, register }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'education',
  });

  return (
    <div className="bg-surface rounded-xl p-5 md:p-7 border border-border-main shadow-subtle group hover:border-gray-300 transition-colors">
      <h3 className="text-xs font-semibold text-text-muted mb-5 uppercase tracking-wider">Education</h3>
      
      {fields.map((field, index) => (
        <div key={field.id} className="mb-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0 last:mb-0 relative group/item">
          <button 
            type="button"
            onClick={() => remove(index)}
            className="absolute -right-2 -top-2 text-text-muted hover:text-red-600 p-2 opacity-0 group-hover/item:opacity-100 transition-opacity bg-white rounded-md shadow-sm border border-gray-200 z-10"
          >
            <Trash2 size={18} />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <label className="block text-xs font-medium text-text-main mb-1.5">Institution</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all text-sm"
                {...register(`education.${index}.institution`)} 
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-main mb-1.5">Degree</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all text-sm"
                {...register(`education.${index}.degree`)} 
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-main mb-1.5">Field of Study</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all text-sm"
                {...register(`education.${index}.fieldOfStudy`)} 
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-medium text-text-main mb-1.5">Start Date</label>
                <input 
                  type="text" 
                  placeholder="e.g. Aug 2018"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all text-sm"
                  {...register(`education.${index}.startDate`)} 
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-text-main mb-1.5">End Date</label>
                <input 
                  type="text"
                  placeholder="e.g. May 2022" 
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all text-sm"
                  {...register(`education.${index}.endDate`)} 
                />
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-xs font-medium text-text-main mb-1.5">Description (Optional)</label>
              <textarea 
                rows="2"
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all text-sm resize-y"
                {...register(`education.${index}.description`)} 
              />
            </div>
          </div>
        </div>
      ))}
      
      <button
        type="button"
        onClick={() => append({ institution: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '', description: '' })}
        className="mt-4 flex items-center gap-1.5 text-text-muted text-xs font-medium hover:text-text-main transition-colors bg-gray-50 px-3 py-1.5 rounded-md border border-gray-200 hover:border-gray-300"
      >
        <Plus size={16} /> Add Education
      </button>
    </div>
  );
};

export default EducationSection;
