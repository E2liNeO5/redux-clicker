import { useEffect, useState } from "react"
import { ANIMATION_DURATION } from "../../constants/Hit.constants"
import useActions from "../useActions"
import useGetPlayer from "../player/useGetPlayer"

const useHitAnimation = (index: number) => {
  const [frame, setFrame] = useState<number>(0)
  const { hit } = useGetPlayer()

  const [isAnimationFinish, setIsAnimationFinish] = useState(false)

  const { removeHit } = useActions()

  useEffect(() => {
    let interval: NodeJS.Timeout
    let currentFrame = frame

    const startAnimation = () => {
      interval = setInterval(() => {
        if(!isAnimationFinish) {
          currentFrame++
          setFrame(currentFrame)
          if (currentFrame === hit.frames) {
            setIsAnimationFinish(true)
            clearInterval(interval)
            removeHit(index)
          }
      }
      }, ANIMATION_DURATION);
    }

    startAnimation()

    return () => clearInterval(interval)
  }, [])

  return frame
}

export default useHitAnimation