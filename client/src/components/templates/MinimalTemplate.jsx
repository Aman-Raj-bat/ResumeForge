import React from 'react';

const MinimalTemplate = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white p-12 font-sans text-black break-inside-avoid">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-semibold tracking-tight mb-3 text-black uppercase">{data.personalInfo?.fullName || 'Aarav Sharma'}</h1>
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-gray-700 font-medium">
          {data.personalInfo?.email && <span>{data.personalInfo.email}</span>}
          {!data.personalInfo?.email && <span>aarav.sharma@example.in</span>}
          
          {data.personalInfo?.phone && <span>{data.personalInfo.phone}</span>}
          {!data.personalInfo?.phone && <span>+91 98765 43210</span>}
          
          {data.personalInfo?.location && <span>{data.personalInfo.location}</span>}
          {!data.personalInfo?.location && <span>Bengaluru, Karnataka</span>}
          
          {data.personalInfo?.linkedIn && <span>{data.personalInfo.linkedIn}</span>}
          {data.personalInfo?.website && <span>{data.personalInfo.website}</span>}
        </div>
      </header>

      {/* Summary */}
      {data.summary && (
        <section className="mb-8 break-inside-avoid">
          <p className="text-[14px] leading-relaxed text-gray-800">{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-5 text-black border-b border-black pb-2">Experience</h2>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-[15px] font-bold text-black">{exp.position}</h3>
                  <span className="text-[13px] font-medium text-gray-600 tracking-wide uppercase">
                    {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div className="text-[14px] text-gray-800 mb-2 font-medium">
                  {exp.company}{exp.location && <span className="text-gray-500 font-normal">, {exp.location}</span>}
                </div>
                {exp.description && (
                  <div className="text-[13px] leading-relaxed text-gray-700 pl-4">
                    <ul className="list-disc list-outside space-y-1">
                      {exp.description.split('\n').filter(line => line.trim()).map((line, i) => {
                        const cleanLine = line.replace(/^- /, '');
                        return <li key={i}>{cleanLine}</li>;
                      })}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-5 text-black border-b border-black pb-2">Education</h2>
          <div className="space-y-5">
            {data.education.map((edu, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-[15px] font-bold text-black">{edu.institution}</h3>
                  <span className="text-[13px] font-medium text-gray-600 tracking-wide uppercase">
                    {edu.startDate} – {edu.endDate}
                  </span>
                </div>
                <div className="text-[14px] text-gray-800 font-medium">
                  {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                </div>
                {edu.description && <p className="text-[13px] text-gray-600 mt-1">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-5 text-black border-b border-black pb-2">Projects</h2>
          <div className="space-y-5">
            {data.projects.map((proj, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-[15px] font-bold text-black">
                    {proj.name}
                  </h3>
                  {proj.url && <span className="text-[13px] text-gray-500 font-medium">{proj.url}</span>}
                </div>
                {proj.technologies && <div className="text-[13px] text-gray-600 mb-2 italic">{proj.technologies}</div>}
                {proj.description && <p className="text-[13px] text-gray-700 leading-relaxed whitespace-pre-wrap">{proj.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-10">
        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <section className="break-inside-avoid">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-black border-b border-black pb-2">Skills</h2>
            <div className="text-[14px] text-gray-800 leading-relaxed font-medium">
              {data.skills.map(s => s.name).join(' • ')}
            </div>
          </section>
        )}

        <div className="space-y-8">
          {/* Certifications */}
          {data.certifications && data.certifications.length > 0 && (
            <section className="break-inside-avoid">
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-black border-b border-black pb-2">Certifications</h2>
              <ul className="text-[13px] text-gray-800 space-y-2">
                {data.certifications.map((cert, index) => (
                  <li key={index} className="flex flex-col">
                    <span className="font-bold">{cert.name}</span>
                    {cert.issuer && <span className="text-gray-500">{cert.issuer}</span>}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Languages */}
          {data.languages && data.languages.length > 0 && (
            <section className="break-inside-avoid">
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-black border-b border-black pb-2">Languages</h2>
              <ul className="text-[13px] text-gray-800 space-y-2">
                {data.languages.map((lang, index) => (
                  <li key={index} className="flex justify-between items-end border-b border-gray-100 pb-1">
                    <span className="font-bold">{lang.name}</span>
                    <span className="text-gray-500 text-[12px] uppercase tracking-wide">{lang.proficiency}</span>
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
