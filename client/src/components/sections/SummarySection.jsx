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
    <div className="bg-surface p-6 rounded-lg border border-border-main mb-6 shadow-sm">
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <h3 className="text-xl font-semibold text-gray-800">Professional Summary</h3>
        <AiActionButton onClick={() => setIsAiModalOpen(true)} label="Auto-write" />
      </div>
      <div>
        <textarea 
          rows="4"
          className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none resize-y"
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
