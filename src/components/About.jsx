import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const skills = [
    "React.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "TailwindCSS",
    "Git",
    "Python",
    "MongoDB"
  ];

  return (
    <div ref={ref} className="min-h-screen bg-black py-12 md:py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Cercles décoratifs animés */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              background: `radial-gradient(circle, rgba(147,51,234,1) 0%, rgba(0,0,0,0) 70%)`,
              width: `${(i + 1) * 40}vw`,
              height: `${(i + 1) * 40}vw`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="max-w-4xl mx-auto relative z-10"
        style={{ y, opacity }}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          À propos de moi
        </motion.h2>

        <motion.div 
          className="bg-gray-900 rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-lg bg-opacity-50 shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
            Je suis un développeur passionné par la création d'expériences web innovantes et interactives. 
            Avec une solide expérience en développement front-end et une curiosité constante pour les nouvelles technologies, 
            je m'efforce de créer des solutions élégantes et performantes.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Compétences</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="text-emerald-200 rounded-lg p-2 md:p-3 text-center text-white font-medium text-xs md:text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "#7C3AED" }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
