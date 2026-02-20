
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from '../translations';
import { projects as defaultProjects, LocalizedProject } from '../data/projects';

interface CMSContextType {
  dictionary: typeof translations;
  projects: LocalizedProject[];
  updateTranslation: (lang: Language, section: string, key: string, value: string) => void;
  updateProject: (index: number, project: LocalizedProject) => void;
  addProject: (project: LocalizedProject) => void;
  deleteProject: (index: number) => void;
  exportData: () => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dictionary, setDictionary] = useState(translations);
  const [projects, setProjects] = useState(defaultProjects);

  // Load from localStorage on init
  useEffect(() => {
    const savedDict = localStorage.getItem('cms_dictionary');
    const savedProjects = localStorage.getItem('cms_projects');
    if (savedDict) setDictionary(JSON.parse(savedDict));
    if (savedProjects) setProjects(JSON.parse(savedProjects));
  }, []);

  const updateTranslation = (lang: Language, section: string, key: string, value: string) => {
    const newDict = { ...dictionary };
    (newDict[lang] as any)[section][key] = value;
    setDictionary(newDict);
    localStorage.setItem('cms_dictionary', JSON.stringify(newDict));
  };

  const updateProject = (index: number, project: LocalizedProject) => {
    const newProjects = [...projects];
    newProjects[index] = project;
    setProjects(newProjects);
    localStorage.setItem('cms_projects', JSON.stringify(newProjects));
  };

  const addProject = (project: LocalizedProject) => {
    const newProjects = [project, ...projects];
    setProjects(newProjects);
    localStorage.setItem('cms_projects', JSON.stringify(newProjects));
  };

  const deleteProject = (index: number) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects);
    localStorage.setItem('cms_projects', JSON.stringify(newProjects));
  };

  const exportData = () => {
    const data = { dictionary, projects };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio_data_export_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  return (
    <CMSContext.Provider value={{ 
      dictionary, 
      projects, 
      updateTranslation, 
      updateProject, 
      addProject, 
      deleteProject,
      exportData 
    }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) throw new Error('useCMS must be used within CMSProvider');
  return context;
};
