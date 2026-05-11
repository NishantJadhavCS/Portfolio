import { useEffect, useState } from 'react'

export function useTypewriter(words, typeSpeed = 100, eraseSpeed = 50, pause = 2000) {
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isErasing, setIsErasing] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const delay = isErasing ? eraseSpeed : typeSpeed

    const timeout = setTimeout(
      () => {
        if (!isErasing && charIndex < currentWord.length) {
          setCharIndex((index) => index + 1)
          return
        }

        if (!isErasing && charIndex === currentWord.length) {
          setIsErasing(true)
          return
        }

        if (isErasing && charIndex > 0) {
          setCharIndex((index) => index - 1)
          return
        }

        setIsErasing(false)
        setWordIndex((index) => (index + 1) % words.length)
      },
      !isErasing && charIndex === currentWord.length ? pause : delay,
    )

    return () => clearTimeout(timeout)
  }, [charIndex, eraseSpeed, isErasing, pause, typeSpeed, wordIndex, words])

  return words[wordIndex].slice(0, charIndex)
}
