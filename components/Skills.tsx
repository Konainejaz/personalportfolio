import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';
import { Database, Code, Layout, GitBranch, Layers, Cpu, Server } from 'lucide-react';

const Skills: React.FC = () => {
  // Mapping string icon names to components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database size={24} />;
      case 'Code': return <Code size={24} />;
      case 'Layout': return <Layout size={24} />;
      case 'GitBranch': return <GitBranch size={24} />;
      default: return <Layers size={24} />;
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Technologies I use to build robust applications.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-slate-50 dark:bg-dark-card rounded-2xl p-6 border border-slate-100 dark:border-slate-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors group"
            >
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center text-primary-500 shadow-md mb-6 group-hover:scale-110 transition-transform">
                {getIcon(category.icon)}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium rounded-full border border-slate-200 dark:border-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-slate-800 px-6 py-3 rounded-full border border-primary-100 dark:border-slate-700">
            <Cpu className="text-primary-500" size={20} />
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              Always learning new technologies to stay ahead.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;