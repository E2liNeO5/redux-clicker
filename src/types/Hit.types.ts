export interface IHit {
  id: number,
  x: number,
  y: number,
  variation: number,
  frame: number
}

export type IHitData = Omit<IHit, 'frame'>

export interface IHitItem {
  item: IHitData
}
export interface IHitItemComponent {
  id: number
  url: string
  frames: number
  variations: number
}

export interface IHitGlowingComponent {
  id: number
  glowing: string
}