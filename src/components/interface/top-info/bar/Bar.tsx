import { useEffect, useState } from 'react'
import styles from './Bar.module.scss'

interface Props {
  backgroundColor?: string | null,
  barColor?: string | null,
  textColor?: string | null,
  animationColor?: string | null, 
  width: string,
  currentValue: number,
  maxValue: number
}

function Bar({ backgroundColor, barColor, textColor, animationColor, width, currentValue, maxValue }: Props) {
  const [barWidth, setBarWidth] = useState('100%')
  const [isAnimate, setIsAnimate] = useState(false)

  useEffect(() => {
    if(currentValue !== maxValue) {
      setBarWidth(currentValue / maxValue * 100 + '%')
      setIsAnimate(true)
    }
  }, [currentValue])

  useEffect(() => {
    if(isAnimate)
      setTimeout(() => setIsAnimate(false), 200)
  }, [isAnimate])

  return (
    <div className={styles.bar_wrapper} style={{
      backgroundColor: backgroundColor || '#fff',
      width,
      color: textColor || '#000',
      boxShadow: isAnimate && animationColor ? `0 0 10px 2px ${animationColor}` : ''
    }}>
      <span className={styles.bar_container} style={{
        width: barWidth,
        backgroundColor: barColor || "#555"
      }} />
      <span className={styles.bar_value}>{currentValue}/{maxValue}</span>
    </div>
  )
}

export default Bar