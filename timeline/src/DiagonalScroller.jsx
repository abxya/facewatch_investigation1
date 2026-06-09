import { useState, useRef, useEffect } from 'react'
import './DiagonalScroller.css'

export default function DiagonalScroller({ imageUrl, children }) {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e) => {
      e.preventDefault()

      // Get the delta from mouse wheel
      const delta = e.deltaY || e.detail || e.wheelDelta

      // Create diagonal scroll: move both X and Y based on vertical scroll
      // Adjust the multiplier (0.5) to control the angle of diagonal scroll
      setScrollX((prev) => prev + delta * 0.5)
      setScrollY((prev) => prev + delta * 0.5)
    }

    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <div className="diagonal-scroller-container" ref={containerRef}>
      <div
        className="diagonal-scroller-content"
        style={{
          transform: `translate(${-scrollX}px, ${-scrollY}px)`,
        }}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="Scrollable content" className="scroller-image" />
        ) : (
          children
        )}
      </div>
    </div>
  )
}
