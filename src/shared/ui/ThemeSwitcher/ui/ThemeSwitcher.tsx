import classNames from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.scss'
import { ReactComponent as DarkIcon } from 'shared/assets/icons/theme-dark.svg'
import { ReactComponent as LightIcon } from 'shared/assets/icons/theme-dark.svg'
import { useTheme } from "app/providers/ThemeProvider";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import Button, { ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

  return (
    <Button 
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}>
        {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
        
  )
}

export default ThemeSwitcher;