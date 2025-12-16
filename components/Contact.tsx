import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

const Contact: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const validate = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in your name, email, and message.');
      return false;
    }
    const emailOk = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
    if (!emailOk) {
      setError('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    if (!validate()) return;
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError('Email service is not configured. Please set VITE_EMAILJS_* env variables.');
      return;
    }
    setLoading(true);
    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject || 'New message from portfolio',
        message,
      } as Record<string, unknown>;

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      setSuccess("Thanks! Your message has been sent. I'll get back to you soon.");
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err) {
      setError('Sorry, something went wrong while sending your message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Have a project in mind or want to hire me? Let's connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info Cards */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-6"
          >
            <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-start space-x-6">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-xl text-primary-600 dark:text-primary-400">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Email</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-1">Drop me a line anytime</p>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="block text-lg font-medium text-primary-600 hover:text-primary-700 dark:hover:text-primary-400 transition-colors break-words leading-tight"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-start space-x-6">
              <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-xl text-green-600 dark:text-green-400">
                <Phone className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Phone</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-1">Mon-Fri from 9am to 6pm</p>
                <a 
                  href={`tel:${CONTACT_INFO.phone}`} 
                  className="inline-flex text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-primary-600 transition-colors whitespace-nowrap leading-tight"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-start space-x-6">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-xl text-purple-600 dark:text-purple-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Location</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-1">Open to remote work worldwide</p>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-200">
                  {CONTACT_INFO.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white dark:bg-dark-card p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send Message</h3>
            {success && (
              <div className="mb-4 rounded-lg border border-green-200 bg-green-50 text-green-700 dark:border-green-900/40 dark:bg-green-900/20 dark:text-green-300 px-4 py-3">
                {success}
              </div>
            )}
            {error && (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 text-red-700 dark:border-red-900/40 dark:bg-red-900/20 dark:text-red-300 px-4 py-3">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex justify-center items-center group disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;