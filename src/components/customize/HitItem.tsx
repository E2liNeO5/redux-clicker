import { LockKeyhole } from 'lucide-react'
import { FRAME_SIZE, HIT_IMAGE_BUY_COST } from '../../constants/Hit.constants'
import { IHitItemComponent } from '../../types/Hit.types'
import styles from './Customize.module.scss'
import useGetPlayer from '../../hooks/player/useGetPlayer'
import { memo, useCallback } from 'react'
import useActions from '../../hooks/useActions'

interface Props {
  item: IHitItemComponent
}

const HitItem = memo(({ item }: Props) => {
  const { boughtHitImages, score, hit } = useGetPlayer()
  const { buyHitImage, setCurrentHit } = useActions()

  const clickHandler = useCallback(() => {
    if(!boughtHitImages.includes(item.id) && score >= HIT_IMAGE_BUY_COST)
      buyHitImage({ id: item.id, url: item.url, variations: item.variations, frames: item.frames })
    else if(boughtHitImages.includes(item.id))
      setCurrentHit(item)
  }, [score])

  return (
    <div
      title={`Цена: ${HIT_IMAGE_BUY_COST}`}
      className={`${styles.hit_item} ${boughtHitImages.includes(item.id) ? hit.id === item.id ? styles.selected : styles.bought : ''}`}
      style={{
        width: FRAME_SIZE + 'px',
        height: FRAME_SIZE + 'px',
        backgroundImage: `url(/images/hits/${item.url})`,
        backgroundPosition: `${-10 * FRAME_SIZE}px 0px`,
        cursor: `${!boughtHitImages.includes(item.id) && score < HIT_IMAGE_BUY_COST ? 'no-drop' : 'pointer'}`
      }}
      onClick={clickHandler}
    >
      { !boughtHitImages.includes(item.id) && <LockKeyhole className={styles.lock} size={32} /> }
    </div>
  )
})

export default HitItem