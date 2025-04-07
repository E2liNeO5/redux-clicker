import HealButton from "./heal-button/HealButton"
import HealthBar from "./health-bar/HealthBar"
import PlayerScore from "./player-score/PlayerScore"

function TopInfo() {
  return (
    <div className="top_info_container">
      <HealthBar />
      <HealButton />
      <PlayerScore />
    </div>
  )
}

export default TopInfo