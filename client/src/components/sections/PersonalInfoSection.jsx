const PersonalInfoSection = ({ register, errors }) => {
  return (
    <div className="bg-surface rounded-xl p-5 md:p-7 border border-border-main shadow-subtle group hover:border-gray-300 transition-colors">
      <h3 className="text-xs font-semibold text-text-muted mb-5 uppercase tracking-wider">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <div>
          <label className="block text-xs font-medium text-text-main mb-1.5">Full Name</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 bg-[#1a1c23] border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-white text-sm"
            {...register('personalInfo.fullName')} 
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-text-main mb-1.5">Email</label>
          <input 
            type="email" 
            className="w-full px-3 py-2 bg-[#1a1c23] border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-white text-sm"
            {...register('personalInfo.email')} 
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-text-main mb-1.5">Phone</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 bg-[#1a1c23] border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-white text-sm"
            {...register('personalInfo.phone')} 
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-text-main mb-1.5">Location</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 bg-[#1a1c23] border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-white text-sm"
            {...register('personalInfo.location')} 
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-text-main mb-1.5">Website</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 bg-[#1a1c23] border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-white text-sm"
            {...register('personalInfo.website')} 
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-text-main mb-1.5">LinkedIn</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 bg-[#1a1c23] border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-white text-sm"
            {...register('personalInfo.linkedIn')} 
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-text-main mb-1.5">GitHub</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 bg-[#1a1c23] border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-white text-sm"
            {...register('personalInfo.github')} 
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
