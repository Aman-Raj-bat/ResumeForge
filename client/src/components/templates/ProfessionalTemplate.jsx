import React from 'react';

const ProfessionalTemplate = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white p-12 font-serif text-black leading-snug min-h-[1123px]">
      {/* Header */}
      <header className="mb-4 text-center break-inside-avoid">
        <h1 className="text-2xl font-bold uppercase tracking-wider mb-1">{data.personalInfo?.fullName || 'Your Name'}</h1>
        <div className="text-[12px] flex flex-wrap justify-center gap-x-2 gap-y-0.5 text-black">
          {data.personalInfo?.location && <span>{data.personalInfo.location}</span>}
          {data.personalInfo?.location && (data.personalInfo?.phone || data.personalInfo?.email) && <span>|</span>}
          {data.personalInfo?.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo?.phone && data.personalInfo?.email && <span>|</span>}
          {data.personalInfo?.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo?.linkedIn && <span>|</span>}
          {data.personalInfo?.linkedIn && <span>{data.personalInfo.linkedIn}</span>}
        </div>
      </header>

      {/* Summary */}
      {data.summary && (
        <section className="mb-4 break-inside-avoid">
          <h2 className="text-[13px] font-bold uppercase border-b border-black mb-2 pb-0.5">Summary</h2>
          <p className="text-[12px] text-black text-justify leading-relaxed">{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-4">
          <h2 className="text-[13px] font-bold uppercase border-b border-black mb-2 pb-0.5">Experience</h2>
          <div className="space-y-3">
            {data.experience.map((exp, index) => (
              <div key={index} className="break-inside-avoid text-[12px]">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold">{exp.company}{exp.location && `, ${exp.location}`}</h3>
                  <span className="font-bold">
                    {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div className="italic mb-1">
                  {exp.position}
                </div>
                {exp.description && (
                  <ul className="list-disc list-outside ml-5 space-y-0.5 leading-relaxed">
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
        <section className="mb-4">
          <h2 className="text-[13px] font-bold uppercase border-b border-black mb-2 pb-0.5">Education</h2>
          <div className="space-y-3">
            {data.education.map((edu, index) => (
              <div key={index} className="break-inside-avoid text-[12px]">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold">{edu.institution}</h3>
                  <span className="font-bold">{edu.startDate} – {edu.endDate}</span>
                </div>
                <div className="flex justify-between items-baseline italic">
                  <span>{edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}</span>
                  {edu.location && <span>{edu.location}</span>}
                </div>
                {edu.description && <p className="mt-0.5">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <section className="mb-4">
          <h2 className="text-[13px] font-bold uppercase border-b border-black mb-2 pb-0.5">Projects</h2>
          <div className="space-y-3">
            {data.projects.map((proj, index) => (
              <div key={index} className="break-inside-avoid text-[12px]">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold">{proj.name}</h3>
                  {proj.url && <span>{proj.url}</span>}
                </div>
                {proj.technologies && <div className="italic mb-0.5">{proj.technologies}</div>}
                {proj.description && <p className="leading-relaxed">{proj.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Additional */}
      {(data.skills?.length > 0 || data.certifications?.length > 0 || data.languages?.length > 0) && (
        <section className="mb-4 break-inside-avoid">
          <h2 className="text-[13px] font-bold uppercase border-b border-black mb-2 pb-0.5">Additional Information</h2>
          <div className="text-[12px] space-y-1">
            {data.skills && data.skills.length > 0 && (
              <div className="flex">
                <span className="font-bold w-32 shrink-0">Technical Skills:</span>
                <span>{data.skills.map(s => s.name).join(', ')}</span>
              </div>
            )}
            
            {data.certifications && data.certifications.length > 0 && (
              <div className="flex">
                <span className="font-bold w-32 shrink-0">Certifications:</span>
                <span>{data.certifications.map(c => c.name + (c.issuer ? ` (${c.issuer})` : '')).join(', ')}</span>
              </div>
            )}

            {data.languages && data.languages.length > 0 && (
              <div className="flex">
                <span className="font-bold w-32 shrink-0">Languages:</span>
                <span>{data.languages.map(l => `${l.name} (${l.proficiency})`).join(', ')}</span>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProfessionalTemplate;
