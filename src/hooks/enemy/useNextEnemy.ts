import { ENEMY_IMAGES } from "../../constants/Enemy.constants"
import { SHIELD_HEALTH_RATIO } from "../../constants/Shield.constants"
import { EnemyProgressPayload } from "../../types/Enemy.types"
import { getEnemyModification, getRandom } from "../../utils"
import useGetLevel from "../level/useGetLevel"
import useActions from "../useActions"
import useGetEnemy from "./useGetEnemy"

const useNextEnemy = () => {
  const { enemyProgress } = useActions()
  
  const { healthRatios } = useGetLevel()
  const enemy = useGetEnemy()

  const getEnemyImage = () => {
    return ENEMY_IMAGES[getRandom(0, ENEMY_IMAGES.length - 1)]
  }

  const nextEnemy = () => {
    const health = Math.ceil(enemy.maxHealth + healthRatios.linear * enemy.count + (healthRatios.sqrt || 1) * enemy.count * (enemy.count - 1) / 2)
    const payload: EnemyProgressPayload = {
      image: getEnemyImage(),
      health: health,
      modification: getEnemyModification(enemy),
      shieldMaxHealth: Math.ceil(health / SHIELD_HEALTH_RATIO)
    }
    enemyProgress(payload)
  }

  return nextEnemy
}

export default useNextEnemy