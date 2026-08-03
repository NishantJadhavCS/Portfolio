import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
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
  const tabScrollRef = useRef(null);

  const handleTabScroll = () => {
    if (tabScrollRef.current) {
      const container = tabScrollRef.current;
      if (container.children.length === 0) return;
      // Use actual width plus an approximation of the gap
      const cardWidth = container.children[0].offsetWidth + 15;
      const scrollPosition = container.scrollLeft;
      const currentIndex = Math.round(scrollPosition / cardWidth);
      if (currentIndex !== activeTab) {
        setActiveTab(currentIndex);
      }
    }
  };

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
              onScroll={handleTabScroll}
            >
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(index);
                    if (tabScrollRef.current) {
                      const container = tabScrollRef.current;
                      const cardWidth = container.children[0].offsetWidth + 15;
                      container.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
                    }
                  }}
                >
                  <div className="tab-indicator"></div>
                  <div className="tab-content">
                    <span className="tab-company">{exp.company}</span>
                    <span className="tab-role">{exp.role}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="experience-dots mobile-only">
              {experiences.map((_, index) => (
                <span
                  key={index}
                  className={`exp-dot ${activeTab === index ? 'active' : ''}`}
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
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
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
                <div className="card-header">
                  <div className="header-main">
                    <h3>{experiences[activeTab].role}</h3>
                    <div className="company-info">
                      <Briefcase size={16} />
                      <span>{experiences[activeTab].company}</span>
                    </div>
                  </div>
                  <div className="header-meta">
                    <div className="meta-item">
                      <Calendar size={14} />
                      <span>{experiences[activeTab].duration}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={14} />
                      <span>{experiences[activeTab].location}</span>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <ul className="points-list">
                    {experiences[activeTab].points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <ChevronRight size={18} className="point-icon" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="tech-footer">
                    <span className="tech-label">Technologies Used:</span>
                    <div className="tech-grid">
                      {experiences[activeTab].tech.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
