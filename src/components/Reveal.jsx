import { motion } from 'framer-motion'

const hidden = { opacity: 0, y: 34, scale: 0.98, filter: 'blur(5px)' }
const shown = { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }

function Reveal({ className = '', delay = 0, children }) {
  return (
    <motion.div
      className={`reveal ${className}`.trim()}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
