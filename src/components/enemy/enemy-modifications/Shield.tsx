import { useEffect, useMemo, useState } from 'react'
import useGetPlayer from '../../../hooks/player/useGetPlayerDamage'
import useActions from '../../../hooks/useActions'
import { IShieldProps } from '../../../types/Enemy.types'
import styles from './EnemyModifications.module.scss'
import { getRandom } from '../../../utils'
import { IMAGE_SIZE } from '../../../constants/Enemy.constants'
import { SHIELD_MOVE_DELAY, ROTATE_VALUES, SHIELD_MOVE_DURATION, SHIELD_SIZE, SHIELD_REMOVE_DELAY, SHIELD_TRANSFORM_DURATION } from '../../../constants/Shield.constants'
import useGetEnemy from '../../../hooks/enemy/useGetEnemy'

const Shield = ({ modAwareElement, animation }: IShieldProps) => {
  const { hitShield } = useActions()
  const { damage } = useGetPlayer()
  const { modification } = useGetEnemy()

  const [isRemove, setIsRemove] = useState('block')
  const [rotate, setRotate] = useState('0deg')
  const [scale, setScale] = useState(1)
  const [coords, setCoords] = useState({
    x: getRandom(0, IMAGE_SIZE - SHIELD_SIZE), y: getRandom(0, IMAGE_SIZE - SHIELD_SIZE)
  })

  const removeShield = () => {
    if(modification && modification.shieldHealth <= 0) {
      setScale(0)
      setTimeout(() => setIsRemove('none'), SHIELD_REMOVE_DELAY)
      return true
    }
    return false
  }

  const clickHandler = () => {
    hitShield(damage)
    setRotate(`${ROTATE_VALUES[getRandom(0, ROTATE_VALUES.length - 1)]}deg`)
    setTimeout(() => {
      setRotate('0deg')
    }, SHIELD_TRANSFORM_DURATION)
  }

  useMemo(() => {
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
    removeShield()
  }, [modification?.shieldHealth])

  return (
    <div
      ref={modAwareElement}
      style={{
        display: isRemove,
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