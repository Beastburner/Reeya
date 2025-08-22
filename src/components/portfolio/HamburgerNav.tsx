import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface HamburgerNavProps {
  onSectionClick: (sectionId: string) => void;
}

const HamburgerNav = ({ onSectionClick }: HamburgerNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'languages', label: 'Languages' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleMenuClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <motion.button
        className="fixed top-6 right-6 z-50 p-3 rounded-lg border border-primary/30 bg-background/80 backdrop-blur-sm glow-subtle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-foreground glow-text" />
          ) : (
            <Menu className="w-6 h-6 text-foreground glow-text" />
          )}
        </motion.div>
      </motion.button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center min-h-screen">
              <motion.nav
                className="text-center"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ delay: 0.1 }}
              >
                <ul className="space-y-8">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ 
                        delay: 0.2 + index * 0.1,
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }}
                    >
                      <button
                        onClick={() => handleMenuClick(item.id)}
                        className="text-4xl md:text-5xl font-light text-foreground hover:text-primary transition-all duration-300 glow-text hover:glow-intense tracking-wider"
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerNav;