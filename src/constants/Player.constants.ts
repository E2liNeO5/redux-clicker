import { IPlayerHit } from "../types/Player.types"
import { HIT_GLOWING, HIT_IMAGES } from "./Hit.constants"

export const PLAYER_SAVE_KEY = 'player_saves'

export const PLAYER_INITIAL_HEALTH = 100
export const PLAYER_INITIAL_DAMAGE_MIN = 3
export const PLAYER_INITIAL_DAMAGE_MAX = 5
export const PLAYER_INITIAL_HEALING = 10

export const INITIAL_DAMAGE_COST = 100
export const INITIAL_HEALTH_COST = 100
export const INITIAL_HEALING_COST = 100
export const HEAL_POTION_COST = 100

export const INITIAL_PLAYER_HIT: IPlayerHit = {
  variations: HIT_IMAGES[0].variations,
  frames: HIT_IMAGES[0].frames,
  url: HIT_IMAGES[0].url,
  id: HIT_IMAGES[0].id,
  glowing: HIT_GLOWING[0].glowing
}