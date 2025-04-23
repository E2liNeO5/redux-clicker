import { getShortValue } from '../../utils'
import styles from './CharacterStats.module.scss'

interface Props {
  name: string
  value: number
  maxValue?: number
}

const StatInfoItem = ({ name, value, maxValue }: Props) => {

  return (
    <div className={styles.stat_info_item} title={ `${maxValue ? `${value}-${maxValue}` : value}` }>
      <span>{name}: { maxValue ? `${getShortValue(value)}-${getShortValue(maxValue)}` : getShortValue(value) }</span>
    </div>
  )
}

export default StatInfoItem