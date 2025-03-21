import { useEffect, useState } from 'react'
import styles from './EnemyHealthBar.module.scss'
import { IPart, Props } from '../../../types/EnemyHealthBar.types'

const INITIAL_PARTS: IPart[] = []

function EnemyHealthBar({ damage, clickCount, health, maxHealth }: Props) {
  const [barWidth, setBarWidth] = useState('100%')
  const [parts, setParts] = useState(INITIAL_PARTS)

  useEffect(() => {
    if(health !== maxHealth) {
      const barWidth = ~~(health / maxHealth * 100)
      const partWidth = ~~(damage / health * 100)
      setParts(prev => [...prev, {
        width: `${partWidth}%`
      }])
      setBarWidth(`${barWidth}%`)
    }
  }, [health])

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedParts = [...parts]
      updatedParts.shift()
      setParts(updatedParts);
    }, 500);

    return () => {
      clearInterval(intervalId)
      parts.length = 0
    }
  }, [parts])

  return (
    <div className={styles.bar_wrapper}>
      <span className={styles.bar_container} style={{
        width: barWidth
      }}>
        {parts.map((part, index) => (
          <span
            key={index}
            className={styles.bar_part}
            style={{
              width: part.width,
              right: `-${part.width}`
            }}
          />
        ))}
      </span>
      <span className={styles.bar_value}>{health}/{maxHealth}</span>
    </div>
  )
}

export default EnemyHealthBar