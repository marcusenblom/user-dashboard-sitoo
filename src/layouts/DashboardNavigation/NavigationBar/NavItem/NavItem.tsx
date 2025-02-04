import styles from './NavItem.module.scss';
import { Link } from "react-router-dom";
import cn from 'classnames';

type NavItemProps = {
    icon?: string;
    text: string;
    path: string;
    active: boolean;
};

export default function NavItem({ icon, text, path, active }: NavItemProps) {


    return (
        <li className={styles.wrapper}>
            <Link to={path} className={cn(styles.inner, {[styles.active]: active})}>
                <div className={styles.icon}>
                    {
                        icon && <img src={icon} alt="nav-icon" />
                    }
                </div>

                <div className={styles.text}>
                    <span>{text}</span>
                </div>
            </Link>
        </li>
    )
}
