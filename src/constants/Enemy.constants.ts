import { IEnemyShield } from "../types/Enemy.types"

export const IMAGE_SIZE = 512
export const INITIAL_OFFSET = { left: 0, top: 0 }
export const ANIMATION_DURATION = 250
export const ROTATE_RATIO = 30
export const MOD_AWARE_ANIMATION_DURATION = 500

export const ENEMY_INITIAL_HEALTH = 100
export const ENEMY_MODIFY_CHANCE = 25
export const INITIAL_ENEMY_LINEAR_RATIO = 4

export const COUNT_TO_NEXT_LEVEL = 4

export const MODIFICATIONS: (IEnemyShield)[] = [
  {
    type: 'shield',
    shieldHealth: 0,
    shieldMaxHealth: 0
  }
]

export const ENEMY_IMAGES = [
  '/images/enemies/enemy1.png',
  '/images/enemies/enemy2.png'
]