import * as React from 'react';
import FaithfulLogo from "../../assets/FaithfulLogo";
import Button from "../common/Button";
import PagesList from "./PagesList";
import styles from "./SidePanel.module.scss";

const SidePanel = () => {
    return (
        <div className={styles.wrapper} data-testid="side-panel-component">
            <div className={styles.logo}>
                <FaithfulLogo />
                <p className="text-m grey">From NCF </p>
            </div>

            <PagesList />
            <Button text="Log out" type="secondary" size="small" icon={undefined} disabled={undefined} onClick={undefined} />
        </div>
    );
};

export default SidePanel;
