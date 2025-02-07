import styles from './PopupModal.module.scss';
import cn from 'classnames';
import { ReactNode } from 'react';

type PopupModalProps = {
    show: boolean;
    children: ReactNode;
    header?: string;
    close: () => void;
    leftAlignedHeader?: boolean;
    maxWidth?: string | number;
    closeOnOverlay?: boolean;
};

export default function PopupModal({
    show,
    children,
    header,
    close,
    maxWidth,
    closeOnOverlay = true,
}: PopupModalProps) {
    return (
        <div className={cn(styles.modal, show && styles.show)}>
            <div className={styles.overlay} onClick={() => closeOnOverlay && close()}></div>

            <div
                className={styles.modalWindow}
                style={{ maxWidth }}
            >
                <div
                    className={styles.headerContainer}>
                    {header && <h2 className={styles.header}>{header}</h2>}
                    <div className={styles.closeButton} onClick={close}>
                        <img
                            src={"/img/icons/x.svg"}
                            alt="stäng"
                        />
                    </div>
                </div>

                {children}
            </div>
        </div>
    );
}
