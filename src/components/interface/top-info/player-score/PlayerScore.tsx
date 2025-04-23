import { useEffect, useState } from 'react'
import useGetPlayer from '../../../../hooks/player/useGetPlayer'
import useAnimation from '../../../../hooks/useAnimation'
import styles from './PlayerScore.module.scss'
import { getShortValue } from '../../../../utils'

const PlayerScore = () => {
  const { score } = useGetPlayer()
  const animate = useAnimation()
  const [animationClass, setAnimationClass] = useState('')

  useEffect(() => {
    animate({
      value: styles.animate,
      defaultValue: '',
      setter: setAnimationClass,
      duration: 600
    })
  }, [score])

  return (
    <div className={`${styles.score_container} ${animationClass}`} title={`${score}`}>
      {getShortValue(score)}
    </div>
  )
}

export default PlayerScore