const ResumePreview = ({ data }) => {
  if (!data) return <div className="p-8 text-center text-gray-500">Loading preview...</div>;

  return (
    <div className="h-full overflow-y-auto bg-gray-200 p-8 flex justify-center">
      <div className="w-[794px] min-h-[1123px] bg-white shadow-xl p-10 font-sans text-gray-800 scale-100 transform origin-top mx-auto">
        
        {/* Personal Info */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold uppercase tracking-wider mb-2">{data.personalInfo?.fullName || 'Your Name'}</h1>
          <div className="text-sm flex flex-wrap justify-center gap-x-4 gap-y-1 text-gray-600">
            {data.personalInfo?.email && <span>{data.personalInfo.email}</span>}
            {data.personalInfo?.phone && <span>{data.personalInfo.phone}</span>}
            {data.personalInfo?.location && <span>{data.personalInfo.location}</span>}
            {data.personalInfo?.linkedIn && <span>{data.personalInfo.linkedIn}</span>}
            {data.personalInfo?.website && <span>{data.personalInfo.website}</span>}
          </div>
        </div>

        {/* Summary */}
        {data.summary && (
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase border-b-2 border-gray-800 mb-2 pb-1">Professional Summary</h2>
            <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{data.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase border-b-2 border-gray-800 mb-3 pb-1">Experience</h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-sm font-bold">{exp.position || 'Position Title'}</h3>
                  <span className="text-xs text-gray-600">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div className="text-sm font-medium italic text-gray-700 mb-2">
                  {exp.company} {exp.location && `| ${exp.location}`}
                </div>
                {exp.description && (
                  <p className="text-sm text-gray-700 whitespace-pre-wrap pl-4 border-l-2 border-gray-200">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase border-b-2 border-gray-800 mb-3 pb-1">Education</h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-3 last:mb-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-sm font-bold">{edu.institution || 'Institution Name'}</h3>
                  <span className="text-xs text-gray-600">{edu.startDate} - {edu.endDate}</span>
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-medium">{edu.degree}</span> {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                </div>
                {edu.description && <p className="text-xs text-gray-600 mt-1">{edu.description}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {data.projects && data.projects.length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase border-b-2 border-gray-800 mb-3 pb-1">Projects</h2>
            {data.projects.map((proj, index) => (
              <div key={index} className="mb-3 last:mb-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-sm font-bold">
                    {proj.name || 'Project Name'} {proj.url && <span className="font-normal text-xs ml-2 text-blue-600">{proj.url}</span>}
                  </h3>
                </div>
                {proj.technologies && <div className="text-xs italic text-gray-600 mb-1">{proj.technologies}</div>}
                {proj.description && <p className="text-sm text-gray-700 whitespace-pre-wrap">{proj.description}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Skills & Others - Multi-column layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <div>
              <h2 className="text-sm font-bold uppercase border-b-2 border-gray-800 mb-2 pb-1">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span key={index} className="text-sm text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div>
            {/* Certifications */}
            {data.certifications && data.certifications.length > 0 && (
              <div className="mb-4">
                <h2 className="text-sm font-bold uppercase border-b-2 border-gray-800 mb-2 pb-1">Certifications</h2>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {data.certifications.map((cert, index) => (
                    <li key={index}>
                      <span className="font-medium">{cert.name}</span> {cert.issuer && `by ${cert.issuer}`} {cert.date && `(${cert.date})`}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Languages */}
            {data.languages && data.languages.length > 0 && (
              <div>
                <h2 className="text-sm font-bold uppercase border-b-2 border-gray-800 mb-2 pb-1">Languages</h2>
                <ul className="text-sm text-gray-700">
                  {data.languages.map((lang, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-gray-500 text-xs mt-0.5">{lang.proficiency}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
