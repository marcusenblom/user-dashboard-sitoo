import styles from './Snackbar.module.scss';
import cn from 'classnames';

type SnackbarProps = {
    show: boolean;
    status?: "info" | "success" | "warning" | "error";
    text: string;
};

export default function Snackbar({ show, status = "info", text }: SnackbarProps) {
    return (
        <>
            {show && (
                <div className={cn(
                    styles.snackbar,
                    show && styles.show,
                    status === "error" && styles.error,
                    status === "success" && styles.success,
                    status === "info" && styles.info
                )}>
                    <div className={styles.textContainer}>
                        <p>{text}</p>
                    </div>
                </div>
            )}
        </>
    );
}
