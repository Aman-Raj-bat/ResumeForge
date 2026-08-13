import React from 'react';

const ModernTemplate = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white font-sans text-gray-800 flex min-h-[1123px]">
      {/* Left Column (Accent) */}
      <div className="w-[32%] bg-[#1e1b4b] text-white p-8 border-r-8 border-indigo-500 flex flex-col">
        <div className="mb-12 text-center break-inside-avoid">
          <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-5 flex items-center justify-center text-4xl font-light text-white shadow-lg border border-white/20">
            {data.personalInfo?.fullName?.charAt(0) || 'R'}
          </div>
          <h1 className="text-2xl font-bold tracking-tight mb-2 uppercase">{data.personalInfo?.fullName || 'Your Name'}</h1>
          <div className="w-8 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-10 flex-grow">
          <section className="break-inside-avoid">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-300 mb-4 flex items-center gap-2">
              <span>Contact</span>
              <div className="h-px bg-white/10 flex-grow"></div>
            </h2>
            <div className="text-[13px] space-y-3 text-white/90">
              {data.personalInfo?.email && <div className="break-all">{data.personalInfo.email}</div>}
              {data.personalInfo?.phone && <div>{data.personalInfo.phone}</div>}
              {data.personalInfo?.location && <div>{data.personalInfo.location}</div>}
              {data.personalInfo?.linkedIn && <div className="break-all">{data.personalInfo.linkedIn}</div>}
              {data.personalInfo?.website && <div className="break-all">{data.personalInfo.website}</div>}
            </div>
          </section>

          {data.skills && data.skills.length > 0 && (
            <section className="break-inside-avoid">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-300 mb-4 flex items-center gap-2">
                <span>Skills</span>
                <div className="h-px bg-white/10 flex-grow"></div>
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span key={index} className="text-[12px] bg-white/10 px-2.5 py-1 rounded text-white font-medium border border-white/5">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {data.languages && data.languages.length > 0 && (
            <section className="break-inside-avoid">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-300 mb-4 flex items-center gap-2">
                <span>Languages</span>
                <div className="h-px bg-white/10 flex-grow"></div>
              </h2>
              <div className="space-y-3 text-[13px] text-white/90">
                {data.languages.map((lang, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="font-bold">{lang.name}</span>
                    <span className="text-white/60 text-[11px] uppercase tracking-wider">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Right Column (Main Content) */}
      <div className="w-[68%] p-10 bg-white flex flex-col">
        {data.summary && (
          <section className="mb-10 break-inside-avoid">
            <h2 className="text-[15px] font-bold text-[#1e1b4b] uppercase tracking-widest mb-4 flex items-center gap-3">
              Profile
              <div className="h-px bg-gray-200 flex-grow"></div>
            </h2>
            <p className="text-[13px] leading-relaxed text-gray-700 font-medium">{data.summary}</p>
          </section>
        )}

        {data.experience && data.experience.length > 0 && (
          <section className="mb-10">
            <h2 className="text-[15px] font-bold text-[#1e1b4b] uppercase tracking-widest mb-6 flex items-center gap-3">
              Experience
              <div className="h-px bg-gray-200 flex-grow"></div>
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div key={index} className="break-inside-avoid relative pl-4 border-l-2 border-indigo-100">
                  <div className="absolute w-2 h-2 bg-indigo-500 rounded-full -left-[5px] top-1.5 ring-4 ring-white"></div>
                  <h3 className="text-[15px] font-bold text-gray-900">{exp.position}</h3>
                  <div className="text-[13px] font-bold text-indigo-600 mb-2">
                    {exp.company} <span className="text-gray-400 font-medium ml-2 uppercase tracking-wide text-[11px]">• {exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                  </div>
                  {exp.description && (
                    <div className="text-[13px] text-gray-700 leading-relaxed">
                      <ul className="list-disc list-outside ml-4 space-y-1">
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

        {data.education && data.education.length > 0 && (
          <section className="mb-10">
            <h2 className="text-[15px] font-bold text-[#1e1b4b] uppercase tracking-widest mb-6 flex items-center gap-3">
              Education
              <div className="h-px bg-gray-200 flex-grow"></div>
            </h2>
            <div className="space-y-5">
              {data.education.map((edu, index) => (
                <div key={index} className="break-inside-avoid relative pl-4 border-l-2 border-indigo-100">
                  <div className="absolute w-2 h-2 bg-indigo-500 rounded-full -left-[5px] top-1.5 ring-4 ring-white"></div>
                  <h3 className="text-[15px] font-bold text-gray-900">{edu.institution}</h3>
                  <div className="text-[13px] font-bold text-indigo-600 mb-1">
                    {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                    <span className="text-gray-400 font-medium ml-2 uppercase tracking-wide text-[11px]">• {edu.startDate} – {edu.endDate}</span>
                  </div>
                  {edu.description && <p className="text-[13px] text-gray-700 mt-1">{edu.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {data.projects && data.projects.length > 0 && (
          <section className="mb-10">
            <h2 className="text-[15px] font-bold text-[#1e1b4b] uppercase tracking-widest mb-6 flex items-center gap-3">
              Projects
              <div className="h-px bg-gray-200 flex-grow"></div>
            </h2>
            <div className="space-y-5">
              {data.projects.map((proj, index) => (
                <div key={index} className="break-inside-avoid relative pl-4 border-l-2 border-indigo-100">
                  <div className="absolute w-2 h-2 bg-indigo-500 rounded-full -left-[5px] top-1.5 ring-4 ring-white"></div>
                  <h3 className="text-[15px] font-bold text-gray-900">{proj.name}</h3>
                  {proj.technologies && <div className="text-[11px] font-bold tracking-wide uppercase text-indigo-600 mb-1">{proj.technologies}</div>}
                  {proj.description && <p className="text-[13px] text-gray-700 leading-relaxed whitespace-pre-wrap">{proj.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {data.certifications && data.certifications.length > 0 && (
          <section className="break-inside-avoid">
            <h2 className="text-[15px] font-bold text-[#1e1b4b] uppercase tracking-widest mb-4 flex items-center gap-3">
              Certifications
              <div className="h-px bg-gray-200 flex-grow"></div>
            </h2>
            <ul className="text-[13px] text-gray-700 space-y-2 pl-4">
              {data.certifications.map((cert, index) => (
                <li key={index} className="flex flex-col relative">
                  <div className="absolute w-1.5 h-1.5 bg-gray-300 rounded-full -left-4 top-1.5"></div>
                  <strong className="text-gray-900">{cert.name}</strong>
                  {cert.issuer && <span className="text-gray-500 text-[12px]">{cert.issuer}</span>}
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
