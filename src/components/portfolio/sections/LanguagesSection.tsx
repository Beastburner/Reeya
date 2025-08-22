import { motion } from 'framer-motion';
import { Globe, MessageCircle } from 'lucide-react';

const LanguagesSection = () => {
  const languages = [
    {
      name: 'English',
      level: 'Fluent',
      proficiency: 95,
      flag: '🇺🇸',
      description: 'Professional working proficiency with excellent communication skills'
    },
    {
      name: 'Gujarati',
      level: 'Fluent',
      proficiency: 100,
      flag: '🇮🇳',
      description: 'Native language with full fluency in speaking, reading, and writing'
    },
    {
      name: 'Hindi',
      level: 'Fluent',
      proficiency: 90,
      flag: '🇮🇳',
      description: 'Fluent speaker with strong comprehension and communication abilities'
    }
  ];

  return (
    <section id="languages" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient glow-text">
            Languages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multilingual communication skills for global collaboration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                rotateY: 10,
                scale: 1.05,
              }}
              className="card-glow rounded-xl p-8 text-center group cursor-pointer perspective-1000"
            >
              {/* Flag & Language Name */}
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-6xl mb-4">{language.flag}</div>
                <h3 className="text-2xl font-bold text-primary">
                  {language.name}
                </h3>
              </motion.div>

              {/* Proficiency Level */}
              <div className="mb-6">
                <div className="flex items-center justify-center mb-3">
                  <MessageCircle className="w-5 h-5 text-primary mr-2 glow-text" />
                  <span className="text-lg font-semibold text-primary">
                    {language.level}
                  </span>
                </div>

                {/* Proficiency Bar */}
                <div className="bg-muted/30 rounded-full h-3 overflow-hidden mb-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary to-primary/60 h-full rounded-full glow-subtle"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${language.proficiency}%` }}
                    transition={{ duration: 1.5, delay: index * 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  {language.proficiency}% Proficiency
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {language.description}
              </p>

              {/* Hover Effect - Checkmark */}
              <motion.div
                className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/30 glow-subtle">
                  <motion.div
                    className="text-primary text-2xl"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    ✓
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Particles on Hover */}
              <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      y: [-20, -40, -20],
                      scale: [0.5, 1, 0.5],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Communication */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center card-glow rounded-xl p-8"
        >
          <Globe className="w-12 h-12 text-primary mx-auto mb-4 glow-text" />
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            Global Communication Ready
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Multilingual abilities enable effective communication across diverse teams and markets, 
            fostering better collaboration and understanding in international environments.
          </p>
          
          <div className="flex justify-center items-center space-x-8 text-sm">
            <div className="flex items-center">
              <MessageCircle className="w-5 h-5 text-primary mr-2" />
              <span>3 Languages</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 text-primary mr-2" />
              <span>Cross-Cultural Communication</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LanguagesSection;