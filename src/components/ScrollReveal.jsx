import { useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './ScrollReveal.css'

gsap.registerPlugin(ScrollTrigger)

function ScrollReveal({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
}) {
  const containerRef = useRef(null)

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : ''

    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word

      return (
        <span className="word" key={index}>
          {word}
        </span>
      )
    })
  }, [children])

  useEffect(() => {
    const element = containerRef.current
    if (!element) return undefined

    const scroller = scrollContainerRef?.current ?? window
    const triggers = []

    const rotationTween = gsap.fromTo(
      element,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: element,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true,
        },
      },
    )

    if (rotationTween.scrollTrigger) triggers.push(rotationTween.scrollTrigger)

    const wordElements = element.querySelectorAll('.word')

    const opacityTween = gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: element,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true,
        },
      },
    )

    if (opacityTween.scrollTrigger) triggers.push(opacityTween.scrollTrigger)

    let blurTween

    if (enableBlur) {
      blurTween = gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: element,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: true,
          },
        },
      )

      if (blurTween.scrollTrigger) triggers.push(blurTween.scrollTrigger)
    }

    return () => {
      rotationTween.kill()
      opacityTween.kill()
      blurTween?.kill()
      triggers.forEach((trigger) => trigger.kill())
    }
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength])

  return (
    <div ref={containerRef} className={`scroll-reveal ${containerClassName}`.trim()}>
      <p className={`scroll-reveal-text ${textClassName}`.trim()}>{splitText}</p>
    </div>
  )
}

export default ScrollReveal
