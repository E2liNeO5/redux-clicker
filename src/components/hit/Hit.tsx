import { FRAME_SIZE, IMAGE_NAME } from "../../constants/Hit.constants"
import useHitAnimation from "../../hooks/hit/useHitAnimation"
import { IHitItem } from "../../types/Hit.types"

const Hit = ({ item }: IHitItem) => {
  const frame = useHitAnimation(item.id)

  return (
    <div style={{
      width: `${FRAME_SIZE}px`,
      height: `${FRAME_SIZE}px`,
      position: 'absolute',
      left: `${item.x - FRAME_SIZE / 2}px`,
      top: `${item.y - FRAME_SIZE / 2}px`,
      backgroundImage: `url(images/${IMAGE_NAME})`,
      backgroundPosition: `${-frame * FRAME_SIZE}px ${item.variation * FRAME_SIZE}px`,
      filter: 'drop-shadow(0 0 10px #ffffff)',
      zIndex: 11
    }} />
  )
}

export default Hit