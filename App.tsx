
import React, { createContext, useContext, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Language, translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

const App: React.FC = () => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('app_lang');
    return (saved as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app_lang', lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <Router>
        <div className="min-h-screen flex flex-col relative bg-white dark:bg-obsidian selection:bg-sapphire/10 transition-colors duration-500">
          <Background />
          <Navbar />
          
          <main className="flex-1 w-full max-w-4xl mx-auto px-6 relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>

          <footer className="py-32 border-t border-slate-100 dark:border-white/5 bg-slate-50/30 dark:bg-white/[0.01] transition-colors duration-500">
            <div className="max-w-4xl mx-auto px-6 space-y-20">
              <div className="flex flex-col md:flex-row justify-between items-start gap-16">
                <div className="max-w-xs space-y-6">
                  <h4 className="text-[9px] font-black tracking-[0.5em] text-slate-300 dark:text-slate-700 uppercase">Personal Standard</h4>
                  <p className="text-[11px] font-black text-slate-900 dark:text-slate-100 leading-relaxed uppercase tracking-[0.2em] italic">
                    {t.footer.quote}
                  </p>
                </div>
                <div className="flex-1 max-w-lg">
                   <p className="text-sm text-slate-500 dark:text-slate-500 font-medium leading-relaxed">
                     {t.footer.desc}
                   </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-16 border-t border-slate-100 dark:border-white/10">
                <div className="text-[9px] font-black tracking-[0.3em] text-slate-400 dark:text-slate-600 uppercase transition-colors">
                  Vansh Moodhoo &copy; {new Date().getFullYear()} — Built with Rigor
                </div>
                <div className="flex gap-10">
                   <button 
                     onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                     className="text-[9px] font-black text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all uppercase tracking-[0.3em]"
                   >
                     {t.footer.backToTop}
                   </button>
                   <a 
                     href="https://www.linkedin.com/in/vansh-moodhoo-017779256/" 
                     target="_blank" 
                     className="text-[9px] font-black text-sapphire hover:text-blue-600 dark:text-blue-400 dark:hover:text-white transition-all uppercase tracking-[0.3em]"
                   >
                     {t.footer.linkedIn}
                   </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;
