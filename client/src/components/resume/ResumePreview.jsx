import React from 'react';
import { useResumeStore } from '../../store/resumeStore';
import ModernTemplate from '../templates/ModernTemplate';
import MinimalTemplate from '../templates/MinimalTemplate';
import ProfessionalTemplate from '../templates/ProfessionalTemplate';
import CreativeTemplate from '../templates/CreativeTemplate';
import TechnicalTemplate from '../templates/TechnicalTemplate';
import ExecutiveTemplate from '../templates/ExecutiveTemplate';
import { FileText } from 'lucide-react';

const ResumePreview = React.memo(({ data, targetRef }) => {
  const { selectedTemplate } = useResumeStore();

  if (!data) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-text-muted">
        <FileText size={32} className="mb-4 opacity-50" />
        <p className="text-sm font-medium">Loading preview...</p>
      </div>
    );
  }

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'minimal':
        return <MinimalTemplate data={data} />;
      case 'professional':
        return <ProfessionalTemplate data={data} />;
      case 'creative':
        return <CreativeTemplate data={data} />;
      case 'technical':
        return <TechnicalTemplate data={data} />;
      case 'executive':
        return <ExecutiveTemplate data={data} />;
      case 'modern':
      default:
        return <ModernTemplate data={data} />;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto editor-scroll flex justify-center p-8 bg-[#eef2f6]">
      <div 
        ref={targetRef} 
        className="w-[794px] min-h-[1123px] bg-white shadow-xl mx-auto origin-top transform transition-transform scale-75 sm:scale-90 md:scale-100 lg:scale-[0.85] xl:scale-100 mb-20"
      >
        {renderTemplate()}
      </div>
    </div>
  );
});

export default ResumePreview;
