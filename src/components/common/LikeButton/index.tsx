import * as React from 'react';
import RoundButton from "../../../components/common/RoundButton";
import Heart from "../../../assets/icons/Heart";
import styles from "./LikeButton.module.scss";
import { useOrganisationContext } from "../../../context";

const LikeButton = ({ organisation, size = "small" }) => {
    const {
        favoritesList,
        setFavoritesList,
        setIsPopupActive,
        lastFavoriteOrganisationName,
    } = useOrganisationContext();

    const toggleFavorite = (organisation) => {
        checkIsLiked(organisation)
            ? removeFromFavorites(organisation)
            : addToFavorites(organisation);
    };
    const removeFromFavorites = (organisation) => {
        const updatedFavorites = favoritesList?.filter(
            (favorite) => favorite.id !== organisation.id
        );
        setFavoritesList(updatedFavorites);
        setIsPopupActive(false);
    };

    const addToFavorites = (organisation) => {
        setIsPopupActive(true);
        lastFavoriteOrganisationName.current = organisation.name;
        setFavoritesList([...favoritesList, organisation]);
    };
    const checkIsLiked = (organisation) =>
        favoritesList.some((el) => el.id === organisation.id);

    return (
        <RoundButton
            size={size}
            filledIcon={""}
            disabled={false}
            icon={<Heart />}
            type="like"
            className={checkIsLiked(organisation) && styles.filled}
            onClick={() => toggleFavorite(organisation)}
        />
    );
};

export default LikeButton;
