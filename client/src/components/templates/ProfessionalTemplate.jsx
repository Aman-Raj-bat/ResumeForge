import React from 'react';

const ProfessionalTemplate = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white p-12 font-serif text-gray-900 leading-tight min-h-[1123px]">
      {/* Header */}
      <header className="mb-6 text-center border-b-2 border-gray-800 pb-4 break-inside-avoid">
        <h1 className="text-3xl font-bold uppercase tracking-wider mb-2">{data.personalInfo?.fullName || 'Your Name'}</h1>
        <div className="text-sm flex flex-wrap justify-center gap-x-3 gap-y-1 text-gray-700">
          {data.personalInfo?.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo?.phone && <span>• {data.personalInfo.phone}</span>}
          {data.personalInfo?.location && <span>• {data.personalInfo.location}</span>}
          {data.personalInfo?.linkedIn && <span>• {data.personalInfo.linkedIn}</span>}
          {data.personalInfo?.website && <span>• {data.personalInfo.website}</span>}
        </div>
      </header>

      {/* Summary */}
      {data.summary && (
        <section className="mb-6 break-inside-avoid">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-400 mb-2 pb-1">Professional Summary</h2>
          <p className="text-sm text-gray-800 text-justify">{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-400 mb-3 pb-1">Professional Experience</h2>
          <div className="space-y-4">
            {data.experience.map((exp, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-base font-bold">{exp.position}</h3>
                  <span className="text-sm font-medium">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div className="text-sm italic mb-2">
                  {exp.company} {exp.location && `, ${exp.location}`}
                </div>
                {exp.description && (
                  <ul className="text-sm text-gray-800 list-disc list-outside ml-4 space-y-1">
                    {exp.description.split('\n').filter(line => line.trim()).map((line, i) => {
                      const cleanLine = line.replace(/^- /, '');
                      return <li key={i}>{cleanLine}</li>;
                    })}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-400 mb-3 pb-1">Education</h2>
          <div className="space-y-3">
            {data.education.map((edu, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-base font-bold">{edu.institution}</h3>
                  <span className="text-sm font-medium">{edu.startDate} - {edu.endDate}</span>
                </div>
                <div className="text-sm italic">
                  {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                </div>
                {edu.description && <p className="text-sm text-gray-800 mt-1">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-400 mb-3 pb-1">Projects</h2>
          <div className="space-y-3">
            {data.projects.map((proj, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-base font-bold">{proj.name}</h3>
                  {proj.url && <span className="text-sm text-blue-800">{proj.url}</span>}
                </div>
                {proj.technologies && <div className="text-sm italic mb-1">Tech: {proj.technologies}</div>}
                {proj.description && <p className="text-sm text-gray-800">{proj.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-6">
        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <section className="break-inside-avoid">
            <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-400 mb-2 pb-1">Technical Skills</h2>
            <div className="text-sm text-gray-800">
              {data.skills.map(s => s.name).join(', ')}
            </div>
          </section>
        )}

        <div>
          {/* Certifications */}
          {data.certifications && data.certifications.length > 0 && (
            <section className="mb-4 break-inside-avoid">
              <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-400 mb-2 pb-1">Certifications</h2>
              <ul className="text-sm text-gray-800 space-y-1">
                {data.certifications.map((cert, index) => (
                  <li key={index}>
                    <span className="font-bold">{cert.name}</span> {cert.issuer && `— ${cert.issuer}`}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Languages */}
          {data.languages && data.languages.length > 0 && (
            <section className="break-inside-avoid">
              <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-400 mb-2 pb-1">Languages</h2>
              <ul className="text-sm text-gray-800">
                {data.languages.map((lang, index) => (
                  <li key={index}>
                    <span className="font-bold">{lang.name}</span> - {lang.proficiency}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTemplate;
