import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' }
  ];

  if (isLoading) {
    return (
      <div className={`h-screen flex items-center justify-center overflow-hidden ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="relative w-20 h-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className={`absolute inset-0 border-4 rounded-full ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className={`absolute inset-2 border-4 border-transparent rounded-full ${isDarkMode ? 'border-t-yellow-400 border-r-yellow-400' : 'border-t-red-500 border-r-red-500'}`}
          />
        </div>
      </div>
    );
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className={`min-h-screen relative overflow-x-hidden transition-colors duration-300 ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
      {/* Éléments de design en arrière-plan */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: scrollY * 0.5 }}
          className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-30 ${isDarkMode ? 'bg-gradient-to-br from-yellow-500/30 to-transparent' : 'bg-gradient-to-br from-red-100 to-transparent'}`}
        />
        <motion.div
          animate={{ y: scrollY * -0.3 }}
          className={`absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl ${isDarkMode ? 'bg-gradient-to-tr from-slate-700/30 to-transparent opacity-20' : 'bg-gradient-to-tr from-gray-100 to-transparent opacity-20'}`}
        />
      </div>

      {/* Navigation fixe améliorée */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? isDarkMode
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-lg'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg'
          : isDarkMode
            ? 'bg-slate-950 border-b border-slate-800'
            : 'bg-white border-b border-gray-100'
      }`}>
        <div className="w-full px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className={`text-xl md:text-2xl font-black relative ${isDarkMode ? 'text-white' : 'text-black'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              M.
              <motion.div
                className={`absolute -bottom-2 left-0 w-full h-1 rounded-full ${isDarkMode ? 'bg-yellow-400' : 'bg-red-500'}`}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            <div className="flex items-center gap-4 md:gap-12">
              {/* Navigation - Cachée sur mobile */}
              <div className="hidden md:flex md:space-x-6 lg:space-x-8">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-xs md:text-sm font-semibold transition-all duration-300 relative group whitespace-nowrap ${
                      activeSection === item.id 
                        ? isDarkMode ? 'text-white' : 'text-black'
                        : isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-600 hover:text-black'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    <motion.div
                      className={`absolute -bottom-1 left-0 w-full h-0.5 ${isDarkMode ? 'bg-yellow-400' : 'bg-red-500'}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: activeSection === item.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                ))}
              </div>

              {/* Bouton Toggle Dark Mode */}
              <motion.button
                className={`relative w-12 md:w-14 h-7 md:h-8 rounded-full transition-all duration-300 ease-in-out flex items-center border-2 flex-shrink-0 ${
                  isDarkMode
                    ? 'bg-yellow-500/20 border-yellow-500'
                    : 'bg-gray-300 border-gray-300'
                }`}
                onClick={() => setIsDarkMode(!isDarkMode)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`w-5 md:w-6 h-5 md:h-6 rounded-full shadow-md flex items-center justify-center text-xs md:text-sm ${
                    isDarkMode ? 'bg-yellow-400' : 'bg-white'
                  }`}
                  animate={{ 
                    x: isDarkMode ? 22 : 3
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <span className="text-xs">
                    {isDarkMode ? '🌙' : '☀️'}
                  </span>
                </motion.div>
              </motion.button>

              {/* Menu Mobile */}
              <motion.button
                className={`md:hidden p-2 rounded-lg ${isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-100'}`}
                onClick={() => {
                  // Toggle mobile menu
                  const menu = document.getElementById('mobile-menu');
                  if (menu) {
                    menu.classList.toggle('hidden');
                  }
                }}
              >
                <span className={`text-2xl ${isDarkMode ? 'text-white' : 'text-black'}`}>☰</span>
              </motion.button>
            </div>
          </div>

          {/* Menu Mobile Dropdown */}
          <motion.div
            id="mobile-menu"
            className={`hidden md:hidden pb-4 space-y-2 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  document.getElementById('mobile-menu')?.classList.add('hidden');
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                  activeSection === item.id 
                    ? isDarkMode ? 'bg-yellow-500/20 text-white' : 'bg-red-50 text-black'
                    : isDarkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </nav>

      {/* Contenu principal - Landing Page */}
      <main className="relative z-10">
        <section id="home">
          <Hero isDarkMode={isDarkMode} />
        </section>
        
        <section id="about">
          <Skills isDarkMode={isDarkMode} />
        </section>
        
        <section id="projects">
          <Projects isDarkMode={isDarkMode} />
        </section>
        
        <section id="contact">
          <Contact isDarkMode={isDarkMode} />
        </section>
      </main>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;