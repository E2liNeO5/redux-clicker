import { useRef, useState, MouseEvent } from 'react'
import styles from './Enemy.module.scss'
import EnemyHealthBar from './enemy-health-bar/EnemyHealthBar'
import Hit from '../hit/Hit'
import useActions from '../../hooks/useActions'
import useGetHits from '../../hooks/hit/useGetHits'
import { ANIMATION_DURATION, IMAGE_SIZE, INITIAL_OFFSET, MOD_AWARE_ANIMATION_DURATION, ROTATE_RATIO } from '../../constants/Enemy.constants'
import { IHitData } from '../../types/Hit.types'
import { getRandom } from '../../utils'
import useGetPlayer from '../../hooks/player/useGetPlayerDamage'
import useGetEnemy from '../../hooks/enemy/useGetEnemy'
import Shield from './enemy-modifications/Shield'
import useHitCondition from '../../hooks/enemy/useHitCondition'

function Enemy() {
  const enemy = useGetEnemy()

  const { damage } = useGetPlayer()
  const [rotate, setRotate] = useState('')
  const [clickCount, setClickCount] = useState(0)
  const [modAwareAnimation, setModAwareAnimation] = useState('')

  const enemyRef = useRef<HTMLDivElement>(null)

  const { addHit, hitEnemy } = useActions()
  const hits = useGetHits()

  const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
    if(useHitCondition(enemy)) {
      const offset = enemyRef.current?.getBoundingClientRect() || INITIAL_OFFSET
      const x = e.clientX - offset.left
      const y = e.clientY - offset.top

      setClickCount(prev => prev + 1)
      addHit({ id: Date.now(), x, y, variation: getRandom(0, 4) })
      hitEnemy(damage)

      let rotateX = (IMAGE_SIZE / 2 - y) / ROTATE_RATIO
      let rotateY = (x - IMAGE_SIZE / 2) / ROTATE_RATIO

      setRotate(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`)
      setTimeout(() => {
        setRotate('')
      }, ANIMATION_DURATION)
    } else {
      setModAwareAnimation('drop-shadow(0 0 10px red)')
      setTimeout(() => {
        setModAwareAnimation('')
      }, MOD_AWARE_ANIMATION_DURATION)
    }
  }

  const showHits = () => {
    return hits.map((hit: IHitData) => <Hit key={hit.id} item={hit} />)
  }

  return (
    <div className={styles.enemy_container}>
      <div
          className={styles.enemy_wrapper}
          ref={enemyRef}
          onClick={clickHandler}>
        <div
          className={styles.enemy_image}
          style={{
            width: IMAGE_SIZE,
            height: IMAGE_SIZE,
            backgroundImage: `url(${enemy.image})`,
            transform: `perspective(800px) ${rotate}`
        }}>
        </div>
          { enemy.modification && enemy.modification.type === 'shield' && <Shield animation={modAwareAnimation} enemy={enemy} /> }
          { showHits() }
      </div>

      <EnemyHealthBar
        damage={damage}
        clickCount={clickCount}
        health={enemy.health}
        maxHealth={enemy.maxHealth}
      />
    </div>
  )
}

export default Enemy