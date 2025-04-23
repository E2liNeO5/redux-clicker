import { ChangeEvent, useState } from 'react'
import styles from '../../styles/Testing.module.scss'
import { getShortValue } from '../../utils'

const ShortValueTest = () => {
  const [value, setValue] = useState(0)

  return (
    <div className={styles.short_value_test}>
      <label>
        Полное число:
        <input type="number" onChange={(e: ChangeEvent<HTMLInputElement>) => { setValue(Number(e.target.value))}} />
      </label>
      <p className={styles.short_result}>Короткая версия: { getShortValue(value) }</p>
    </div>
  )
}

export default ShortValueTest