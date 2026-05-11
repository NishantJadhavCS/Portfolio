import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import LiquidEther from './LiquidEther';
import RotatingText from './RotatingText';
import './Hero.css';

const roles = [
  'Full Stack Web Developer',
  'SEO & Website Optimization',
  'Analytics & Performance Tracking',
  'E-Commerce & Shopify Solutions',
  'Custom Web Integrations',
];



const TooltipIcon = ({ href, label, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className="social-icon-link"
        whileHover={{ scale: 1.15, y: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        {children}
      </motion.a>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="tooltip-label"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function Hero() {
  const { theme } = useTheme();

  return (
    <section id="home" className="hero-modern">
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

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-badge"
        >
          Building Modern Web Applications
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi! I'm <span className="hero-name">Nishant</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-role-wrapper"
        >
          {" "}
          <RotatingText
            texts={roles}
            mainClassName="hero-rotating-text"
            staggerFrom={"last"}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="hero-description">
            Passionate about crafting dynamic web experiences and scalable backend architectures. Let's build something amazing together.
          </p>
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="https://drive.google.com/file/d/1PgAFWFaIV4r7Ol1Y5rPA_Zg7LOsPQZb2/view?usp=sharing"
            className="hero-resume-btn"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={22} /> Resume
          </motion.a>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <TooltipIcon href="https://github.com/NishantJadhavCS" label="GitHub">
            <i className="fab fa-github" style={{ fontSize: '24px' }}></i>
          </TooltipIcon>
          <TooltipIcon href="https://www.linkedin.com/in/nishant-jadhav10/" label="LinkedIn">
            <i className="fab fa-linkedin" style={{ fontSize: '24px' }}></i>
          </TooltipIcon>
          <TooltipIcon href="https://www.instagram.com/nishnt__10/" label="Instagram">
            <i className="fab fa-instagram" style={{ fontSize: '24px' }}></i>
          </TooltipIcon>
          <TooltipIcon href="https://leetcode.com/u/NishantJadhavCS/" label="LeetCode">
            <img src="/images/leetcode.png" alt="LeetCode" className="social-img" />
          </TooltipIcon>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.8 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
      >
        <a href="#overview" aria-label="Scroll down">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
