import React from 'react';
import Card from './Card';
import { useLanguage } from '../App';
import { Book, DraftingCompass, Code, Languages } from 'lucide-react';

const Focus: React.FC = () => {
  const { t } = useLanguage();

  const focusItems = [
    {
      title: t.focus.material.title,
      description: t.focus.material.desc,
      icon: <Book className="w-5 h-5" />,
    },
    {
      title: t.focus.cad.title,
      description: t.focus.cad.desc,
      icon: <DraftingCompass className="w-5 h-5" />,
    },
    {
      title: t.focus.scripting.title,
      description: t.focus.scripting.desc,
      icon: <Code className="w-5 h-5" />,
    },
    {
      title: t.focus.german.title,
      description: t.focus.german.desc,
      icon: <Languages className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-16">
      <div className="flex items-center gap-10">
        <div className="h-px flex-1 bg-slate-100 dark:bg-white/5"></div>
        <h2 className="text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase">{t.focus.title}</h2>
        <div className="h-px flex-1 bg-slate-100 dark:bg-white/5"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {focusItems.map((item, index) => (
          <Card key={index} title={item.title} icon={item.icon}>
            <p className="text-xs leading-relaxed">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Focus;
