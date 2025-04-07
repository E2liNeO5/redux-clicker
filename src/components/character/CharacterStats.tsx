import { HeartPulse, PillBottle, Sword } from 'lucide-react'
import styles from './CharacterStats.module.scss'
import StatItem from './StatItem'
import StatInfoItem from './StatInfoItem'
import useGetPlayer from '../../hooks/player/useGetPlayer'
import { HEAL_POTION_COST } from '../../constants/Player.constants'

const CharacterStats = () => {
  const { maxHealth, damageMin, damageMax, score, damageCost, healthCost, healCount } = useGetPlayer()

  return (
    <div className={styles.container}>
      <div className={styles.stats_container}>
        <StatItem Icon={HeartPulse} name='Здоровье' cost={healthCost} stat_name='health' />
        <StatItem Icon={Sword} name='Урон' cost={damageCost} stat_name='damage' />
        <StatItem Icon={PillBottle} name='Зелье здоровья' cost={HEAL_POTION_COST} stat_name='healPotion' font_size={12} />
      </div>
      <div className={styles.stats_info}>
        <StatInfoItem name='Очки' value={score} />
        <StatInfoItem name='Здоровье' value={maxHealth} />
        <StatInfoItem name='Урон' value={damageMin} maxValue={damageMax} />
        <StatInfoItem name='Зелья здоровья' value={healCount} />
      </div>
    </div>
  )
}

export default CharacterStats