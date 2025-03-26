import { ILevel } from "../types/Level.types";

export const levels: ILevel[] = [
  {
    currentLevel: 1,
    startHealth: 100,
    healthRatios: {
      linear: 4,
      sqrt: 1
    }
  },
  {
    currentLevel: 2,
    startHealth: 200,
    healthRatios: {
      linear: 5,
      sqrt: 1.5
    }
  }
]