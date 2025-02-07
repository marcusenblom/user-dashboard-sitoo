import styles from './TopNavigation.module.scss';
import routes from '../../../routes/routes';
import { useLocation } from "react-router-dom";
import cn from 'classnames';

type TopNavigationProps = {
    toggleExpanded: () => void;
}

export default function TopNavigation({ toggleExpanded }: TopNavigationProps) {
    const location = useLocation();
    const currentRoute = Object.values(routes).find(route => route.path === location.pathname);


    return (
        <div className={styles.topBar}>

            <div className={styles.left}>
                <div className={styles.expandIconMobile} onClick={toggleExpanded}>
                    <div className={cn(styles.line, styles.lineOne)}></div>
                    <div className={cn(styles.line, styles.lineTwo)}></div>
                    <div className={cn(styles.line, styles.lineThree)}></div>
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
