import { useRef, useLayoutEffect, useState } from 'react'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useVelocity,
} from 'framer-motion'
import SectionLabel from './SectionLabel'
import './Skills.css'

const allSkills = [
  'React', 'JavaScript', 'HTML5', 'CSS3', 'Python', 'Django', 'Node.js', 'PHP', 'C++', 'MySQL',
  'MongoDB', 'Docker', 'AWS', 'Linux', 'Git', 'Shopify', 'Liquid', 'Google Analytics', 'Microsoft Clarity',
]

// Two tapes, each carrying a mix of the stack (no category split)
const tapes = [
  {
    variant: 'gradient',
    direction: -1,
    items: ['React', 'Shopify', 'Django', 'JavaScript', 'AWS', 'Liquid', 'Python', 'Docker', 'Node.js', 'Google Analytics'],
  },
  {
    variant: 'outline',
    direction: 1,
    items: ['HTML5', 'CSS3', 'PHP', 'MySQL', 'MongoDB', 'Linux', 'Git', 'C++', 'Microsoft Clarity'],
  },
]

const SPEED = 55 // px per second at rest
const HOVER_SPEED = 0.15 // share of speed while hovered
const MAX_SCROLL_BOOST = 5 // extra multiplier at fast scroll speeds
const MIN_ITEMS_PER_COPY = 12

function Tape({ items, direction, variant, scrollVelocity }) {
  const rowRef = useRef(null)
  const copyRef = useRef(null)
  const x = useMotionValue(0)
  const speedFactor = useRef(1)
  const scrollDirection = useRef(1)
  const [hovered, setHovered] = useState(false)
  const [copyWidth, setCopyWidth] = useState(0)
  const inView = useInView(rowRef, { margin: '200px 0px' })
  const reduceMotion = useReducedMotion()

  const repeats = Math.ceil(MIN_ITEMS_PER_COPY / items.length)
  const copy = Array.from({ length: repeats }, () => items).flat()

  useLayoutEffect(() => {
    const measure = () => setCopyWidth(copyRef.current?.offsetWidth ?? 0)
    measure()
    const observer = new ResizeObserver(measure)
    if (copyRef.current) observer.observe(copyRef.current)
    return () => observer.disconnect()
  }, [reduceMotion])

  useAnimationFrame((_, delta) => {
    if (!inView || reduceMotion || !copyWidth) return
    const velocity = scrollVelocity.get()
    // Follow the reader's scroll direction, and speed up while they scroll
    if (velocity < -5) scrollDirection.current = -1
    else if (velocity > 5) scrollDirection.current = 1
    const boost = Math.min(Math.abs(velocity) / 600, MAX_SCROLL_BOOST)
    const target = hovered ? HOVER_SPEED : 1 + boost
    speedFactor.current += (target - speedFactor.current) * Math.min(1, delta / 200)

    let next = x.get() + direction * scrollDirection.current * SPEED * speedFactor.current * (delta / 1000)
    // Two identical copies sit side by side; wrapping by one copy's width keeps the loop seamless
    if (next <= -copyWidth) next += copyWidth
    if (next > 0) next -= copyWidth
    x.set(next)
  })

  const renderItems = (list, keyPrefix) =>
    list.map((item, i) => (
      <span className={`skills-item ${i % 2 ? 'is-alt' : ''}`} key={`${keyPrefix}-${item}-${i}`}>
        {item}
        <span className="skills-dot" aria-hidden="true" />
      </span>
    ))

  return (
    <div
      ref={rowRef}
      className={`skills-tape skills-tape--${variant}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-hidden="true"
    >
      {reduceMotion ? (
        <div className="skills-track is-static">
          <div className="skills-copy">{renderItems(items, 's')}</div>
        </div>
      ) : (
        <motion.div className="skills-track" style={{ x }}>
          <div className="skills-copy" ref={copyRef}>{renderItems(copy, 'a')}</div>
          <div className="skills-copy">{renderItems(copy, 'b')}</div>
        </motion.div>
      )}
    </div>
  )
}

function Skills() {
  const { scrollY } = useScroll()
  const rawVelocity = useVelocity(scrollY)
  const scrollVelocity = useSpring(rawVelocity, { damping: 50, stiffness: 400 })

  return (
    <section id="skills" className="skills-section">
      <div className="skills-inner">
        <SectionLabel label="Skills" />
        {/* Readable list for screen readers; the tapes are decorative duplicates */}
        <ul className="skills-sr-list">
          {allSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <motion.div
        className="skills-tapes"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {tapes.map((tape) => (
          <Tape key={tape.variant} {...tape} scrollVelocity={scrollVelocity} />
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
