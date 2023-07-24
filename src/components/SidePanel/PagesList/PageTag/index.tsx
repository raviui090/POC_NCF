import * as React from 'react';
import styles from "./PageTag.module.scss";
import cn from "classnames";

const PageTag = ({ pageName, icon, activeIcon, isActive, setActivePage }) => {
    return (
        <li
            className={cn("cta", styles.wrapper, isActive ? styles.active : "")}
            onClick={() => setActivePage(pageName)}
        >
            <div className={cn("icon", styles.icon)}>
                {isActive ? activeIcon : icon}
            </div>
            <p className={cn("text-m", isActive && "bold", styles.text)}>
                {pageName}
            </p>
        </li>
    );
};

export default PageTag;
