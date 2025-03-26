import { Outlet } from 'react-router'
import RightMenu from '../components/interface/right-menu/RightMenu'
import '../styles/index.scss'

function MainLayout() {
  return (
    <div className="main_container">
      <div className="content_container">
        <Outlet />
      </div>
      <RightMenu />
    </div>
  )
}

export default MainLayout
