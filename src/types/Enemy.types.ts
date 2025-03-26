import { RefObject } from "react";

export interface IEnemy {
  health: number
  maxHealth: number
  image: string
  shieldMaxHealth: number
  modification?: null | IEnemyShield
  count: number
}

export interface IEnemyShield {
  type: string
  shieldHealth: number
  shieldMaxHealth: number
}

export interface IShieldProps {
  modAwareElement: RefObject<HTMLDivElement>
  animation: string
}

export type EnemyProgressPayload = Pick<IEnemy, 'health' | 'modification' | 'shieldMaxHealth' | 'image'>

export type EnemyStartData = Pick<IEnemy, 'health' | 'modification'>