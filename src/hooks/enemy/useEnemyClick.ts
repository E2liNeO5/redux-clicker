import { Dispatch, RefObject, SetStateAction } from "react"
import { ANIMATION_DURATION, IMAGE_SIZE, INITIAL_OFFSET, MOD_AWARE_ANIMATION_DURATION, ROTATE_RATIO } from "../../constants/Enemy.constants"
import useGetEnemy from "./useGetEnemy"
import useHitCondition from "./useHitCondition"
import useActions from "../useActions"
import useGetPlayer from "../player/useGetPlayer"
import useAnimation from "../useAnimation"
import { getRandom } from "../../utils"

interface Props {
  enemyRef: RefObject<HTMLDivElement>
  modificationElementRef: RefObject<HTMLDivElement>
  e: React.MouseEvent<HTMLDivElement>
  setClickCount: Dispatch<SetStateAction<number>>
  setRotate: Dispatch<SetStateAction<string>>
  setModAwareAnimation: Dispatch<SetStateAction<string>>
}

const useEnemyClick = () => {
  const enemy = useGetEnemy()
  const { damage } = useGetPlayer()
  const { hitEnemy, addHit } = useActions()
  const animate = useAnimation()

  const enemyClick = ({ enemyRef, modificationElementRef, e, setClickCount, setRotate, setModAwareAnimation }: Props) => {
    const offset = enemyRef.current?.getBoundingClientRect() || INITIAL_OFFSET
    const x = e.clientX - offset.left
    const y = e.clientY - offset.top
    if(useHitCondition(enemy)) {
      setClickCount((prev: number) => prev + 1)
      hitEnemy(damage)
  
      let rotateX = (IMAGE_SIZE / 2 - y) / ROTATE_RATIO
      let rotateY = (x - IMAGE_SIZE / 2) / ROTATE_RATIO
  
      animate({
        value: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        defaultValue: '',
        setter: setRotate,
        duration: ANIMATION_DURATION
      })
    } else if(e.target !== modificationElementRef.current) {
      animate({
        value: 'drop-shadow(0 0 10px red)',
        defaultValue: '',
        setter: setModAwareAnimation,
        duration: MOD_AWARE_ANIMATION_DURATION
      })
    }
    
    addHit({ id: Date.now(), x, y, variation: getRandom(0, 4) })
  }

  return enemyClick
}

export default useEnemyClick