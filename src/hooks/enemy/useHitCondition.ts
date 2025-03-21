import { IEnemy } from "../../types/Enemy.types"

const useHitCondition = (enemy: IEnemy) => {
  const mod = enemy.modification
  if(!mod)
    return true

  switch(mod.type) {
    case 'shield':
      return mod.shieldHealth <= 0
    default:
      return true
  }
}

export default useHitCondition