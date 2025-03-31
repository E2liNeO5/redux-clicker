import { LEVEL_SAVE_KEY } from "../../constants/Level.constants"
import { getSaves } from "../../utils"
import { useAppSelector } from "../typedHooks"

const useGetLevel = () => {
  const level = useAppSelector(state => state.levelReducer)
  const saves = getSaves(LEVEL_SAVE_KEY)

  return {
    currentLevel: level.currentLevel || saves.currentLevel,
    startHealth: level.startHealth || saves.startHealth,
    startDamageMin: level.startDamageMin || saves.startDamageMin,
    startDamageMax: level.startDamageMax || saves.startDamageMax,
    healthRatios: level.healthRatios || saves.healthRatios,
    damageRatios: level.damageRatios || saves.damageRatios
  }
}

export default useGetLevel