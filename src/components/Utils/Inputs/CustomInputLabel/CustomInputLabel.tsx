import styles from "./CustomInputLabel.module.scss";

type CustomInputLabelProps = {
    label: string;
    required?: boolean;
    htmlFor?: string;
};

export default function CustomInputLabel({ label, required = false, htmlFor }: CustomInputLabelProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.tooltipContainer}>
                <label htmlFor={htmlFor}>{label}</label>
                {required && <span className={styles.required}>*</span>}
            </div>
        </div>
    );
}
