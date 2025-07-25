import { type RefObject, useEffect, useRef, useState } from "react"

type UseOutsideReturnType<T> = {
  ref: RefObject<T | null>
  isShow: boolean
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * A React hook that detects clicks outside of a referenced element
 * and updates the visibility state accordingly.
 *
 * @name useOutside
 * @description - A React hook that detects clicks outside of a referenced element and updates the visibility state accordingly.
 * @category Utilities
 * @template T - The type of HTML element to detect outside clicks for.
 * @param {boolean} initialVisible Initial visibility state.
 * @returns {UseOutsideReturnType<T>} Object containing a ref, visibility state, and state updater.
 * @example
 * import { useOutside } from '@bounce-ui';
 */

export const useOutside = <T extends HTMLElement = HTMLElement>(
  initialVisible: boolean
): UseOutsideReturnType<T> => {
  const [isShow, setIsShow] = useState(initialVisible)
  const ref = useRef<T | null>(null)

  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick, true)

    return () => {
      document.removeEventListener("click", handleClick, true)
    }
  }, [])

  return { ref, isShow, setIsShow }
}
