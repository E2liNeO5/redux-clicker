import { useCallback } from 'react'
import { HIT_GLOWING_BUY_COST } from '../../constants/Hit.constants'
import useGetPlayer from '../../hooks/player/useGetPlayer'
import useActions from '../../hooks/useActions'
import { IHitGlowingComponent } from '../../types/Hit.types'
import styles from './Customize.module.scss'
import { LockKeyhole } from 'lucide-react'

interface Props {
  item: IHitGlowingComponent
}

const GlowingItem = ({ item }: Props) => {
  const { boughtHitGlowing, score, hit } = useGetPlayer()
  const { buyHitGlowing, setCurrentHit } = useActions()

  const clickHandler = useCallback(() => {
    if(!boughtHitGlowing.includes(item.id) && score >= HIT_GLOWING_BUY_COST)
    buyHitGlowing({ id: item.id, glowing: item.glowing })
    else if(boughtHitGlowing.includes(item.id))
      setCurrentHit(item)
  }, [score])

  return (
    <div
      title={`Цена: ${HIT_GLOWING_BUY_COST}`}
      className={`${styles.glowing_item} ${boughtHitGlowing.includes(item.id) ? hit.glowing === item.glowing ? styles.selected : styles.bought : ''}`}
      style={{
        backgroundColor: item.glowing,
        cursor: `${!boughtHitGlowing.includes(item.id) && score < HIT_GLOWING_BUY_COST ? 'no-drop' : 'pointer'}`
      }}
      onClick={clickHandler}
    >
      { !boughtHitGlowing.includes(item.id) && <LockKeyhole className={styles.lock} size={16} /> }
    </div>
  )
}

export default GlowingItem