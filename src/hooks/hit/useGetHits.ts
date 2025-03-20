import { IHitData } from "../../types/Hit.types"
import { useAppSelector } from "../typedHooks"

const useGetHits = (): IHitData[] => {
  return useAppSelector(state => state.hitReducer)
}

export default useGetHits