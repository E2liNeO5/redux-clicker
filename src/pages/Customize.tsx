import CurrentHit from "../components/customize/CurrentHit"
import TopInfo from "../components/interface/top-info/TopInfo"
import styles from '../components/customize/Customize.module.scss'
import { HIT_GLOWING, HIT_IMAGES } from "../constants/Hit.constants"
import HitItem from "../components/customize/HitItem"
import GlowingItem from "../components/customize/GlowingItem"

const Customize = () => {
  return (
    <>
      <TopInfo />
      <CurrentHit />
      <div className={styles.customize_container}>
        <h3>Вид удара</h3>
        <h3>Цвет свечения</h3>
        <div className={styles.buy_hit_container}>
          { HIT_IMAGES.map(image => <HitItem key={image.id} item={image} />) }
        </div>
        <div className={styles.glowing_hit_container}>
          { HIT_GLOWING.map(glowing => <GlowingItem key={glowing.id} item={glowing} />) }
        </div>
      </div>
    </>
  )
}

export default Customize