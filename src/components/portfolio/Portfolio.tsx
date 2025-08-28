import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HamburgerNav from './HamburgerNav';
import ThreeScene from './ThreeScene';
import WelcomeScreen from './WelcomeScreen';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import CertificatesSection from './sections/CertificatesSection';
import LanguagesSection from './sections/LanguagesSection';
import ContactSection from './sections/ContactSection';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Optimized scroll progress tracker with throttling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const progress = Math.min(scrolled / maxScroll, 1);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    
    // Enhanced GSAP ScrollTrigger animations for treasure hunt discovery
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
      // Discovery animation - sections appear as if being "discovered"
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
          rotationX: 10
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              // Add discovery pulse effect
              gsap.to(section, {
                boxShadow: '0 0 30px hsl(217 100% 60% / 0.4)',
                duration: 0.5,
                yoyo: true,
                repeat: 1,
              });
            }
          },
        }
      );
      
      // Card hover animations for treasure discovery feel
      const cards = section.querySelectorAll('.card-glow');
      cards.forEach((card) => {
        gsap.set(card, { transformOrigin: 'center center' });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [hasStarted]);

  const handleSectionClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleWelcomeStart = () => {
    setShowWelcome(false);
    setTimeout(() => {
      setHasStarted(true);
    }, 1200); // Wait for welcome screen exit animation
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Welcome Screen */}
      <AnimatePresence>
        {showWelcome && (
          <WelcomeScreen onStart={handleWelcomeStart} />
        )}
      </AnimatePresence>

      {/* Three.js Background Scene */}
      {hasStarted && <ThreeScene scrollProgress={scrollProgress} />}
      
      {/* Navigation */}
      {hasStarted && <HamburgerNav onSectionClick={handleSectionClick} />}
      
      {/* Scroll Progress Indicator - Treasure Path Progress */}
      {hasStarted && (
        <motion.div
          className="fixed top-0 left-0 h-1 z-50"
          style={{ 
            width: `${scrollProgress * 100}%`,
            background: 'linear-gradient(90deg, hsl(var(--neon-blue)), hsl(var(--neon-blue-bright)))',
            boxShadow: '0 0 10px hsl(var(--neon-blue)), 0 0 20px hsl(var(--neon-blue) / 0.5)'
          }}
        />
      )}

      {/* Main Content */}
      {hasStarted && (
        <motion.main 
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <CertificatesSection />
          <LanguagesSection />
          <ContactSection />
        </motion.main>
      )}

      {/* Enhanced Floating Background Elements */}
      {hasStarted && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          style={{
            backgroundImage: `linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px),
                             linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Optimized Floating Particles - Reduced count */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              background: i % 3 === 0 ? 'hsl(var(--neon-blue))' : 'hsl(var(--neon-blue) / 0.6)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px hsl(var(--neon-blue) / 0.8)',
              willChange: 'transform, opacity'
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/4 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.05) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        </div>
      )}
    </div>
  );
};

export default Portfolio;