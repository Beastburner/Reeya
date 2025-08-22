import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name */}
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 text-gradient glow-text"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Reeya Soni
          </motion.h1>

          {/* Title */}
          <motion.h2 
            className="text-2xl md:text-3xl font-light text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Computer Engineer
          </motion.h2>

          {/* Tagline */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Passionate and driven computer engineering professional with a foundation in software development. 
            Skilled in building seamless user interfaces and efficient server-side operations.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button 
              className="btn-primary px-8 py-4 text-lg font-medium rounded-xl min-w-[200px] group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
            
            <Button 
              className="btn-secondary px-8 py-4 text-lg font-medium rounded-xl min-w-[200px] group"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Contact Me
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="animate-bounce">
              <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full glow-subtle"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;