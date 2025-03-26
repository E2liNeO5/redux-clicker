import { Outlet } from "react-router"
import RightMenu from "../components/interface/right-menu/RightMenu"
import TopInfo from "../components/interface/top-info/TopInfo"

const LevelLayout = () => {
  return (
    <div className="main_container">
      <div className="content_container">
        <TopInfo />
        <Outlet />
      </div>
      <RightMenu />
    </div>
  )
}

export default LevelLayout