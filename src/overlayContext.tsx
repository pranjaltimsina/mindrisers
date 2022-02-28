import { createContext } from 'react'
type overlayContextType = {
  hidden: boolean
  setHidden: ((current: boolean) => void)
}
export const overlayContext = createContext<overlayContextType>({hidden: false, setHidden: (current: boolean) => {return} });
