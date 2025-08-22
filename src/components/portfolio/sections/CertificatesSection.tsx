import { motion } from 'framer-motion';
import { Award, CheckCircle, Calendar, ExternalLink } from 'lucide-react';

const CertificatesSection = () => {
  const certificates = [
    {
      title: 'Google Data Analytics Professional Certificate',
      specialization: 'Python',
      date: '2024',
      description: 'Comprehensive data analysis skills including data cleaning, visualization, and statistical analysis using Python.',
      skills: ['Python', 'Data Visualization', 'Statistical Analysis', 'Pandas', 'Matplotlib'],
      verified: true
    },
    {
      title: 'Data Structures Certificate',
      date: '2023',
      description: 'Advanced understanding of fundamental data structures and algorithms for efficient problem-solving.',
      skills: ['Algorithms', 'Big O Notation', 'Problem Solving', 'Optimization'],
      verified: true
    },
    {
      title: 'Cyber Security Analyst Certificate',
      date: '2023',
      description: 'Cybersecurity fundamentals including threat detection, risk assessment, and security protocols.',
      skills: ['Security Protocols', 'Risk Assessment', 'Threat Detection', 'Compliance'],
      verified: true
    }
  ];

  return (
    <section id="certificates" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient glow-text">
            Certificates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications demonstrating expertise and continuous learning
          </p>
        </motion.div>

        <div className="space-y-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-glow rounded-xl p-8 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Certificate Icon & Verification */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mb-4 glow-subtle">
                    <Award className="w-10 h-10 text-primary glow-text" />
                  </div>
                  {cert.verified && (
                    <div className="flex items-center justify-center lg:justify-start text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>

                {/* Certificate Details */}
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {cert.title}
                      </h3>
                      {cert.specialization && (
                        <p className="text-lg text-primary/80 mb-2">
                          Specialization: {cert.specialization}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex items-center text-muted-foreground mt-2 lg:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (index * 0.2) + (skillIndex * 0.1) 
                        }}
                        viewport={{ once: true }}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/30 rounded-full hover:bg-primary/20 transition-colors duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* View Certificate Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 group"
                  >
                    <span className="font-medium mr-2">View Certificate</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>

              {/* Progress Line */}
              <motion.div
                className="mt-6 h-1 bg-muted/20 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full glow-subtle"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: index * 0.3 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center card-glow rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            Continuous Learning Journey
          </h3>
          <p className="text-muted-foreground mb-6">
            Committed to staying current with industry trends and expanding technical expertise
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm">
            <div className="flex items-center">
              <Award className="w-5 h-5 text-primary mr-2" />
              <span>{certificates.length} Certificates</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span>All Verified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;