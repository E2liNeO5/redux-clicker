import { IEnemyShield, IEnemySpikeShield, IEnemySpikes } from "../types/Enemy.types"
import { ENEMY_INITIAL_HEALTH } from "./Enemy.constants"

export const MODIFY_CHANCE = 25
export const MOD_AWARE_ANIMATION_DURATION = 500

export const MODIFICATIONS: (IEnemyShield | IEnemySpikeShield | IEnemySpikes)[] = [
  {
    type: 'shield',
    shieldHealth: 0,
    shieldMaxHealth: 0
  },
  {
    type: 'spikeShield',
    damageMin: 0,
    damageMax: 0
  },
  {
    type: 'spikes',
    damageMin: 0,
    damageMax: 0,
    count: 0
  }
]

export const SHIELD_SIZE = 128
export const SHIELD_REMOVE_ANIMATION_DURATION = 500
export const ROTATE_VALUES = [-20, -15, -10, 10, 15, 20]
export const SHIELD_MOVE_DELAY = 1000
export const SHIELD_MOVE_DURATION = 500
export const SHIELD_TRANSFORM_DURATION = 200

export const SHIELD_HEALTH_RATIO = 3
export const INITIAL_SHIELD_HEALTH = ENEMY_INITIAL_HEALTH / SHIELD_HEALTH_RATIO

export const SPIKE_SHIELD_MOVE_DURATION = 250
export const SPIKE_DAMAGE_RATIO = 2
export const SPIKE_SHIELD_MOVE_CHANCE = 50

export const SPIKES_COUNT_MIN = 4
export const SPIKES_COUNT_MAX = 8
export const SPIKES_SIZE = 64
export const SPIKES_MOVE_DELAY = [250, 500, 750, 1000]
export const SPIKES_MOVE_DURATION = 500