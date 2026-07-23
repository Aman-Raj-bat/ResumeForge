import { useFieldArray } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';

const LanguagesSection = ({ control, register }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'languages',
  });

  return (
    <div className="bg-surface p-6 rounded-lg border border-border-main mb-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Languages</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        className="mt-4 flex items-center gap-2 text-primary text-sm font-medium hover:underline"
      >
        <Plus size={16} /> Add Language
      </button>
    </div>
  );
};

export default LanguagesSection;
