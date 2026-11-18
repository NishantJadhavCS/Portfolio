import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import ScrollReveal from './ScrollReveal'
import { Code2, ShoppingCart, MessageSquare, BarChart3, ArrowUpRight } from 'lucide-react'
import './Overview.css'

const services = [
  {
    title: 'Full Stack Development',
    description: 'End-to-end web apps with React, Django, and modern APIs.',
    tags: ['React', 'Django', 'REST APIs', 'JavaScript'],
    icon: Code2,
    accent: '#2dd4bf',
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Custom Shopify storefronts, automations, and conversion-focused UX.',
    tags: ['Shopify', 'Liquid', 'Shopify Apps', 'Automations'],
    icon: ShoppingCart,
    accent: '#38bdf8',
  },
  {
    title: 'Freelance Consulting',
    description: 'Flexible collaboration for startups and growing businesses.',
    tags: ['Freelance', 'Contract', 'Startups'],
    icon: MessageSquare,
    accent: '#c084fc',
  },
  {
    title: 'Analytics & SEO',
    description: 'Data-driven insights and search visibility that drive growth.',
    tags: ['SEO', 'Google Analytics', 'Performance'],
    icon: BarChart3,
    accent: '#f472b6',
  },
]

const ease = [0.22, 1, 0.36, 1]

function ServiceRow({ service, index, isActive, onActivate }) {
  const Icon = service.icon
  const panelId = `service-panel-${index}`

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  return (
    <li
      className={`service-row ${isActive ? 'is-active' : ''}`}
      style={{ '--service-accent': service.accent }}
      onMouseEnter={onActivate}
      onMouseMove={handleMouseMove}
    >
      <motion.span
        className="service-row-fill"
        aria-hidden="true"
        initial={false}
        animate={{ opacity: isActive ? 1 : 0, scaleX: isActive ? 1 : 0.6 }}
        transition={{ duration: 0.5, ease }}
      />
      <span className="service-row-spotlight" aria-hidden="true" />

      <button
        type="button"
        className="service-row-head"
        aria-expanded={isActive}
        aria-controls={panelId}
        onClick={onActivate}
        onFocus={onActivate}
      >
        <span className="service-row-index">{String(index + 1).padStart(2, '0')}</span>
        <motion.span
          className="service-row-title"
          initial={false}
          animate={{ x: isActive ? 10 : 0 }}
          transition={{ duration: 0.4, ease }}
        >
          {service.title}
        </motion.span>
        <motion.span
          className="service-row-icon"
          aria-hidden="true"
          initial={false}
          animate={{ rotate: isActive ? 0 : -45 }}
          transition={{ duration: 0.4, ease }}
        >
          {isActive ? <Icon size={22} /> : <ArrowUpRight size={22} />}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            id={panelId}
            className="service-row-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
          >
            <div className="service-row-body">
              <p>{service.description}</p>
              <ul className="service-row-tags">
                {service.tags.map((tag, i) => (
                  <motion.li
                    key={tag}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.05, duration: 0.3 }}
                  >
                    {tag}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

function Overview() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="about" className="overview-section">
      <SectionHeader eyebrow="Introduction" title="About" highlight="Me" />

      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
        containerClassName="overview-description"
      >
        {`I'm a Full Stack Developer at A&I Inc. USA, building scalable web applications, Shopify integrations, internal tools, and modern e-commerce solutions.

My work focuses on creating high-performance digital experiences using React, Django, Shopify, JavaScript, and cloud technologies, while also integrating SEO optimization and analytics solutions to support business growth.

Open to freelance and contract opportunities in full stack development, e-commerce, and performance-focused web solutions.`}
      </ScrollReveal>

      <Reveal>
        <div className="services-panel">
          <div className="services-panel-header">
            <span className="services-label">What I do</span>
            <span className="services-count">
              {String(activeIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
            </span>
          </div>
          <ul className="service-list">
            {services.map((service, index) => (
              <ServiceRow
                key={service.title}
                service={service}
                index={index}
                isActive={activeIndex === index}
                onActivate={() => setActiveIndex(index)}
              />
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

export default Overview
