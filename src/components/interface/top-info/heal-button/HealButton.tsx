import useGetPlayer from '../../../../hooks/player/useGetPlayer'
import useActions from '../../../../hooks/useActions'
import { getShortValue } from '../../../../utils'
import styles from './HealButton.module.scss'

const HealButton = () => {
  const { healCount } = useGetPlayer()
  const { playerHeal } = useActions()

  const setFontSize = (num: number) => {
    const zeroCount = String(num).length - 1
    return `0.${10 - zeroCount - 1}em`
  }

  return (
    <div className={styles.heal_button} onClick={() => playerHeal()}>
      <div className={styles.count} style={{ fontSize: setFontSize(healCount) }} >{ getShortValue(healCount)}</div>
    </div>
  )
}

export default HealButton