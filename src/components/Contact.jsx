import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  // État pour le formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    { icon: '👤', label: 'Age', value: '20 ans', category: 'personal' },
    { icon: '✉️', label: 'Email', value: 'maryratiary@gmail.com', link: 'mailto:maryratiary@gmail.com', category: 'contact' },
    { icon: '📱', label: 'Téléphone Principal', value: '+261380730917', link: 'tel:+261380730917', category: 'contact' },
    { icon: '📱', label: 'Téléphone Secondaire', value: '+261323108480', link: 'tel:+261323108480', category: 'contact' },
    { icon: '👥', label: 'Facebook', value: 'Mario Ratiary', link: 'https://facebook.com/mario.ratiary', category: 'social' },
    { icon: '🔗', label: 'LinkedIn', value: 'Ratiarivony Mario', link: 'https://www.linkedin.com/in/mario-mamitantely-ratiarivony/', category: 'social' },
  ];

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-b from-black to-emerald-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contactez-moi
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Mes Informations</h3>
              
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('mailto') || info.link.startsWith('tel') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                    >
                      <span className="text-2xl bg-emerald-500/10 p-3 rounded-full">{info.icon}</span>
                      <div>
                        <p className="text-emerald-300 font-medium">{info.label}</p>
                        <p className="text-white text-sm">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl">
                      <span className="text-2xl bg-emerald-500/10 p-3 rounded-full">{info.icon}</span>
                      <div>
                        <p className="text-emerald-300 font-medium">{info.label}</p>
                        <p className="text-white text-sm">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div 
            className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Envoyez-moi un message</h3>
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <label className="block text-white mb-2" htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white border border-gray-700 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="Votre nom"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <label className="block text-white mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white border border-gray-700 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="votre@email.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <label className="block text-white mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white border border-gray-700 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="Votre message"
                ></textarea>
              </motion.div>

              <motion.button
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-900 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
