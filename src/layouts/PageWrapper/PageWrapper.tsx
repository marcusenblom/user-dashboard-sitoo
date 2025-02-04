import { ReactNode } from 'react';
import styles from './PageWrapper.module.scss';

type PageWrapperProps = {
    children: ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {

    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}
