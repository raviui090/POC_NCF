import * as React from 'react';
import styles from "./GrantPageTabs.module.scss";
import cn from "classnames";
import { useState } from "react";


const GrantPageTabs = () => {
    const [activeTab, setActiveTab] = useState("send");

    const tabs = [
        { name: "send", title: "Send to a charity" },
        { name: "schedules", title: "Recurring schedules" },
    ];

    return (
        <ul className={styles.tabs}>
            {tabs.map((el, index) => (
                <li
                    className={cn(
                        styles.tabItem,
                        "cta",
                        activeTab === el.name && styles.active
                    )}
                    key={index}
                    onClick={() => setActiveTab(el.name)}
                >
                    <h4 className="title-h4 grey">{el.title}</h4>
                </li>
            ))}
        </ul>
    );
};

export default GrantPageTabs;
