import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import MainLayout from './pages/MainLayout.tsx'
import { store } from './store/store'
import { BrowserRouter, Route, Routes } from 'react-router'
import Enemy from './components/enemy/Enemy.tsx'
import LevelMap from './pages/LevelMap.tsx'
import Character from './pages/Character.tsx'
import LevelLayout from './pages/LevelLayout.tsx'
import Testing from './pages/Testing.tsx'
import Defeat from './pages/Defeat.tsx'
import Customize from './pages/Customize.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter >
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Character />} /> 
            <Route path='map' element={<LevelMap />} />
            <Route path='testing' element={<Testing />} />
            <Route path='customize' element={<Customize />} />
          </Route>

          <Route element={<LevelLayout />}>
            <Route path='level/:level' element={<Enemy />} /> 
          </Route>
          <Route path='defeat' element={<Defeat />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
