import { useEffect, useRef } from 'react'

import './cursor.scss'

export const Cursor = () => {
  const cursor = useRef<HTMLDivElement>(null);
  const cursorCenter = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      if (cursor.current) {
        const { clientX, clientY } = e

        const mouseX = clientX - (cursor.current.clientWidth / 2)
        const mouseY = clientY - (cursor.current.clientHeight / 2)
        cursor.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      }
    }
    
    document.addEventListener('mousemove', updatePosition)
  }, [])

  return (
    <div
      className="cursor"
      ref={cursor}
    >
      <div
        className="cursor__center"
        ref={cursorCenter}
      />
    </div>
  )
}
