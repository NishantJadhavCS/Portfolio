import { motion } from 'framer-motion'
import './SectionLabel.css'

const ease = [0.22, 1, 0.36, 1]

// Editorial section heading: the title rises out of a mask, then a hairline draws across.
function SectionLabel({ label, as: Heading = 'h2' }) {
  return (
    <div className="section-label">
      {/* The mask is what's watched for visibility: the title starts fully clipped inside it,
          and clipped content never counts as "in view", so it can't trigger its own entrance */}
      <motion.div
        className="section-label-mask"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          variants={{ hidden: { y: '110%' }, show: { y: '0%' } }}
          transition={{ duration: 0.9, ease }}
        >
          <Heading className="section-label-title">{label}</Heading>
        </motion.div>
      </motion.div>
      <motion.span
        className="section-label-rule"
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.2, ease, delay: 0.25 }}
      />
    </div>
  )
}

export default SectionLabel
