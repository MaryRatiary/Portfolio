import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' }
  ];

  if (isLoading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 2, 1],
            rotate: [0, 360],
            borderRadius: ["20%", "50%", "20%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
          }}
          className="w-12 h-12 bg-emerald-200"
        />
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      {/* NAVIGATION FUTURISTE RESPONSIVE */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-emerald-500/20 shadow-[0_0_15px_rgba(0,255,170,0.3)]">
        <div className="max-w-7xl mx-auto sm:px-4 lg:px-8">
          <div className="flex justify-center items-center h-14 sm:h-16 overflow-x-auto no-scrollbar">
            <div className="flex gap-3 sm:gap-6 md:gap-10 whitespace-nowrap relative">

              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative px-2 sm:px-3 md:px-4 py-1 text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wide transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-emerald-400 drop-shadow-[0_0_10px_rgba(0,255,170,0.8)]'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}

                  {/* Soulignement animé futuriste */}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 shadow-[0_0_8px_rgba(0,255,170,0.8)]"
                      layoutId="underline"
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    />
                  )}
                </motion.button>
              ))}

            </div>
          </div>
        </div>
      </nav>

      {/* CONTENU PRINCIPAL */}
      <div className="pt-1 sm:pt-2">
        <AnimatePresence mode="wait">
          <motion.main
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {activeSection === 'home' && <Hero />}
            {activeSection === 'about' && <Skills />}
            {activeSection === 'projects' && <Projects />}
            {activeSection === 'contact' && <Contact />}
          </motion.main>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}

export default App;
