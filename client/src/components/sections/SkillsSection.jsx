import { useFieldArray } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import AiActionButton from '../ai/AiActionButton';
import AiModal from '../ai/AiModal';
import { aiService } from '../../services/ai';

const SkillsSection = ({ control, register, getValues, setValue }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'skills',
  });

  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  const handleGenerateSkills = async () => {
    const resumeData = getValues();
    const result = await aiService.suggestSkills(resumeData);
    return result.data.result;
  };

  const handleAcceptSkills = (text) => {
    // text should be a comma-separated list. We parse it and append to the form.
    const newSkills = text.split(',').map(s => s.trim()).filter(s => s.length > 0);
    newSkills.forEach(skillName => {
      append({ name: skillName });
    });
    // Mark form as dirty so it auto-saves immediately
    setValue('skills', getValues('skills'), { shouldDirty: true });
  };

  return (
    <div className="bg-surface rounded-xl p-5 md:p-7 border border-border-main shadow-subtle group hover:border-gray-300 transition-colors">
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
        <AiActionButton onClick={() => setIsAiModalOpen(true)} label="Suggest Skills" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {fields.map((field, index) => (
          <div key={field.id} className="relative flex items-center">
            <input 
              type="text" 
              placeholder="e.g. JavaScript"
              className="w-full px-3 py-2 pr-8 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
              {...register(`skills.${index}.name`)} 
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
        onClick={() => append({ name: '' })}
        className="mt-4 flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20"
      >
        <Plus size={16} /> Add Skill
      </button>

      <AiModal 
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        title="Suggest Missing Skills"
        generateData={handleGenerateSkills}
        onAccept={handleAcceptSkills}
      />
    </div>
  );
};

export default SkillsSection;
