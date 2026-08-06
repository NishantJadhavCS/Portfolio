import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    company: 'A&I Inc. USA',
    role: 'Full Stack Developer',
    duration: 'Jul 2025 — Present',
    location: 'USA / Remote',
    points: [
      'Developing a custom Shopify application for personalized jewelry dropshipping and e-commerce automation.',
      'Built React frontend integrated with Django backend APIs using a scalable architecture.',
      'Implemented JWT authentication and managed AWS deployments with Docker and GitHub Actions.'
    ],
    tech: ['React', 'Django', 'Shopify APIs', 'JWT', 'Docker', 'AWS', 'GitHub Actions']
  },
  {
    company: 'Guyal - India',
    role: 'Full Stack Developer',
    duration: 'Aug 2024 — Jul 2025',
    location: 'India',
    points: [
      'Developed and customized Shopify stores, workflows, and high-performance e-commerce solutions.',
      'Built responsive interfaces, analytics integrations, and performance-focused features.',
      'Collaborated on PHP optimization and module development.'
    ],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'React', 'Analytics']
  },
  {
    company: 'Freelance Web Developer',
    role: 'Remote / Self-Employed',
    duration: 'Jun 2023 — Present',
    location: 'Global',
    points: [
      'Built modern websites, e-commerce platforms, and custom web solutions for diverse clients.',
      'Focused on SEO optimization, analytics integration, and responsive UI development.',
      'Delivered full-stack solutions using React, Django, and Shopify.'
    ],
    tech: ['React', 'Django', 'Shopify', 'SEO', 'Analytics']
  }
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const staggerTags = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const popItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 320, damping: 18 } },
};

function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef(null);

  useEffect(() => {
    if (tabsRef.current) {
      const activeBtn = tabsRef.current.children[activeTab];
      if (activeBtn) {
        const containerWidth = tabsRef.current.offsetWidth;
        const btnLeft = activeBtn.offsetLeft;
        const btnWidth = activeBtn.offsetWidth;
        tabsRef.current.scrollTo({
          left: btnLeft - containerWidth / 2 + btnWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [activeTab]);

  return (
    <section id="experience" className="experience-modern" data-aos="fade-up">
      <div className="experience-bg-glow"></div>

      <div className="experience-container">
        <div className="experience-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">Career Path</span>
            <h2 className="section-title">Work Experience</h2>
            <p className="section-intro">
              Experience across full stack development, Shopify ecosystems, cloud infrastructure, and scalable web solutions.
            </p>
          </motion.div>
        </div>

        <div className="experience-content-wrapper">
          {/* Tabs Navigation */}
          <div className="experience-tabs-container">
            <div
              className="experience-tabs"
              ref={tabsRef}
            >
              {experiences.map((exp, index) => (
                <motion.button
                  key={index}
                  className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {activeTab === index && (
                    <motion.div
                      className="tab-indicator"
                      layoutId="activeTabIndicator"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <div className="tab-content">
                    <span className="tab-company">{exp.company}</span>
                    <span className="tab-role">{exp.role}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="experience-dots mobile-only">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  type="button"
                  className={`exp-dot ${activeTab === index ? 'active' : ''}`}
                  aria-label={`Show ${exp.company} experience`}
                  onClick={() => setActiveTab(index)}
                />
              ))}
            </div>
          </div>

          {/* Details View */}
          <div className="experience-details">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 30, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="details-card"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  const isLeftSwipe = offset.x < -50 || velocity.x < -300;
                  const isRightSwipe = offset.x > 50 || velocity.x > 300;

                  if (isLeftSwipe && activeTab < experiences.length - 1) {
                    setActiveTab((prev) => prev + 1);
                  } else if (isRightSwipe && activeTab > 0) {
                    setActiveTab((prev) => prev - 1);
                  }
                }}
              >
                <motion.div initial="hidden" animate="show" variants={staggerContainer}>
                  <motion.div className="card-header" variants={fadeUpItem}>
                    <div className="header-main">
                      <h3>{experiences[activeTab].role}</h3>
                      <div className="company-info">
                        <Briefcase size={16} />
                        <span>{experiences[activeTab].company}</span>
                      </div>
                    </div>
                    <motion.div className="header-meta" variants={staggerTags}>
                      <motion.div className="meta-item" variants={popItem} whileHover={{ y: -2, scale: 1.05 }}>
                        <Calendar size={14} />
                        <span>{experiences[activeTab].duration}</span>
                      </motion.div>
                      <motion.div className="meta-item" variants={popItem} whileHover={{ y: -2, scale: 1.05 }}>
                        <MapPin size={14} />
                        <span>{experiences[activeTab].location}</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  <div className="card-body">
                    <ul className="points-list">
                      {experiences[activeTab].points.map((point, idx) => (
                        <motion.li key={idx} variants={fadeUpItem}>
                          <ChevronRight size={18} className="point-icon" />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div className="tech-footer" variants={fadeUpItem}>
                      <span className="tech-label">Technologies Used:</span>
                      <motion.div className="tech-grid" variants={staggerTags}>
                        {experiences[activeTab].tech.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            className="tech-tag"
                            variants={popItem}
                            whileHover={{ y: -3, scale: 1.06 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
