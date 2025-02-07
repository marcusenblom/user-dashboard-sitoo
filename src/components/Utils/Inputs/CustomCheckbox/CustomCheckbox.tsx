import styles from "./CustomCheckbox.module.scss";
import cn from 'classnames';

type CustomCheckboxProps = {
    id: string;
    checked: boolean;
    onChange: (id: string) => void;
    size?: number;
};

export default function CustomCheckbox({
    checked,
    id,
    onChange,
    size = 24,
}: CustomCheckboxProps) {
    return (
        <label className={styles.checkboxLabel}>
            <input
                type="checkbox"
                className={styles.customCheckbox}
                checked={checked}
                onChange={()=> onChange(id)}
            />
            <span
                className={cn(styles.checkmark, checked && styles.checked)}
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                }}
            >
                {checked && <span className={styles.checkmark}></span>}
            </span>
        </label>
    );
}
