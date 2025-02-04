import styles from './TopNavigation.module.scss';
import routes from '../../../routes/routes';
import { useLocation } from "react-router-dom";

export default function TopNavigation({}) {
    const location = useLocation();
    const currentRoute = Object.values(routes).find(route => route.path === location.pathname);


    return (
        <div className={styles.topBar}>

            <div className={styles.left}>
                <div className={styles.logoWrapper}>
                    <img src="/img/logos/logo_transparent.png" alt="" />
                </div>
            </div>

            <div className={styles.center}>
                <div className={styles.page}>
                    <h3>{currentRoute?.name || "Dashboard"}</h3>
                </div>
            </div>

        </div>
    )
}
