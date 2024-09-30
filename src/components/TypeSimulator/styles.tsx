import styled, { keyframes } from 'styled-components'

export const TypingAnimation = styled.h1`
  position: relative;
  font-family: 'Noto Sans', sans-serif;
  font-size: 4rem;
  font-weight: 400;
  color: var(--white);
  white-space: pre-wrap;
  display: inline-block;
  height: 260px;
  @media (max-width: 940px) {
    height: 340px;
  }
  @media (max-width: 649px) {
    font-size: 2rem;
    height: 160px;
  }
  @media (max-width: 536px) {
    height: 200px;
  }
  @media (max-width: 390px) {
    height: 240px;
  }
`

export const blinkAnimation = keyframes`
  50% {
    opacity: 0;
  }
`

export const CursorSimulator = styled.span`
  color: var(--purple-500);
  animation: ${blinkAnimation} 1s infinite;
`
