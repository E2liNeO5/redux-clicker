import { ENEMY_MODIFY_CHANCE, MODIFICATIONS } from "./constants/Enemy.constants"
import { IEnemy } from "./types/Enemy.types"

export function getRandom(min: number, max: number): number {
  return ~~(min + Math.random() * (max + 1 - min))
}

export const getChanceSuccess = (chance: number) => {
  return getRandom(1, 100) <= chance ? true : false
}

export const getEnemyModification = (state: IEnemy) => {
  if(getChanceSuccess(ENEMY_MODIFY_CHANCE)) {
    const mod = MODIFICATIONS[getRandom(0, MODIFICATIONS.length - 1)]
    switch(mod.type) {
      case 'shield':
        return {
          ...mod,
          shieldMaxHealth: state.shieldMaxHealth,
          shieldHealth: state.shieldMaxHealth
        }
    }
  }
  return null
}