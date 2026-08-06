import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from './BrandIcons';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Main Content Section */}
        <div className="footer-top">
          <div className="footer-left">
            <h2>Let's build something exceptional together.</h2>
            <p className="footer-description">
              Available for freelance projects, collaborations, and full stack development opportunities.
            </p>
            <div className="footer-ctas">
              <a href="https://wa.me/918928755993" target="_blank" rel="noreferrer" className="footer-btn primary">
                <WhatsappIcon size={18} /> Get In Touch
              </a>
              <a href="mailto:nishantjadhav.cs@gmail.com" className="footer-btn secondary">
                <Mail size={18} /> Email Me
              </a>
            </div>
          </div>

          <div className="footer-right">
            <div className="follow-me-section">
              <span>Follow Me</span>
              <div className="footer-social-icons">
                <a href="https://github.com/NishantJadhavCS" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="GitHub">
                  <GithubIcon size={20} />
                </a>
                <a href="https://www.linkedin.com/in/nishant-jadhav10/" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
                <a href="https://www.instagram.com/nishnt__10/" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Instagram">
                  <InstagramIcon size={20} />
                </a>
                <a href="https://leetcode.com/u/NishantJadhavCS/" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LeetCode">
                  <img src="/images/leetcode.png" alt="LeetCode" className="footer-social-img" width={20} height={20} loading="lazy" decoding="async" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-quick-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#Projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="https://drive.google.com/file/d/1PgAFWFaIV4r7Ol1Y5rPA_Zg7LOsPQZb2/view?usp=sharing" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Nishant Jadhav. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
