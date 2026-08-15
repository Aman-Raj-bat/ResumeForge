import { useFieldArray } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';

const CertificationsSection = ({ control, register }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'certifications',
  });

  return (
    <div className="bg-surface rounded-xl p-5 md:p-7 border border-border-main shadow-subtle group hover:border-gray-300 transition-colors">
      <h3 className="text-xs font-semibold text-text-muted mb-5 uppercase tracking-wider">Certifications</h3>
      
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
              <label className="block text-xs font-medium text-text-main mb-1.5">Certification Name</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 bg-[#1a1c23] border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-white text-sm"
                {...register(`certifications.${index}.name`)} 
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-main mb-1.5">Issuer</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 bg-[#1a1c23] border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-white text-sm"
                {...register(`certifications.${index}.issuer`)} 
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-main mb-1.5">Date</label>
              <input 
                type="text" 
                placeholder="e.g. Jan 2023"
                className="w-full px-3 py-2 bg-[#1a1c23] border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-white text-sm"
                {...register(`certifications.${index}.date`)} 
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-main mb-1.5">URL (Optional)</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 bg-[#1a1c23] border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-white text-sm"
                {...register(`certifications.${index}.url`)} 
              />
            </div>
          </div>
        </div>
      ))}
      
      <button
        type="button"
        onClick={() => append({ name: '', issuer: '', date: '', url: '' })}
        className="mt-4 flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20"
      >
        <Plus size={16} /> Add Certification
      </button>
    </div>
  );
};

export default CertificationsSection;
