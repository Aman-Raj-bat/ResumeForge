import { useFieldArray } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';

const EducationSection = ({ control, register }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'education',
  });

  return (
    <div className="bg-surface p-6 rounded-lg border border-border-main mb-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Education</h3>
      
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
              <label className="block text-sm text-gray-600 mb-1">Institution</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
                {...register(`education.${index}.institution`)} 
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Degree</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
                {...register(`education.${index}.degree`)} 
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Field of Study</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
                {...register(`education.${index}.fieldOfStudy`)} 
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Start Date</label>
                <input 
                  type="text" 
                  placeholder="e.g. Aug 2018"
                  className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
                  {...register(`education.${index}.startDate`)} 
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">End Date</label>
                <input 
                  type="text"
                  placeholder="e.g. May 2022" 
                  className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
                  {...register(`education.${index}.endDate`)} 
                />
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Description (Optional)</label>
              <textarea 
                rows="2"
                className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none resize-y"
                {...register(`education.${index}.description`)} 
              />
            </div>
          </div>
        </div>
      ))}
      
      <button
        type="button"
        onClick={() => append({ institution: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '', description: '' })}
        className="mt-4 flex items-center gap-2 text-primary text-sm font-medium hover:underline"
      >
        <Plus size={16} /> Add Education
      </button>
    </div>
  );
};

export default EducationSection;
