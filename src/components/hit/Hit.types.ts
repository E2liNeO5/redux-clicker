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
