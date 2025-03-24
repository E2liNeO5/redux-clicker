import { IMAGES_COUNT, IMAGES_PATH } from "./constants/Enemy.constants"
import { INITIAL_SHIELD_HEALTH } from "./constants/Shield.constants"
import { IEnemy, IEnemyShield } from "./types/Enemy.types"

export function getRandom(min: number, max: number): number {
  return ~~(min + Math.random() * (max + 1 - min))
}

export const getEnemyImage = () => {
  return `${IMAGES_PATH}enemy${getRandom(1, IMAGES_COUNT)}.png`
}
export const getChanceSuccess = (chance: number) => {
  return getRandom(1, 100) <= chance ? true : false
}

const modifications: (IEnemyShield)[] = [
  {
    type: 'shield',
    shieldHealth: INITIAL_SHIELD_HEALTH,
    shieldMaxHealth: INITIAL_SHIELD_HEALTH
  }
]

export const getEnemyModification = (state: IEnemy) => {
  const mod = modifications[getRandom(0, modifications.length - 1)]
  switch(mod.type) {
    case 'shield':
      return {
        ...mod,
        shieldMaxHealth: state.shieldMaxHealth,
        shieldHealth: state.shieldMaxHealth
      }
  }
  return null
}