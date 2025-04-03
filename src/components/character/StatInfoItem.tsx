import styles from './CharacterStats.module.scss'

interface Props {
  name: string
  value: number
  maxValue?: number
}

const StatInfoItem = ({ name, value, maxValue }: Props) => {
  return (
    <div className={styles.stat_info_item}>
      <span>{name}: { maxValue ? `${value}-${maxValue}` : value }</span>
    </div>
  )
}

export default StatInfoItem