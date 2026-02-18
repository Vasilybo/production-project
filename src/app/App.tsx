import cls from './styles/index.scss'
import classNames from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames(cls.app, {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className={classNames(cls.contentPage)}>
          <div className={classNames(cls.pageWrapper)}>
            <AppRouter />
          </div>
          <Sidebar />
        </div>
      </Suspense>
    </div>
  )
}

export default App;
