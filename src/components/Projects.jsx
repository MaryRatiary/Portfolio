import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Total Trade Hub",
      description: "Une plateforme réseau social pour les professionnels du commerce international",
      url: "https://github.com/MaryRatiary/Totaltrade-Hub.git",
      tech: ["React", "ASP.Net", "MongoDB"],
      image: "/1.jpg"
    },
    {
      title: "Marketplace",
      description: "Site web de vente en ligne moderne et responsive",
      url: "https://github.com/MaryRatiary/EXAMEN_DOTNET.git",
      tech: ["React", "TailwindCSS", "ASP.Net"],
      image: "/2.jpg"
    },
    {
      title: "Transport App",
      description: "Application mobile pour la gestion et suivi des transports",
      url: "https://github.com/MaryRatiary/EXAMEN_MOBILE.git",
      tech: ["React Native", "GraphQL", "MongoDB"],
      image: "/3.jpg"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-b from-black to-emerald-950 py-20 px-4">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Titre */}
        <motion.h2 
          className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-500 drop-shadow-[0_0_15px_rgba(0,255,170,0.7)] mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mes Projets
        </motion.h2>

        {/* Grille projets */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/80 to-black/40 border border-emerald-500/20 shadow-[0_0_20px_rgba(0,255,170,0.2)] hover:shadow-[0_0_40px_rgba(0,255,170,0.4)] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <motion.img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    🚀 Voir le projet
                  </a>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-emerald-300 mb-2 tracking-wide">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 text-emerald-200 border border-emerald-500/40 shadow-inner shadow-emerald-900/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow extérieur animé */}
              <motion.div 
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-cyan-400/20 to-violet-500/20 blur-lg opacity-0 group-hover:opacity-100 transition duration-700"
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
