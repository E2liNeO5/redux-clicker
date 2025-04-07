import { ILevel } from "../types/Level.types";

export const levels: ILevel[] = [
  {
    currentLevel: 1,
    startHealth: 100,
    startDamageMin: 1,
    startDamageMax: 3,
    startScore: 10,
    healthRatios: {
      linear: 4,
      sqrt: 1
    },
    damageRatios: {
      linear: 0.01,
      sqrt: 0.01
    },
    scoreRatios: {
      linear: 2,
      sqrt: 0.4
    }
  },
  {
    currentLevel: 2,
    startHealth: 200,
    startDamageMin: 3,
    startDamageMax: 5,
    startScore: 50,
    healthRatios: {
      linear: 5,
      sqrt: 1.5
    },
    damageRatios: {
      linear: 0.05,
      sqrt: 0.02
    },
    scoreRatios: {
      linear: 4,
      sqrt: 0.8
    }
  }
]

export const LEVEL_SAVE_KEY = 'level_saves'