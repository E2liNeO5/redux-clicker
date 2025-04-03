import { ENEMY_MODIFY_CHANCE, MODIFICATIONS } from "./constants/Enemy.constants"
import { SHIELD_HEALTH_RATIO } from "./constants/Shield.constants"
import { IEnemy } from "./types/Enemy.types"
import { IRatio } from "./types/Level.types"

export function getRandom(min: number, max: number): number {
  return ~~(min + Math.random() * (max + 1 - min))
}

export const getChanceSuccess = (chance: number) => {
  return getRandom(1, 100) <= chance ? true : false
}

export const getEnemyModification = (state: IEnemy) => {
  if(getChanceSuccess(ENEMY_MODIFY_CHANCE)) {
    const mod = getRandomFromArray(MODIFICATIONS)
    switch(mod.type) {
      case 'shield':
        const shieldHealth = Math.ceil(state.maxHealth / SHIELD_HEALTH_RATIO)
        return {
          ...mod,
          shieldMaxHealth: shieldHealth,
          shieldHealth: shieldHealth
        }
    }
  }
  return null
}

export const setSaves = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data))
}

export const getSaves = (key: string) => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : data
}

export const sqrtProgress = (value: number, ratios: IRatio, count: number) => {
  return ~~(value + ratios.linear * count + (ratios.sqrt || 1) * count * (count - 1) / 2)
}

export const getRandomFromArray = (array: any[]): any => {
  return array[getRandom(0, array.length - 1)]
}