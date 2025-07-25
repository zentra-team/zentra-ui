import React, { useEffect, useState } from "react"

interface RippleProps {
  duration?: number
  color?: string
  targetRef: React.RefObject<HTMLButtonElement | null>
}

interface RippleEffect {
  x: number
  y: number
  size: number
}

export const Ripple: React.FC<RippleProps> = ({
  duration = 600,
  color = "rgba(255, 255, 255, 0.7)",
  targetRef
}) => {
  const [ripples, setRipples] = useState<RippleEffect[]>([])

  useEffect(() => {
    const button = targetRef.current
    if (!button) return

    const handleClick = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const size = Math.max(button.clientWidth, button.clientHeight)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2
      setRipples((prevRipples) => [...prevRipples, { x, y, size }])
    }

    button.addEventListener("mousedown", handleClick)

    return () => {
      button.removeEventListener("mousedown", handleClick)
    }
  }, [targetRef])

  useEffect(() => {
    if (ripples.length > 0) {
      const timeoutId = setTimeout(() => {
        setRipples((prevRipples) => prevRipples.slice(1))
      }, duration)

      return () => clearTimeout(timeoutId)
    }
  }, [ripples, duration])

  return (
    <>
      {ripples.map((ripple, index) => (
        <span
          key={index}
          style={{
            position: "absolute",
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            borderRadius: "50%",
            backgroundColor: color,
            transform: "scale(0)",
            animation: `ripple ${duration}ms linear`,
            pointerEvents: "none"
          }}
        />
      ))}
      <style>
        {`
          @keyframes ripple {
            to {
              transform: scale(2);
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  )
}
