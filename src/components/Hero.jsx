import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Hero.css';

const TypewriterText = ({ isDarkMode }) => {
  const roles = [
    'Développeur Web',
    'Expert en Automatisation',
    'Spécialiste IA & Data',
    'Développeur Mobile'
  ];

  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timer;

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1);
          } else {
            return currentRole.slice(0, prev.length + 1);
          }
        });
      }, isDeleting ? 40 : 60);

      return () => clearTimeout(timeout);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <span className={`font-black inline-block min-w-max ${isDarkMode ? 'text-white' : 'text-black'}`}>
      {displayText}
      <motion.span 
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className={`inline-block w-1 h-8 ml-1 ${isDarkMode ? 'bg-white' : 'bg-black'}`}
      />
    </span>
  );
};

const Hero = ({ isDarkMode }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth) * 20 - 10,
      y: (clientY / innerHeight) * 20 - 10,
    });
  };

  return (
    <div 
      className={`min-h-screen w-full relative overflow-hidden pt-20 transition-colors duration-300 ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}
      onMouseMove={handleMouseMove}
    >
      {/* Éléments décoratifs animés */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          animate={{ 
            x: mousePosition.x,
            y: mousePosition.y
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className={`absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${isDarkMode ? 'bg-gradient-to-br from-yellow-500 to-transparent' : 'bg-gradient-to-br from-red-200 to-transparent'}`}
        />
        <motion.div
          animate={{ 
            x: -mousePosition.x,
            y: -mousePosition.y
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className={`absolute bottom-32 left-10 w-64 h-64 rounded-full blur-3xl opacity-15 ${isDarkMode ? 'bg-gradient-to-tr from-slate-700 to-transparent' : 'bg-gradient-to-tr from-gray-200 to-transparent'}`}
        />
      </div>

      <div className="relative z-10 px-6 md:px-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24 py-20 lg:py-10"
        >
          {/* Texte à gauche */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 ${isDarkMode ? 'bg-yellow-500/20 border border-yellow-400' : 'bg-red-100/50 border border-red-200'}`}
            >
              <span className={`w-2 h-2 rounded-full animate-pulse ${isDarkMode ? 'bg-yellow-400' : 'bg-red-500'}`} />
              <span className={`text-sm font-semibold ${isDarkMode ? 'text-yellow-300' : 'text-red-700'}`}>Disponible pour collaborer</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className={`text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-black mb-6 md:mb-8 leading-tight tracking-tight ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
              Ratiarivony <br />
              <span className={isDarkMode ? 'text-yellow-400' : 'text-red-500'}>Mario Mamitantely</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className={`text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 md:mb-12 font-light ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}
            >
              Je suis un <span className={`font-black ${isDarkMode ? 'text-white' : 'text-black'}`}><TypewriterText isDarkMode={isDarkMode} /></span>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 mb-8 md:mb-14"
            >
              {[
                { label: 'Web Dev' },
                { label: 'UI/UX Design' },
                { label: '3D Design' },
                { label: 'Mobile' },
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 border text-xs md:text-sm ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 hover:border-slate-600' : 'bg-gray-100 hover:bg-gray-200 border-gray-200 hover:border-gray-300'}`}
                  whileHover={{ scale: 1.08, y: -2 }}
                >
                  <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>{skill.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 md:gap-4"
            >
              <motion.button
                className={`text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-sm md:text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap ${isDarkMode ? 'bg-yellow-500 hover:bg-yellow-600 hover:shadow-yellow-500/20' : 'bg-black hover:bg-gray-900 hover:shadow-black/20'}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
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
                }}
              >
                Voir mes projets
              </motion.button>

              <motion.button
                className={`px-8 md:px-12 py-3 md:py-4 rounded-full text-sm md:text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl border-2 whitespace-nowrap ${isDarkMode ? 'bg-transparent border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-slate-950 hover:shadow-yellow-500/20' : 'bg-white text-black border-black hover:bg-black hover:text-white hover:shadow-black/20'}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
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
                }}
              >
                Contact
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image à droite */}
          <motion.div
            variants={itemVariants}
            className="flex-1 max-w-xl relative lg:block"
          >
            <div className="relative w-full">
              <div className="lg:hidden mb-8 flex justify-center">
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="w-64 h-80 rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="/moi7.png"
                    alt="Mario Ratiarivony"
                    className="w-full h-full object-cover"
                    onLoad={() => setIsImageLoaded(true)}
                  />
                </motion.div>
              </div>

              <div className="hidden lg:block relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="/moi7.png"
                    alt="Mario Ratiarivony"
                    className="w-full rounded-3xl"
                    onLoad={() => setIsImageLoaded(true)}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
