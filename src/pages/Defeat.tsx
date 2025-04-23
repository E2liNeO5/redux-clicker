import { useState } from "react"
import { useNavigate } from "react-router"

const ANIMATION_DURATION = 1500

const Defeat = () => {
  const [isAnimation, setIsAnimation] = useState(false)
  const navigate = useNavigate()

  const clickHandler = () => {
    setIsAnimation(prev => !prev)
    setTimeout(() => {
      navigate('/')
    }, ANIMATION_DURATION + 500)
  }

  return (
    <div className="defeat_container">
      <div className={`defeat_title ${isAnimation ? 'animate' : ''}`} style={{ animationDuration: `${ANIMATION_DURATION}ms` }}>
        <div className="left"><div>Поражение</div></div>
        <div className="right"><div>Поражение</div></div>
      </div>
      <div className={`reloading_game ${isAnimation ? 'animate' : ''}`} style={{ transitionDuration: `${ANIMATION_DURATION}ms` }}></div>
      <div className="btn_wrapper">
        <button className="defeat_restart" onClick={clickHandler}>Начать сначала</button>
      </div>
    </div>
  )
}

export default Defeat