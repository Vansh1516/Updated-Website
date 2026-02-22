
import React, { useState } from 'react';
import Card from '../components/Card';
import Skills from '../components/Skills';
import ProjectModal from '../components/ProjectModal';
import Focus from '../components/Focus';
import { useLanguage } from '../App';

import { projects, LocalizedProject } from '../data/projects';

const Home: React.FC = () => {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [selectedProject, setSelectedProject] = useState<LocalizedProject | null>(null);
  const email = "vansh.moodhoo@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-32 py-32">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-16 text-left">
        <div className="relative group shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-tr from-sapphire to-blue-300 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <img 
            src="_DSC8726.jpg" 
            alt="Vansh Moodhoo" 
            className="relative w-64 h-80 md:w-72 md:h-96 rounded-[2.5rem] border-4 border-white dark:border-slate-800 object-cover shadow-2xl transition-all duration-700 hover:scale-[1.01]"
          />
          <div className="absolute -bottom-5 -right-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 px-6 py-3 rounded-2xl shadow-2xl text-[10px] font-black tracking-widest flex flex-col gap-1 dark:text-white uppercase">
            <span className="text-sapphire">{t.hero.status}</span>
            <span className="text-slate-900 dark:text-slate-100 opacity-70">{t.hero.location}</span>
          </div>
        </div>
        
        <div className="space-y-8 flex-1">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight transition-colors">
              {t.hero.title}
            </h1>
            <p className="text-lg text-sapphire font-bold tracking-tight">
              {t.hero.accent}
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed font-medium transition-colors pt-4">
              {t.hero.bio}
            </p>
          </div>
          <div className="flex flex-wrap gap-5 pt-4">
            <a href="https://www.linkedin.com/in/vansh-moodhoo-017779256/" target="_blank" className="px-10 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-2xl text-[11px] font-black tracking-[0.2em] hover:bg-slate-50 dark:hover:bg-white/5 hover:shadow-lg hover:-translate-y-1 transition-all uppercase">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-base font-black text-sapphire tracking-[0.5em] uppercase">{t.projects.label}</h2>
          <p className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight">
            {t.projects.title}
          </p>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            {t.projects.desc}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: LocalizedProject) => (
            <Card 
              key={project.title} 
              onClick={() => setSelectedProject(project)}
              className="flex flex-col justify-start !p-0"
            >
              {project.image && (
                <div className="w-full h-40 overflow-hidden rounded-t-[2rem]">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-sapphire transition-colors">{project.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed line-clamp-3">{project.longDescription[language]}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                  <button onClick={() => setSelectedProject(project)} className="text-[10px] font-black text-sapphire tracking-widest hover:underline whitespace-nowrap">
                    {t.projects.inspect} &rarr;
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Philosophy and Connect Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <Card className="md:col-span-8 !p-10" title={t.philosophy.title}>
          <div className="space-y-6">
            <p className="text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              {t.philosophy.p1}
            </p>
            <p className="text-[13px] text-slate-500 dark:text-slate-500 italic font-medium">
              {t.philosophy.p2}
            </p>
          </div>
        </Card>

        <div id="connect" className="md:col-span-4 group flex flex-col">
          <div className="flex-1 bg-slate-900 dark:bg-slate-800 p-8 rounded-[2.5rem] flex flex-col justify-between shadow-2xl transition-transform hover:scale-[1.02] duration-500">
            <div>
              <div className="flex items-center justify-between mb-4">
                 <h3 className="text-white text-2xl font-black tracking-tight uppercase">{t.contact.title}</h3>
                 <span className="text-[9px] text-white/40 font-black tracking-[0.3em] uppercase">DE / EN / FR</span>
              </div>
              <p className="text-white/60 text-[11px] font-black tracking-widest uppercase italic">{t.contact.quote}</p>
            </div>
            
            <div className="mt-12 space-y-4">
              <button 
                onClick={copyToClipboard}
                className="w-full flex items-center justify-between bg-white/10 hover:bg-white/15 px-5 py-4 rounded-2xl transition-all group/btn active:scale-95 text-white"
              >
                <span className="text-[11px] font-bold font-mono truncate tracking-tight">{email}</span>
                <span className="text-[9px] text-white/40 group-hover/btn:text-white font-black tracking-[0.2em] uppercase">
                  {copied ? t.contact.copied : t.contact.copy}
                </span>
              </button>
              <a 
                href={`mailto:${email}`}
                className="w-full flex items-center justify-center bg-white text-slate-900 px-5 py-4 rounded-2xl font-black text-[11px] tracking-[0.2em] hover:shadow-xl transition-all uppercase"
              >
                {t.contact.send} &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <Focus />

      <Skills />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default Home;
