import { HeartPulse, Sword } from 'lucide-react'
import styles from './CharacterStats.module.scss'
import StatItem from './StatItem'
import StatInfoItem from './StatInfoItem'
import useGetPlayer from '../../hooks/player/useGetPlayer'

const CharacterStats = () => {
  const { maxHealth, damageMin, damageMax, score, damageCost, healthCost } = useGetPlayer()

  return (
    <div className={styles.container}>
      <div className={styles.stats_container}>
        <StatItem Icon={HeartPulse} name='Здоровье' cost={healthCost} stat_name='health' />
        <StatItem Icon={Sword} name='Урон' cost={damageCost} stat_name='damage' />
      </div>
      <div className={styles.stats_info}>
        <StatInfoItem name='Очки' value={score} />
        <StatInfoItem name='Здоровье' value={maxHealth} />
        <StatInfoItem name='Урон' value={damageMin} maxValue={damageMax} />
      </div>
    </div>
  )
}

export default CharacterStats