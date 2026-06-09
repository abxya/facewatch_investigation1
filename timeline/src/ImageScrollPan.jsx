import { useEffect, useState, useRef } from 'react'
import './ImageScrollPan.css'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const SCROLL_DISTANCE = 2400

export default function ImageScrollPan({
  imageUrl, imageWidth, imageHeight,
  viewWidth, viewHeight, start, end,
}) {
  const [viewport, setViewport] = useState({ width: 0, height: 0 })
  const [progress, setProgress] = useState(1)
  const containerRef = useRef(null)
  const accumulated = useRef(SCROLL_DISTANCE)
  const lastTouchY = useRef(null) // 👈 track previous touch position

  useEffect(() => {
    const update = () =>
      setViewport({ width: window.innerWidth, height: window.innerHeight })
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // --- Mouse/trackpad ---
    const onWheel = (e) => {
      e.preventDefault()
      e.stopPropagation()
      accumulated.current = clamp(accumulated.current + e.deltaY, 0, SCROLL_DISTANCE)
      setProgress(accumulated.current / SCROLL_DISTANCE)
    }

    // --- Touch ---
    const onTouchStart = (e) => {
      lastTouchY.current = e.touches[0].clientY
    }

    const onTouchMove = (e) => {
      e.preventDefault() // stops iOS from scrolling the page
      const y = e.touches[0].clientY
      const deltaY = lastTouchY.current - y // invert so swipe-up = scroll forward
      lastTouchY.current = y
      accumulated.current = clamp(accumulated.current + deltaY, 0, SCROLL_DISTANCE)
      setProgress(accumulated.current / SCROLL_DISTANCE)
    }

    const onTouchEnd = () => {
      lastTouchY.current = null
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: false }) // passive: false needed for preventDefault
    el.addEventListener('touchend', onTouchEnd)

    return () => {
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  const scale =
    viewport.width && viewport.height
      ? Math.min(viewport.width / viewWidth, viewport.height / viewHeight)
      : 1

  const tlX = start.x + (end.x - start.x) * progress
  const tlY = start.y + (end.y - start.y) * progress
  const centerX = tlX + viewWidth  / 2
  const centerY = tlY + viewHeight / 2

  const tx = viewport.width  / 2 - centerX * scale
  const ty = viewport.height / 2 - centerY * scale

  return (
    <div className="scroll-pan-wrapper" ref={containerRef}>
      <img
        src={imageUrl}
        alt="Scrollable panorama"
        className="scroll-pan-image"
        style={{
          width:     `${imageWidth  * scale}px`,
          height:    `${imageHeight * scale}px`,
          transform: `translate(${tx}px, ${ty}px)`,
        }}
      />
    </div>
  )
}