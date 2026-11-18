import { motion } from 'framer-motion'
import './SectionLabel.css'

const ease = [0.22, 1, 0.36, 1]

// Editorial section heading: a display-type title followed by a hairline that draws in on view.
function SectionLabel({ label, as: Heading = 'h2' }) {
  return (
    <div className="section-label">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease }}
      >
        <Heading className="section-label-title">{label}</Heading>
      </motion.div>
      <motion.span
        className="section-label-rule"
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.1, ease, delay: 0.15 }}
      />
    </div>
  )
}

export default SectionLabel
