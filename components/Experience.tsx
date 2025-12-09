import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My professional journey in building web and mobile solutions.
          </p>
        </motion.div>

        <div className="space-y-12">
          {EXPERIENCE_DATA.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-card rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
                      <Briefcase className="w-6 h-6 mr-2 text-primary-500" />
                      {job.role}
                    </h3>
                    <p className="text-xl text-primary-600 dark:text-primary-400 font-medium mt-1">
                      {job.company}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-4 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm font-semibold">
                      {job.period}
                    </span>
                  </div>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 italic border-l-4 border-primary-200 dark:border-primary-900 pl-4">
                  {job.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {job.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-400 leading-snug">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;