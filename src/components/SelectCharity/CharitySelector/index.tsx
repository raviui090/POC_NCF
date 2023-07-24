import * as React from 'react';
import FavoriteCharitiesDropdown from "../../SelectCharity/FavoriteCharitiesDropdown";
import styles from "./CharitySelector.module.scss";
import { favoriteOrganisations } from "../../../data/charityOrganisations";
import SearchCharityButton from "../../SelectCharity/SearchCharityButton";

const CharitySelector = () => {
    return (
        <div className={styles.wrapper}>
            <h6 className="text-m bold">Charity</h6>
            <div className={styles.row}>
                <FavoriteCharitiesDropdown
                    organisationsList={favoriteOrganisations}
                />
                <p className="text-m">or</p>
                <SearchCharityButton />
            </div>
        </div>
    );
};

export default CharitySelector;
