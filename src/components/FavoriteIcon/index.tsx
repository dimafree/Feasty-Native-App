import React, { useContext } from "react";
import { FavoritesContext } from "../../services/favorites/favorites.context";
import { RestaurantMockProps } from "../../utils/types";
import { FavoriteIconWrapper } from "./FavoriteIcon.styles";
import { MaterialIcons } from "@expo/vector-icons";

interface FavoriteIconProps {
    restaurant: RestaurantMockProps;
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ restaurant }) => {
    const { favorites, addToFavorites, remvoFromFavorites } = useContext(
        FavoritesContext
    );
    const isFavorite = favorites?.find((r) => r.placeId === restaurant.placeId);

    return (
        <FavoriteIconWrapper
            onPress={() =>
                !isFavorite
                    ? addToFavorites(restaurant)
                    : remvoFromFavorites(restaurant)
            }
        >
            <MaterialIcons
                name={isFavorite ? "favorite" : "favorite-border"}
                size={30}
                color={isFavorite ? "#F94144" : "#fff"}
            />
        </FavoriteIconWrapper>
    );
};
export default FavoriteIcon;
