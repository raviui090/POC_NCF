import React, { useContext, useRef, useState } from "react";

interface ContextValues {
    selectedOrganisation: any;
    setSelectedOrganisation: any;
    favoritesList: any;
    setFavoritesList: any;
    isPopupActive: any;
    setIsPopupActive: any;
    lastFavoriteOrganisationName: any;
}

export const OrganisationContext = React.createContext<ContextValues>({} as ContextValues)

const OrganisationProvider = ({ children }) => {
    const [selectedOrganisation, setSelectedOrganisation] = useState(null);
    const [favoritesList, setFavoritesList] = useState([]);
    const [isPopupActive, setIsPopupActive] = useState(false);
    const lastFavoriteOrganisationName = useRef(null);

    const contextValues = {
        selectedOrganisation,
        setSelectedOrganisation,
        favoritesList,
        setFavoritesList,
        isPopupActive,
        setIsPopupActive,
        lastFavoriteOrganisationName,
    };

    return (
        <OrganisationContext.Provider value={contextValues}>
            {children}
        </OrganisationContext.Provider>
    );
};

export const useOrganisationContext = () => useContext(OrganisationContext);
export default OrganisationProvider;
