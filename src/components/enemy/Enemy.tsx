import { useRef, useState, MouseEvent, useEffect } from 'react'
import styles from './Enemy.module.scss'
import EnemyHealthBar from './enemy-health-bar/EnemyHealthBar'
import Hit from '../hit/Hit'
import useActions from '../../hooks/useActions'
import useGetHits from '../../hooks/hit/useGetHits'
import { IMAGE_SIZE } from '../../constants/Enemy.constants'
import { IHitData } from '../../types/Hit.types'
import { getEnemyModification, getRandom } from '../../utils'
import useGetPlayer from '../../hooks/player/useGetPlayer'
import useGetEnemy from '../../hooks/enemy/useGetEnemy'
import Shield from './enemy-modifications/Shield'
import useNextEnemy from '../../hooks/enemy/useNextEnemy'
import useGetLevel from '../../hooks/level/useGetLevel'
import useEnemyClick from '../../hooks/enemy/useEnemyClick'

function Enemy() {
  const [rotate, setRotate] = useState('')
  const [clickCount, setClickCount] = useState(0)
  const [modAwareAnimation, setModAwareAnimation] = useState('')

  const enemyRef = useRef<HTMLDivElement>(null)
  const modificationElementRef = useRef<HTMLDivElement>(null)

  const enemy = useGetEnemy()
  const { damage } = useGetPlayer()
  const { setStartEnemy, playerHit } = useActions()
  const hits = useGetHits()
  const { startHealth, startDamageMin, startDamageMax, startScore } = useGetLevel()
  const nextEnemy = useNextEnemy()
  const enemyClick = useEnemyClick()

  useEffect(() => {
    setStartEnemy({
      health: startHealth,
      modification: getEnemyModification(enemy),
      damageMin: startDamageMin,
      damageMax: startDamageMax,
      score: startScore
    })
  }, [])

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      playerHit(getRandom(enemy.damageMin, enemy.damageMax))
    }, enemy.attack_delay)

    return () => clearInterval(interval)
  }, [enemy.count])
  
  useEffect(() => {
    if(enemy.health <= 0) {
      setClickCount(0)
      nextEnemy()
    }
  }, [enemy.health])

  const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
    enemyClick({
      enemyRef,
      modificationElementRef,
      e,
      setClickCount,
      setRotate,
      setModAwareAnimation
    })
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
          { enemy.modification && enemy.modification.type === 'shield' &&
            <Shield modAwareElement={modificationElementRef} animation={modAwareAnimation} /> }
          { hits.map((hit: IHitData) => <Hit key={hit.id} item={hit} />) }
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