import { LucideIcon, Plus } from 'lucide-react'
import styles from './CharacterStats.module.scss'
import { useMemo } from 'react'
import usePlayerUpgrade from '../../hooks/player/usePlayerUpgrade'
import useGetPlayer from '../../hooks/player/useGetPlayer'

interface Props {
  Icon: LucideIcon
  name: string
  cost: number
  stat_name: string
}

const StatItem = ({ Icon, name, cost, stat_name }: Props) => {
  const { score } = useGetPlayer()
  const upgrade = usePlayerUpgrade()

  const isDisabled = useMemo(() => score <= cost ? styles.disabled : '', [score, cost])

  const clickHandler = () => {
    if(score >= cost)
      upgrade(stat_name, cost)
  }

  return (
    <div className={styles.stat_item}>
      <Icon size={64} />
      <span className={styles.item_name}>{name}</span>
      <div className={styles.item_action}>
        <Plus className={`${styles.plus} ${isDisabled}`} size={28} onClick={clickHandler} />
        <span className={`${styles.item_cost} ${isDisabled}`} title={`${cost}`}>Цена: {cost}</span>
      </div>
    </div>
  )
}

export default StatItem