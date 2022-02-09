import { useState, useEffect } from "react"

const useOnScreen = (ref: any) => {
  // const [observed, setObserved] = useState<Array<any>>([])
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )

  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [])
  // console.log(isIntersecting)


  return isIntersecting
}

export default useOnScreen
