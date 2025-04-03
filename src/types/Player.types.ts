import { IRatio } from "./Level.types"

export interface IPlayer {
  health: number
  maxHealth: number
  damageMin: number
  damageMax: number
  healthUpCount: number
  damageUpCount: number
  healthCost: number
  damageCost: number
  score: number
  healthRatios: IRatio
  damageRatios: IRatio
  damageUpgradeCostRatios: IRatio
  healthUpgradeCostRatios: IRatio
}

export interface IPlayerDamageUpgrade extends Pick<IPlayer, 'damageMin' | 'damageMax' | 'damageCost'> {
  cost: number
}

export interface IPlayerHealthUpgrade extends Pick<IPlayer, 'maxHealth' | 'healthCost'> {
  cost: number
}