import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, EDUCATION_DATA } from '../constants';
import { GraduationCap, Award } from 'lucide-react';
import Typewriter from './Typewriter';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Summary Text */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 min-h-[64px]">
              <Typewriter text="Turning complex problems into simple, beautiful designs." />
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I am passionate about clean code, performance optimization, and building user-focused applications using modern web technologies. Whether it is a dynamic web dashboard or a smooth mobile app, I strive for excellence in every pixel.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl"
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-primary-500 mr-3" />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Education & Certs</h3>
            </div>

            <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-700 ml-3 pl-8">
              {EDUCATION_DATA.map((item) => (
                <div key={item.id} className="relative">
                  <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-primary-500 border-4 border-white dark:border-slate-800"></span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.degree}</h4>
                  <p className="text-slate-600 dark:text-slate-300 font-medium">{item.institution}</p>
                  <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">{item.year}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;