import { RefObject } from "react";

export interface IEnemy {
  health: number
  maxHealth: number
  damageMin: number
  damageMax: number
  attack_delay: number
  image: string
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

export type EnemyProgressPayload = Pick<IEnemy, 'health' | 'modification' | 'image' | 'damageMin' | 'damageMax'>

export type EnemyStartData = Pick<IEnemy, 'health' | 'modification' | 'damageMin' | 'damageMax'>