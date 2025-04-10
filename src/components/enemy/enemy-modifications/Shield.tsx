import { useEffect, useState } from 'react'
import useGetPlayer from '../../../hooks/player/useGetPlayer'
import useActions from '../../../hooks/useActions'
import { IShieldProps } from '../../../types/Enemy.types'
import styles from './EnemyModifications.module.scss'
import { getRandom } from '../../../utils'
import { IMAGE_SIZE } from '../../../constants/Enemy.constants'
import { SHIELD_MOVE_DELAY, ROTATE_VALUES, SHIELD_MOVE_DURATION, SHIELD_SIZE, SHIELD_TRANSFORM_DURATION, SHIELD_REMOVE_ANIMATION_DURATION } from '../../../constants/Modification.constants'
import useGetEnemy from '../../../hooks/enemy/useGetEnemy'
import useAnimation from '../../../hooks/useAnimation'

const Shield = ({ modAwareElement, animation }: IShieldProps) => {
  const { hitShield, removeModification } = useActions()
  const { damage } = useGetPlayer()
  const { modification } = useGetEnemy()
  const animate = useAnimation()

  const [isRemove, setIsRemove] = useState(false)
  const [rotate, setRotate] = useState('0deg')
  const [scale, setScale] = useState('1')
  const [coords, setCoords] = useState({
    x: getRandom(0, IMAGE_SIZE - SHIELD_SIZE), y: getRandom(0, IMAGE_SIZE - SHIELD_SIZE)
  })

  const clickHandler = () => {
    hitShield(damage)
    animate({
      value: `${ROTATE_VALUES[getRandom(0, ROTATE_VALUES.length - 1)]}deg`,
      defaultValue: '0deg',
      setter: setRotate,
      duration: SHIELD_TRANSFORM_DURATION
    })
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    const startMove = () => {
      interval = setInterval(() => {
        setCoords({
          x: getRandom(0, IMAGE_SIZE - SHIELD_SIZE),
          y: getRandom(0, IMAGE_SIZE - SHIELD_SIZE)
        })
      }, SHIELD_MOVE_DELAY);
    }

    startMove()

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if(modification && 'shieldHealth' in modification && modification.shieldHealth <= 0)
      setIsRemove(true)
  }, [modification && 'shieldHealth' in modification && modification?.shieldHealth])

  useEffect(() => {
    if(isRemove) {
      animate({
        value: '0',
        defaultValue: '0',
        setter: setScale,
        duration: SHIELD_REMOVE_ANIMATION_DURATION,
        ending: () => {
          removeModification()
        }
    })
    }
  }, [isRemove])

  return (
    <div
      ref={modAwareElement}
      style={{
        transform: `rotateZ(${rotate}) scale(${scale})`,
        left: coords.x,
        top: coords.y,
        width: `${SHIELD_SIZE}px`,
        height: `${SHIELD_SIZE}px`,
        filter: animation,
        transition: `top ${SHIELD_MOVE_DURATION}ms, left ${SHIELD_MOVE_DURATION}ms, transform ${SHIELD_TRANSFORM_DURATION}ms`
      }}
      onClick={clickHandler}
      className={styles.shield}
    />
  )
}

export default Shield