import { motion } from "framer-motion";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
        relative min-h-screen w-screen p-8 max-w-screen-2xl mx-auto top-7
        flex flex-col items-start justify-center
        before:content-[''] before:absolute before:inset-0 before:bg-black/60 before:z-0 pb-20
      `}
      style={{
        backgroundImage: "url(/background_competence.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      <div className="relative z-10 w-full">
        {children}
      </div>
    </motion.section>
  );
};

const AboutSection = () => {
  return (
    <></>
  );
};

const skills = [
  {
    title: "Three.js / React Three Fiber 🎨📦✨",
    level: 80,
  },
  {
    title: "React Native 📱⚛️",
    level: 90,
  },
  {
    title: "Front-End 🎨💻",
    level: 90,
  },
  {
    title: "Back-End 🖥️⚙️",
    level: 60,
  },
  {
    title: "3D Modelling 🏗️🖌️🔺",
    level: 40,
  },
];

const languages = [
  {
    title: "🇫🇷 French",
    level: 85,
  },
  {
    title: "🇺🇸 English",
    level: 80,
  },
  {
    title: "🇩🇪 Deutsch ",
    level: 20,
  },
];

const SkillsSection = () => {
  return (
    <Section className="top-4">
      <motion.div whileInView={"visible"} className="text-white">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent mb-2">Mes Compétences</h2>
        <p className="text-gray-300 mb-8 text-lg">Expertise et savoir-faire</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-emerald-300 mb-4">Compétences Techniques</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div className="w-full max-w-md" key={index}>
                  <motion.h3
                    className="text-xl font-bold text-white/90"
                    initial={{
                      opacity: 0,
                    }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}
                  >
                    {skill.title}
                  </motion.h3>
                  <div className="h-2 w-full bg-gray-700/50 rounded-full mt-2 overflow-hidden backdrop-blur-sm">
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                      initial={{ width: 0 }}
                      variants={{
                        visible: {
                          width: `${skill.level}%`,
                          transition: {
                            duration: 1,
                            delay: 1 + index * 0.2,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-emerald-300 mb-4">Langues</h3>
            <div className="space-y-4">
              {languages.map((language, index) => (
                <div className="w-full max-w-md" key={index}>
                  <motion.h3
                    className="text-xl font-bold text-white/90"
                    initial={{
                      opacity: 0,
                    }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  >
                    {language.title}
                  </motion.h3>
                  <div className="h-2 w-full bg-gray-700/50 rounded-full mt-2 overflow-hidden backdrop-blur-sm">
                    <motion.div
                      className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full"
                      style={{ width: `${language.level}%` }}
                      initial={{ width: 0 }}
                      variants={{
                        visible: {
                          width: `${language.level}%`,
                          transition: {
                            duration: 1,
                            delay: 2 + index * 0.2,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-col items-center w-screen bg-black">
      <AboutSection />
      <SkillsSection />
    </div>
  );
};

export default Skills;
