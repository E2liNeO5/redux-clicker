import { IHitItemComponent } from "../types/Hit.types"

export const ANIMATION_DURATION = 15
export const FRAME_SIZE = 128

export const HIT_IMAGE_BUY_COST = 1000
export const HIT_GLOWING_BUY_COST = 1000

export const HIT_IMAGES: IHitItemComponent[] = [
  {
    id: 1,
    url: 'hit_frames_v1.png',
    frames: 17,
    variations: 4
  },
  {
    id: 2,
    url: 'hit_frames_v2.png',
    frames: 17,
    variations: 4
  }
]

export const HIT_GLOWING = [
  {
    id: 1,
    glowing: '#ffffff'
  },
  {
    id: 2,
    glowing: '#ff0000ff'
  }
]