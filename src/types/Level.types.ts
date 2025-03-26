export interface ILevel {
  currentLevel: number
  healthRatios: IRatio
  startHealth: number
}

export interface IRatio {
  linear: number
  sqrt: number | null
}