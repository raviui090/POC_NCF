import * as React from 'react';
import styles from "./Button.module.scss";
import cn from "classnames";

const Button = ({ type, text, size = "large", icon, disabled, onClick }) => {
    return (
        <button
            className={cn(
                "cta",
                styles.button,
                styles[type],
                styles[size],
                icon && styles.icon,
                disabled && styles.disabled
            )}
            onClick={onClick}
        >
            {icon && (
                <div className={cn("icon", styles.iconWrapper)}>{icon}</div>
            )}
            {size === "large" ? (
                <p className={cn(styles.text, "text-m bold")}>{text}</p>
            ) : (
                <p className={cn(styles.text, "text-s bold")}>{text}</p>
            )}
        </button>
    );
};

export default Button;
