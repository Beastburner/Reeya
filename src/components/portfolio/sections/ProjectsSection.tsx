import { motion } from 'framer-motion';
import { Construction, Sparkles } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient glow-text">
            Projects
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="card-glow rounded-xl p-12 max-w-2xl mx-auto"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="mb-8"
          >
            <Construction className="w-24 h-24 text-primary mx-auto glow-text" />
          </motion.div>

          <h3 className="text-3xl font-bold mb-4 text-primary glow-text">
            🚧 Coming Soon
          </h3>
          
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Exciting projects are currently in development! This section will showcase 
            innovative solutions in full-stack development, data analytics, and cybersecurity.
          </p>

          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex items-center justify-center space-x-2 text-primary"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Stay tuned for amazing updates</span>
            <Sparkles className="w-5 h-5" />
          </motion.div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1.5, 0.5]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {['Web Application', 'Data Analytics Tool', 'Security Solution'].map((title, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              viewport={{ once: true }}
              className="card-glow rounded-lg p-6 opacity-60"
            >
              <div className="w-full h-32 bg-muted/20 rounded-lg mb-4 flex items-center justify-center">
                <Construction className="w-8 h-8 text-muted-foreground" />
              </div>
              <h4 className="font-semibold text-muted-foreground">{title}</h4>
              <p className="text-sm text-muted-foreground/70 mt-2">In Development</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;