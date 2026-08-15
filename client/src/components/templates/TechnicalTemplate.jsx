import React from 'react';

const TechnicalTemplate = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white p-0 font-sans text-gray-800 flex flex-col min-h-[1123px] border-4 border-gray-900">
      {/* Header */}
      <header className="bg-gray-900 text-green-400 p-8 flex flex-col items-start border-b-4 border-gray-900 break-inside-avoid">
        <h1 className="text-4xl font-bold tracking-tighter mb-2 text-white font-mono">{data.personalInfo?.fullName || 'Arjun Reddy'}</h1>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-[12px] font-mono mt-4 w-full border-t border-gray-700 pt-4">
          <div className="flex gap-2">
            <span className="text-gray-500">Email:</span>
            <span className="text-white">{data.personalInfo?.email || 'arjun.reddy@example.in'}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">Phone:</span>
            <span className="text-white">{data.personalInfo?.phone || '+91 98765 13579'}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">Loc:</span>
            <span className="text-white">{data.personalInfo?.location || 'Hyderabad, Telangana'}</span>
          </div>
          {data.personalInfo?.linkedIn && (
            <div className="flex gap-2">
              <span className="text-gray-500">Li:</span>
              <span className="text-white">{data.personalInfo.linkedIn}</span>
            </div>
          )}
          {data.personalInfo?.website && (
            <div className="flex gap-2">
              <span className="text-gray-500">Web:</span>
              <span className="text-white">{data.personalInfo.website}</span>
            </div>
          )}
        </div>
      </header>

      <div className="p-8 space-y-10">
        {/* Summary */}
        {data.summary && (
          <section className="break-inside-avoid">
            <h2 className="text-[13px] font-bold text-gray-900 uppercase font-mono bg-gray-100 inline-block px-2 py-1 mb-3">~ / summary</h2>
            <p className="text-[13px] leading-relaxed text-gray-700 font-mono border-l-2 border-green-500 pl-4">{data.summary}</p>
          </section>
        )}

        <div className="flex gap-10">
          {/* Main Column */}
          <div className="w-[65%] space-y-10">
            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
              <section>
                <h2 className="text-[13px] font-bold text-gray-900 uppercase font-mono bg-gray-100 inline-block px-2 py-1 mb-5">~ / experience</h2>
                <div className="space-y-6">
                  {data.experience.map((exp, index) => (
                    <div key={index} className="break-inside-avoid border border-gray-200 p-4 shadow-[4px_4px_0_0_rgba(0,0,0,0.1)]">
                      <div className="flex justify-between items-baseline mb-2 border-b border-gray-200 pb-2">
                        <h3 className="text-[14px] font-bold text-gray-900">{exp.position}</h3>
                        <span className="text-[11px] font-bold text-gray-500 uppercase font-mono">
                          {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                        </span>
                      </div>
                      <div className="text-[13px] font-bold text-gray-700 mb-3 font-mono text-green-700">
                        @{exp.company}
                      </div>
                      {exp.description && (
                        <div className="text-[12px] text-gray-600 leading-relaxed font-mono">
                          <ul className="list-outside ml-4 space-y-1" style={{ listStyleType: 'square' }}>
                            {exp.description.split('\n').filter(line => line.trim()).map((line, i) => {
                              const cleanLine = line.replace(/^- /, '');
                              return <li key={i} className="pl-1">{cleanLine}</li>;
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
              <section>
                <h2 className="text-[13px] font-bold text-gray-900 uppercase font-mono bg-gray-100 inline-block px-2 py-1 mb-5">~ / education</h2>
                <div className="space-y-4">
                  {data.education.map((edu, index) => (
                    <div key={index} className="break-inside-avoid border border-gray-200 p-4 shadow-[4px_4px_0_0_rgba(0,0,0,0.1)]">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-[14px] font-bold text-gray-900">{edu.institution}</h3>
                        <span className="text-[11px] font-bold text-gray-500 uppercase font-mono">
                          {edu.startDate} – {edu.endDate}
                        </span>
                      </div>
                      <div className="text-[12px] text-gray-700 font-bold font-mono text-green-700">
                        {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                      </div>
                      {edu.description && <p className="text-[12px] text-gray-500 mt-2 font-mono">{edu.description}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-[35%] space-y-10">
            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
              <section className="break-inside-avoid">
                <h2 className="text-[13px] font-bold text-gray-900 uppercase font-mono bg-gray-100 inline-block px-2 py-1 mb-4">~ / skills</h2>
                <div className="flex flex-col gap-2">
                  {data.skills.map((s, idx) => (
                    <div key={idx} className="bg-gray-900 text-green-400 px-2 py-1 text-[11px] font-mono border-l-2 border-green-500">
                      &gt; {s.name}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Projects */}
            {data.projects && data.projects.length > 0 && (
              <section>
                <h2 className="text-[13px] font-bold text-gray-900 uppercase font-mono bg-gray-100 inline-block px-2 py-1 mb-4">~ / projects</h2>
                <div className="space-y-4">
                  {data.projects.map((proj, index) => (
                    <div key={index} className="break-inside-avoid border border-gray-200 p-3 shadow-[4px_4px_0_0_rgba(0,0,0,0.1)]">
                      <h3 className="text-[13px] font-bold text-gray-900 mb-1">{proj.name}</h3>
                      {proj.technologies && <div className="text-[10px] font-bold text-green-700 mb-2 font-mono">[{proj.technologies}]</div>}
                      {proj.description && <p className="text-[11px] text-gray-600 leading-relaxed font-mono whitespace-pre-wrap">{proj.description}</p>}
                      {proj.url && <div className="mt-2 text-[10px] text-blue-600 font-mono underline truncate">{proj.url}</div>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            <div className="space-y-8">
              {/* Certifications */}
              {data.certifications && data.certifications.length > 0 && (
                <section className="break-inside-avoid">
                  <h2 className="text-[13px] font-bold text-gray-900 uppercase font-mono bg-gray-100 inline-block px-2 py-1 mb-4">~ / certs</h2>
                  <ul className="text-[12px] text-gray-700 space-y-3 font-mono">
                    {data.certifications.map((cert, index) => (
                      <li key={index} className="flex flex-col">
                        <span className="font-bold text-gray-900">{cert.name}</span>
                        {cert.issuer && <span className="text-gray-500 text-[10px] mt-1 text-green-700">by {cert.issuer}</span>}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Languages */}
              {data.languages && data.languages.length > 0 && (
                <section className="break-inside-avoid">
                  <h2 className="text-[13px] font-bold text-gray-900 uppercase font-mono bg-gray-100 inline-block px-2 py-1 mb-4">~ / langs</h2>
                  <ul className="text-[12px] space-y-2 font-mono">
                    {data.languages.map((lang, index) => (
                      <li key={index} className="flex justify-between items-center border-b border-gray-200 pb-1 border-dashed">
                        <span className="font-bold text-gray-800">{lang.name}</span>
                        <span className="text-green-700 text-[10px] uppercase">{lang.proficiency}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalTemplate;
