import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="fixed bottom-0 w-full z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-blur py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div 
            className="text-white text-sm"
            whileHover={{ scale: 1.05 }}
          >
            © 2024 Mario Mamitantely
          </motion.div>
          <div className="flex space-x-6">
            {[
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
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-400 transition-colors"
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.1 } 
                }}
                title={social.label}
              >
                <span className="text-2xl">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
