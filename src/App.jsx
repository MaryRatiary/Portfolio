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
    // Simulation d'un chargement initial
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' }
  ];

  // Animation de chargement
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
          className="w-12 h-12 text-emerald-200"
        />
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      {/* Navigation fixe */}
      <nav className="fixed top-0 left-0 w-full z-50 nav-blur transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center h-16">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-white px-3 py-2 text-sm font-medium relative ${
                    activeSection === item.id ? 'text-emerald-500' : ''
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500"
                      layoutId="underline"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Contenu principal avec transitions */}
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
      <Footer />
    </div>
  );
}

export default App;