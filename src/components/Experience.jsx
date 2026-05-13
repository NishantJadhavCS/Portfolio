import { useState, useRef } from 'react';
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

  return (
    <section id="experience" className="experience-modern">
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
          <div className="experience-tabs">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <div className="tab-indicator"></div>
                <div className="tab-content">
                  <span className="tab-company">{exp.company}</span>
                  <span className="tab-role">{exp.role}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Details View */}
          <div className="experience-details">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="details-card"
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
