import { useFieldArray } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';

const LanguagesSection = ({ control, register }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'languages',
  });

  return (
    <div className="bg-surface rounded-xl p-5 md:p-7 border border-border-main shadow-subtle group hover:border-gray-300 transition-colors">
      <h3 className="text-xs font-semibold text-text-muted mb-5 uppercase tracking-wider">Languages</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="relative flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Language (e.g. English)"
              className="w-1/2 px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
              {...register(`languages.${index}.name`)} 
            />
            <input 
              type="text" 
              placeholder="Proficiency (e.g. Native)"
              className="w-1/2 px-3 py-2 pr-8 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
              {...register(`languages.${index}.proficiency`)} 
            />
            <button 
              type="button"
              onClick={() => remove(index)}
              className="absolute right-2 text-red-400 hover:text-red-600"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
      
      <button
        type="button"
        onClick={() => append({ name: '', proficiency: '' })}
        className="mt-4 flex items-center gap-1.5 text-text-muted text-xs font-medium hover:text-text-main transition-colors bg-gray-50 px-3 py-1.5 rounded-md border border-gray-200 hover:border-gray-300"
      >
        <Plus size={16} /> Add Language
      </button>
    </div>
  );
};

export default LanguagesSection;
