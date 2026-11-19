import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from './SectionLabel'
import ScrollReveal from './ScrollReveal'
import useMediaQuery, { MOBILE_QUERY } from '../hooks/useMediaQuery'
import './Overview.css'

const statement =
  'I build fast, reliable websites and Shopify stores for businesses that care how their site performs, ranks and converts.'

const services = [
  {
    title: 'Web Applications',
    description: 'Custom apps and internal tools, from the frontend to the API behind it.',
    stack: ['React', 'Django', 'REST APIs'],
  },
  {
    title: 'Shopify & E-commerce',
    description: 'Storefronts, Shopify apps and automations built to sell, not just to look good.',
    stack: ['Shopify', 'Liquid', 'Shopify Apps'],
  },
  {
    title: 'SEO & Performance',
    description: 'Technical SEO, analytics and speed work that shows up in the numbers.',
    stack: ['GA4', 'Search Console', 'Core Web Vitals'],
  },
]

const ease = [0.22, 1, 0.36, 1]

const timeFormatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZone: 'Asia/Kolkata',
})

function useIndiaTime() {
  const [time, setTime] = useState(() => timeFormatter.format(new Date()))

  useEffect(() => {
    const id = setInterval(() => setTime(timeFormatter.format(new Date())), 15000)
    return () => clearInterval(id)
  }, [])

  return time
}

function Fact({ label, children }) {
  return (
    <div className="about-fact">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  )
}

function Overview() {
  const time = useIndiaTime()
  const isMobile = useMediaQuery(MOBILE_QUERY)
  const [openService, setOpenService] = useState(null)

  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <SectionLabel label="About" />

        <div className="about-grid">
          <motion.dl
            className="about-facts"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <Fact label="Currently">
              Full Stack Developer
              <span>A&amp;I Inc. — USA (remote)</span>
            </Fact>
            <Fact label="Based in">
              Mumbai, India
              <span>Local time {time} IST</span>
            </Fact>
            <Fact label="Recently shipped">
              Juler
              <span>Public app on the Shopify App Store</span>
            </Fact>
          </motion.dl>

          {/* Phones: the three facts collapse into one compact mono line */}
          <p className="about-facts-compact">
            <span>A&amp;I Inc.</span>
            <span>Mumbai {time} IST</span>
            <a href="https://apps.shopify.com/juler" target="_blank" rel="noreferrer">Juler ↗</a>
          </p>

          <div className="about-copy">
            <ScrollReveal
              baseOpacity={0.15}
              enableBlur={true}
              baseRotation={0}
              blurStrength={6}
              containerClassName="about-statement"
              textClassName="about-statement-text"
            >
              {statement}
            </ScrollReveal>

            <motion.p
              className="about-support"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
            >
              Day to day I work across React, Django and Shopify, from storefronts and custom apps to
              internal tools, with SEO and analytics built in from the start.
            </motion.p>
          </div>
        </div>

        <ol className="about-services">
          {services.map((service, index) => {
            const isOpen = openService === index
            return (
              <motion.li
                key={service.title}
                className={`about-service ${isOpen ? 'is-open' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease, delay: index * 0.12 }}
              >
                <span className="about-service-rule" aria-hidden="true" />

                {isMobile ? (
                  // Phones: titles only, tap to open one service at a time
                  <>
                    <h3 className="about-service-title">
                      <button
                        type="button"
                        className="about-service-toggle"
                        aria-expanded={isOpen}
                        onClick={() => setOpenService(isOpen ? null : index)}
                      >
                        {service.title}
                        <span className="about-service-plus" aria-hidden="true" />
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="about-service-panel"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease }}
                        >
                          <p className="about-service-description">{service.description}</p>
                          <p className="about-service-stack">{service.stack.join(' · ')}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <>
                    <h3 className="about-service-title">{service.title}</h3>
                    <p className="about-service-description">{service.description}</p>
                    <p className="about-service-stack">{service.stack.join(' · ')}</p>
                  </>
                )}
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default Overview
