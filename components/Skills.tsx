import React from 'react';
import Card from './Card';
import { useLanguage } from '../App';
import { Globe, Cpu, Award } from 'lucide-react';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <div className="flex items-center gap-10">
        <div className="h-px flex-1 bg-slate-100 dark:bg-white/5"></div>
        <h2 className="text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase">{t.skills.title}</h2>
        <div className="h-px flex-1 bg-slate-100 dark:bg-white/5"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <Card title={t.skills.languages} icon={<Globe className="w-5 h-5" />}>
          <p className="text-xs leading-relaxed">{t.skills.langDesc}</p>
        </Card>
        <Card title={t.skills.software} icon={<Cpu className="w-5 h-5" />}>
          <p className="text-xs leading-relaxed">{t.skills.softDesc}</p>
        </Card>
        <Card title={t.skills.cert} icon={<Award className="w-5 h-5" />}>
          <p className="text-xs leading-relaxed">{t.skills.certDesc}</p>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
