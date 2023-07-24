import Button from "../../common/Button";
import Search from "../../../assets/icons/Search";
import React, { useState } from "react";
import SearchCharityModal from "../../SearchCharityModal";

const SearchCharityButton = () => {
    const [isSearchActive, setIsSearchActive] = useState(false);

    return (
        <>
            <Button
                type={"secondary"}
                text={"Search for a charity"}
                icon={<Search />}
                onClick={() => setIsSearchActive(true)} disabled={undefined}            />
            <SearchCharityModal
                isModalActive={isSearchActive}
                closeModal={() => setIsSearchActive(false)}
            />
        </>
    );
};

export default SearchCharityButton;
