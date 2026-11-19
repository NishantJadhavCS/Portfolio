// Shared entrance motion so every section animates in with the same feel.
export const ease = [0.22, 1, 0.36, 1]

// Parent: reveals its children one after another once it scrolls into view
export const stagger = (gap = 0.1, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
})

// Child: rises and fades in
export const riseItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

// Spread onto a motion element to play its variants once when it enters the viewport
export const inView = (amount = 0.3) => ({
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, amount },
})
