import { useMemo, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import './ScrollReveal.css'

// Each word fades/unblurs over its own slice of the scroll range; slices overlap like a GSAP stagger.
const STAGGER = 0.05

function Word({ progress, index, count, baseOpacity, enableBlur, blurStrength, children }) {
  const total = 1 + STAGGER * (count - 1)
  const start = (index * STAGGER) / total
  const end = (index * STAGGER + 1) / total

  const opacity = useTransform(progress, [start, end], [baseOpacity, 1])
  const blur = useTransform(progress, [start, end], [blurStrength, 0])
  const filter = useTransform(blur, (value) => `blur(${value}px)`)

  return (
    <motion.span className="word" style={{ opacity, filter: enableBlur ? filter : undefined }}>
      {children}
    </motion.span>
  )
}

function ScrollReveal({
  children,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
}) {
  const containerRef = useRef(null)

  const { scrollYProgress: rotationProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })
  const { scrollYProgress: wordProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end end'],
  })
  const rotate = useTransform(rotationProgress, [0, 1], [baseRotation, 0])

  const tokens = useMemo(() => {
    const text = typeof children === 'string' ? children : ''
    return text.split(/(\s+)/)
  }, [children])

  const wordCount = tokens.filter((token) => !/^\s+$/.test(token)).length
  let wordIndex = 0

  return (
    <motion.div
      ref={containerRef}
      className={`scroll-reveal ${containerClassName}`.trim()}
      style={{ rotate, transformOrigin: '0% 50%' }}
    >
      <p className={`scroll-reveal-text ${textClassName}`.trim()}>
        {tokens.map((token, index) => {
          if (/^\s+$/.test(token)) return token
          return (
            <Word
              key={index}
              progress={wordProgress}
              index={wordIndex++}
              count={wordCount}
              baseOpacity={baseOpacity}
              enableBlur={enableBlur}
              blurStrength={blurStrength}
            >
              {token}
            </Word>
          )
        })}
      </p>
    </motion.div>
  )
}

export default ScrollReveal
