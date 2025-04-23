import { LucideIcon, Plus } from 'lucide-react'
import styles from './CharacterStats.module.scss'
import { useMemo } from 'react'
import usePlayerUpgrade from '../../hooks/player/usePlayerUpgrade'
import useGetPlayer from '../../hooks/player/useGetPlayer'
import { getShortValue } from '../../utils'

interface Props {
  Icon: LucideIcon
  name: string
  cost: number
  stat_name: string
  font_size?: number
}

const StatItem = ({ Icon, name, cost, stat_name, font_size }: Props) => {
  const { score } = useGetPlayer()
  const upgrade = usePlayerUpgrade()

  const isDisabled = useMemo(() => score <= cost ? styles.disabled : '', [score, cost])

  const clickHandler = () => {
    if(score >= cost)
      upgrade(stat_name, cost)
  }

  return (
    <div className={styles.stat_item}>
      <Icon size={58} />
      <span className={styles.item_name} style={{ fontSize: font_size }}>{name}</span>
      <div className={styles.item_action}>
        <Plus className={`${styles.plus} ${isDisabled}`} size={28} onClick={clickHandler} />
        <span className={`${styles.item_cost} ${isDisabled}`} title={`${cost}`}>Цена: {getShortValue(cost)}</span>
      </div>
    </div>
  )
}

export default StatItem