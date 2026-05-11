import Reveal from './Reveal'
import ScrollReveal from './ScrollReveal'
import BorderGlow from './BorderGlow'
import { Code2, ShoppingCart, MessageSquare, BarChart3 } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import './Overview.css'

const services = [
  {
    title: 'Full Stack Development',
    icon: <Code2 size={40} />,
    glowColor: '180 100 70', // Cyan-ish
    colors: ['#5be3d6', '#5f5fff', '#00ffe7']
  },
  {
    title: 'E-Commerce Solutions',
    icon: <ShoppingCart size={40} />,
    glowColor: '170 100 60', // Teal-ish
    colors: ['#00ffe7', '#5be3d6', '#38bdf8']
  },
  {
    title: 'Freelance Consulting',
    icon: <MessageSquare size={40} />,
    glowColor: '240 100 70', // Blue-ish
    colors: ['#5f5fff', '#c084fc', '#38bdf8']
  },
  {
    title: 'Analytics & SEO',
    icon: <BarChart3 size={40} />,
    glowColor: '180 100 70', // Cyan-ish
    colors: ['#5be3d6', '#00ffe7', '#5f5fff']
  },
]

function Overview() {
  const { theme } = useTheme();

  // Dynamic background color based on theme
  const cardBg = theme === 'dark' ? '#1a1a2e' : '#ffffff';

  return (
    <section id="about" className="overview-section">
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

      <div className="overview-cards">
        {services.map((service, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <BorderGlow
              className="overview-card-glow"
              glowColor={service.glowColor}
              backgroundColor={cardBg}
              colors={service.colors}
              borderRadius={24}
              glowRadius={50}
              glowIntensity={1.2}
              animated={true}
            >
              <div className="overview-card-content" style={{ padding: '2.5rem' }}>
                <div className="overview-card-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
              </div>
            </BorderGlow>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Overview
