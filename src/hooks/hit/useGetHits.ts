import { IHitData } from "../../components/hit/Hit.types"
import { useAppSelector } from "../typedHooks"

const useGetHits = (): IHitData[] => {
  return useAppSelector(state => state.hitState)
}

export default useGetHits