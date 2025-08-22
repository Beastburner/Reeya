import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Sparkles } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'reeyasoni4222@gmail.com',
      href: 'mailto:reeyasoni4222@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 382-882-1771',
      href: 'tel:+13828821771',
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: '340 Crawford Ave, Windsor',
      href: '#',
      color: 'text-red-400'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
      color: 'text-purple-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn', 
      href: '#',
      color: 'text-blue-500'
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient glow-text">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? 
            Let's create something amazing together!
          </p>
        </motion.div>

        {/* Treasure Found Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.div
            className="relative inline-block"
            animate={{ 
              rotate: [0, 5, -5, 0],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Main Treasure Orb */}
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 glow-intense flex items-center justify-center animate-pulse-glow">
              <Sparkles className="w-16 h-16 text-background" />
            </div>
            
            {/* Floating Sparkles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full"
                style={{
                  left: `${50 + 60 * Math.cos(i * Math.PI / 4)}%`,
                  top: `${50 + 60 * Math.sin(i * Math.PI / 4)}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-primary mt-6 glow-text"
          >
            🎉 Treasure Found! 🎉
          </motion.h3>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card-glow rounded-xl p-6 hover:cursor-pointer group block"
              >
                <Icon className={`w-8 h-8 ${contact.color} mx-auto mb-4 glow-text group-hover:scale-110 transition-transform duration-300`} />
                <h4 className="font-semibold text-primary mb-2">{contact.label}</h4>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {contact.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-6 text-primary">Connect on Social</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1 + index * 0.1,
                    type: "spring",
                    bounce: 0.5
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="card-glow rounded-full p-4 hover:cursor-pointer group"
                >
                  <Icon className={`w-6 h-6 ${social.color} glow-text group-hover:scale-110 transition-transform duration-300`} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8"
        >
          <p className="text-muted-foreground text-sm">
            © 2025 Reeya Soni. All Rights Reserved.
          </p>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-primary text-sm mt-2 glow-text"
          >
            Thank you for following the treasure map journey! ✨
          </motion.p>
        </motion.div>

        {/* Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;