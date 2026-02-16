import { NavLink, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { Suspense } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'

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
          <Route path={'/about'} element={<AboutPage />}/>
          <Route path={'/'} element={<MainPage />}/>
        </Routes>
      </Suspense>
    </div>
  )
}
