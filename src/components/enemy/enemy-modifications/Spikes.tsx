import { useEffect, useState } from 'react'
import styles from './EnemyModifications.module.scss'
import { getRandom, getRandomFromArray } from '../../../utils'
import { IMAGE_SIZE } from '../../../constants/Enemy.constants'
import { MOD_AWARE_ANIMATION_DURATION, SHIELD_TRANSFORM_DURATION, SPIKES_MOVE_DELAY, SPIKES_MOVE_DURATION, SPIKES_SIZE } from '../../../constants/Modification.constants'
import { ISpikesProps } from '../../../types/Enemy.types'
import useActions from '../../../hooks/useActions'
import useAnimation from '../../../hooks/useAnimation'

const Spikes = ({ damage }: ISpikesProps) => {
  const { playerHit } = useActions()
  const animate = useAnimation()
  const [scale, setScale] = useState('scale(1)')
  const [coords, setCoords] = useState({
    x: getRandom(0, IMAGE_SIZE - SPIKES_SIZE), y: getRandom(0, IMAGE_SIZE - SPIKES_SIZE)
  })

  const clickHandler = () => {
    playerHit(damage)
    animate({
      value: 'scale(1.2)',
      defaultValue: 'scale(1)',
      setter: setScale,
      duration: MOD_AWARE_ANIMATION_DURATION
    })
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    const startMove = () => {
      interval = setInterval(() => {
        setCoords({
          x: getRandom(0, IMAGE_SIZE - SPIKES_SIZE),
          y: getRandom(0, IMAGE_SIZE - SPIKES_SIZE)
        })
      }, getRandomFromArray(SPIKES_MOVE_DELAY));
    }

    startMove()

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        transform: scale,
        left: coords.x,
        top: coords.y,
        width: `${SPIKES_SIZE}px`,
        height: `${SPIKES_SIZE}px`,
        transition: `top ${SPIKES_MOVE_DURATION}ms, left ${SPIKES_MOVE_DURATION}ms, transform ${SHIELD_TRANSFORM_DURATION}ms`
      }}
      onClick={clickHandler}
      className={styles.spikes}
    />
  )
}

export default Spikes