import { LEVEL_SAVE_KEY } from "../../constants/Level.constants"
import { getSaves } from "../../utils"
import { useAppSelector } from "../typedHooks"

const useGetLevel = () => {
  const level = useAppSelector(state => state.levelReducer)
  const saves = getSaves(LEVEL_SAVE_KEY)

  return {
    currentLevel: saves?.currentLevel || level.currentLevel,
    startHealth: saves?.startHealth || level.startHealth,
    startDamageMin: saves?.startDamageMin || level.startDamageMin,
    startDamageMax: saves?.startDamageMax || level.startDamageMax,
    healthRatios: saves?.healthRatios || level.healthRatios,
    damageRatios: saves?.damageRatios || level.damageRatios,
    scoreRatios: saves?.scoreRatios || level.scoreRatios,
    startScore: saves?.startScore || level.startScore
  }
}

export default useGetLevel