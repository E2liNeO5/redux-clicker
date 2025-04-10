import { EnemyProgressPayload } from "../../types/Enemy.types"
import { getEnemyModification, getRandomFromArray, sqrtProgress } from "../../utils"
import useGetLevel from "../level/useGetLevel"
import useActions from "../useActions"
import useGetEnemy from "./useGetEnemy"

const useNextEnemy = () => {
  const { enemyProgress, setScore } = useActions()
  
  const { healthRatios, damageRatios, startHealth, startDamageMin, startDamageMax, startScore, scoreRatios, enemyImages } = useGetLevel()
  const enemy = useGetEnemy()

  const nextEnemy = () => {
    setScore(enemy.score)

    const health =  sqrtProgress(startHealth, healthRatios, enemy.count)
    
    const damageMin = sqrtProgress(startDamageMin, damageRatios, enemy.count)
    const damageMax = sqrtProgress(startDamageMax, damageRatios, enemy.count)
    const score = sqrtProgress(startScore, scoreRatios, enemy.count)

    const payload: EnemyProgressPayload = {
      image: getRandomFromArray(enemyImages),
      health, damageMin, damageMax, score,
      modification: getEnemyModification({ ...enemy, maxHealth: health })
    }
    enemyProgress(payload)
  }

  return nextEnemy
}

export default useNextEnemy