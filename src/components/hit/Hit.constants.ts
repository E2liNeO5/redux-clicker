export interface IHit {
  id: number,
  x: number,
  y: number,
  variation: number,
  frame: number
}

export type IHitData = Omit<IHit, 'frame'>

export const MAX_FRAME = 17
export const ANIMATION_DURATION = 15
export const FRAME_SIZE = 32