import cls from './styles/index.scss'
import classNames from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames(cls.app, {}, [theme])}>
      <Navbar />
      <div className={classNames(cls.contentPage)}>
        <div className={classNames(cls.pageWrapper)}>
          <AppRouter />
        </div>
        <Sidebar />
      </div>
    </div>
  )
}
