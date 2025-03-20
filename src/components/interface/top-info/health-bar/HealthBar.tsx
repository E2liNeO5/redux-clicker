import { useEffect, useState } from 'react'
import styles from './HealthBar.module.scss'
import useGetPlayer from '../../../../hooks/player/useGetPlayerDamage'

function HealthBar() {
  const player = useGetPlayer()

  const [barWidth, setBarWidth] = useState('100%')
  const [isAnimate, setIsAnimate] = useState(false)

  useEffect(() => {
    if(player.currentHealth !== player.maxHealth) {
      setBarWidth(player.currentHealth / player.maxHealth * 100 + '%')
      setIsAnimate(true)
    }
  }, [player.currentHealth])

  useEffect(() => {
    if(isAnimate)
      setTimeout(() => setIsAnimate(false), 200)
  }, [isAnimate])

  return (
    <div className={styles.bar_wrapper} style={{
      boxShadow: isAnimate ? `0 0 10px 2px #f00` : ''
    }}>
      <span className={styles.bar_container} style={{
        width: barWidth,
      }} />
      <span className={styles.bar_value}>{player.currentHealth}/{player.maxHealth}</span>
    </div>
  )
}

export default HealthBar