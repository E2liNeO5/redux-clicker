import { RefObject } from "react";

export interface IEnemy {
  health: number
  maxHealth: number
  damageMin: number
  damageMax: number
  attack_delay: number
  image: string
  modification?: null | IEnemyShield | IEnemySpikeShield
  count: number
  score: number
}

export interface IEnemyShield {
  type: string
  shieldHealth: number
  shieldMaxHealth: number
}

export interface IEnemySpikeShield {
  type: string
  damageMin: number
  damageMax: number
}

export interface IEnemySpikes extends IEnemySpikeShield {
  count: number
}

export interface IShieldProps {
  modAwareElement: RefObject<HTMLDivElement>
  animation: string
}

export interface ISpikeShieldProps extends Pick<IShieldProps, 'modAwareElement'> {
  x: number
  y: number
}

export interface ISpikesProps {
  damage: number
}

export type EnemyProgressPayload = Pick<IEnemy, 'health' | 'modification' | 'image' | 'damageMin' | 'damageMax' | 'score'>

export type EnemyStartData = Pick<IEnemy, 'health' | 'modification' | 'damageMin' | 'damageMax' | 'score' | 'image'>