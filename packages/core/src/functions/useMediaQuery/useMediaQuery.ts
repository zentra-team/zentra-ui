import { useEffect, useState } from "react"

type UseMediaQuerySize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"

interface UseMediaQueryStateReturn {
  isMobile: boolean
}

const screens: Record<UseMediaQuerySize, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  "3xl": 1920
}

/**
 * A React hook that detects screen size changes and updates the state accordingly.
 *
 * @name useMediaQuery
 * @description - A React hook that detects screen size changes and updates the state accordingly.
 * @category Utilities
 * @param {UseMediaQuerySize} size The size to detect screen size changes for.
 * @returns {UseMediaQueryStateReturn} Object containing the isMobile state.
 * @example
 * import { useMediaQuery } from '@bounce-ui';
 */
export const useMediaQuery = (size: UseMediaQuerySize): UseMediaQueryStateReturn => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= screens[size])
    }

    checkScreenSize()

    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return { isMobile }
}
