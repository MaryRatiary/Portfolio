import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import './Hero.css';
import backgroundVideo from '../assets/background_video.mp4';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  const contactInfo = [
    { icon: '👤', label: 'Age', value: '20 ans' },
    { icon: '✉️', label: 'Email', value: 'maryratiary@gmail.com', link: 'mailto:maryratiary@gmail.com' },
    { icon: '📱', label: 'Téléphone', value: '+261380730917', link: 'tel:+261380730917' },
    { icon: '📱', label: 'Téléphone 2', value: '+261323108480', link: 'tel:+261323108480' },
    { icon: '👥', label: 'Facebook', value: 'Mario Ratiary', link: 'https://facebook.com/mario.ratiary' },
    { icon: '🔗', label: 'LinkedIn', value: 'Ratiarivony Mario', link: 'https://www.linkedin.com/in/mario-mamitantely-ratiarivony/' },
  ];

  return (
    <div className="min-h-screen w-full bg-neutral-900 relative">
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-60' : 'opacity-0'}`}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 via-transparent to-black/80" />
      </div>

      <div className={`relative z-10 px-6 md:px-16 ${
        isVideoLoaded ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-1000 delay-300`}>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 py-2"
        >
          {/* Texte à gauche */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div className="inline-block mb-6 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-sm">
              <span className="text-emerald-200 font-medium">👋 Bienvenue sur mon portfolio</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-beige-50 to-emerald-200 bg-clip-text text-transparent">
            Bonjour, je suis<br />
              
              <span className="text-emerald-300">Ratiarivony </span>
               <span className="text-emerald-200">Mario Mamitantely</span>
            </h1>

            <p className="text-amber-100 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Développeur web créatif & designer d’expériences numériques. J’unis le développement moderne à l’esthétique 3D pour créer des projets uniques.
            </p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
            >
              {[
                { icon: '💻', label: 'Développement Web', color: 'from-emerald-600/20 to-emerald-700/20' },
                { icon: '🎨', label: 'Design UI/UX', color: 'from-lime-500/20 to-lime-600/20' },
                { icon: '🎮', label: 'Conception 3D', color: 'from-green-400/20 to-green-500/20' },
                { icon: '📱', label: 'Apps Mobile', color: 'from-beige-300/20 to-beige-400/20' },
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  className={`group flex items-center space-x-3 bg-gradient-to-r ${skill.color} px-5 py-3 rounded-full backdrop-blur-md border border-white/10`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-beige-100 font-medium">{skill.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <motion.button
                className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-lime-500 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setTimeout(() => {
                    const element = document.getElementById('projects');
                    if (element) {
                      const headerOffset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      });
                    }
                  }, 100);
                }}
              >
                <span className="relative z-10">Découvrir mes projets</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-lime-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <div className="relative">
                <motion.button
                  className="relative overflow-hidden bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-medium border border-white/20 hover:bg-white/20 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setTimeout(() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        const headerOffset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth"
                        });
                      }
                    }, 100);
                  }}
                >
                  Me contacter
                </motion.button>

                <AnimatePresence>
                  {showContactMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-72 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl z-50"
                    >
                      <div className="p-4 space-y-3">
                        {contactInfo.map((info, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                          >
                            {info.link ? (
                              <a
                                href={info.link}
                                target={info.link.startsWith('mailto') || info.link.startsWith('tel') ? '_self' : '_blank'}
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
                              >
                                <span className="text-xl">{info.icon}</span>
                                <div>
                                  <p className="text-sm font-medium text-emerald-300">{info.label}</p>
                                  <p className="text-sm">{info.value}</p>
                                </div>
                              </a>
                            ) : (
                              <div className="flex items-center gap-3 p-2 rounded-lg text-white">
                                <span className="text-xl">{info.icon}</span>
                                <div>
                                  <p className="text-sm font-medium text-emerald-300">{info.label}</p>
                                  <p className="text-sm">{info.value}</p>
                                </div>
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>

          {/* Image à droite */}
          <motion.div
            variants={itemVariants}
            className="flex-1 max-w-md relative lg:block"
          >
            <div className="relative w-full lg:top-5">
              <div className="lg:hidden mb-8 flex justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-lg shadow-emerald-500/20">
                  <img
                    src="/me.png"
                    alt="Mario Ratiarivony"
                    className="w-full h-80% object-cover"
                  />
                </div>
              </div>
              <img
                src="/me.png"
                alt="Mario Ratiarivony"
                className="hidden lg:block lg:pt-5 relative z-10 w-full h-100% top-2 object-cover "
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                  WebkitMaskSize: '100% 95%',
                  maskSize: '100% 95%',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                }}
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
