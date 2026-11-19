import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import SectionLabel from './SectionLabel';
import useMediaQuery, { MOBILE_QUERY } from '../hooks/useMediaQuery';
import { stagger, riseItem, inView } from '../lib/motion';
import './Experience.css';

// Ordered by start date, most recent first. Freelance runs alongside the full-time roles.
const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'A&I Inc.',
    location: 'USA · Remote',
    start: 'Jul 2025',
    end: 'Present',
    highlight: 'Shipped Juler to the Shopify App Store',
    points: [
      'Built and launched Juler, a public Shopify App Store app for personalized jewelry dropshipping and e-commerce automation.',
      'Built React frontend integrated with Django backend APIs using a scalable architecture.',
      'Implemented JWT authentication and managed AWS deployments with Docker and GitHub Actions.',
    ],
    tech: ['React', 'Django', 'Shopify APIs', 'JWT', 'Docker', 'AWS', 'GitHub Actions'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Guyal',
    location: 'India',
    start: 'Aug 2024',
    end: 'Jul 2025',
    highlight: "Developed and maintained Guyal's Shopify jewelry store",
    points: [
      'Developed and customized Shopify stores, workflows, and high-performance e-commerce solutions.',
      'Built responsive interfaces, analytics integrations, and performance-focused features.',
      'Collaborated on PHP optimization and module development.',
    ],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'React', 'Analytics'],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Freelance',
    location: 'Remote · Self-employed',
    start: 'Jun 2023',
    end: 'Present',
    highlight: 'Websites and Shopify stores for independent brands',
    points: [
      'Built modern websites, e-commerce platforms, and custom web solutions for diverse clients.',
      'Focused on SEO optimization, analytics integration, and responsive UI development.',
      'Delivered full-stack solutions using React, Django, and Shopify.',
    ],
    tech: ['React', 'Django', 'Shopify', 'SEO', 'Analytics'],
  },
];

const ease = [0.22, 1, 0.36, 1];

const yearOf = (date) => (date === 'Present' ? 'Now' : date.split(' ')[1]);

function Experience() {
  const [active, setActive] = useState(0);
  const storyRef = useRef(null);
  const blockRefs = useRef([]);

  const isMobile = useMediaQuery(MOBILE_QUERY);

  // Which role is active. Desktop: a thin band near the top, so the pinned side switches as the next
  // chapter's content reaches the shared top line. Phones: the middle band, for the timeline dots.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.index));
        });
      },
      { rootMargin: isMobile ? '-45% 0px -50% 0px' : '-6% 0px -93% 0px' }
    );
    blockRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [isMobile]);

  // Progress line fills as the story column passes the middle of the screen.
  // Both offsets use the same viewport line, so the range always equals the column height.
  const { scrollYProgress } = useScroll({ target: storyRef, offset: ['start 0.5', 'end 0.5'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  const scrollToRole = (index) => {
    blockRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const current = experiences[active];

  // Phones: which roles have their bullet points opened
  const [openRoles, setOpenRoles] = useState(() => new Set());
  const toggleRole = (index) =>
    setOpenRoles((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <section id="experience" className="experience-section">
      <div className="experience-inner">
        <SectionLabel label="Experience" />

        <div className="experience-layout">
          {/* Pinned column (desktop only) */}
          <aside className="experience-pinned" aria-hidden="true">
            <div className="experience-pinned-inner">
              {/* Entrance: the pinned role slides in the first time the section comes into view */}
              <motion.div
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.9, ease }}
              >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="experience-current"
                  initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
                  transition={{ duration: 0.45, ease }}
                >
                  <p className="experience-current-dates">
                    {current.start} — {current.end}
                  </p>
                  <p className="experience-current-company">{current.company}</p>
                  <p className="experience-current-role">{current.role}</p>
                  <p className="experience-current-location">{current.location}</p>
                </motion.div>
              </AnimatePresence>
              </motion.div>

              <div className="experience-rail">
                <span className="experience-rail-track" />
                <motion.span className="experience-rail-fill" style={{ scaleY: progress }} />
                <motion.ol className="experience-rail-list" variants={stagger(0.12, 0.3)} {...inView(0.6)}>
                {experiences.map((exp, index) => (
                  <motion.li key={exp.company} variants={riseItem} className={index === active ? 'is-active' : ''}>
                    <button type="button" tabIndex={-1} onClick={() => scrollToRole(index)}>
                      <span className="experience-rail-dot" />
                      <span className="experience-rail-name">{exp.company}</span>
                      <span className="experience-rail-years">
                        {yearOf(exp.start)}–{yearOf(exp.end)}
                      </span>
                    </button>
                  </motion.li>
                ))}
                </motion.ol>
              </div>
            </div>
          </aside>

          {/* Scrolling story */}
          <div className="experience-story" ref={storyRef}>
            <span className="experience-story-track" aria-hidden="true" />
            <motion.span
              className="experience-story-fill"
              aria-hidden="true"
              style={{ scaleY: progress }}
            />

            {experiences.map((exp, index) => (
              <article
                key={`${exp.company}-${exp.start}`}
                ref={(el) => (blockRefs.current[index] = el)}
                data-index={index}
                className={`experience-block ${index === active ? 'is-active' : ''}`}
              >
                <span className="experience-block-dot" aria-hidden="true" />
                <motion.span
                  className="experience-year"
                  aria-hidden="true"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1.2, ease }}
                >
                  {exp.start.split(' ')[1]}
                </motion.span>

                {/* Full heading: the only heading on mobile, visually hidden on desktop where the pinned column shows it */}
                <motion.header className="experience-block-head" variants={riseItem} {...inView(0.6)}>
                  <p className="experience-block-dates">
                    {exp.start} — {exp.end}
                  </p>
                  <h3 className="experience-block-role">{exp.role}</h3>
                  <p className="experience-block-company">
                    {exp.company} <span>· {exp.location}</span>
                  </p>
                </motion.header>

                <motion.h4 className="experience-highlight" variants={riseItem} {...inView(0.6)}>
                  {exp.highlight}
                </motion.h4>

                {isMobile ? (
                  // Phones: stack stays visible, the bullet points open on tap
                  <div className="experience-mobile-details">
                    <ul className="experience-stack">
                      {exp.tech.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className={`experience-toggle ${openRoles.has(index) ? 'is-open' : ''}`}
                      aria-expanded={openRoles.has(index)}
                      onClick={() => toggleRole(index)}
                    >
                      What I built
                      <span className="experience-toggle-plus" aria-hidden="true" />
                    </button>
                    <AnimatePresence initial={false}>
                      {openRoles.has(index) && (
                        <motion.ul
                          className="experience-points"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease }}
                        >
                          {exp.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                /* Details split into two labelled columns so the block scans instead of reading as one long list */
                <motion.div
                  className="experience-details"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease }}
                >
                  <div>
                    <p className="experience-col-label">What I built</p>
                    <ul className="experience-points">
                      {exp.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="experience-col-label">Stack</p>
                    <ul className="experience-stack">
                      {exp.tech.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
