import { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import RotatingText from './RotatingText';
import './Hero.css';

const LiquidEther = lazy(() => import('./LiquidEther'));

const roles = [
  'Full Stack Web Developer',
  'SEO & Website Optimization',
  'Analytics & Performance Tracking',
  'E-Commerce & Shopify Solutions',
  'Custom Web Integrations',
];

const ease = [0.22, 1, 0.36, 1];

// Headline words; the last one carries the brand gradient
const titleWords = [
  { text: 'Hi,' },
  { text: "I'm" },
  { text: 'Nishant.', highlight: true },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay },
});

function Hero() {
  const { theme } = useTheme();
  const [enableLiquidEther] = useState(() => {
    const isDesktop = window.innerWidth >= 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return isDesktop && !prefersReducedMotion;
  });

  return (
    <section id="home" className="hero-modern">
      {enableLiquidEther && (
        <Suspense fallback={null}>
          <LiquidEther
            colors={theme === 'dark' ? ['#5be3d6', '#00ffe7', '#5f5fff'] : ['#6c5ce7', '#9b59b6', '#a29bfe']}
            mouseForce={30}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </Suspense>
      )}

      <div className="hero-shell">
        <div className="hero-main">
          <h1 className="hero-title" aria-label="Hi, I'm Nishant.">
            {titleWords.map((word, i) => (
              <span className="hero-title-mask" key={word.text} aria-hidden="true">
                <motion.span
                  className={`hero-title-word ${word.highlight ? 'is-highlight' : ''}`}
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1, ease, delay: 0.25 + i * 0.12 }}
                >
                  {word.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p className="hero-role" {...fadeUp(0.7)}>
            <RotatingText
              texts={roles}
              mainClassName="hero-rotating-text"
              staggerFrom="last"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-120%', opacity: 0 }}
              staggerDuration={0.025}
              splitLevelClassName="hero-rotating-split"
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </motion.p>

          <motion.p className="hero-description" {...fadeUp(0.85)}>
            Websites, Shopify stores and web apps, built to load fast, rank well and convert.
          </motion.p>

          <motion.div className="hero-actions" {...fadeUp(1)}>
            <a href="#contact" className="hero-cta">
              Start a project <span aria-hidden="true">→</span>
            </a>
            <a href="/resume/" className="hero-link">
              Resume <span aria-hidden="true">↗</span>
            </a>
          </motion.div>
        </div>

        <motion.a href="#about" className="hero-scroll" aria-label="Scroll to About" {...fadeUp(1.3)}>
          <span>Scroll</span>
          <span className="hero-scroll-line" aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
