import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'
import ScrollReveal from './ScrollReveal'
import { ease, stagger, riseItem, inView } from '../lib/motion'
import './Overview.css'

const statement =
  'I build fast, reliable websites and Shopify stores for businesses that care how their site performs, ranks and converts.'

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
    <motion.div className="about-fact" variants={riseItem}>
      <dt>{label}</dt>
      <dd>{children}</dd>
    </motion.div>
  )
}

// A short bridge from the hero: one statement and three facts.
// Services are covered in detail by Experience, Projects and Skills.
function Overview() {
  const time = useIndiaTime()

  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <SectionLabel label="About" />

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

        <motion.span
          className="about-facts-rule"
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1.2, ease }}
        />
        <motion.dl className="about-facts" variants={stagger(0.12, 0.2)} {...inView(0.4)}>
          <Fact label="Currently">
            Full Stack Developer
            <span>A&amp;I Inc. — USA (remote)</span>
          </Fact>
          <Fact label="Based in">
            Mumbai, India
            <span>Local time {time} IST</span>
          </Fact>
          <Fact label="Recently shipped">
            <a href="https://apps.shopify.com/juler" target="_blank" rel="noreferrer">
              Juler ↗
            </a>
            <span>Public app on the Shopify App Store</span>
          </Fact>
        </motion.dl>

        {/* Phones: the three facts collapse into one compact mono line */}
        <motion.p className="about-facts-compact" variants={stagger(0.1)} {...inView(0.8)}>
          <motion.span variants={riseItem}>A&amp;I Inc.</motion.span>
          <motion.span variants={riseItem}>Mumbai {time} IST</motion.span>
          <motion.a variants={riseItem} href="https://apps.shopify.com/juler" target="_blank" rel="noreferrer">
            Juler ↗
          </motion.a>
        </motion.p>
      </div>
    </section>
  )
}

export default Overview
