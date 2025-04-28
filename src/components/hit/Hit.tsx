import { FRAME_SIZE } from "../../constants/Hit.constants"
import { IHitItem } from "../../types/Hit.types"
import useHitAnimation from "../../hooks/hit/useHitAnimation"
import useGetPlayer from "../../hooks/player/useGetPlayer"

const Hit = ({ item }: IHitItem) => {
  const frame = useHitAnimation(item.id)
  const { hit } = useGetPlayer()


  return (
    <div style={{
      width: `${FRAME_SIZE}px`,
      height: `${FRAME_SIZE}px`,
      position: 'absolute',
      left: `${item.x - FRAME_SIZE / 2}px`,
      top: `${item.y - FRAME_SIZE / 2}px`,
      backgroundImage: `url(/images/hits/${hit.url})`,
      backgroundPosition: `${-frame * FRAME_SIZE}px ${item.variation * FRAME_SIZE}px`,
      filter: `drop-shadow(0 0 10px ${hit.glowing})`,
      zIndex: 11,
      pointerEvents: 'none'
    }} />
  )
}

export default Hit