import { useEffect, useState } from 'react'
import styles from './EnemyHealthBar.module.scss'
import { IPart, Props } from '../../../types/EnemyHealthBar.types'

const MAX_HEALTH: number = 100
const INITIAL_PARTS: IPart[] = []

function EnemyHealthBar({ damage, clickCount }: Props) {
  const [health, setHealth] = useState(MAX_HEALTH)
  const [barWidth, setBarWidth] = useState('100%')
  const [parts, setParts] = useState(INITIAL_PARTS)

  useEffect(() => {
    if(clickCount > 0) {
      setHealth(prev => prev - damage)
    }
  }, [clickCount])

  useEffect(() => {
    if(health !== MAX_HEALTH) {
      const barWidth = ~~(health / MAX_HEALTH * 100)
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
      <span className={styles.bar_value}>{health}/{MAX_HEALTH}</span>
    </div>
  )
}

export default EnemyHealthBar