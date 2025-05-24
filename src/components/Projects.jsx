import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const projects = [
    {
      title: "Total Trade Hub",
      description: "Une plateforme reseau social pour les professionnels du commerce international",
      url: "https://github.com/MaryRatiary/Totaltrade-Hub.git",
      tech: ["React", "ASP.Net", "mongoDB"],
      image: "/1.jpg"
    },
    {
      title: "Marketplace",
      description: "site web de vente en ligne",
      url: "https://github.com/MaryRatiary/EXAMEN_DOTNET.git",
      tech: ["React", "Tailwindcss", "ASP.Net"],
      image: "/2.jpg"
    },
    {
      title: "Transport App",
      description: "Application mobile pour la gestion des transports",
      url: "https://github.com/MaryRatiary/EXAMEN_MOBILE.git",
      tech: ["React Native", "GraphQL", "MongoDB"],
      image: "/3.jpg"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="projects" className="min-h-screen bg-neutral-900 py-20 px-4">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-5xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mes Projets
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-emerald-500/20 transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative group h-48">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 text-emerald-200/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-emerald-600 rounded-full font-semibold transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-emerald-100"
                  >
                    Voir le projet
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-emerald-200 backdrop-blur-sm  text-sm rounded-full border border-emerald-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
