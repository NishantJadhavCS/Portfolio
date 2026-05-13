import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';
import './Testimonials.css';

const featuredTestimonial = {
  name: 'Nimish Sawant',
  role: 'Founder, NSM Media',
  text: '“Worked together on multiple client projects including DumplingKhang, Contrive Design, and our own website. Communication was always smooth, delivery was reliable, and the final results consistently matched the vision we had in mind.”',
};

const otherTestimonials = [
  {
    name: 'Shreejana',
    role: 'CEO & Executive Chef, DumplingKhang',
    text: '“The DumplingKhang landing page captured our brand beautifully. The website feels clean, modern, and has helped us build a much stronger online presence for the restaurant.”',
  },
  {
    name: 'Rishika Singh',
    role: 'Founder, RPious Couture',
    text: '“The RPious Couture store turned out exactly the way we envisioned it. The website feels modern, responsive, and easy for customers to navigate while maintaining the premium look of the brand.”',
  },
  {
    name: 'Harsh Narwade',
    role: 'Full Stack Developer',
    text: '“Worked together across projects at Guyal and A&I Inc. Great collaboration, clean development practices, and strong full stack problem-solving throughout the projects we handled together.”',
  }
];

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % otherTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + otherTestimonials.length) % otherTestimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <Reveal>
            <span className="section-badge-modern">IN THEIR WORDS</span>
            <h2 className="section-title-modern">Voices of <span className="highlight">Success</span></h2>
            <p className="section-description-modern">
              Hear from the founders, clients, and teammates I've collaborated with to build impactful digital solutions.
            </p>
          </Reveal>
        </div>

        {/* Featured Card */}
        <div className="featured-card-wrapper">
          <Reveal>
            <div className="testimonial-card-modern featured">
              <Quote className="quote-icon-modern featured-quote" size={32} />
              <div className="featured-content-modern">
                <p className="testimonial-text-modern featured-text">{featuredTestimonial.text}</p>
                <div className="author-meta-modern featured-meta">
                  <span className="author-name-modern">— {featuredTestimonial.name}</span>
                  <span className="author-role-modern">{featuredTestimonial.role}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Desktop Grid / Mobile Carousel Wrapper */}
        <div className="testimonials-view-wrapper">
          {/* Grid View (Desktop Only) */}
          <div className="testimonials-grid-modern desktop-only">
            {otherTestimonials.map((item, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="testimonial-card-modern grid-card">
                  <Quote className="quote-icon-modern grid-quote" size={24} />
                  <div className="card-top-modern">
                    <p className="testimonial-text-modern grid-text">{item.text}</p>
                  </div>
                  <div className="card-bottom-modern">
                    <div className="divider-line"></div>
                    <div className="author-meta-modern">
                      <span className="author-name-modern">{item.name}</span>
                      <span className="author-role-modern">{item.role}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Carousel View (Mobile Only) */}
          <div className="testimonials-carousel-mobile mobile-only">
            <div className="carousel-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="testimonial-card-modern grid-card"
                >
                  <Quote className="quote-icon-modern grid-quote" size={24} />
                  <div className="card-top-modern">
                    <p className="testimonial-text-modern grid-text">{otherTestimonials[currentSlide].text}</p>
                  </div>
                  <div className="card-bottom-modern">
                    <div className="divider-line"></div>
                    <div className="author-meta-modern">
                      <span className="author-name-modern">{otherTestimonials[currentSlide].name}</span>
                      <span className="author-role-modern">{otherTestimonials[currentSlide].role}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="carousel-controls">
              <button onClick={prevSlide} className="carousel-btn"><ChevronLeft size={20} /></button>
              <div className="carousel-dots">
                {otherTestimonials.map((_, index) => (
                  <span 
                    key={index} 
                    className={`dot ${currentSlide === index ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              <button onClick={nextSlide} className="carousel-btn"><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
