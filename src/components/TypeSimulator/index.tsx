import React, { useEffect, useState, useRef } from 'react'
import { CursorSimulator, TypingAnimation } from './styles'

const TypingSimulator = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('')
  const cursorRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(intervalId)
      }
    }, 100)

    return () => clearInterval(intervalId)
  }, [text])

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'end'
      })
    }
  }, [displayText])

  return (
    <TypingAnimation>
      {displayText}
      <CursorSimulator ref={cursorRef}>|</CursorSimulator>
    </TypingAnimation>
  )
}

export default TypingSimulator
