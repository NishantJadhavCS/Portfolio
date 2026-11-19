import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import { stagger, riseItem, inView as revealOnView } from '../lib/motion';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Nimish Sawant',
    role: 'Founder, NSM Media',
    text: 'Worked together on multiple client projects including DumplingKhang, Contrive Design, and our own website. Communication was always smooth, delivery was reliable, and the final results consistently matched the vision we had in mind.',
  },
  {
    name: 'Shreejana',
    role: 'CEO & Executive Chef, DumplingKhang',
    text: 'The DumplingKhang landing page captured our brand beautifully. The website feels clean, modern, and has helped us build a much stronger online presence for the restaurant.',
  },
  {
    name: 'Rishika Singh',
    role: 'Founder, RPious Couture',
    text: 'The RPious Couture store turned out exactly the way we envisioned it. The website feels modern, responsive, and easy for customers to navigate while maintaining the premium look of the brand.',
  },
  {
    name: 'Harsh Narwade',
    role: 'Full Stack Developer',
    text: 'Worked together across projects at Guyal and A&I Inc. Great collaboration, clean development practices, and strong full stack problem-solving throughout the projects we handled together.',
  },
];

// Seconds each quote stays up; the progress line under the active name runs for the same time
const QUOTE_DURATION = 8;
const ease = [0.22, 1, 0.36, 1];

function Testimonials() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.4 });
  const reduceMotion = useReducedMotion();

  const autoplay = !reduceMotion;
  const paused = hovered || focused || !inView;

  const goTo = (index) => setActive((index + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="testimonials-section"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <div className="testimonials-inner">
        <SectionLabel label="Testimonials" />

        {/* All quotes share one grid cell, so the block is as tall as the longest quote and never jumps */}
        <motion.div
          className="testimonials-stage"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, { offset, velocity }) => {
            if (offset.x < -60 || velocity.x < -400) goTo(active + 1);
            else if (offset.x > 60 || velocity.x > 400) goTo(active - 1);
          }}
        >
          <span className="testimonials-mark" aria-hidden="true">“</span>
          {testimonials.map((item, index) => {
            const isActive = index === active;
            return (
              <motion.figure
                key={item.name}
                className="testimonials-quote"
                aria-hidden={!isActive}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 16,
                  filter: isActive ? 'blur(0px)' : 'blur(8px)',
                }}
                transition={{ duration: 0.6, ease, delay: isActive ? 0.15 : 0 }}
                style={{ pointerEvents: isActive ? 'auto' : 'none' }}
              >
                <blockquote>{item.text}</blockquote>
                <figcaption className="testimonials-sr">
                  {item.name}, {item.role}
                </figcaption>
              </motion.figure>
            );
          })}
        </motion.div>

        <motion.div
          className="testimonials-tabs"
          role="tablist"
          aria-label="Testimonials"
          variants={stagger(0.1, 0.3)}
          {...revealOnView(0.5)}
        >
          {testimonials.map((item, index) => {
            const isActive = index === active;
            return (
              <motion.button
                variants={riseItem}
                key={item.name}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`testimonials-tab ${isActive ? 'is-active' : ''}`}
                onClick={() => goTo(index)}
                onMouseEnter={() => goTo(index)}
              >
                <span className="testimonials-tab-track" aria-hidden="true">
                  {isActive && (
                    <span
                      key={active}
                      className={`testimonials-tab-fill ${autoplay ? 'is-timed' : ''} ${paused ? 'is-paused' : ''}`}
                      style={{ animationDuration: `${QUOTE_DURATION}s` }}
                      onAnimationEnd={() => goTo(active + 1)}
                    />
                  )}
                </span>
                <span className="testimonials-tab-name">{item.name}</span>
                <span className="testimonials-tab-role">{item.role}</span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
