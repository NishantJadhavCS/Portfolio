import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import ScrollReveal from './ScrollReveal'
import HoverCard from './HoverCard'
import { Code2, ShoppingCart, MessageSquare, BarChart3 } from 'lucide-react'
import './Overview.css'

const services = [
  {
    title: 'Full Stack Development',
    description: 'End-to-end web apps with React, Django, and modern APIs.',
    icon: <Code2 size={40} />,
    accentSolid: '#2dd4bf',
    accentSoft: 'rgba(45, 212, 191, 0.35)',
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Custom Shopify storefronts, automations, and conversion-focused UX.',
    icon: <ShoppingCart size={40} />,
    accentSolid: '#38bdf8',
    accentSoft: 'rgba(56, 189, 248, 0.35)',
  },
  {
    title: 'Freelance Consulting',
    description: 'Flexible collaboration for startups and growing businesses.',
    icon: <MessageSquare size={40} />,
    accentSolid: '#c084fc',
    accentSoft: 'rgba(192, 132, 252, 0.35)',
  },
  {
    title: 'Analytics & SEO',
    description: 'Data-driven insights and search visibility that drive growth.',
    icon: <BarChart3 size={40} />,
    accentSolid: '#f472b6',
    accentSoft: 'rgba(244, 114, 182, 0.35)',
  },
]

function Overview() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section id="about" className="overview-section" data-aos="fade-up">
      <Reveal className="overview-content">
        <p className="section-subtitle">INTRODUCTION</p>
        <h2 className="section-title">Overview</h2>
      </Reveal>

      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
        containerClassName="section-description"
      >
        {`I'm a Full Stack Developer at A&I Inc. USA, building scalable web applications, Shopify integrations, internal tools, and modern e-commerce solutions.

My work focuses on creating high-performance digital experiences using React, Django, Shopify, JavaScript, and cloud technologies, while also integrating SEO optimization and analytics solutions to support business growth.

Open to freelance and contract opportunities in full stack development, e-commerce, and performance-focused web solutions.`}
      </ScrollReveal>

      <div className="overview-cards-wrapper">
        <div className="overview-cards desktop-only">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <HoverCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                accentSolid={service.accentSolid}
                accentSoft={service.accentSoft}
              />
            </Reveal>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="overview-carousel mobile-only">
          <div className="carousel-content">
            <motion.div
              className="carousel-track"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              animate={{ x: `calc(-${currentSlide * 85}% - ${currentSlide * 15}px)` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onDragEnd={(e, { offset, velocity }) => {
                const isLeftSwipe = offset.x < -50 || velocity.x < -300;
                const isRightSwipe = offset.x > 50 || velocity.x > 300;
                
                if (isLeftSwipe && currentSlide < services.length - 1) {
                  setCurrentSlide((prev) => prev + 1);
                } else if (isRightSwipe && currentSlide > 0) {
                  setCurrentSlide((prev) => prev - 1);
                }
              }}
            >
              {services.map((service, index) => (
                <div key={index} className="mobile-card-wrapper">
                  <HoverCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    accentSolid={service.accentSolid}
                accentSoft={service.accentSoft}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="carousel-controls" style={{ marginTop: '10px' }}>
            <div className="carousel-dots">
              {services.map((service, index) => (
                <button
                  key={index}
                  type="button"
                  className={`dot ${currentSlide === index ? 'active' : ''}`}
                  aria-label={`Go to ${service.title} slide`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview
