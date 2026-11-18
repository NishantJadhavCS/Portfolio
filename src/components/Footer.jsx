import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import './Footer.css';

const links = [
  { href: 'https://github.com/NishantJadhavCS', label: 'GitHub', external: true },
  { href: 'https://www.linkedin.com/in/nishant-jadhav10/', label: 'LinkedIn', external: true },
  { href: 'https://www.instagram.com/nishnt__10/', label: 'Instagram', external: true },
  { href: 'https://leetcode.com/u/NishantJadhavCS/', label: 'LeetCode', external: true },
  { href: '/resume/', label: 'Resume' },
];

const NAME = 'Nishant Jadhav';

function Footer() {
  const footerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // Fill runs while the footer scrolls into view: starts when its top enters, done when its bottom is reached.
  // The range equals the footer's height, so it can never collapse to zero.
  const { scrollYProgress } = useScroll({ target: footerRef, offset: ['start end', 'end end'] });
  const clipPath = useTransform(scrollYProgress, [0.15, 1], ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']);

  return (
    <footer className="site-footer" ref={footerRef}>
      <div className="footer-inner">
        <div className="footer-strip">
          <p className="footer-copyright">© {new Date().getFullYear()} {NAME}</p>

          <nav className="footer-links" aria-label="Footer">
            {links.map(({ href, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
              >
                {label}
              </a>
            ))}
          </nav>

          <a href="#home" className="footer-top-link">
            Back to top ↑
          </a>
        </div>
      </div>

      {/* Giant sign-off: an outlined name with a gradient copy revealed over it as you reach the bottom */}
      <div className="footer-wordmark" aria-hidden="true">
        <span className="footer-wordmark-outline">{NAME}</span>
        <motion.span
          className="footer-wordmark-fill"
          style={reduceMotion ? undefined : { clipPath }}
        >
          {NAME}
        </motion.span>
      </div>
    </footer>
  );
}

export default Footer;
