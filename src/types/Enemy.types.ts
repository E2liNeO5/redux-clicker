import { RefObject } from "react";

export interface IEnemy {
  health: number
  maxHealth: number
  image: string
  healthUp: number
  statsUpRatio: number
  shieldMaxHealth: number
  modification?: null | IEnemyShield
}

export interface IEnemyShield {
  type: string
  shieldHealth: number
  shieldMaxHealth: number
}

export interface IModAwareAnimation {
  modAwareElement: RefObject<HTMLDivElement>
  animation: string
}

export interface IShieldProps extends IModAwareAnimation {
  enemy: IEnemy
}