import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink, Smartphone, Globe, LayoutGrid } from 'lucide-react';
import Typewriter from './Typewriter';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'mobile'>('all');

  const filteredProjects = PROJECTS_DATA.filter(project => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'web') return project.category.includes('Vite') || project.category.includes('Next.js');
    if (activeCategory === 'mobile') return project.category.includes('Native');
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto min-h-[24px]">
            <Typewriter text="A showcase of my work in React.js, Next.js, and React Native." />
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-white dark:bg-dark-card text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              All Projects
            </button>
            <button
              onClick={() => setActiveCategory('web')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === 'web'
                  ? 'bg-white dark:bg-dark-card text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Globe className="w-4 h-4" />
              Web Apps
            </button>
            <button
              onClick={() => setActiveCategory('mobile')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === 'mobile'
                  ? 'bg-white dark:bg-dark-card text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Mobile Apps
            </button>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-50 dark:bg-dark-card rounded-2xl shadow-lg overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
              <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-800">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    No Image Available
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-600 dark:text-primary-400 shadow-sm">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium transition-colors hover:bg-slate-800 dark:hover:bg-slate-100 group"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
