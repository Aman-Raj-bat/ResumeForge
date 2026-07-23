const PersonalInfoSection = ({ register, errors }) => {
  return (
    <div className="bg-surface p-6 rounded-lg border border-border-main mb-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Full Name</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
            {...register('personalInfo.fullName')} 
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input 
            type="email" 
            className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
            {...register('personalInfo.email')} 
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Phone</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
            {...register('personalInfo.phone')} 
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Location</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
            {...register('personalInfo.location')} 
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Website</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
            {...register('personalInfo.website')} 
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">LinkedIn</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
            {...register('personalInfo.linkedIn')} 
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">GitHub</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 border border-border-main rounded-md focus:ring-1 focus:ring-primary focus:outline-none"
            {...register('personalInfo.github')} 
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
