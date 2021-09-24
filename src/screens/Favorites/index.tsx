import React, { useContext } from "react";
import Empty from "../../components/Empty";
import RestaurantCard from "../../components/RestaurantCard";
import { FavoritesContext } from "../../services/favorites/favorites.context";
import {
    HomeRestaurantList,
    HomeTitle,
    HomeTitleInfo,
} from "../Home/Home.styles";
import { FavoritesWrapper } from "./Favorites.styles";

const Favorites: React.FC = ({}) => {
    const { favorites } = useContext(FavoritesContext);

    return (
        <FavoritesWrapper>
            <HomeTitleInfo>
                <HomeTitle>Your Favorites</HomeTitle>
            </HomeTitleInfo>
            {favorites && favorites?.length > 0 ? (
                <HomeRestaurantList
                    data={favorites}
                    renderItem={({ item }) => (
                        // @ts-ignore
                        <RestaurantCard restaurant={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                    // @ts-ignore
                    keyExtractor={(item) => item.name}
                />
            ) : (
                <Empty />
            )}
        </FavoritesWrapper>
    );
};
export default Favorites;
