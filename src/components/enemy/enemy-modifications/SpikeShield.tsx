import { memo, useEffect, useState } from "react"
import { MOD_AWARE_ANIMATION_DURATION, SHIELD_SIZE, SHIELD_TRANSFORM_DURATION, SPIKE_SHIELD_MOVE_DURATION } from "../../../constants/Modification.constants"
import { ISpikeShieldProps } from "../../../types/Enemy.types"
import styles from './EnemyModifications.module.scss'
import useActions from "../../../hooks/useActions"
import useGetEnemy from "../../../hooks/enemy/useGetEnemy"
import { getRandom } from "../../../utils"
import useAnimation from "../../../hooks/useAnimation"
import { IMAGE_SIZE } from "../../../constants/Enemy.constants"

const SpikeShield = memo(({ modAwareElement, x, y }: ISpikeShieldProps) => {
  const { playerHit } = useActions()
  const { modification } = useGetEnemy()
  const animate = useAnimation()

  const [scale, setScale] = useState('')
  const [coords, setCoords] = useState({ x, y })

  const clickHandler = () => {
    if(modification && 'damageMin' in modification && 'damageMax' in modification) {
      playerHit(getRandom(modification.damageMin, modification.damageMax))
      animate({
        value: 'scale(1.2)',
        defaultValue: 'scale(1)',
        setter: setScale,
        duration: MOD_AWARE_ANIMATION_DURATION
      })
    }
  }

  useEffect(() => {
    if(x - SHIELD_SIZE / 2 < 0)
      setCoords(prev => ({...prev, x: 0}))
    else if(x + SHIELD_SIZE / 2 > IMAGE_SIZE)
      setCoords(prev => ({...prev, x: IMAGE_SIZE - SHIELD_SIZE}))
    else {
      setCoords(prev => ({...prev, x: x - SHIELD_SIZE / 2}))
    }
    if(y - SHIELD_SIZE / 2 < 0)
      setCoords(prev => ({...prev, y: 0}))
    else if(y + SHIELD_SIZE / 2 > IMAGE_SIZE)
      setCoords(prev => ({...prev, y: y - SHIELD_SIZE}))
    else {
      setCoords(prev => ({...prev, y: y - SHIELD_SIZE / 2}))
    }
  }, [x, y])

  return (
    <div
      ref={modAwareElement}
      style={{
        left: `${coords.x}px`,
        top: `${coords.y}px`,
        width: `${SHIELD_SIZE}px`,
        height: `${SHIELD_SIZE}px`,
        transform: scale,
        transition: `top ${SPIKE_SHIELD_MOVE_DURATION}ms, left ${SPIKE_SHIELD_MOVE_DURATION}ms, transform ${SHIELD_TRANSFORM_DURATION}ms`
      }}
      onClick={clickHandler}
      className={styles.spike_shield}
    />
  )
})

export default SpikeShield