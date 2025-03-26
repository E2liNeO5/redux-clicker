import { useAppSelector } from "../typedHooks"

const useGetLevel = () => {
  return useAppSelector(state => state.levelReducer)
}

export default useGetLevel