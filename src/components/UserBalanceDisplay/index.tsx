import * as React from 'react';
import styles from "./UserBalanceDisplay.module.scss";
import cn from "classnames";

const UserBalanceDisplay = ({ balance }) => {
    return (
        <div className={cn("grant-bg", styles.wrapper)}>
            <p className="text-m grey">Your balance</p>
            <span className="number-s">${balance}</span>
        </div>
    );
};

export default UserBalanceDisplay;
