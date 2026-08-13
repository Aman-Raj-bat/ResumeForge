import PersonalInfoSection from '../sections/PersonalInfoSection';
import SummarySection from '../sections/SummarySection';
import EducationSection from '../sections/EducationSection';
import ExperienceSection from '../sections/ExperienceSection';
import ProjectsSection from '../sections/ProjectsSection';
import SkillsSection from '../sections/SkillsSection';
import CertificationsSection from '../sections/CertificationsSection';
import LanguagesSection from '../sections/LanguagesSection';

const ResumeForm = ({ register, control, errors, getValues, setValue }) => {
  return (
    <div className="flex-1 overflow-y-auto editor-scroll">
      <div className="p-5 md:p-8 space-y-8">
        
        <div className="bg-surface rounded-xl p-5 border border-border-main shadow-subtle group hover:border-gray-300 transition-colors">
          <label className="block text-xs font-semibold text-text-muted mb-2 uppercase tracking-wider">Document Title</label>
          <input 
            type="text" 
            className="w-full text-lg font-bold text-text-main placeholder-gray-400 bg-transparent border-b border-transparent hover:border-gray-200 focus:border-primary focus:outline-none transition-colors pb-1"
            placeholder="e.g. Software Engineer Resume"
            {...register('title')} 
          />
        </div>
        
        <div className="space-y-6">
          <PersonalInfoSection register={register} errors={errors} />
          <SummarySection register={register} getValues={getValues} setValue={setValue} />
          <ExperienceSection control={control} register={register} getValues={getValues} setValue={setValue} />
          <EducationSection control={control} register={register} />
          <ProjectsSection control={control} register={register} />
          <SkillsSection control={control} register={register} getValues={getValues} setValue={setValue} />
          <CertificationsSection control={control} register={register} />
          <LanguagesSection control={control} register={register} />
        </div>
        
        <div className="h-24"></div> {/* Bottom padding */}
      </div>
    </div>
  );
};

export default ResumeForm;
