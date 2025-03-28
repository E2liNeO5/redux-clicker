import { getRandom } from "../../utils"
import { useAppSelector } from "../typedHooks"

const useGetPlayer = () => {
  const player = useAppSelector(state => state.playerReducer)

  return { ...player, damage: getRandom(player.damageMin, player.damageMax) }
}

export default useGetPlayer