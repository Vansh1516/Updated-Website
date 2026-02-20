
import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import { Language } from '../translations';
import { GoogleGenAI } from "@google/genai";

const AdminPortal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'content' | 'projects'>('content');
  const { dictionary, projects, updateTranslation, updateProject, addProject, deleteProject, exportData } = useCMS();
  const [isAiLoading, setIsAiLoading] = useState(false);

  const handleAiTranslate = async (projectIndex: number) => {
    const project = projects[projectIndex];
    if (!project.description.en) return;
    
    setIsAiLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
        Refine this project description for a high-agency mechanical engineering portfolio. 
        Tone: Intense, professional, ambitious, grounded.
        Translate into German (DE) and French (FR).
        Return ONLY valid JSON with keys "en", "de", "fr".
        
        Input: ${project.description.en}
      `;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: { responseMimeType: "application/json" }
      });

      const translated = JSON.parse(response.text);
      updateProject(projectIndex, { ...project, description: translated });
    } catch (error) {
      console.error("AI Translation failed", error);
    } finally {
      setIsAiLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[100] w-12 h-12 bg-sapphire text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform pointer-events-auto"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex justify-end pointer-events-none">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto" onClick={() => setIsOpen(false)} />
      <div className="relative w-full max-w-xl h-full bg-slate-900 border-l border-white/10 shadow-2xl flex flex-col pointer-events-auto overflow-hidden">
        {/* Header */}
        <div className="p-8 border-b border-white/10 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-black text-white tracking-tighter uppercase">Command Center</h2>
            <p className="text-[10px] font-black text-slate-500 tracking-[0.3em] uppercase mt-1">Direct System Modification</p>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex bg-slate-800/50 p-1 mx-8 mt-6 rounded-xl">
          <button 
            onClick={() => setActiveTab('content')}
            className={`flex-1 py-2 text-[10px] font-black tracking-widest rounded-lg transition-all ${activeTab === 'content' ? 'bg-sapphire text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
          >
            GLOBAL CONTENT
          </button>
          <button 
            onClick={() => setActiveTab('projects')}
            className={`flex-1 py-2 text-[10px] font-black tracking-widest rounded-lg transition-all ${activeTab === 'projects' ? 'bg-sapphire text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
          >
            PROJECT REGISTRY
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-12">
          {activeTab === 'content' ? (
            <div className="space-y-10">
              {(['en', 'de', 'fr'] as Language[]).map(lang => (
                <div key={lang} className="space-y-6">
                  <h3 className="text-[10px] font-black text-sapphire tracking-[0.4em] uppercase border-b border-sapphire/20 pb-2">{lang} Translations</h3>
                  <div className="space-y-4">
                    {Object.entries(dictionary[lang].hero).map(([key, val]) => (
                      <div key={key}>
                        <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1 block">Hero.{key}</label>
                        <textarea 
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-white focus:border-sapphire transition-colors resize-none"
                          value={val}
                          onChange={(e) => updateTranslation(lang, 'hero', key, e.target.value)}
                          rows={2}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              <button 
                onClick={() => addProject({
                  title: 'New Project',
                  description: { en: '', de: '', fr: '' },
                  tech: [],
                })}
                className="w-full py-4 border-2 border-dashed border-white/10 rounded-2xl text-[10px] font-black text-slate-500 tracking-[0.3em] hover:border-sapphire hover:text-sapphire transition-all uppercase"
              >
                + Register New System
              </button>

              {projects.map((project, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-[2rem] border border-white/10 space-y-6 relative group">
                  <button 
                    onClick={() => deleteProject(idx)}
                    className="absolute top-4 right-4 text-slate-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                  </button>

                  <div>
                    <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1 block">Project Title</label>
                    <input 
                      className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-xs text-white font-black uppercase tracking-widest focus:border-sapphire"
                      value={project.title}
                      onChange={(e) => updateProject(idx, { ...project, title: e.target.value })}
                    />
                  </div>

                  <div className="space-y-4">
                     <div>
                       <div className="flex justify-between items-center mb-1">
                        <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest block">English Description</label>
                        <button 
                          onClick={() => handleAiTranslate(idx)}
                          disabled={isAiLoading}
                          className="text-[8px] font-black text-sapphire hover:text-white transition-colors uppercase tracking-widest disabled:opacity-50"
                        >
                          {isAiLoading ? 'Analyzing...' : 'AI Refine & Translate'}
                        </button>
                       </div>
                       <textarea 
                          className="w-full bg-white/10 border border-white/10 rounded-xl p-4 text-xs text-white focus:border-sapphire transition-colors resize-none"
                          value={project.description.en}
                          onChange={(e) => updateProject(idx, { ...project, description: { ...project.description, en: e.target.value } })}
                          rows={3}
                        />
                     </div>
                  </div>

                  <div>
                    <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1 block">Tech Stack (comma separated)</label>
                    <input 
                      className="w-full bg-white/10 border border-white/10 rounded-xl p-3 text-xs text-slate-400 font-mono"
                      value={project.tech.join(', ')}
                      onChange={(e) => updateProject(idx, { ...project, tech: e.target.value.split(',').map(s => s.trim()) })}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-white/10 flex gap-4">
          <button 
            onClick={exportData}
            className="flex-1 py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black tracking-[0.2em] uppercase hover:shadow-xl transition-all"
          >
            Export to JSON
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            className="flex-1 py-4 bg-sapphire text-white rounded-2xl text-[10px] font-black tracking-[0.2em] uppercase hover:shadow-xl transition-all"
          >
            Finish Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
