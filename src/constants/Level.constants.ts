import { ILevel } from "../types/Level.types";

export const levels: ILevel[] = [
  {
    currentLevel: 1,
    startHealth: 100,
    startDamageMin: 1,
    startDamageMax: 3,
    healthRatios: {
      linear: 4,
      sqrt: 1
    },
    damageRatios: {
      linear: 0.01,
      sqrt: 0.01
    }
  },
  {
    currentLevel: 2,
    startHealth: 200,
    startDamageMin: 3,
    startDamageMax: 5,
    healthRatios: {
      linear: 5,
      sqrt: 1.5
    },
    damageRatios: {
      linear: 0.05,
      sqrt: 0.02
    }
  }
]