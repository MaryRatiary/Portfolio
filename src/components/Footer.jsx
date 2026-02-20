import { motion } from 'framer-motion';

const Footer = ({ isDarkMode }) => {
  const socialLinks = [
    { 
      icon: '🔗', 
      link: 'https://www.linkedin.com/in/mario-mamitantely-ratiarivony/', 
      label: 'LinkedIn'
    },
    { 
      icon: '💻', 
      link: 'https://github.com/MaryRatiary', 
      label: 'GitHub'
    },
    { 
      icon: '✉️', 
      link: 'mailto:maryratiary@gmail.com', 
      label: 'Email'
    }
  ];

  return (
    <motion.footer 
      className={`fixed bottom-0 w-full z-40 border-t transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-gray-200'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="py-4 md:py-6 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <motion.div 
            className={`text-xs sm:text-sm font-bold text-center sm:text-left ${isDarkMode ? 'text-white' : 'text-black'}`}
            whileHover={{ scale: 1.05 }}
          >
            © 2026 Mario Mamitantely
          </motion.div>

          <div className="flex gap-4 sm:gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative group transition-colors duration-300 text-xl sm:text-2xl ${isDarkMode ? 'text-white hover:text-yellow-400' : 'text-black hover:text-red-500'}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.3 + index * 0.1,
                    duration: 0.6
                  } 
                }}
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
