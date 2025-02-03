import styles from './Spinner.module.scss';
import cn from 'classnames';

type SpinnerProps = {
    show: boolean;
    text?: string;
    thin?: boolean;
    white?: boolean;
};

export default function Spinner({ show, text, thin, white }: SpinnerProps) {
    return (
        <div className={show ? `${styles.spinnerWrapper} ${styles.show}` : styles.spinnerWrapper}>
            <div className={cn(styles.spinner, { 
                [styles.thin]: thin, 
                [styles.white]: white, 
                [styles.thinWhite]: thin && white 
            })}></div>
            {text && <p>{text}</p>}
        </div>
    );
}