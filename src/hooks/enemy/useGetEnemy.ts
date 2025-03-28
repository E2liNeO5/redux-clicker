import { useAppSelector } from "../typedHooks"

const useGetEnemy = () => {
  const enemy =  useAppSelector(state => state.enemyReducer)

  return { ...enemy }
}

export default useGetEnemy