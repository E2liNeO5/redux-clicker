import { useAppSelector } from "../typedHooks"

const useGetEnemy = () => {
  return useAppSelector(state => state.enemyReducer)
}

export default useGetEnemy