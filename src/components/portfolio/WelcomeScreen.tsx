import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        transition: { duration: 1.2, ease: "easeInOut" }
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'] 
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          style={{
            backgroundImage: `linear-gradient(90deg, hsl(var(--neon-blue) / 0.3) 1px, transparent 1px),
                             linear-gradient(hsl(var(--neon-blue) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: 'hsl(var(--neon-blue) / 0.4)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Central Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--neon-blue) / 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative text-center max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Search Icon */}
          <motion.div
            className="mb-8 flex justify-center"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Search className="w-16 h-16 text-neon-blue glow-primary" />
          </motion.div>

          {/* Welcome Text */}
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-gradient glow-text"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Ready to begin the treasure hunt?
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Follow the glowing path to discover Reeya's professional journey
          </motion.p>

          {/* Start Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Button 
              onClick={onStart}
              className="btn-primary px-12 py-6 text-xl font-semibold rounded-2xl relative group overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-neon-blue/20 rounded-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
              <motion.span
                className="relative z-10 flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
              >
                🗺️ Open Map
              </motion.span>
              
              {/* Button Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow: [
                    '0 0 20px hsl(var(--neon-blue) / 0.4)',
                    '0 0 40px hsl(var(--neon-blue) / 0.8)',
                    '0 0 20px hsl(var(--neon-blue) / 0.4)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </Button>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-sm text-muted-foreground mt-6 opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.2 }}
          >
            Interactive portfolio experience
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;