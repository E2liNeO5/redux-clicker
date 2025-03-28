import Level from "../components/level-map/Level"
import { levels } from "../constants/Level.constants"

const LevelMap = () => {
  return (
    <div className="level_map_container">
      { levels.map(level => <Level key={level.currentLevel} levelNumber={level.currentLevel} />) }
    </div>
  )
}

export default LevelMap