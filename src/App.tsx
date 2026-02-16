import { NavLink, Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import './styles/index.scss'
import { Suspense } from 'react'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'
import { useTheme } from './theme/useTheme'
import classNames from './helpers/classNames/classNames'

export default function App() {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
    {/* <div className={classes.app}> */}
      <button onClick={toggleTheme}>TOGGLE</button>
      <NavLink to={'/'}>Главная</NavLink>
      <NavLink to={'/about'}>О сайте</NavLink>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageLazy />}/>
          <Route path={'/'} element={<MainPageLazy />}/>
        </Routes>
      </Suspense>
        <Counter />
    </div>
  )
}
