import { useLocation } from 'react-router-dom';
import navRoutes, { NavRoute } from '../../../routes/navRoutes';
import styles from './NavigationBar.module.scss';
import NavItem from './NavItem/NavItem';

export default function NavigationBar({}) {
    const location = useLocation();
    const navRoutesList = navRoutes;

    return (
        <div className={styles.wrapper}>

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
