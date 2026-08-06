import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from './BrandIcons';
import './Footer.css';

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const popItem = {
  hidden: { opacity: 0, scale: 0.7 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 16 } },
};

const fadeUpDivider = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 0.3, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const socialLinks = [
  { href: 'https://github.com/NishantJadhavCS', label: 'GitHub', Icon: GithubIcon },
  { href: 'https://www.linkedin.com/in/nishant-jadhav10/', label: 'LinkedIn', Icon: LinkedinIcon },
  { href: 'https://www.instagram.com/nishnt__10/', label: 'Instagram', Icon: InstagramIcon },
];

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#Projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  {
    href: 'https://drive.google.com/file/d/1PgAFWFaIV4r7Ol1Y5rPA_Zg7LOsPQZb2/view?usp=sharing',
    label: 'Resume',
    external: true,
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-bg-glow" aria-hidden="true" />

      <motion.div
        className="footer-container"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Main Content Section */}
        <div className="footer-top">
          <motion.div className="footer-left" variants={fadeUp}>
            <h2>Let's build something exceptional together.</h2>
            <p className="footer-description">
              Available for freelance projects, collaborations, and full stack development opportunities.
            </p>
            <div className="footer-ctas">
              <motion.a
                href="https://wa.me/918928755993"
                target="_blank"
                rel="noreferrer"
                className="footer-btn primary"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
              >
                <WhatsappIcon size={18} /> Get In Touch
              </motion.a>
              <motion.a
                href="mailto:nishantjadhav.cs@gmail.com"
                className="footer-btn secondary"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
              >
                <Mail size={18} /> Email Me
              </motion.a>
            </div>
          </motion.div>

          <motion.div className="footer-right" variants={fadeUp}>
            <div className="follow-me-section">
              <span>Follow Me</span>
              <motion.div className="footer-social-icons" variants={staggerContainer}>
                {socialLinks.map(({ href, label, Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social-link"
                    aria-label={label}
                    variants={popItem}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
                <motion.a
                  href="https://leetcode.com/u/NishantJadhavCS/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-link"
                  aria-label="LeetCode"
                  variants={popItem}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src="/images/leetcode.png"
                    alt="LeetCode"
                    className="footer-social-img"
                    width={20}
                    height={20}
                    loading="lazy"
                    decoding="async"
                  />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.hr className="footer-divider" variants={fadeUpDivider} />

        {/* Bottom Section */}
        <motion.div className="footer-bottom" variants={fadeUp}>
          <div className="footer-quick-links">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Nishant Jadhav. All Rights Reserved.</p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
