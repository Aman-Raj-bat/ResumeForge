import { useState } from 'react';
import AiActionButton from '../ai/AiActionButton';
import AiModal from '../ai/AiModal';
import { aiService } from '../../services/ai';

const SummarySection = ({ register, getValues, setValue }) => {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  const handleGenerateSummary = async () => {
    const resumeData = getValues();
    const result = await aiService.generateSummary(resumeData);
    return result.data.result;
  };

  return (
    <div className="bg-surface rounded-xl p-5 md:p-7 border border-border-main shadow-subtle group hover:border-gray-300 transition-colors">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider">Professional Summary</h3>
        <AiActionButton onClick={() => setIsAiModalOpen(true)} label="Auto-write" />
      </div>
      <div>
        <textarea 
          rows="4"
          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all text-sm resize-y"
          placeholder="A brief summary of your professional background and goals."
          {...register('summary')} 
        />
      </div>

      <AiModal 
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        title="Generate Summary"
        generateData={handleGenerateSummary}
        onAccept={(text) => {
          setValue('summary', text, { shouldDirty: true });
        }}
      />
    </div>
  );
};

export default SummarySection;
