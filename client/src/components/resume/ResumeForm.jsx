import PersonalInfoSection from '../sections/PersonalInfoSection';
import SummarySection from '../sections/SummarySection';
import EducationSection from '../sections/EducationSection';
import ExperienceSection from '../sections/ExperienceSection';
import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';
import CertificationsSection from '../sections/CertificationsSection';
import LanguagesSection from '../sections/LanguagesSection';

const ResumeForm = ({ register, control, errors }) => {
  return (
    <div className="p-6 h-full overflow-y-auto bg-gray-50">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-surface p-6 rounded-lg border border-border-main shadow-sm">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Document Title (Internal)</label>
          <input 
            type="text" 
            className="w-full px-4 py-2 text-lg font-medium border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
            placeholder="e.g. Software Engineer Resume"
            {...register('title')} 
          />
        </div>
        
        <PersonalInfoSection register={register} errors={errors} />
        <SummarySection register={register} />
        <ExperienceSection control={control} register={register} />
        <EducationSection control={control} register={register} />
        <ProjectsSection control={control} register={register} />
        <SkillsSection control={control} register={register} />
        <CertificationsSection control={control} register={register} />
        <LanguagesSection control={control} register={register} />
        
        <div className="h-20"></div> {/* Bottom padding for scrolling */}
      </div>
    </div>
  );
};

export default ResumeForm;
