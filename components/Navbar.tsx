import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun, Code2, Download } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useReactToPrint } from 'react-to-print';
import { Resume } from './Resume';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Mouse position for spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Quonain_Ejaz_Resume",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -16 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      <motion.nav 
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onMouseMove={handleMouseMove}
        className={`fixed w-full z-50 transition-all duration-300 group ${
          scrolled 
            ? 'bg-white/80 dark:bg-dark-bg/90 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        {/* Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(14, 165, 233, 0.15),
                transparent 80%
              )
            `,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="p-2 bg-gradient-to-tr from-primary-600 to-primary-400 rounded-lg shadow-lg shadow-primary-500/30"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Code2 className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold text-slate-800 dark:text-white relative overflow-hidden group-logo">
                <span className="inline-block transition-transform duration-300 group-logo-hover:-translate-y-full">Quonain</span>
                <span className="text-primary-500">.dev</span>
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  onMouseEnter={() => setActiveHover(link.name)}
                  onMouseLeave={() => setActiveHover(null)}
                  className="relative px-4 py-2 text-slate-600 dark:text-slate-300 font-medium transition-colors rounded-lg group/link overflow-hidden"
                >
                  {activeHover === link.name && (
                    <motion.div
                      layoutId="hoverBackground"
                      className="absolute inset-0 bg-primary-50 dark:bg-primary-900/20 rounded-lg -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Text Animation */}
                  <div className="relative overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover/link:-translate-y-full">
                      {link.name}
                    </span>
                    <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover/link:translate-y-0 text-primary-600 dark:text-primary-400">
                      {link.name}
                    </span>
                  </div>
                </a>
              ))}

              <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-slate-200 dark:border-slate-700">
                <motion.button
                  onClick={() => handlePrint()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white rounded-lg shadow-lg shadow-primary-500/20 cursor-pointer overflow-hidden group/btn"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"
                  />
                  <Download size={18} className="relative z-10" />
                  <span className="font-medium relative z-10">Resume</span>
                </motion.button>
                
                <motion.button
                  onClick={toggleDarkMode}
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer relative overflow-hidden"
                  aria-label="Toggle Dark Mode"
                >
                   <motion.div
                    className="absolute inset-0 bg-current opacity-10 rounded-full"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  />
                  <motion.div
                    initial={false}
                    animate={{ rotate: darkMode ? 180 : 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </motion.div>
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 cursor-pointer"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-800 dark:text-white focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 origin-left"
          style={{ scaleX }}
        />

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden bg-white/95 dark:bg-dark-card/95 backdrop-blur-xl border-t dark:border-slate-700 shadow-xl overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    variants={itemVariants}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="block px-3 py-4 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors relative overflow-hidden group/mobile-link"
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover/mobile-link:translate-x-2 inline-block">
                      {link.name}
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-primary-50 dark:bg-slate-800 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                    />
                  </motion.a>
                ))}
                <motion.button
                  variants={itemVariants}
                  onClick={() => {
                    setIsOpen(false);
                    handlePrint();
                  }}
                  className="w-full text-left px-3 py-4 text-base font-medium text-primary-600 dark:text-primary-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors flex items-center space-x-2"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden">
          <Resume ref={componentRef} />
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
