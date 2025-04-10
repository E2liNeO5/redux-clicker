import { INITIAL_DAMAGE_COST, INITIAL_HEALING_COST, INITIAL_HEALTH_COST, PLAYER_INITIAL_DAMAGE_MAX, PLAYER_INITIAL_DAMAGE_MIN, PLAYER_INITIAL_HEALING, PLAYER_INITIAL_HEALTH } from "../../constants/Player.constants"
import { sqrtProgress } from "../../utils"
import useActions from "../useActions"
import useGetPlayer from "./useGetPlayer"

const usePlayerUpgrade = () => {
  const { buyDamageUpgrade, buyHealthUpgrade, buyHeal, buyHealingUpgrade } = useActions()
  const { damageRatios, damageUpCount, upgradeCostRatios, healthRatios, healthUpCount,
    healingRatios, healingUpCount } = useGetPlayer()

  const upgrade = (stat_name: string, cost: number) => {
    switch(stat_name) {
      case 'damage': {
        const damageMin = sqrtProgress(PLAYER_INITIAL_DAMAGE_MIN, damageRatios, damageUpCount)
        const damageMax = sqrtProgress(PLAYER_INITIAL_DAMAGE_MAX, damageRatios, damageUpCount)
        const damageCost = sqrtProgress(INITIAL_DAMAGE_COST, upgradeCostRatios, damageUpCount)
  
        buyDamageUpgrade({
          damageMin, damageMax, damageCost, cost
        })
        break
      }
      case 'health': {
        const health = sqrtProgress(PLAYER_INITIAL_HEALTH, healthRatios, healthUpCount)
        const healthCost = sqrtProgress(INITIAL_HEALTH_COST, upgradeCostRatios, healthUpCount)
        buyHealthUpgrade({
          healthCost, maxHealth: health, cost
        })
        break
      }
      case 'healing': {
        const healing = sqrtProgress(PLAYER_INITIAL_HEALING, healingRatios, healingUpCount)
        const healingCost = sqrtProgress(INITIAL_HEALING_COST, upgradeCostRatios, healingUpCount)
        buyHealingUpgrade({
          healingCost, healing, cost
        })
        break
      }
      case 'healPotion': {
        buyHeal(cost)
        break
      }
    }
  }

  return upgrade
}

export default usePlayerUpgrade