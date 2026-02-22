import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { LocalizedProject } from '../data/projects';
import { useLanguage } from '../App';

interface ProjectModalProps {
  project: LocalizedProject | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors z-10">
              <X size={24} />
            </button>
            {project.image && (
              <div className="w-full h-64 overflow-hidden rounded-t-2xl -mt-8 -mx-8">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-8">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white group-hover:text-sapphire transition-colors">{project.title}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span key={tech} className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>
              <div className="mt-6 prose prose-slate dark:prose-invert max-w-none">
                {project.longDescription[t.language].split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-[11px] font-black tracking-[0.2em] shadow-lg hover:translate-y-[-2px] transition-transform uppercase">
                  {t.projects.inspect}
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
