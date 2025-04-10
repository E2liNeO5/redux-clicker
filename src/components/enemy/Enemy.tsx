import { useRef, useState, MouseEvent, useEffect, useCallback } from 'react'
import styles from './Enemy.module.scss'
import EnemyHealthBar from './enemy-health-bar/EnemyHealthBar'
import Hit from '../hit/Hit'
import useActions from '../../hooks/useActions'
import useGetHits from '../../hooks/hit/useGetHits'
import { IMAGE_SIZE } from '../../constants/Enemy.constants'
import { IHitData } from '../../types/Hit.types'
import { getEnemyModification, getRandom, getRandomFromArray } from '../../utils'
import useGetPlayer from '../../hooks/player/useGetPlayer'
import useGetEnemy from '../../hooks/enemy/useGetEnemy'
import Shield from './enemy-modifications/Shield'
import useNextEnemy from '../../hooks/enemy/useNextEnemy'
import useGetLevel from '../../hooks/level/useGetLevel'
import useEnemyClick from '../../hooks/enemy/useEnemyClick'
import SpikeShield from './enemy-modifications/SpikeShield'
import Spikes from './enemy-modifications/Spikes'

function Enemy() {
  const [rotate, setRotate] = useState('')
  const [clickCount, setClickCount] = useState(0)
  const [modAwareAnimation, setModAwareAnimation] = useState('')
  const [cursorCoords, setCursorCoords] = useState({
    x: getRandom(0, IMAGE_SIZE), y: getRandom(0, IMAGE_SIZE)
  })

  const enemyRef = useRef<HTMLDivElement>(null)
  const modificationElementRef = useRef<HTMLDivElement>(null)

  const enemy = useGetEnemy()
  const { damage } = useGetPlayer()
  const { setStartEnemy, playerHit } = useActions()
  const hits = useGetHits()
  const { startHealth, startDamageMin, startDamageMax, startScore, enemyImages } = useGetLevel()
  const nextEnemy = useNextEnemy()
  const enemyClick = useEnemyClick()

  useEffect(() => {
    setStartEnemy({
      image: getRandomFromArray(enemyImages),
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
    const { spikeShieldMove, x, y } = enemyClick({
      enemyRef,
      modificationElementRef,
      e,
      setClickCount,
      setRotate,
      setModAwareAnimation
    })
    if(spikeShieldMove) {
      setCursorCoords({ x, y })
    }
  }

  const spikesGenerate = useCallback(() => {
    const spikes = []
    const count = enemy.modification && 'count' in enemy.modification ? enemy.modification.count : 0
    const damageMin = enemy.modification && 'damageMin' in enemy.modification ? enemy.modification.damageMin : 0
    const damageMax = enemy.modification && 'damageMax' in enemy.modification ? enemy.modification.damageMax : 0
    for(let i = 0; i < Number(count); i ++) {
      spikes.push({
        id: `spikes${i}`,
        damage: getRandom(damageMin, damageMax)
      })
    }
    return spikes.map(spike => <Spikes key={spike.id} damage={spike.damage} />)
  }, [enemy.count])

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
          { enemy.modification && enemy.modification.type === 'spikeShield' &&
            <SpikeShield modAwareElement={modificationElementRef} x={cursorCoords.x} y={cursorCoords.y} /> }
          { enemy.modification && enemy.modification.type === 'spikes' &&
            spikesGenerate() }
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