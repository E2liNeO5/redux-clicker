import { PLAYER_SAVE_KEY } from "../../constants/Player.constants"
import { getRandom, getSaves } from "../../utils"
import { useAppSelector } from "../typedHooks"

const useGetPlayer = () => {
  const player_state = useAppSelector(state => state.playerReducer)
  const saves = getSaves(PLAYER_SAVE_KEY)

  const damageMin = saves?.damageMin || player_state.damageMin
  const damageMax = saves?.damageMax || player_state.damageMax

  return {
    health: saves?.health || player_state.health,
    maxHealth: saves?.maxHealth || player_state.maxHealth,
    damage: getRandom(damageMin, damageMax),
    damageMin, damageMax,
    score: saves?.score || player_state.score,
    damageRatios: player_state.damageRatios,
    healthRatios: player_state.healthRatios,
    damageCost: saves?.damageCost || player_state.damageCost,
    healthCost: saves?.healthCost || player_state.healthCost,
    healthUpCount: saves?.healthUpCount || player_state.healthUpCount,
    damageUpCount: saves?.damageUpCount || player_state.damageUpCount,
    damageUpgradeCostRatios: saves?.damageUpgradeCostRatios || player_state.damageUpgradeCostRatios,
    healthUpgradeCostRatios: saves?.healthUpgradeCostRatios || player_state.healthUpgradeCostRatios
  }
}

export default useGetPlayer