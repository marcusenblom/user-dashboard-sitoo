import styles from "./CustomTextInput.module.scss";
import CustomInputLabel from "../CustomInputLabel/CustomInputLabel";
import cn from "classnames";

type CustomTextInputProps = {
    name: string;
    value: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    maxLength?: number;
    step?: number;
    min?: number;
    maxWidth?: string;
    inputLabel?: string;
    onlyNumbers?: boolean;
    searchIcon?: boolean;
    error?: string;
    disabled?: boolean;
    handleChange: (name: string, value: string) => void;
};

export default function CustomTextInput({
    name,
    value,
    type = "text",
    placeholder,
    required = false,
    maxLength,
    step,
    min,
    maxWidth,
    inputLabel,
    onlyNumbers = false,
    searchIcon = false,
    error,
    disabled,
    handleChange,
}: CustomTextInputProps) {
    
    function update(name: string, value: string) {
        if (onlyNumbers) {
            // Regular expression to allow only digits (numbers)
            const numbersOnly = /^[0-9]*$/.test(value.replace(/\s+/g, "")); // Remove spaces and validate

            if (numbersOnly) {
                handleChange(name, value);
            }
        } else {
            handleChange(name, value);
        }
    }

    return (
        <div className={styles.wrapper}>
            {inputLabel && (
                <CustomInputLabel
                    label={inputLabel}
                    required={required}
                />
            )}

            <div className={styles.inputWrapper}>
                <input
                    className={cn(
                        "textInputWhite",
                        styles.input,
                        { [styles.error]: error },
                        { [styles.paddingLeft]: searchIcon }
                    )}
                    type={type}
                    value={value}
                    name={name}
                    disabled={disabled}
                    placeholder={placeholder}
                    required={required}
                    maxLength={maxLength}
                    step={step || undefined}
                    onChange={(e) => update(e.target.name, e.target.value)}
                    min={type === "number" && min ? min : undefined}
                    style={{ maxWidth: maxWidth }}
                />

                {searchIcon && (
                    <div className={cn(styles.icon, styles.search)}>
                        <img src="/img/icons/search_grey.svg" alt="Search Icon" />
                    </div>
                )}

                {error && <div className={styles.errorMessage}>{error}</div>}
            </div>
        </div>
    );
}