import { useState } from 'react'
import styles from './Enemy.module.scss'
import EnemyHealthBar from './enemy-health-bar/EnemyHealthBar'
import { getRandom } from '../../utils'

function Enemy() {
  const [damage, setDamage] = useState(0)

  return (
    <div className={styles.enemy_container}>
      <div
        className={styles.enemy_image}
        style={{backgroundImage: 'url(images/enemies/bat.jpg)'}}
        onClick={() => setDamage(getRandom(1, 5))}
      />

      <EnemyHealthBar damage={damage} />
    </div>
  )
}

export default Enemy