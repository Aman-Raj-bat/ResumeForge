import React from 'react';

const CreativeTemplate = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-[#fdfaf6] p-8 font-sans text-gray-800 flex flex-col min-h-[1123px]">
      {/* Header */}
      <header className="mb-10 text-center flex flex-col items-center">
        <div className="w-24 h-24 bg-orange-400 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-lg mb-4">
          {data.personalInfo?.fullName?.charAt(0) || 'N'}
        </div>
        <h1 className="text-4xl font-black tracking-tight mb-3 text-orange-900">{data.personalInfo?.fullName || 'Neha Gupta'}</h1>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[13px] text-gray-600 font-semibold bg-orange-100/50 py-2 px-6 rounded-full">
          {data.personalInfo?.email && <span>{data.personalInfo.email}</span>}
          {!data.personalInfo?.email && <span>neha.gupta@example.in</span>}
          
          {data.personalInfo?.phone && <span className="border-l border-orange-200 pl-4">{data.personalInfo.phone}</span>}
          {!data.personalInfo?.phone && <span className="border-l border-orange-200 pl-4">+91 98765 24680</span>}
          
          {data.personalInfo?.location && <span className="border-l border-orange-200 pl-4">{data.personalInfo.location}</span>}
          {!data.personalInfo?.location && <span className="border-l border-orange-200 pl-4">Pune, Maharashtra</span>}
          
          {data.personalInfo?.linkedIn && <span className="border-l border-orange-200 pl-4">{data.personalInfo.linkedIn}</span>}
          {data.personalInfo?.website && <span className="border-l border-orange-200 pl-4">{data.personalInfo.website}</span>}
        </div>
      </header>

      {/* Summary */}
      {data.summary && (
        <section className="mb-10 px-8 break-inside-avoid">
          <p className="text-[14px] leading-relaxed text-gray-700 italic border-l-4 border-orange-400 pl-6 py-2">{data.summary}</p>
        </section>
      )}

      <div className="flex gap-10 px-8">
        {/* Main Column */}
        <div className="w-[65%] space-y-10">
          {/* Experience */}
          {data.experience && data.experience.length > 0 && (
            <section>
              <h2 className="text-lg font-black text-orange-900 mb-6 flex items-center gap-3">
                <span className="bg-orange-200 text-orange-700 w-8 h-8 rounded-lg flex items-center justify-center">💼</span>
                Experience
              </h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-orange-200 before:to-transparent">
                {data.experience.map((exp, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active break-inside-avoid">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white bg-orange-100 text-orange-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-orange-100 bg-white shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-bold text-orange-900">{exp.position}</div>
                        <time className="text-[11px] font-bold text-orange-500 uppercase px-2 py-0.5 bg-orange-50 rounded-full">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</time>
                      </div>
                      <div className="text-[13px] font-semibold text-gray-800 mb-2">{exp.company}</div>
                      {exp.description && (
                        <div className="text-[12px] text-gray-600 leading-relaxed">
                          <ul className="list-disc list-outside ml-4 space-y-1">
                            {exp.description.split('\n').filter(line => line.trim()).map((line, i) => {
                              const cleanLine = line.replace(/^- /, '');
                              return <li key={i}>{cleanLine}</li>;
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {data.education && data.education.length > 0 && (
            <section>
              <h2 className="text-lg font-black text-orange-900 mb-6 flex items-center gap-3">
                <span className="bg-orange-200 text-orange-700 w-8 h-8 rounded-lg flex items-center justify-center">🎓</span>
                Education
              </h2>
              <div className="space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index} className="break-inside-avoid p-4 rounded-xl bg-white border border-orange-100 shadow-sm">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-[14px] font-bold text-gray-900">{edu.institution}</h3>
                      <span className="text-[11px] font-bold text-orange-500 uppercase px-2 py-0.5 bg-orange-50 rounded-full">
                        {edu.startDate} – {edu.endDate}
                      </span>
                    </div>
                    <div className="text-[13px] text-gray-700 font-medium">
                      {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                    </div>
                    {edu.description && <p className="text-[12px] text-gray-500 mt-2">{edu.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="w-[35%] space-y-10">
          {/* Projects */}
          {data.projects && data.projects.length > 0 && (
            <section>
              <h2 className="text-lg font-black text-orange-900 mb-6 flex items-center gap-3">
                <span className="bg-orange-200 text-orange-700 w-8 h-8 rounded-lg flex items-center justify-center">🚀</span>
                Projects
              </h2>
              <div className="space-y-4">
                {data.projects.map((proj, index) => (
                  <div key={index} className="break-inside-avoid bg-white p-4 rounded-xl shadow-sm border border-orange-50">
                    <h3 className="text-[14px] font-bold text-gray-900 mb-1">{proj.name}</h3>
                    {proj.technologies && <div className="text-[11px] font-bold text-orange-500 mb-2">{proj.technologies}</div>}
                    {proj.description && <p className="text-[12px] text-gray-600 leading-relaxed whitespace-pre-wrap">{proj.description}</p>}
                    {proj.url && <div className="mt-2 text-[11px] font-medium text-blue-500 truncate">{proj.url}</div>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section className="break-inside-avoid">
              <h2 className="text-lg font-black text-orange-900 mb-6 flex items-center gap-3">
                <span className="bg-orange-200 text-orange-700 w-8 h-8 rounded-lg flex items-center justify-center">⚡</span>
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((s, idx) => (
                  <span key={idx} className="bg-orange-100 text-orange-700 px-3 py-1.5 rounded-lg text-[12px] font-bold border border-orange-200 shadow-sm">{s.name}</span>
                ))}
              </div>
            </section>
          )}

          <div className="space-y-10">
            {/* Certifications */}
            {data.certifications && data.certifications.length > 0 && (
              <section className="break-inside-avoid">
                <h2 className="text-lg font-black text-orange-900 mb-4">Certifications</h2>
                <ul className="text-[13px] text-gray-700 space-y-3">
                  {data.certifications.map((cert, index) => (
                    <li key={index} className="flex flex-col bg-white p-3 rounded-lg border border-orange-50 shadow-sm">
                      <span className="font-bold text-gray-900">{cert.name}</span>
                      {cert.issuer && <span className="text-gray-500 text-[11px] mt-1">{cert.issuer}</span>}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Languages */}
            {data.languages && data.languages.length > 0 && (
              <section className="break-inside-avoid">
                <h2 className="text-lg font-black text-orange-900 mb-4">Languages</h2>
                <ul className="text-[13px] space-y-2">
                  {data.languages.map((lang, index) => (
                    <li key={index} className="flex justify-between items-center bg-white px-3 py-2 rounded-lg shadow-sm border border-orange-50">
                      <span className="font-bold text-gray-800">{lang.name}</span>
                      <span className="text-orange-500 text-[10px] font-bold uppercase px-2 py-0.5 bg-orange-50 rounded-full">{lang.proficiency}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate;
