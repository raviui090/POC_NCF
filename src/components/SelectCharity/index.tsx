import * as React from 'react';
import NumberedTitle from "../common/NumberedTitle";
import styles from "./SelectCharity.module.scss";
import cn from "classnames";
import RecentlySupportedSlider from "../SelectCharity/RecentlySupportedSlider";
import { recentlySupportedOrganisations } from "../../data/charityOrganisations";
import CharitySelector from "../SelectCharity/CharitySelector";
import SelectedOrganisationInfo from "../SelectCharity/SelectedOrganisationInfo";
import ButtonLink from "../common/ButtonLink";
import { useOrganisationContext } from "../../context";

const SelectCharity = () => {
    const { selectedOrganisation, setSelectedOrganisation } =
        useOrganisationContext();

    const resetSelectedOrganisation = () => setSelectedOrganisation(null);

    return (
        <div className={cn("grant-bg", styles.wrapper)}>
            <div className={styles.titleRow}>
                <NumberedTitle number={1} title={"Select a charity"} />
                {selectedOrganisation && (
                    <ButtonLink
                        text={"change"}
                        onClickCallback={resetSelectedOrganisation} disabled={undefined}                    />
                )}
            </div>
            {selectedOrganisation ? (
                <SelectedOrganisationInfo
                    selectedOrganisation={selectedOrganisation}
                />
            ) : (
                <>
                    <CharitySelector />
                    <RecentlySupportedSlider
                        organisationList={recentlySupportedOrganisations}
                    />
                </>
            )}
        </div>
    );
};

export default SelectCharity;
