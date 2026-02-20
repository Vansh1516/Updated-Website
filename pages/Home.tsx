
import React, { useState } from 'react';
import Card from '../components/Card';
import { useLanguage } from '../App';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
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
            src="avatar.jpg" 
            alt="Vansh Moodhoo" 
            className="relative w-64 h-80 md:w-72 md:h-96 rounded-[2.5rem] border-4 border-white dark:border-slate-800 object-cover shadow-2xl transition-all duration-700 hover:scale-[1.01]"
          />
          <div className="absolute -bottom-5 -right-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 px-6 py-3 rounded-2xl shadow-2xl text-[10px] font-black tracking-widest flex flex-col gap-1 dark:text-white uppercase">
            <span className="text-sapphire">{t.hero.status}</span>
            <span className="text-slate-900 dark:text-slate-100 opacity-70">HTW Saar • Engineering</span>
          </div>
        </div>
        
        <div className="space-y-8 flex-1">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.85] transition-colors">
              {t.hero.title} <br/> <span className="text-sapphire">{t.hero.accent}</span>
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed font-medium transition-colors">
              {t.hero.bio}
            </p>
          </div>
          <div className="flex flex-wrap gap-5 pt-4">
            <a href="#connect" className="px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-[11px] font-black tracking-[0.2em] shadow-2xl hover:translate-y-[-3px] active:translate-y-0 transition-all uppercase">
              {t.hero.connect}
            </a>
            <a href="https://www.linkedin.com/in/vansh-moodhoo-017779256/" target="_blank" className="px-10 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-2xl text-[11px] font-black tracking-[0.2em] hover:bg-slate-50 dark:hover:bg-white/5 transition-all uppercase">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
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

        {/* Action Center */}
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

        {/* Technical & Personal Pillars */}
        <div className="md:col-span-12 py-16 flex items-center gap-10">
          <div className="h-px flex-1 bg-slate-100 dark:bg-white/5"></div>
          <h2 className="text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase">{t.pillars.title}</h2>
          <div className="h-px flex-1 bg-slate-100 dark:bg-white/5"></div>
        </div>

        <Card className="md:col-span-4" title={t.pillars.opt.title}>
          <p className="text-xs leading-relaxed">{t.pillars.opt.desc}</p>
        </Card>
        <Card className="md:col-span-4" title={t.pillars.disc.title}>
          <p className="text-xs leading-relaxed">{t.pillars.disc.desc}</p>
        </Card>
        <Card className="md:col-span-4" title={t.pillars.loyal.title}>
          <p className="text-xs leading-relaxed">{t.pillars.loyal.desc}</p>
        </Card>
      </section>

      {/* Philosophy Callout */}
      <section className="flex flex-col md:flex-row justify-between gap-24 border-t border-slate-100 dark:border-white/5 pt-24 transition-colors">
        <div className="max-w-md space-y-6">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight italic">
            "{t.footer.quote}"
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-[13px] font-medium leading-relaxed">
            {t.footer.desc}
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-16">
            <div>
                <h4 className="text-[10px] font-black text-slate-300 dark:text-slate-700 tracking-[0.4em] uppercase mb-8">Mechanical</h4>
                <ul className="space-y-4 text-[11px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-[0.15em]">
                    <li>Thermodynamics</li>
                    <li>Fluid Dynamics</li>
                    <li>Material Science</li>
                    <li>Statics & FEM</li>
                </ul>
            </div>
            <div>
                <h4 className="text-[10px] font-black text-slate-300 dark:text-slate-700 tracking-[0.4em] uppercase mb-8">Systems</h4>
                <ul className="space-y-4 text-[11px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-[0.15em]">
                    <li>Linux / Bash</li>
                    <li>CI/CD Workflows</li>
                    <li>Python Automation</li>
                    <li>AI Agent Logic</li>
                </ul>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
