export interface ILevel {
  currentLevel?: number
  healthRatios?: IRatio
  damageRatios?: IRatio
  startHealth?: number
  startDamageMin?: number
  startDamageMax?: number
}

export interface IRatio {
  linear: number
  sqrt?: number
}