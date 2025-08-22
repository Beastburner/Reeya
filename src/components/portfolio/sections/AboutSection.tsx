import { motion } from 'framer-motion';
import { GraduationCap, Code, Shield } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient glow-text">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-glow rounded-xl p-8 animate-float"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-primary mr-4 glow-text" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-2 border-primary/30 pl-4">
                <h4 className="text-lg font-medium text-primary">Master in Electrical & Computer Engineering</h4>
                <p className="text-muted-foreground">2024 - 2025 (Ongoing)</p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-4">
                <h4 className="text-lg font-medium text-primary">Bachelor of Computer Engineering</h4>
                <p className="text-muted-foreground">2019 - 2023</p>
              </div>
            </div>
          </motion.div>

          {/* Passion Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="card-glow rounded-xl p-8 animate-float"
            style={{ animationDelay: '1s' }}
          >
            <div className="flex items-center mb-6">
              <Code className="w-8 h-8 text-primary mr-4 glow-text" />
              <h3 className="text-2xl font-semibold">Passion Areas</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full glow-primary"></div>
                <span>Full-stack Development</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full glow-primary"></div>
                <span>Data Analytics</span>
              </div>
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-2 h-2 bg-primary rounded-full glow-primary"></div>
                <span>Cybersecurity</span>
              </div>
              
              <div className="pt-4 border-t border-border">
                <Shield className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm text-muted-foreground">
                  Dedicated to creating secure, efficient, and user-friendly applications 
                  that solve real-world problems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 card-glow rounded-xl p-8 text-center"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            With a strong foundation in computer engineering and a passion for continuous learning, 
            I thrive on tackling complex challenges and building innovative solutions. My journey 
            spans from backend development to data analysis, always with a focus on creating 
            meaningful impact through technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;