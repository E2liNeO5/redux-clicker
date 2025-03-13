import Enemy from './components/enemy/Enemy'
import RightMenu from './components/interface/right-menu/RightMenu'
import TopInfo from './components/interface/top-info/TopInfo'
import './styles/index.scss'

function App() {
  return (
    <div className="main_container">
      <TopInfo />
      <Enemy />
      <RightMenu />
    </div>
  )
}

export default App
