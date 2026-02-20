import { motion } from "framer-motion";
import { useState } from "react";

const Section = (props) => {
  const { children, isDarkMode } = props;

  return (
    <motion.section
      className={`relative min-h-screen w-full p-6 md:p-12 flex flex-col items-start justify-center pb-20 transition-colors duration-300 ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: 0.2,
        },
      }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

const skillsData = {
  "Frontend": [
    { title: "React", level: 95 },
    { title: "Angular", level: 75 },
    { title: "Next.js", level: 85 },
    { title: "React Native", level: 90 },
  ],
  "Backend": [
    { title: "Django", level: 80 },
    { title: "C#", level: 85 },
    { title: "Java", level: 70 },
    { title: "Symfony", level: 75 },
  ],
  "Design & Créatif": [
    { title: "Adobe After Effects", level: 88 },
    { title: "Blender", level: 82 },
    { title: "CapCut", level: 90 },
  ],
  "Automatisation IA": [
    { title: "HubSpot", level: 85 },
    { title: "Lemlist", level: 80 },
    { title: "Brevo", level: 78 },
    { title: "N8N", level: 82 },
    { title: "Make", level: 80 },
  ],
};

const languages = [
  {
    title: "🇫🇷 French",
    level: 95,
  },
  {
    title: "🇺🇸 English",
    level: 85,
  },
  {
    title: "🇩🇪 Deutsch",
    level: 20,
  },
];

const SkillsSection = ({ isDarkMode }) => {
  const [expandedCategory, setExpandedCategory] = useState("Frontend");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section isDarkMode={isDarkMode}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false, amount: 0.3 }}
        className={`w-full ${isDarkMode ? 'text-white' : 'text-black'}`}
      >
        <motion.div className="mb-12 md:mb-20">
          <motion.h2 
            variants={itemVariants}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 md:mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}
          >
            Mes <span className={isDarkMode ? 'text-yellow-400' : 'text-red-500'}>Compétences</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className={`text-base sm:text-lg font-light ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}
          >
            Expertise et savoir-faire dans les technologies modernes
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 w-full">
          {/* Section Compétences Techniques */}
          <motion.div className="space-y-6 md:space-y-8" variants={containerVariants}>
            <motion.h3 
              variants={itemVariants}
              className={`text-2xl md:text-3xl font-bold mb-6 md:mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
              Compétences Techniques
            </motion.h3>

            {/* Menu des catégories */}
            <div className="space-y-2 md:space-y-3">
              {Object.keys(skillsData).map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setExpandedCategory(expandedCategory === category ? null : category)}
                  className={`w-full flex items-center justify-between p-3 md:p-4 rounded-lg border transition-all duration-300 text-sm md:text-base ${
                    expandedCategory === category
                      ? isDarkMode
                        ? 'bg-yellow-500/20 border-yellow-500/50'
                        : 'bg-red-50 border-red-200'
                      : isDarkMode
                        ? 'bg-slate-800 border-slate-700 hover:border-yellow-500/30'
                        : 'bg-gray-100 border-gray-200 hover:border-red-300'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    {category}
                  </span>
                  <motion.span
                    animate={{ rotate: expandedCategory === category ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`text-lg md:text-xl ${isDarkMode ? 'text-yellow-400' : 'text-red-500'}`}
                  >
                    ▼
                  </motion.span>
                </motion.button>
              ))}
            </div>

            {/* Contenu des compétences */}
            <motion.div
              animate={{ height: "auto" }}
              transition={{ duration: 0.3 }}
              className="space-y-6 md:space-y-8"
            >
              {expandedCategory && skillsData[expandedCategory] && (
                <>
                  <motion.h4
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`text-lg md:text-xl font-bold mt-4 md:mt-6 ${isDarkMode ? 'text-yellow-400' : 'text-red-500'}`}
                  >
                    {expandedCategory}
                  </motion.h4>
                  {skillsData[expandedCategory].map((skill, index) => (
                    <motion.div 
                      className="w-full"
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className={`flex items-center justify-between mb-2 md:mb-3`}>
                        <h5 className={`text-sm md:text-lg font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                          {skill.title}
                        </h5>
                        <span className={`text-xs md:text-sm font-semibold ${isDarkMode ? 'text-yellow-400' : 'text-red-500'}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`h-2 w-full rounded-full overflow-hidden shadow-sm ${isDarkMode ? 'bg-slate-800' : 'bg-gray-200'}`}>
                        <motion.div
                          className={`h-full rounded-full ${isDarkMode ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' : 'bg-gradient-to-r from-black to-red-500'}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.2,
                            delay: index * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </>
              )}
            </motion.div>
          </motion.div>

          {/* Section Langues */}
          <motion.div className="space-y-6 md:space-y-8" variants={containerVariants}>
            <motion.h3 
              variants={itemVariants}
              className={`text-2xl md:text-3xl font-bold mb-6 md:mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
              Langues
            </motion.h3>
            <div className="space-y-6 md:space-y-8">
              {languages.map((language, index) => (
                <motion.div 
                  className="w-full" 
                  key={index}
                  variants={itemVariants}
                >
                  <div className={`flex items-center justify-between mb-2 md:mb-3`}>
                    <h5 className={`text-sm md:text-lg font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                      {language.title}
                    </h5>
                    <span className={`text-xs md:text-sm font-semibold ${isDarkMode ? 'text-yellow-400' : 'text-red-500'}`}>
                      {language.level}%
                    </span>
                  </div>
                  <div className={`h-2 w-full rounded-full overflow-hidden shadow-sm ${isDarkMode ? 'bg-slate-800' : 'bg-gray-200'}`}>
                    <motion.div
                      className={`h-full rounded-full ${isDarkMode ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' : 'bg-gradient-to-r from-red-500 to-red-600'}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.level}%` }}
                      transition={{
                        duration: 1.2,
                        delay: 0.4 + index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: false, amount: 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

const Skills = ({ isDarkMode }) => {
  return (
    <div className={`flex flex-col items-center w-full relative overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-gradient-to-r from-yellow-500/10 to-transparent' : 'bg-gradient-to-r from-gray-100/40 to-transparent'}`} />
      </div>
      <SkillsSection isDarkMode={isDarkMode} />
    </div>
  );
};

export default Skills;
