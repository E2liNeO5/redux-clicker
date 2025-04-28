import { FRAME_SIZE } from '../../constants/Hit.constants'
import styles from './Customize.module.scss'
import useActions from '../../hooks/useActions'
import useGetHits from '../../hooks/hit/useGetHits'
import { IHitData } from '../../types/Hit.types'
import Hit from '../hit/Hit'
import { useEffect, useState } from 'react'
import useAnimation from '../../hooks/useAnimation'
import useGetPlayer from '../../hooks/player/useGetPlayer'

const CurrentHit = () => {
  const { addHit } = useActions()
  const hits = useGetHits()
  const { hit } = useGetPlayer()
  const animate = useAnimation()
  const [image, setImage] = useState(`url(/images/hits/${hit.url})`)

  useEffect(() => {
    setImage(`url(/images/hits/${hit.url})`)
  }, [hit.url, hit.glowing])

  const startAnimation = () => {
    animate({
      value: '',
      defaultValue: `url(/images/hits/${hit.url})`,
      setter: setImage,
      duration: 500
    })
    addHit({ id: Date.now(), x: FRAME_SIZE / 2, y: FRAME_SIZE / 2, variation: 0 })
  }

  return (
    <div
      className={styles.wrapper}
      style={{
        width: FRAME_SIZE + 10 + 'px',
        height: FRAME_SIZE + 10 + 'px',
      }}
      >
      <div
        onClick={startAnimation}
        className={styles.current_hit}
        style={{
          backgroundImage: image,
          backgroundPosition: `${-10 * FRAME_SIZE}px 0px`,
          filter: `drop-shadow(0 0 10px ${hit.glowing})`
        }}
      >
        { hits.map((hit: IHitData) => <Hit key={hit.id} item={hit} />) }
      </div>
    </div>
  )
}

export default CurrentHit