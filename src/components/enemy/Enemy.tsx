import { useRef, useState, MouseEvent, useEffect, useMemo } from 'react'
import styles from './Enemy.module.scss'
import EnemyHealthBar from './enemy-health-bar/EnemyHealthBar'
import Hit from '../hit/Hit'
import useActions from '../../hooks/useActions'
import useGetHits from '../../hooks/hit/useGetHits'
import { ANIMATION_DURATION, IMAGE_SIZE, INITIAL_OFFSET, MOD_AWARE_ANIMATION_DURATION, ROTATE_RATIO } from '../../constants/Enemy.constants'
import { IHitData } from '../../types/Hit.types'
import { getEnemyModification, getRandom } from '../../utils'
import useGetPlayer from '../../hooks/player/useGetPlayerDamage'
import useGetEnemy from '../../hooks/enemy/useGetEnemy'
import Shield from './enemy-modifications/Shield'
import useHitCondition from '../../hooks/enemy/useHitCondition'
import useNextEnemy from '../../hooks/enemy/useNextEnemy'
import useGetLevel from '../../hooks/level/useGetLevel'

function Enemy() {
  const enemy = useGetEnemy()

  const { damage } = useGetPlayer()
  const [rotate, setRotate] = useState('')
  const [clickCount, setClickCount] = useState(0)
  const [modAwareAnimation, setModAwareAnimation] = useState('')

  const enemyRef = useRef<HTMLDivElement>(null)
  const modificationElementRef = useRef<HTMLDivElement>(null)

  const { addHit, hitEnemy, setStartEnemy } = useActions()
  
  const hits = useGetHits()

  const { startHealth } = useGetLevel()

  useMemo(() => {
    setStartEnemy({ health: startHealth, modification: getEnemyModification(enemy) })
  }, [])

  const nextEnemy = useNextEnemy()

  const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
    const offset = enemyRef.current?.getBoundingClientRect() || INITIAL_OFFSET
    const x = e.clientX - offset.left
    const y = e.clientY - offset.top
    if(useHitCondition(enemy)) {
      setClickCount(prev => prev + 1)
      hitEnemy(damage)

      let rotateX = (IMAGE_SIZE / 2 - y) / ROTATE_RATIO
      let rotateY = (x - IMAGE_SIZE / 2) / ROTATE_RATIO

      setRotate(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`)
      setTimeout(() => {
        setRotate('')
      }, ANIMATION_DURATION)
    } else if(e.target !== modificationElementRef.current) {
      setModAwareAnimation('drop-shadow(0 0 10px red)')
      setTimeout(() => {
        setModAwareAnimation('')
      }, MOD_AWARE_ANIMATION_DURATION)
    }
    
    addHit({ id: Date.now(), x, y, variation: getRandom(0, 4) })
  }

  const showHits = () => {
    return hits.map((hit: IHitData) => <Hit key={hit.id} item={hit} />)
  }

  useEffect(() => {
    if(enemy.health <= 0) {
      setClickCount(0)
      nextEnemy()
    }
  }, [enemy.health])

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
          { enemy.modification && enemy.modification.type === 'shield' && !useHitCondition(enemy) &&
            <Shield modAwareElement={modificationElementRef} animation={modAwareAnimation} /> }
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