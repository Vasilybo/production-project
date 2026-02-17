import classNames from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { FC } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',

}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme,
}

const AppLink: FC<AppLinkProps> = ({ 
    to, 
    className, 
    children, 
    theme = AppLinkTheme.PRIMARY, 
    ...otherProps 
}) => {
  return (
    <NavLink 
        to={to} 
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        {...otherProps}
    >
        {children}
    </NavLink>
  )
}

export default AppLink;