import { IMAGE_SIZE } from '../../../constants/Enemy.constants'
import { IEnemy } from '../../../types/Enemy.types'
import styles from '../Enemy.module.scss'

const EnemyDefault = ({ enemyRef, children, rotate }: IEnemy) => {
  return (
    <div
      ref={enemyRef}
      className={styles.enemy_image}
      style={{
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        backgroundImage: 'url(images/enemies/enemy2.png)',
        transform: `perspective(800px) ${rotate}`
      }}>
        { children }
      </div>
  )
}

export default EnemyDefault