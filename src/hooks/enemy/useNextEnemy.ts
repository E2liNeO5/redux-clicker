import { ENEMY_IMAGES } from "../../constants/Enemy.constants"
import { EnemyProgressPayload } from "../../types/Enemy.types"
import { getEnemyModification, getRandom } from "../../utils"
import useGetLevel from "../level/useGetLevel"
import useActions from "../useActions"
import useGetEnemy from "./useGetEnemy"

const useNextEnemy = () => {
  const { enemyProgress } = useActions()
  
  const { healthRatios, damageRatios } = useGetLevel()
  const enemy = useGetEnemy()

  const getEnemyImage = () => {
    return ENEMY_IMAGES[getRandom(0, ENEMY_IMAGES.length - 1)]
  }

  const nextEnemy = () => {
    const health = Math.ceil(enemy.maxHealth + healthRatios.linear * enemy.count + (healthRatios.sqrt || 1) * enemy.count * (enemy.count - 1) / 2)
    
    const damageMin = ~~(enemy.damageMin + damageRatios.linear * enemy.count + (damageRatios.sqrt || 1) * enemy.count * (enemy.count - 1) / 2)
    const damageMax = ~~(enemy.damageMax + damageRatios.linear * enemy.count + (damageRatios.sqrt || 1) * enemy.count * (enemy.count - 1) / 2)

    const payload: EnemyProgressPayload = {
      image: getEnemyImage(),
      health, damageMin, damageMax,
      modification: getEnemyModification({ ...enemy, maxHealth: health })
    }
    enemyProgress(payload)
  }

  return nextEnemy
}

export default useNextEnemy