import { useEffect, useState } from 'react'
import styles from './HealthBar.module.scss'
import useGetPlayer from '../../../../hooks/player/useGetPlayer'
import { getShortValue } from '../../../../utils'

function HealthBar() {
  const player = useGetPlayer()

  const [barWidth, setBarWidth] = useState('100%')
  const [isAnimate, setIsAnimate] = useState(false)
  const [animationColor, setAnimationColor] = useState('#03b82d')

  useEffect(() => {
    setBarWidth(player.health / player.maxHealth * 100 + '%')
    setIsAnimate(true)
  }, [player.health])

  useEffect(() => {
    if(isAnimate) {
      setAnimationColor(player.health < player.maxHealth ? '#f00' : '#03b82d')
      setTimeout(() => setIsAnimate(false), 200)
    }
  }, [isAnimate])

  return (
    <div className={styles.bar_wrapper} style={{
      boxShadow: isAnimate ? `0 0 10px 2px ${animationColor}` : ''
    }}>
      <span className={styles.bar_container} style={{
        width: barWidth,
      }} />
      <span className={styles.bar_value}>{getShortValue(player.health)}/{getShortValue(player.maxHealth)}</span>
    </div>
  )
}

export default HealthBar