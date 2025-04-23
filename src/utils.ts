import { PLAYER_SAVE_KEY } from "./constants/Player.constants"
import { MODIFICATIONS, MODIFY_CHANCE, SHIELD_HEALTH_RATIO, SPIKES_COUNT_MAX, SPIKES_COUNT_MIN, SPIKE_DAMAGE_RATIO } from "./constants/Modification.constants"
import { IEnemy } from "./types/Enemy.types"
import { IRatio } from "./types/Level.types"
import { IPlayer } from "./types/Player.types"

export function getRandom(min: number, max: number): number {
  return ~~(min + Math.random() * (max + 1 - min))
}

export const getChanceSuccess = (chance: number) => {
  return getRandom(1, 100) <= chance ? true : false
}

export const getEnemyModification = (state: IEnemy) => {
  if(getChanceSuccess(MODIFY_CHANCE)) {
    const mod = getRandomFromArray(MODIFICATIONS)
    let damageMin = 0
    let damageMax = 0
    switch(mod.type) {
      case 'shield':
        const shieldHealth = ~~(state.maxHealth / SHIELD_HEALTH_RATIO)
        return {
          ...mod,
          shieldMaxHealth: shieldHealth,
          shieldHealth: shieldHealth
        }
      case 'spikeShield':
        damageMin = ~~(state.damageMin / SPIKE_DAMAGE_RATIO)
        damageMax = ~~(state.damageMax / SPIKE_DAMAGE_RATIO)
        return {
          ...mod,
          damageMin, damageMax
        }
      case 'spikes':
        damageMin = ~~(state.damageMin / SPIKE_DAMAGE_RATIO)
        damageMax = ~~(state.damageMax / SPIKE_DAMAGE_RATIO)
        const count = getRandom(SPIKES_COUNT_MIN, SPIKES_COUNT_MAX)
        return {
          ...mod,
          damageMin, damageMax, count
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

export const savePlayer = (state: IPlayer) => {
  const player = JSON.parse(JSON.stringify(state))
  delete player.healthRatios
  delete player.damageRatios
  delete player.healingRatios
  delete player.damageUpgradeCostRatios
  delete player.healthUpgradeCostRatios
  delete player.healingUpgradeCostRatios
  setSaves(PLAYER_SAVE_KEY, player)
}

export const getShortValue = (value: number): string => {
  const length = String(value).length
  let short: string

  if(length >= 4 && length <= 6) {
    short = (value / 1000).toFixed(1)

    return `${short.includes('.0') ? short.slice(0, -2) : short}тыс`
  } else if(length >= 7 && length <= 9) {
    short = (value / 1000000).toFixed(1)

    return `${short.includes('.0') ? short.slice(0, -2) : short}млн`
  } else if(length >= 10) {
    short = (value / 1000000000).toFixed(1)

    return `${short.includes('.0') ? short.slice(0, -2) : short}млрд`
  }
  return String(value)
}