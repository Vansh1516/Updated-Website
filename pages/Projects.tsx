
import React from 'react';
import Card from '../components/Card';
import { projects } from '../data/projects';
import { useLanguage } from '../App';

const Projects: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-24 py-32">
      <header className="max-w-3xl space-y-8">
        <div className="inline-block px-4 py-1.5 bg-slate-100/50 dark:bg-white/5 rounded-full text-[9px] font-black tracking-[0.4em] text-slate-500 dark:text-slate-400 uppercase transition-colors">
          {t.projects.label}
        </div>
        <div className="space-y-4">
          <h1 className="text-7xl md:text-9xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.85] transition-colors">
            {t.projects.title} <br/> {t.projects.accent}
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl transition-colors">
            {t.projects.desc}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-16">
        {projects.map((project, idx) => (
          <div key={idx} className="group flex flex-col md:flex-row gap-12 items-stretch">
            {/* Visual Index */}
            <div className="hidden md:flex flex-col items-center justify-start py-4 gap-6 shrink-0">
              <span className="text-[10px] font-black font-mono text-slate-200 dark:text-slate-800 transition-colors uppercase tracking-widest">
                SYS_LOG_{idx + 1}
              </span>
              <div className="w-px h-full bg-slate-100 dark:bg-white/10 group-hover:bg-sapphire/40 transition-all duration-700"></div>
            </div>

            <Card 
              href={project.link} 
              className="flex-1 !flex-col md:!flex-row !items-start gap-12 !p-10 border-slate-100/80 dark:border-white/5"
            >
              <div className="flex-1 space-y-8">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-3 group-hover:text-sapphire transition-colors uppercase">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-5 text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] transition-colors">
                    <span>{t.projects.caseStudy}</span>
                    <span className="hidden sm:inline text-slate-200 dark:text-slate-700">|</span>
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-sapphire/50 rounded-full animate-pulse"></span>
                      Verified Asset
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed font-medium transition-colors">
                  {project.description[language]}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="font-mono bg-slate-50 dark:bg-white/[0.04] text-slate-400 dark:text-slate-500 px-4 py-1.5 rounded-lg text-[10px] font-black border border-slate-100 dark:border-white/5 uppercase tracking-[0.1em] transition-all group-hover:border-sapphire/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <div className="pt-6">
                    <span className="inline-flex items-center gap-4 text-sapphire dark:text-blue-400 font-black text-[10px] tracking-[0.3em] uppercase group-hover:translate-x-3 transition-all duration-500">
                      {t.projects.inspect} <span className="text-xl leading-none">&rarr;</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Asset Identifier Placeholder */}
              <div className="hidden lg:flex w-44 shrink-0 flex-col items-center justify-center p-8 bg-slate-50/50 dark:bg-white/[0.01] rounded-[2rem] border border-slate-200 dark:border-white/10 opacity-30 group-hover:opacity-100 transition-all duration-700">
                 <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 dark:text-slate-600">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    <div className="absolute inset-0 bg-sapphire/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 </div>
                 <span className="text-[9px] font-black text-slate-400 dark:text-slate-700 uppercase mt-5 tracking-[0.2em]">Asset_Verified</span>
              </div>
            </Card>
          </div>
        ))}
      </div>

      <footer className="text-center py-32 border-t border-slate-50 dark:border-white/5">
        <p className="text-[10px] font-black text-slate-200 dark:text-slate-800 uppercase tracking-[1em] transition-colors">END_OF_WORKFLOW</p>
      </footer>
    </div>
  );
};

export default Projects;
