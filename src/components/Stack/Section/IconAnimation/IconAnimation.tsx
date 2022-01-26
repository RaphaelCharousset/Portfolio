import { memo, useEffect, useState } from "react"

import { animationIcon } from "../../../../functions/animationIcon"

import { Icon } from "../../../../interfaces/Icon"

export const IconAnimation = memo((
  {index, icon, nbIcons}: Icon
  ) => {
    const [position, setPosition] = useState((50 + 50) * index)
    const [isHidden, setIsHidden] = useState(false)
    
    useEffect(() => {
      animationIcon(position, setPosition, nbIcons, setIsHidden)
    }, [])
    
    setTimeout(() => {
      animationIcon(position, setPosition, nbIcons, setIsHidden)
    }, 2000)

  return (
    <div
      className={isHidden ? 'stack-section__icons__item hidden' : 'stack-section__icons__item'}
      style={{left: `${position}px`}}
    >
      {icon}
    </div>
  )
})
