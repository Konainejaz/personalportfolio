import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO, CONTACT_INFO } from '../constants';
import Typewriter from './Typewriter';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/mypics/banner.jpeg" 
          alt="Background Banner" 
          className="w-full h-full object-cover object-top opacity-10 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white/90 dark:from-dark-bg/90 dark:via-dark-bg/80 dark:to-dark-bg/90"></div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-primary-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400 rounded-full font-medium text-sm mb-6 shadow-sm border border-primary-100 dark:border-slate-700">
              Open to Remote Roles 🚀
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
                <Typewriter text={PERSONAL_INFO.name} />
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-6">
              {PERSONAL_INFO.role}
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
              {PERSONAL_INFO.tagline} Experienced in building scalable front-end solutions with React, Next.js, and React Native.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="#contact"
                className="group flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50"
              >
                Let's Talk
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-8 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 rounded-xl font-semibold transition-all shadow-sm"
              >
                <Linkedin className="mr-2 h-5 w-5 text-[#0077b5]" />
                LinkedIn
              </a>
            </div>

            <div className="flex items-center space-x-6 text-slate-500 dark:text-slate-400">
               <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary-500 transition-colors">
                 <Mail className="h-6 w-6" />
               </a>
               <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary-500 transition-colors">
                 <Github className="h-6 w-6" />
               </a>
               {/* Add more socials if available */}
            </div>
          </motion.div>

          {/* Hero Image / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/mypics/Portait.png" 
                alt="Quonain Ejaz" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-xl">Clean Code &</p>
                  <p className="font-light text-lg">Performance Optimization</p>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Experience</p>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">1.5+ Years</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;