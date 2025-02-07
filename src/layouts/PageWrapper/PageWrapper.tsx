import { ReactNode } from 'react';
import styles from './PageWrapper.module.scss';
import cn from 'classnames';

type PageWrapperProps = {
    id?: string,
    children: ReactNode;
    noSidePadding?: boolean
};

export default function PageWrapper({ id, children, noSidePadding = false }: PageWrapperProps) {

    return (
        <div className={cn(styles.wrapper, noSidePadding && styles.noSidePadding)} id={id || ""} >
            {children}
        </div>
    )
}
