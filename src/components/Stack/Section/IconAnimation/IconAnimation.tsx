import { useEffect, useState } from "react"

interface Icon {
  index: number;
  icon: JSX.Element;
  nbIcons: number
}

const animation = (state: number, stateSetter, nbIcons: number, setIsHidden) => {
  if (state < 0) {
    setIsHidden(true)
    stateSetter((50 + 50) * (nbIcons - 1))
    setTimeout(() => {
      setIsHidden(false)
    }, 2000);
  }
  else stateSetter(state - 50)
}

export const IconAnimation = (
  {index, icon, nbIcons}: Icon
  ) => {
    const [position, setPosition] = useState((50 + 50) * index)
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
      animation(position, setPosition, nbIcons, setIsHidden)
    }, [])

    setTimeout(() => {
      animation(position, setPosition, nbIcons, setIsHidden)
    }, 2000);

  return (
    <div
      className={isHidden ? 'stack-section__icons__item hidden' : 'stack-section__icons__item'}
      style={{left: `${position}px`}}
    >
      {icon}
    </div>
  )
}
