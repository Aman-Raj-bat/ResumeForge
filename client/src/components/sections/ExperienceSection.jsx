import { useFieldArray } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import AiActionButton from '../ai/AiActionButton';
import AiModal from '../ai/AiModal';
import { aiService } from '../../services/ai';

const ExperienceSection = ({ control, register, getValues, setValue }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experience',
  });

  const [aiModalConfig, setAiModalConfig] = useState({ isOpen: false, type: null, index: null });

  const handleAiAction = (type, index) => {
    setAiModalConfig({ isOpen: true, type, index });
  };

  const closeAiModal = () => {
    setAiModalConfig({ isOpen: false, type: null, index: null });
  };

  const generateData = async () => {
    const { type, index } = aiModalConfig;
    const currentValues = getValues();
    const expData = currentValues.experience[index];

    if (type === 'rewrite') {
      const res = await aiService.rewriteExperience(expData);
      return res.data.result;
    } else if (type === 'bullets') {
      const res = await aiService.generateBullets(expData.position, expData.company);
      return res.data.result;
    }
    return '';
  };

  const handleAccept = (text) => {
    const { index } = aiModalConfig;
    setValue(`experience.${index}.description`, text, { shouldDirty: true });
  };

  return (
    <div className="bg-surface rounded-xl p-5 md:p-7 border border-border-main shadow-subtle group hover:border-gray-300 transition-colors">
      <h3 className="text-xs font-semibold text-text-muted mb-5 uppercase tracking-wider">Experience</h3>
      
      {fields.map((field, index) => (
        <div key={field.id} className="mb-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0 last:mb-0 relative group/item">
          <button 
            type="button"
            onClick={() => remove(index)}
            className="absolute -right-2 -top-2 text-text-muted hover:text-red-600 p-2 opacity-0 group-hover/item:opacity-100 transition-opacity bg-white rounded-md shadow-sm border border-gray-200 z-10"
          >
            <Trash2 size={14} />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <label className="block text-xs font-medium text-text-main mb-1.5">Company</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all text-sm"
                {...register(`experience.${index}.company`)} 
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-main mb-1.5">Position</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all text-sm"
                {...register(`experience.${index}.position`)} 
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-main mb-1.5">Location</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all text-sm"
                {...register(`experience.${index}.location`)} 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-text-main mb-1.5">Start Date</label>
                <input 
                  type="text" 
                  placeholder="e.g. Jun 2022"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all text-sm"
                  {...register(`experience.${index}.startDate`)} 
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-text-main mb-1.5">End Date</label>
                <input 
                  type="text"
                  placeholder="e.g. Present" 
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all text-sm"
                  {...register(`experience.${index}.endDate`)} 
                />
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 mt-2">
              <div className="flex justify-between items-end mb-2">
                <label className="block text-xs font-medium text-text-main">Description</label>
                <div className="flex gap-2">
                  <AiActionButton onClick={() => handleAiAction('bullets', index)} label="Bullets" />
                  <AiActionButton onClick={() => handleAiAction('rewrite', index)} label="Rewrite" />
                </div>
              </div>
              <textarea 
                rows="5"
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all text-sm resize-y"
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
        className="mt-4 flex items-center gap-1.5 text-text-muted text-xs font-medium hover:text-text-main transition-colors bg-gray-50 px-3 py-1.5 rounded-md border border-gray-200 hover:border-gray-300"
      >
        <Plus size={14} /> Add Experience
      </button>

      <AiModal 
        isOpen={aiModalConfig.isOpen}
        onClose={closeAiModal}
        title={aiModalConfig.type === 'rewrite' ? 'Rewrite Experience' : 'Generate Bullets'}
        generateData={generateData}
        onAccept={handleAccept}
      />
    </div>
  );
};

export default ExperienceSection;
