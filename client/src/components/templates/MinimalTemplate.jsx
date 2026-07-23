import React from 'react';

const MinimalTemplate = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white p-10 font-sans text-gray-800 break-inside-avoid">
      {/* Header */}
      <header className="mb-8 border-b border-gray-300 pb-4">
        <h1 className="text-4xl font-light tracking-tight mb-2 text-gray-900">{data.personalInfo?.fullName || 'Your Name'}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {data.personalInfo?.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo?.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo?.location && <span>{data.personalInfo.location}</span>}
          {data.personalInfo?.linkedIn && <span>{data.personalInfo.linkedIn}</span>}
          {data.personalInfo?.website && <span>{data.personalInfo.website}</span>}
        </div>
      </header>

      {/* Summary */}
      {data.summary && (
        <section className="mb-8 break-inside-avoid">
          <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-medium tracking-widest uppercase mb-4 text-gray-900">Experience</h2>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-base font-medium text-gray-800">{exp.position}</h3>
                  <span className="text-sm text-gray-500">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                <div className="text-sm text-gray-600 mb-2">{exp.company} {exp.location && `• ${exp.location}`}</div>
                {exp.description && (
                  <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-wrap">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-medium tracking-widest uppercase mb-4 text-gray-900">Education</h2>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-base font-medium text-gray-800">{edu.institution}</h3>
                  <span className="text-sm text-gray-500">{edu.startDate} - {edu.endDate}</span>
                </div>
                <div className="text-sm text-gray-600">
                  {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                </div>
                {edu.description && <p className="text-sm text-gray-700 mt-1">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-medium tracking-widest uppercase mb-4 text-gray-900">Projects</h2>
          <div className="space-y-4">
            {data.projects.map((proj, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-base font-medium text-gray-800">
                    {proj.name} {proj.url && <span className="font-normal text-sm text-gray-500 ml-2">{proj.url}</span>}
                  </h3>
                </div>
                {proj.technologies && <div className="text-sm text-gray-600 mb-1">{proj.technologies}</div>}
                {proj.description && <p className="text-sm text-gray-700 whitespace-pre-wrap">{proj.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-8">
        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <section className="break-inside-avoid">
            <h2 className="text-lg font-medium tracking-widest uppercase mb-3 text-gray-900">Skills</h2>
            <div className="text-sm text-gray-700 leading-relaxed">
              {data.skills.map(s => s.name).join(', ')}
            </div>
          </section>
        )}

        {/* Certifications & Languages */}
        <div className="space-y-8">
          {data.certifications && data.certifications.length > 0 && (
            <section className="break-inside-avoid">
              <h2 className="text-lg font-medium tracking-widest uppercase mb-3 text-gray-900">Certifications</h2>
              <ul className="text-sm text-gray-700 space-y-1">
                {data.certifications.map((cert, index) => (
                  <li key={index}>
                    <span className="font-medium">{cert.name}</span> {cert.issuer && `• ${cert.issuer}`}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {data.languages && data.languages.length > 0 && (
            <section className="break-inside-avoid">
              <h2 className="text-lg font-medium tracking-widest uppercase mb-3 text-gray-900">Languages</h2>
              <ul className="text-sm text-gray-700 space-y-1">
                {data.languages.map((lang, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{lang.name}</span>
                    <span className="text-gray-500">{lang.proficiency}</span>
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

export default MinimalTemplate;
