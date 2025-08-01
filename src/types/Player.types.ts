import { IRatio } from "./Level.types"

export interface IPlayer {
  health: number
  maxHealth: number
  damageMin: number
  damageMax: number
  healing: number
  healthUpCount: number
  damageUpCount: number
  healingUpCount: number
  healthCost: number
  damageCost: number
  healingCost: number
  score: number
  healthRatios: IRatio
  damageRatios: IRatio
  healingRatios: IRatio
  upgradeCostRatios: IRatio
  healCount: number
  hit: IPlayerHit
  boughtHitImages: number[]
  boughtHitGlowing: number[]
}

export interface IPlayerHit {
  variations: number
  frames: number
  url: string
  id: number
  glowing: string
}

export interface IPlayerDamageUpgrade extends Pick<IPlayer, 'damageMin' | 'damageMax' | 'damageCost'> {
  cost: number
}

export interface IPlayerHealthUpgrade extends Pick<IPlayer, 'maxHealth' | 'healthCost'> {
  cost: number
}

export interface IPlayerHealingUpgrade extends Pick<IPlayer, 'healing' | 'healingCost'> {
  cost: number
}

export interface IHitImageBuyPayload extends Pick<IPlayerHit, 'id' | 'url' | 'frames' | 'variations'> {}

export interface IHitGlowingBuyPayload extends Pick<IPlayerHit, 'id' | 'glowing'> {}