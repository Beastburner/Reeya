import { motion } from 'framer-motion';
import { Construction, Briefcase, Sparkles } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient glow-text">
            Experience
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="card-glow rounded-xl p-12 max-w-2xl mx-auto relative"
        >
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="mb-8"
          >
            <Briefcase className="w-24 h-24 text-primary mx-auto glow-text" />
          </motion.div>

          <h3 className="text-3xl font-bold mb-4 text-primary glow-text">
            🚧 Professional Journey Ahead
          </h3>
          
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Ready to embark on an exciting career journey! With a strong educational foundation 
            and growing expertise, I'm eager to contribute to innovative projects and make a 
            meaningful impact in the tech industry.
          </p>

          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex items-center justify-center space-x-2 text-primary"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Open to opportunities</span>
            <Sparkles className="w-5 h-5" />
          </motion.div>

          {/* Animated Background Dots */}
          <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Skills Ready for Work */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 card-glow rounded-xl p-8"
        >
          <h4 className="text-xl font-semibold mb-6 text-primary">Ready to Contribute</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              'Team Collaboration',
              'Problem Solving', 
              'Continuous Learning',
              'Code Quality',
              'Project Management',
              'Technical Documentation',
              'Client Communication',
              'Agile Development'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-muted/20 rounded-lg py-3 px-4 text-center hover:bg-primary/10 transition-colors duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;