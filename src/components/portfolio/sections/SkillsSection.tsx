import { motion } from 'framer-motion';
import { Code2, Database, Globe, Terminal } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['Java', 'Python', 'C'],
      color: 'text-blue-400'
    },
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['HTML5', 'CSS'],
      color: 'text-green-400'
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['PHP', 'Supabase', 'SQL'],
      color: 'text-purple-400'
    },
    {
      title: 'Tools',
      icon: Terminal,
      skills: ['Git', 'VS Code'],
      color: 'text-orange-400'
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient glow-text">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                }}
                className="card-glow rounded-xl p-6 text-center group cursor-pointer"
              >
                {/* Icon */}
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className={`w-12 h-12 ${category.color} glow-text`} />
                </motion.div>

                {/* Category Title */}
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: (index * 0.2) + (skillIndex * 0.1) 
                      }}
                      viewport={{ once: true }}
                      className="bg-muted/20 rounded-lg py-2 px-3 text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>

                {/* Glow Effect on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                    pointerEvents: 'none'
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Skill Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 card-glow rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">
            Proficiency Overview
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { skill: 'Problem Solving', level: 90 },
              { skill: 'Software Development', level: 85 },
              { skill: 'Data Analysis', level: 80 },
              { skill: 'Database Management', level: 75 }
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-primary">{item.level}%</span>
                </div>
                <div className="bg-muted/30 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-primary to-primary/60 h-full rounded-full glow-subtle"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;