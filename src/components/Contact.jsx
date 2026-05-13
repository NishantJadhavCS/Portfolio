import { Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left Side: Info */}
        <div className="contact-info">
          <h2>Let's Talk</h2>
          <p>
            Have a project in mind or just want to chat? Feel free to reach out. 
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="contact-details">
            <div className="detail-item">
              <i><Mail size={20} /></i>
              <span>nishantjadhav.cs@gmail.com</span>
            </div>
            <div className="detail-item">
              <i><MapPin size={20} /></i>
              <span>Mumbai, Maharashtra, India</span>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/NishantJadhavCS" target="_blank" rel="noreferrer" className="contact-social-link" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/nishant-jadhav10/" target="_blank" rel="noreferrer" className="contact-social-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/nishnt__10/" target="_blank" rel="noreferrer" className="contact-social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-wrapper">
          <form 
            className="contact-form"
            action="https://formsubmit.co/nishantjadhav.cs@gmail.com" 
            method="POST"
            target="_blank"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="What's your name?" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Where can I reach you?" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Tell me about your project or just say hi..." 
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
