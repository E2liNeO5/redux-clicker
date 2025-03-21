import { useCallback, useEffect, useMemo, useState } from 'react'
import useGetPlayer from '../../../hooks/player/useGetPlayerDamage'
import useActions from '../../../hooks/useActions'
import { IShieldProps } from '../../../types/Enemy.types'
import styles from './EnemyModifications.module.scss'
import { getRandom } from '../../../utils'
import { IMAGE_SIZE } from '../../../constants/Enemy.constants'
import { MOVE_DELAY, ROTATE_VALUES, SHIELD_SIZE } from '../../../constants/Shield.constants'

const Shield = ({ animation, enemy }: IShieldProps) => {
  const { hitShield } = useActions()
  const { damage } = useGetPlayer()

  const [isRemove, setIsRemove] = useState('block')
  const [rotate, setRotate] = useState('')
  const [coords, setCoords] = useState({
    x: 0, y: 0
  })

  const removeShield = () => {
    if(enemy.modification && enemy.modification.shieldHealth <= 0) {
      setIsRemove('none')
      return true
    }
    return false
  }

  const clickHandler = () => {
    if(!removeShield()) {
      hitShield(damage)
      setRotate(`rotateZ(${ROTATE_VALUES[getRandom(0, ROTATE_VALUES.length - 1)]}deg)`)
      setTimeout(() => {
        setRotate('')
      }, 50)
    }
  }

  useMemo(() => {
    let interval: NodeJS.Timeout

    const startMove = () => {
      interval = setInterval(() => {
        setCoords({
          x: getRandom(0, IMAGE_SIZE - SHIELD_SIZE),
          y: getRandom(0, IMAGE_SIZE - SHIELD_SIZE)
        })
      }, MOVE_DELAY);
    }

    startMove()

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    removeShield()
  }, [enemy.modification?.shieldHealth])

  return (
    <div
      style={{
        display: isRemove,
        transform: rotate,
        left: coords.x,
        top: coords.y,
        width: `${SHIELD_SIZE}px`,
        height: `${SHIELD_SIZE}px`,
        filter: animation
      }}
      onClick={clickHandler}
      className={styles.shield}
    />
  )
}

export default Shield