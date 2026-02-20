import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    { icon: '👤', label: 'Age', value: '20 ans' },
    { icon: '✉️', label: 'Email', value: 'maryratiary@gmail.com', link: 'mailto:maryratiary@gmail.com' },
    { icon: '📱', label: 'Téléphone', value: '+261380730917', link: 'tel:+261380730917' },
    { icon: '📱', label: 'Téléphone 2', value: '+261323108480', link: 'tel:+261323108480' },
    { icon: '👥', label: 'Facebook', value: 'Mario Ratiary', link: 'https://facebook.com/mario.ratiary' },
    { icon: '🔗', label: 'LinkedIn', value: 'Ratiarivony Mario', link: 'https://www.linkedin.com/in/mario-mamitantely-ratiarivony/' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="contact" className={`min-h-screen py-12 md:py-24 px-4 md:px-6 relative overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-gradient-to-tr from-yellow-500/20 to-transparent' : 'bg-gradient-to-tr from-red-100/30 to-transparent'}`} />
        <div className={`absolute top-1/2 right-0 w-80 h-80 rounded-full blur-3xl ${isDarkMode ? 'bg-gradient-to-l from-slate-700/20 to-transparent' : 'bg-gradient-to-l from-gray-100/20 to-transparent'}`} />
      </div>

      <motion.div 
        className="max-w-6xl mx-auto relative z-10 w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div className="mb-8 md:mb-12 lg:mb-20 text-center">
          <motion.h2 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 md:mb-4 lg:mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <span className={isDarkMode ? 'text-yellow-400' : 'text-red-500'}>Travaillons</span> ensemble
          </motion.h2>
          <motion.p
            className={`text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            N'hésitez pas à me contacter pour discuter de votre projet
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Informations de contact */}
          <motion.div
            variants={itemVariants}
            className="space-y-2 md:space-y-4 lg:space-y-6"
          >
            <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 lg:mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>Informations</h3>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                viewport={{ once: false, amount: 0.5 }}
                className="group"
              >
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('mailto') || info.link.startsWith('tel') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl transition-all duration-300 border ${isDarkMode ? 'hover:bg-yellow-500/10 border-transparent hover:border-yellow-500/50' : 'hover:bg-red-50 border-transparent hover:border-red-200'}`}
                  >
                    <span className={`text-2xl sm:text-3xl md:text-4xl p-2 md:p-4 rounded-lg md:rounded-xl border transition-all duration-300 flex-shrink-0 ${isDarkMode ? 'bg-slate-800 border-slate-700 group-hover:bg-yellow-500/20 group-hover:border-yellow-500/50' : 'bg-gradient-to-br from-gray-100 to-gray-50 border-gray-100 group-hover:from-red-100 group-hover:to-red-50 group-hover:border-red-200'}`}>{info.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className={`font-bold text-xs md:text-sm uppercase tracking-wide ${isDarkMode ? 'text-white' : 'text-black'}`}>{info.label}</p>
                      <p className={`font-light text-xs sm:text-sm md:text-base transition-colors truncate ${isDarkMode ? 'text-slate-400 group-hover:text-white' : 'text-gray-600 group-hover:text-black'}`}>{info.value}</p>
                    </div>
                    <span className={`text-lg md:text-xl opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ${isDarkMode ? 'text-yellow-400' : 'text-red-500'}`}>→</span>
                  </a>
                ) : (
                  <div className={`flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl ${isDarkMode ? 'bg-slate-800' : 'bg-gray-50'}`}>
                    <span className={`text-2xl sm:text-3xl md:text-4xl p-2 md:p-4 rounded-lg md:rounded-xl border flex-shrink-0 ${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-gradient-to-br from-gray-100 to-gray-50 border-gray-100'}`}>{info.icon}</span>
                    <div className="min-w-0">
                      <p className={`font-bold text-xs md:text-sm uppercase tracking-wide ${isDarkMode ? 'text-white' : 'text-black'}`}>{info.label}</p>
                      <p className={`font-light text-xs sm:text-sm md:text-base ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{info.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div 
            className="space-y-3 md:space-y-4 lg:space-y-6"
            variants={itemVariants}
          >
            <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 lg:mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>Envoyez un message</h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <label className={`block mb-1 md:mb-2 font-bold text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-black'}`} htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full px-2 sm:px-3 md:px-4 py-2 md:py-3 lg:py-4 rounded-lg border focus:outline-none transition-all text-xs sm:text-sm md:text-base ${isDarkMode ? 'bg-slate-800 text-white border-slate-700 focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20' : 'bg-gray-50 text-black border-gray-200 focus:border-red-500 focus:shadow-lg focus:shadow-red-500/20'}`}
                placeholder={isDarkMode ? "Votre nom" : "Votre nom"}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <label className={`block mb-1 md:mb-2 font-bold text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-black'}`} htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full px-2 sm:px-3 md:px-4 py-2 md:py-3 lg:py-4 rounded-lg border focus:outline-none transition-all text-xs sm:text-sm md:text-base ${isDarkMode ? 'bg-slate-800 text-white border-slate-700 focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20' : 'bg-gray-50 text-black border-gray-200 focus:border-red-500 focus:shadow-lg focus:shadow-red-500/20'}`}
                placeholder="votre@email.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <label className={`block mb-1 md:mb-2 font-bold text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-black'}`} htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className={`w-full px-2 sm:px-3 md:px-4 py-2 md:py-3 lg:py-4 rounded-lg border focus:outline-none transition-all resize-none text-xs sm:text-sm md:text-base ${isDarkMode ? 'bg-slate-800 text-white border-slate-700 focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20' : 'bg-gray-50 text-black border-gray-200 focus:border-red-500 focus:shadow-lg focus:shadow-red-500/20'}`}
                placeholder="Votre message..."
              ></textarea>
            </motion.div>

            <motion.button
              type="button"
              className={`w-full py-2 md:py-3 lg:py-4 rounded-lg font-bold text-xs sm:text-sm md:text-lg uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl ${isDarkMode ? 'bg-yellow-500 text-slate-950 hover:bg-yellow-600 hover:shadow-yellow-500/20' : 'bg-black text-white hover:bg-gray-900 hover:shadow-black/20'}`}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Envoyer
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
