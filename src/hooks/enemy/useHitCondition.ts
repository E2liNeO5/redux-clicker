import { RefObject } from "react"
import useGetEnemy from "./useGetEnemy"

const useHitCondition = () => {
  const { modification } = useGetEnemy()
  const condition = (target: EventTarget, modificationElementRef: RefObject<HTMLDivElement>) => {
    if(!modification)
    return true

    switch(modification.type) {
      case 'shield':
        return modification && 'shieldHealth' in modification && modification.shieldHealth <= 0
      case 'spikeShield':
        return target !== modificationElementRef.current
      default:
        return true
    }
  }
  return condition
}

export default useHitCondition