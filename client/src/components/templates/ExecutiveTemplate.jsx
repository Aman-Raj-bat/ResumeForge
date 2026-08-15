import React from 'react';

const ExecutiveTemplate = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white p-14 font-serif text-gray-900 leading-tight min-h-[1123px]">
      {/* Header */}
      <header className="mb-8 border-b-4 border-slate-800 pb-6 flex flex-col items-center break-inside-avoid text-center">
        <h1 className="text-4xl font-semibold tracking-wider uppercase mb-4 text-slate-900">{data.personalInfo?.fullName || 'Rohan Desai'}</h1>
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[13px] text-slate-700 font-medium">
          {data.personalInfo?.email && <span className="flex items-center gap-1">✉ {data.personalInfo.email}</span>}
          {!data.personalInfo?.email && <span className="flex items-center gap-1">✉ rohan.desai@example.in</span>}
          
          {data.personalInfo?.phone && <span className="flex items-center gap-1">✆ {data.personalInfo.phone}</span>}
          {!data.personalInfo?.phone && <span className="flex items-center gap-1">✆ +91 98765 98765</span>}
          
          {data.personalInfo?.location && <span className="flex items-center gap-1">📍 {data.personalInfo.location}</span>}
          {!data.personalInfo?.location && <span className="flex items-center gap-1">📍 Mumbai, Maharashtra</span>}
          
          {data.personalInfo?.linkedIn && <span className="flex items-center gap-1">in/ {data.personalInfo.linkedIn}</span>}
          {data.personalInfo?.website && <span className="flex items-center gap-1">🌐 {data.personalInfo.website}</span>}
        </div>
      </header>

      {/* Summary */}
      {data.summary && (
        <section className="mb-8 break-inside-avoid">
          <p className="text-[14px] leading-relaxed text-slate-800 font-medium">{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-[15px] font-bold tracking-widest uppercase mb-4 text-slate-900 bg-slate-100 p-2">Professional Experience</h2>
          <div className="space-y-6 pl-2">
            {data.experience.map((exp, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-[15px] font-bold text-slate-900 uppercase">{exp.position}</h3>
                  <span className="text-[13px] font-semibold text-slate-600">
                    {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div className="text-[14px] text-slate-800 mb-3 italic">
                  {exp.company}{exp.location && <span>, {exp.location}</span>}
                </div>
                {exp.description && (
                  <div className="text-[13px] leading-relaxed text-slate-700 pl-4">
                    <ul className="list-disc list-outside space-y-1.5">
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
          <h2 className="text-[15px] font-bold tracking-widest uppercase mb-4 text-slate-900 bg-slate-100 p-2">Education</h2>
          <div className="space-y-5 pl-2">
            {data.education.map((edu, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-[15px] font-bold text-slate-900">{edu.institution}</h3>
                  <span className="text-[13px] font-semibold text-slate-600">
                    {edu.startDate} – {edu.endDate}
                  </span>
                </div>
                <div className="text-[14px] text-slate-800 italic">
                  {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                </div>
                {edu.description && <p className="text-[13px] text-slate-700 mt-1 pl-4 border-l-2 border-slate-200">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-8">
        {/* Projects */}
        {data.projects && data.projects.length > 0 && (
          <section className="mb-8">
            <h2 className="text-[15px] font-bold tracking-widest uppercase mb-4 text-slate-900 bg-slate-100 p-2">Projects</h2>
            <div className="space-y-4 pl-2">
              {data.projects.map((proj, index) => (
                <div key={index} className="break-inside-avoid border-b border-slate-200 pb-3 last:border-0 last:pb-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-[14px] font-bold text-slate-900">
                      {proj.name}
                    </h3>
                  </div>
                  {proj.technologies && <div className="text-[12px] text-slate-600 mb-1 italic">{proj.technologies}</div>}
                  {proj.description && <p className="text-[13px] text-slate-700 leading-relaxed whitespace-pre-wrap">{proj.description}</p>}
                  {proj.url && <div className="mt-1 text-[12px] text-slate-500">{proj.url}</div>}
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="space-y-8">
          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section className="break-inside-avoid">
              <h2 className="text-[15px] font-bold tracking-widest uppercase mb-4 text-slate-900 bg-slate-100 p-2">Core Competencies</h2>
              <div className="text-[13px] text-slate-800 leading-relaxed font-semibold pl-2 flex flex-wrap gap-x-2 gap-y-1">
                {data.skills.map((s, i) => (
                  <span key={i} className="bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">{s.name}</span>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {data.certifications && data.certifications.length > 0 && (
            <section className="break-inside-avoid">
              <h2 className="text-[15px] font-bold tracking-widest uppercase mb-4 text-slate-900 bg-slate-100 p-2">Certifications</h2>
              <ul className="text-[13px] text-slate-800 space-y-2 pl-2 list-disc list-inside">
                {data.certifications.map((cert, index) => (
                  <li key={index} className="">
                    <span className="font-semibold">{cert.name}</span>
                    {cert.issuer && <span className="text-slate-600 italic"> — {cert.issuer}</span>}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Languages */}
          {data.languages && data.languages.length > 0 && (
            <section className="break-inside-avoid">
              <h2 className="text-[15px] font-bold tracking-widest uppercase mb-4 text-slate-900 bg-slate-100 p-2">Languages</h2>
              <ul className="text-[13px] text-slate-800 space-y-1 pl-2">
                {data.languages.map((lang, index) => (
                  <li key={index} className="flex justify-between items-end border-b border-slate-100 pb-1">
                    <span className="font-semibold">{lang.name}</span>
                    <span className="text-slate-500 text-[12px] italic">{lang.proficiency}</span>
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

export default ExecutiveTemplate;
