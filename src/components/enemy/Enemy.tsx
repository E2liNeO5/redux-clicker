import { useRef, useState, MouseEvent } from 'react'
import styles from './Enemy.module.scss'
import EnemyHealthBar from './enemy-health-bar/EnemyHealthBar'
import Hit from '../hit/Hit'
import useActions from '../../hooks/useActions'
import useGetHits from '../../hooks/hit/useGetHits'
import { ANIMATION_DURATION, IMAGE_SIZE, INITIAL_OFFSET, ROTATE_RATIO } from '../../constants/Enemy.constants'
import { IHitData } from '../../types/Hit.types'
import { getRandom } from '../../utils'
import EnemyDefault from './enemy-types/EnemyDefault'
import useGetPlayer from '../../hooks/player/useGetPlayerDamage'

function Enemy() {
  const { damage } = useGetPlayer()
  const [rotate, setRotate] = useState('')
  const [clickCount, setClickCount] = useState(0)

  const enemyRef = useRef<HTMLDivElement>(null)

  const { addHit } = useActions()
  const hits = useGetHits()

  const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
    setClickCount(prev => prev + 1)
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

  const showHits = () => {
    return  hits.map((hit: IHitData) => <Hit key={hit.id} item={hit} />)
  }

  return (
    <div className={styles.enemy_container}>
      <div onClick={clickHandler}>
        <EnemyDefault
          enemyRef={enemyRef}
          rotate={rotate}
        >
          { showHits() }
        </EnemyDefault>
      </div>

      <EnemyHealthBar damage={damage} clickCount={clickCount} />
    </div>
  )
}

export default Enemy