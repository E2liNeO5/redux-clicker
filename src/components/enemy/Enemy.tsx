import { useRef, useState } from 'react'
import styles from './Enemy.module.scss'
import EnemyHealthBar from './enemy-health-bar/EnemyHealthBar'
import { getRandom } from '../../utils'
import Hit from '../hit/Hit'
import useActions from '../../hooks/useActions'
import { IHitData } from '../hit/Hit.constants'
import useGetHits from '../../hooks/hit/useGetHits'

function Enemy() {
  const [damage, setDamage] = useState(0)
  const enemyRef = useRef<HTMLDivElement>(null)

  const { addHit } = useActions()
  const hits = useGetHits()

  const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setDamage(getRandom(1, 5))
    const enemy_offset = enemyRef.current?.getBoundingClientRect() || { left: 0, top: 0 }
    const x = e.clientX - enemy_offset.left
    const y = e.clientY - enemy_offset.top
    addHit({ id: Date.now(), x, y, variation: getRandom(0, 4) })
  }

  return (
    <div className={styles.enemy_container}>
      <div
        ref={enemyRef}
        className={styles.enemy_image}
        style={{
          backgroundImage: 'url(images/enemies/dragon.jpg)',
          backgroundSize: 'cover'
        }}
        onClick={clickHandler}
      >{ hits.map((hit: IHitData) => <Hit key={hit.id} item={hit} />) }</div>

      <EnemyHealthBar damage={damage} />
    </div>
  )
}

export default Enemy