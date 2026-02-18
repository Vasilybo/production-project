import { useTranslation } from "react-i18next";
import classNames from "shared/lib/classNames/classNames";
import cls from './LanguageSwitcher.module.scss'
import Button, { ThemeButton } from "shared/ui/Button/Button";

interface LanguageSwitcherProps {
    className?: string;
}

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
        <Button 
            className={classNames(cls.LanguageSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
  )
}

export default LanguageSwitcher;