function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section contact-info">
          <h3>Contact</h3>
          <p>
            <a href="https://wa.me/918928755993" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-whatsapp icon"></i>
              WhatsApp Me
            </a>
          </p>
          <p>
            <a href="mailto:nishantjadhav.cs@gmail.com">
              <i className="fa-solid fa-envelope icon"></i>
              nishantjadhav.cs@gmail.com
            </a>
          </p>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1PgAFWFaIV4r7Ol1Y5rPA_Zg7LOsPQZb2/view?usp=sharing" target="_blank" rel="noreferrer">
                Resume
              </a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section social-media">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://github.com/NishantJadhavCS" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/nishant-jadhav10/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/nishnt__10/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://leetcode.com/u/NishantJadhavCS/" target="_blank" rel="noreferrer" aria-label="LeetCode">
              <img src="/images/leetcode.png" alt="" className="hero-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Nishant Jadhav. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
