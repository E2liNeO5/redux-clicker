import Level from "../components/level-map/Level"
import { levels } from "../constants/Level.constants"

const LevelMap = () => {
  const showLevels = () => {
    return levels.map(level => <Level key={level.currentLevel} levelNumber={level.currentLevel} />)
  }

  return (
    <div className="level_map_container">
      { showLevels() }
    </div>
  )
}

export default LevelMap