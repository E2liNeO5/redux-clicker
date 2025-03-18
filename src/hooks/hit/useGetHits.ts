import { IHitData } from "../../components/hit/Hit.constants"
import { useAppSelector } from "../typedHooks"

const useGetHits = (): IHitData[] => {
  return useAppSelector(state => state.hitState)
}

export default useGetHits