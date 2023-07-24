import * as React from 'react';
import { useOrganisationContext } from "../../../context";
import RoundButton from "../../common/RoundButton";
import Grant from "../../../assets/icons/pages-icons/Grant";
import GrantFilled from "../../../assets/icons/pages-icons/GrantFilled";

const SelectCharityButton = ({ organisation }) => {
    const { setSelectedOrganisation } = useOrganisationContext();

    const chooseOrganisationHandler = () => {
        setSelectedOrganisation(organisation);
    };

    return (
        <RoundButton
            size="small"
            icon={<Grant />}
            filledIcon={<GrantFilled />}
            onClick={() => chooseOrganisationHandler()} disabled={undefined} className={undefined}        />
    );
};

export default SelectCharityButton;
