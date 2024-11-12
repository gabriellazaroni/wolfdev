import React, { useState, ReactNode } from 'react'
import { DescriptionText, SeeMoreButton } from './styles'

interface CollapsibleTextProps {
  children: ReactNode;
  maxLength: number;
}

export function CollapsibleText({ children, maxLength }: CollapsibleTextProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const textToShow = isExpanded ? children : `${children?.toString().substring(0, maxLength)}...`

  return (
    <DescriptionText>
      {textToShow}
      <SeeMoreButton onClick={toggleExpand}>
        {isExpanded ? 'ver menos' : 'ver mais'}
      </SeeMoreButton>
    </DescriptionText>
  )
}
