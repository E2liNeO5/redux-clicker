import { ReactNode, RefObject } from "react";

export interface IEnemy {
  enemyRef: RefObject<HTMLDivElement>
  children: ReactNode
  rotate: string
}