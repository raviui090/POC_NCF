import * as React from 'react';
import styles from "./NumberedTitle.module.scss";

const NumberedTitle = ({ title, number }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.number}>
                <h4 className="title-h4">{number}</h4>
            </div>
            <h4 className="title-h4">{title}</h4>
        </div>
    );
};

export default NumberedTitle;
