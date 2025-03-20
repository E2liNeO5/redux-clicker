import { useAppSelector } from "../typedHooks"

const useGetPlayer = () => {
  return useAppSelector(state => state.playerReducer)
}

export default useGetPlayer