import * as React from 'react';
import styles from "./UserAvatar.module.scss";

const UserAvatar = () => {
    return (
        <div className={styles.avatar}>
            <img src={''} alt="user avatar" />
        </div>
    );
};

export default UserAvatar;
