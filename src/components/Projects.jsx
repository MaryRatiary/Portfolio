import { motion } from 'framer-motion';

const Projects = ({ isDarkMode }) => {
  const projects = [
    {
      title: "Nexus Lab",
      description: "Intégration 3D avec Three.js sur une plateforme de digitalisation futuriste",
      url: "https://nexuslaab.netlify.app",
      tech: ["React", "Three.js", "Tailwind CSS"],
      image: "/nexuslaab.png",
      category: "3D Integration"
    },
    {
      title: "All Stone Mada",
      description: "Plateforme e-commerce de vente de pierres précieuses à Madagascar",
      url: "https://allstonemada.netlify.app",
      tech: ["React", "C#", "ASP.Net"],
      image: "/allstoneof mada.png",
      category: "E-Commerce"
    },
    {
      title: "Aveny Work",
      description: "Site web avec IA intégrée pour suggestions de business personnel et tableau de bord dynamique",
      url: "https://avenywork.netlify.app",
      tech: ["React", "Django", "Machine Learning"],
      image: "/avenywork.png",
      category: "AI Platform"
    },
    {
      title: "Ratiary Business",
      description: "Site web statique pour promouvoir des offres multi-services en ligne",
      url: "https://ratiarybusiness.netlify.app",
      tech: ["React", "Tailwind CSS", "SEO"],
      image: "/ratiarybusiness.png",
      category: "Business"
    },
    {
      title: "Rise Platform",
      description: "Réseau social pour les relations étudiantes avec publications, messages et formulaires dynamiques",
      url: "https://riseplatform.netlify.app",
      tech: ["React", "C#", "Real-time"],
      image: "/riseplatform.png",
      category: "Social Network"
    }
  ];

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
    <div id="projects" className={`min-h-screen py-12 md:py-24 px-4 md:px-6 relative overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-1/3 right-0 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-gradient-to-l from-yellow-500/20 to-transparent' : 'bg-gradient-to-l from-red-100/30 to-transparent'}`} />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto relative z-10 w-full"
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
            Mes <span className={isDarkMode ? 'text-yellow-400' : 'text-red-500'}>Projets</span>
          </motion.h2>
          <motion.p
            className={`text-sm sm:text-base md:text-lg font-light ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Explorez mes réalisations et projets innovants
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="group cursor-pointer h-full"
            >
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col h-full relative rounded-lg md:rounded-2xl overflow-hidden transition-all duration-300 border ${isDarkMode ? 'bg-slate-900 hover:shadow-2xl hover:shadow-yellow-500/20 border-slate-800 hover:border-yellow-500/50' : 'bg-gray-100 hover:shadow-2xl border-gray-200 hover:border-red-200'}`}
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-gray-200 w-full h-40 sm:h-48 md:h-56 lg:h-64">
                  <motion.img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay au survol */}
                  <motion.div 
                    className="absolute inset-0 bg-black/60 flex items-end justify-start p-3 sm:p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="text-white">
                      <p className={`text-xs sm:text-sm font-semibold mb-1 md:mb-2 ${isDarkMode ? 'text-yellow-300' : 'text-red-400'}`}>{project.category}</p>
                      <p className="text-xs sm:text-sm font-light line-clamp-2">{project.description}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Contenu */}
                <div className={`p-3 sm:p-4 md:p-6 flex-1 flex flex-col ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
                  <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3 transition-colors ${isDarkMode ? 'text-white group-hover:text-yellow-400' : 'text-black group-hover:text-red-500'}`}>
                    {project.title}
                  </h3>
                  
                  {/* Tags technologiques */}
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {project.tech.map((tech, idx) => (
                      <motion.span 
                        key={idx}
                        className={`text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full font-medium transition-all ${isDarkMode ? 'bg-slate-800 text-slate-300 border border-slate-700 group-hover:bg-yellow-500/20 group-hover:border-yellow-400/50 group-hover:text-yellow-300' : 'bg-gray-100 text-gray-700 border border-gray-200 group-hover:bg-red-50 group-hover:border-red-200'}`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
