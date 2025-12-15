import React from 'react';
import { 
  PERSONAL_INFO, 
  CONTACT_INFO, 
  EXPERIENCE_DATA, 
  EDUCATION_DATA, 
  SKILL_CATEGORIES,
  PROJECTS_DATA
} from '../constants';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Globe
} from 'lucide-react';

export const Resume = React.forwardRef<HTMLDivElement>((props, ref) => {
  // Combine skills for the circle chart display
  // We'll pick 4 main categories to match the layout
  const mainSkills = [
    { name: 'React.js / Next.js', percent: 95 },
    { name: 'React Native', percent: 90 },
    { name: 'Node.js / Backend', percent: 80 },
    { name: 'TypeScript', percent: 85 },
  ];

  return (
    <div className="hidden print:block">
      <div ref={ref} className="w-[210mm] h-[297mm] mx-auto bg-slate-50 relative overflow-hidden flex flex-col">
        <style type="text/css" media="print">
          {`
            @page {
              size: A4;
              margin: 0;
            }
            body {
              -webkit-print-color-adjust: exact;
            }
          `}
        </style>

        {/* 1. Header Section */}
        <div className="pt-6 pb-2 px-6 bg-[#f4f4f4]">
          <h1 className="text-4xl font-extrabold text-[#2c3e50] uppercase tracking-wide leading-none">
            {PERSONAL_INFO.name.split(' ')[0]} <span className="text-[#2c3e50]">{PERSONAL_INFO.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <h2 className="text-sm font-medium text-slate-500 uppercase tracking-widest mt-1 ml-0.5">
            {PERSONAL_INFO.role}
          </h2>
        </div>     

        {/* 3. White Section (About & Skills) */}
        <div className="px-6 py-4 bg-white flex-grow-0">
          
          {/* About Me Header */}
          <div className="relative mb-2">
            <div className="bg-[#2c3e50] text-white py-0.5 px-5 inline-block transform -skew-x-12 ml-2">
              <span className="block transform skew-x-12 font-bold tracking-widest text-xs">ABOUT ME</span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-3 mb-4">
            {/* Left Column: Contact Info */}
            <div className="col-span-5 space-y-1 pt-0.5">
              {CONTACT_INFO.location && (
                <div className="flex items-start gap-1.5 text-slate-600">
                   <span className="font-bold text-slate-800 w-9 text-[9px] uppercase shrink-0 mt-0.5">Loc</span>
                   <span className="text-[9px] break-words leading-tight">{CONTACT_INFO.location}</span>
                </div>
              )}
              {CONTACT_INFO.website && (
                <div className="flex items-start gap-1.5 text-slate-600">
                   <span className="font-bold text-slate-800 w-9 text-[9px] uppercase shrink-0 mt-0.5">Web</span>
                   <a href={CONTACT_INFO.website} className="text-[9px] break-all leading-tight hover:text-sky-500">
                     {CONTACT_INFO.website.replace('https://', '').replace('http://', '').replace('www.', '')}
                   </a>
                </div>
              )}
              {CONTACT_INFO.phone && (
                <div className="flex items-start gap-1.5 text-slate-600">
                   <span className="font-bold text-slate-800 w-9 text-[9px] uppercase shrink-0 mt-0.5">Phone</span>
                   <span className="text-[9px] leading-tight">{CONTACT_INFO.phone}</span>
                </div>
              )}
              {CONTACT_INFO.email && (
                <div className="flex items-start gap-1.5 text-slate-600">
                   <span className="font-bold text-slate-800 w-9 text-[9px] uppercase shrink-0 mt-0.5">Mail</span>
                   <span className="text-[9px] break-all leading-tight">{CONTACT_INFO.email}</span>
                </div>
              )}
                 {CONTACT_INFO.linkedin && (
                <div className="flex items-start gap-1.5 text-slate-600">
                   <span className="font-bold text-slate-800 w-9 text-[9px] uppercase shrink-0 mt-0.5">Social</span>
                   <a href={CONTACT_INFO.linkedin} className="text-[9px] break-all leading-tight hover:text-sky-500">
                     {CONTACT_INFO.linkedin.replace('https://', '').replace('www.', '').replace('linkedin.com/in/', '')}
                   </a>
                </div>
              )}
             
            </div>

            {/* Right Column: Photo & Bio */}
            <div className="col-span-7 flex gap-3">
              <img 
                src="/mypics/Portait.png" 
                alt="Profile" 
                className="w-24 h-28 object-cover object-top shadow-sm border-2 border-slate-100"
              />
              <div className="flex-1">
                <div className="h-px w-full bg-sky-400 mb-2 mt-1"></div>
                <p className="text-[9px] text-slate-600 text-justify leading-relaxed">
                  {PERSONAL_INFO.about}
                </p>
              </div>
            </div>
          </div>

          {/* Skills Header */}
          <div className="relative mb-2">
            <div className="bg-[#2c3e50] text-white py-0.5 px-5 inline-block transform -skew-x-12 ml-2">
              <span className="block transform skew-x-12 font-bold tracking-widest text-xs">SKILLS</span>
            </div>
            <div className="absolute top-1/2 left-24 right-0 h-px bg-sky-400 -z-10"></div>
          </div>

          {/* Skills Circles */}
          <div className="grid grid-cols-4 gap-3 mb-2">
            {mainSkills.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="relative w-16 h-16 mb-1">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="#e2e8f0"
                      strokeWidth="5"
                      fill="transparent"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="#0ea5e9"
                      strokeWidth="5"
                      fill="transparent"
                      strokeDasharray={175.9}
                      strokeDashoffset={175.9 - (175.9 * skill.percent) / 100}
                      className="text-sky-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-slate-700">
                    {skill.percent}%
                  </div>
                </div>
                <span className="text-[9px] font-bold text-slate-700 uppercase text-center leading-tight">{skill.name}</span>
              </div>
            ))}
          </div>

        </div>

        {/* 4. Dark Section (Experience & Education) */}
        <div className="bg-[#2c3e50] flex-grow text-white px-6 py-4 mt-auto mb-8">
          
          {/* Experience Section */}
          <div className="mb-3">
             <div className="relative mb-2">
                <div className="bg-sky-500 text-white py-0.5 px-4 inline-block transform -skew-x-12">
                  <span className="block transform skew-x-12 font-bold tracking-widest text-xs">EXPERIENCE</span>
                </div>
                <div className="absolute top-1/2 left-28 right-0 h-px bg-sky-500/50"></div>
              </div>

              <div className="space-y-2">
                {EXPERIENCE_DATA.map((exp) => (
                  <div key={exp.id} className="grid grid-cols-12 gap-2">
                     <div className="col-span-1 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                     </div>
                     <div className="col-span-11">
                        <div className="flex items-baseline gap-3 mb-0.5">
                           <h3 className="font-bold text-xs uppercase">{exp.company}</h3>
                           <span className="bg-sky-500 text-[9px] font-bold px-1.5 py-0 rounded-full">{exp.period}</span>
                        </div>
                        <div className="text-[10px] text-sky-200 mb-0.5">{exp.role}</div>
                        <p className="text-[9px] text-slate-300 leading-relaxed text-justify">
                           {exp.description} 
                           <span className="block opacity-80">- {exp.achievements[0]}</span>
                        </p>
                     </div>
                  </div>
                ))}
              </div>
          </div>

          {/* Education & Projects Split */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* Education */}
            <div>
               <div className="relative mb-2">
                  <div className="bg-sky-500 text-white py-0.5 px-4 inline-block transform -skew-x-12">
                    <span className="block transform skew-x-12 font-bold tracking-widest text-xs">EDUCATION</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {EDUCATION_DATA.map((edu) => (
                    <div key={edu.id} className="relative pl-5 border-l border-slate-600 ml-1">
                       <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 bg-white rounded-full"></div>
                       <h3 className="font-bold text-[10px] uppercase">{edu.institution}</h3>
                       <span className="bg-sky-500 text-[8px] font-bold px-1.5 py-0 rounded-full inline-block my-0.5">{edu.year}</span>
                       <div className="text-[9px] text-slate-300">{edu.degree}</div>
                    </div>
                  ))}
                </div>

                {/* Technical Skills */}
                <div className="mt-4">
                   <div className="relative mb-2">
                      <div className="bg-sky-500 text-white py-0.5 px-4 inline-block transform -skew-x-12">
                        <span className="block transform skew-x-12 font-bold tracking-widest text-xs">TECHNICAL SKILLS</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {SKILL_CATEGORIES.map((cat, idx) => (
                        <div key={idx} className="relative pl-5 border-l border-slate-600 ml-1">
                           <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 bg-white rounded-full"></div>
                           <h3 className="font-bold text-[10px] uppercase">{cat.title}</h3>
                           <p className="text-[9px] text-slate-300 leading-tight mt-0.5">
                              {cat.skills.join(', ')}
                           </p>
                        </div>
                      ))}
                    </div>
                </div>
            </div>

            {/* Key Projects (Compact) */}
            <div>
               <div className="relative mb-2">
                  <div className="bg-sky-500 text-white py-0.5 px-4 inline-block transform -skew-x-12">
                    <span className="block transform skew-x-12 font-bold tracking-widest text-xs">KEY PROJECTS</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  {PROJECTS_DATA.map((proj) => (
                    <div key={proj.id} className="relative pl-5 border-l border-slate-600 ml-1">
                       <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 bg-white rounded-full"></div>
                       <div className="flex justify-between items-center">
                          <h3 className="font-bold text-[10px] uppercase">{proj.title}</h3>
                       </div>
                       <p className="text-[9px] text-slate-300 leading-tight mt-0.5 line-clamp-2">
                          {proj.description}
                       </p>
                    </div>
                  ))}
                </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
});

Resume.displayName = 'Resume';
