import React from 'react';

const ModernTemplate = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white font-sans text-gray-800 flex min-h-[1123px]">
      {/* Left Column (Accent) */}
      <div className="w-1/3 bg-slate-800 text-white p-8">
        <div className="mb-10 text-center break-inside-avoid">
          <div className="w-24 h-24 bg-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-light text-slate-300">
            {data.personalInfo?.fullName?.charAt(0) || 'R'}
          </div>
          <h1 className="text-2xl font-bold tracking-wide mb-1">{data.personalInfo?.fullName || 'Your Name'}</h1>
        </div>

        <div className="space-y-8">
          <section className="break-inside-avoid">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 border-b border-slate-700 pb-1">Contact</h2>
            <div className="text-sm space-y-2 text-slate-300">
              {data.personalInfo?.email && <div>{data.personalInfo.email}</div>}
              {data.personalInfo?.phone && <div>{data.personalInfo.phone}</div>}
              {data.personalInfo?.location && <div>{data.personalInfo.location}</div>}
              {data.personalInfo?.linkedIn && <div>{data.personalInfo.linkedIn}</div>}
              {data.personalInfo?.website && <div>{data.personalInfo.website}</div>}
            </div>
          </section>

          {data.skills && data.skills.length > 0 && (
            <section className="break-inside-avoid">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 border-b border-slate-700 pb-1">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span key={index} className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-200">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {data.languages && data.languages.length > 0 && (
            <section className="break-inside-avoid">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 border-b border-slate-700 pb-1">Languages</h2>
              <div className="space-y-2 text-sm text-slate-300">
                {data.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{lang.name}</span>
                    <span className="text-slate-500">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Right Column (Main Content) */}
      <div className="w-2/3 p-8 bg-white">
        {data.summary && (
          <section className="mb-8 break-inside-avoid">
            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-2 border-b-2 border-slate-200 pb-1">Profile</h2>
            <p className="text-sm leading-relaxed text-gray-600">{data.summary}</p>
          </section>
        )}

        {data.experience && data.experience.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-4 border-b-2 border-slate-200 pb-1">Experience</h2>
            <div className="space-y-5">
              {data.experience.map((exp, index) => (
                <div key={index} className="break-inside-avoid">
                  <h3 className="text-base font-bold text-slate-800">{exp.position}</h3>
                  <div className="text-sm font-medium text-slate-600 mb-1">
                    {exp.company} <span className="text-slate-400 font-normal">| {exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                  </div>
                  {exp.description && (
                    <p className="text-sm text-gray-600 whitespace-pre-wrap">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {data.education && data.education.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-4 border-b-2 border-slate-200 pb-1">Education</h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index} className="break-inside-avoid">
                  <h3 className="text-base font-bold text-slate-800">{edu.institution}</h3>
                  <div className="text-sm text-slate-600 mb-1">
                    {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                    <span className="text-slate-400 ml-2">| {edu.startDate} - {edu.endDate}</span>
                  </div>
                  {edu.description && <p className="text-sm text-gray-600 mt-1">{edu.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {data.projects && data.projects.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-4 border-b-2 border-slate-200 pb-1">Projects</h2>
            <div className="space-y-4">
              {data.projects.map((proj, index) => (
                <div key={index} className="break-inside-avoid">
                  <h3 className="text-base font-bold text-slate-800">{proj.name}</h3>
                  {proj.technologies && <div className="text-xs text-slate-500 mb-1 font-mono">{proj.technologies}</div>}
                  {proj.description && <p className="text-sm text-gray-600 whitespace-pre-wrap">{proj.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {data.certifications && data.certifications.length > 0 && (
          <section className="break-inside-avoid">
            <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-4 border-b-2 border-slate-200 pb-1">Certifications</h2>
            <ul className="text-sm text-gray-600 space-y-1">
              {data.certifications.map((cert, index) => (
                <li key={index}>
                  <strong className="text-slate-700">{cert.name}</strong> {cert.issuer && `- ${cert.issuer}`}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;
