import { ReactNode, RefObject } from "react";

export interface IEnemy {
  health: number
  maxHealth: number
  image: string
  modification?: null | IEnemyShield
}

export interface IEnemyProps {
  enemyRef: RefObject<HTMLDivElement>
  children: ReactNode
  rotate: string
  image: string
}

export interface IEnemyShield {
  type: 'shield'
  shieldHealth: number
  shieldMaxHealth: number
}

export interface IModAwareAnimation {
  animation: string
}

export interface IShieldProps extends IModAwareAnimation {
  enemy: IEnemy
}