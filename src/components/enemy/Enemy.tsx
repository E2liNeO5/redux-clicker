import { useRef, useState, MouseEvent } from 'react'
import styles from './Enemy.module.scss'
import EnemyHealthBar from './enemy-health-bar/EnemyHealthBar'
import Hit from '../hit/Hit'
import useActions from '../../hooks/useActions'
import useGetHits from '../../hooks/hit/useGetHits'
import { ANIMATION_DURATION, IMAGE_SIZE, INITIAL_OFFSET, ROTATE_RATIO } from './Enemy.constants'
import { IHitData } from '../hit/Hit.types'
import { getRandom } from '../../utils'

function Enemy() {
  const [damage, setDamage] = useState(0)
  const [rotate, setRotate] = useState('')

  const enemyRef = useRef<HTMLDivElement>(null)

  const { addHit } = useActions()
  const hits = useGetHits()

  const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
    setDamage(getRandom(1, 5))
    const offset = enemyRef.current?.getBoundingClientRect() || INITIAL_OFFSET
    const x = e.clientX - offset.left
    const y = e.clientY - offset.top
    addHit({ id: Date.now(), x, y, variation: getRandom(0, 4) })

    let rotateX = (IMAGE_SIZE / 2 - y) / ROTATE_RATIO
    let rotateY = (x - IMAGE_SIZE / 2) / ROTATE_RATIO

    setRotate(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`)
    setTimeout(() => {
      setRotate('')
    }, ANIMATION_DURATION)
  }

  return (
    <div className={styles.enemy_container}>
      <div
        ref={enemyRef}
        className={styles.enemy_image}
        style={{
          width: IMAGE_SIZE,
          height: IMAGE_SIZE,
          backgroundImage: 'url(images/enemies/enemy2.png)',
          transform: `perspective(800px) ${rotate}`
        }}
        onClick={clickHandler}
      >{ hits.map((hit: IHitData) => <Hit key={hit.id} item={hit} />) }</div>

      <EnemyHealthBar damage={damage} />
    </div>
  )
}

export default Enemy