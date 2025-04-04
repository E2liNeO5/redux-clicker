import { useEffect, useState } from 'react'
import styles from './HealthBar.module.scss'
import useGetPlayer from '../../../../hooks/player/useGetPlayer'

function HealthBar() {
  const player = useGetPlayer()

  const [barWidth, setBarWidth] = useState('100%')
  const [isAnimate, setIsAnimate] = useState(false)

  useEffect(() => {
    if(player.health !== player.maxHealth) {
      setBarWidth(player.health / player.maxHealth * 100 + '%')
      setIsAnimate(true)
    }
  }, [player.health])

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
      <span className={styles.bar_value}>{player.health}/{player.maxHealth}</span>
    </div>
  )
}

export default HealthBar