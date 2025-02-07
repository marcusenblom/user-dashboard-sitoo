import { useLocation } from 'react-router-dom';
import navRoutes, { NavRoute } from '../../../routes/navRoutes';
import styles from './NavigationBar.module.scss';
import NavItem from './NavItem/NavItem';

type NavigationBarProps = {
    setMenuExpanded: (expanded: boolean) => void;
};

export default function NavigationBar({ setMenuExpanded }: NavigationBarProps) {
    const location = useLocation();
    const navRoutesList = navRoutes;

    return (
        <div className={styles.wrapper}>

            <div className={styles.top}>
                <div className={styles.logoWrapper}>
                    <img src="/img/logos/logo_transparent.png" alt="" />
                </div>

                <div className={styles.toggler} onClick={()=>{setMenuExpanded(false)}}>
                    <img src="/img/icons/x.svg" alt="" />
                </div>
            </div>

            <nav className={styles.nav}>
                
                <ul className={styles.list}>
                    {navRoutesList?.map((route: NavRoute) => {
                        const isActive = location.pathname === route.path;

                        return(
                            <NavItem
                                key={route.path}
                                active={isActive}
                                icon={route?.icon}
                                text={route?.name}
                                path={route?.path}
                            />
                        )
                    })}
                </ul>

            </nav>

        </div>
    )
}
