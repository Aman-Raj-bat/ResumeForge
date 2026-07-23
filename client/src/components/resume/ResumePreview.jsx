import { useResumeStore } from '../../store/resumeStore';
import ModernTemplate from '../templates/ModernTemplate';
import MinimalTemplate from '../templates/MinimalTemplate';
import ProfessionalTemplate from '../templates/ProfessionalTemplate';

const ResumePreview = ({ data, targetRef }) => {
  const { selectedTemplate } = useResumeStore();

  if (!data) return <div className="p-8 text-center text-gray-500">Loading preview...</div>;

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'minimal':
        return <MinimalTemplate data={data} />;
      case 'professional':
        return <ProfessionalTemplate data={data} />;
      case 'modern':
      default:
        return <ModernTemplate data={data} />;
    }
  };

  return (
    <div className="h-full overflow-y-auto bg-gray-200 p-8 flex justify-center">
      <div 
        ref={targetRef} 
        className="w-[794px] min-h-[1123px] bg-white shadow-xl mx-auto origin-top transform scale-95 md:scale-100"
      >
        {renderTemplate()}
      </div>
    </div>
  );
};

export default ResumePreview;
