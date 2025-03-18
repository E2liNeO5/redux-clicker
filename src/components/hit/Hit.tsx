import { FRAME_SIZE, IHitData } from "./Hit.constants"
import useHitAnimation from "../../hooks/hit/useHitAnimation"

interface IHitItem {
  item: IHitData
}

const Hit = ({ item }: IHitItem) => {
  const frame = useHitAnimation(item.id)

  return (
    <div style={{
      width: `${FRAME_SIZE}px`,
      height: `${FRAME_SIZE}px`,
      position: 'absolute',
      left: `${item.x - FRAME_SIZE / 2}px`,
      top: `${item.y - FRAME_SIZE / 2}px`,
      backgroundImage: 'url(images/hit_frames.png)',
      backgroundPosition: `${-frame * FRAME_SIZE}px ${item.variation * FRAME_SIZE}px`,
      zIndex: 11
    }} />
  )
}

export default Hit