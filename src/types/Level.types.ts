export interface ILevel {
  currentLevel?: number
  healthRatios?: IRatio
  damageRatios?: IRatio
  startHealth?: number
  startDamageMin?: number
  startDamageMax?: number
  scoreRatios?: IRatio
  startScore?: number
  enemyImages?: string[]
}

export interface IRatio {
  linear: number
  sqrt?: number
}