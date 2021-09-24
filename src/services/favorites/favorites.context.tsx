import React, { createContext, useState, useEffect, useContext } from "react";
import { RestaurantMockProps } from "../../utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../auth/auth.context";

interface FavoritesContextProps {
    favorites?: RestaurantMockProps[] | [];
    addToFavorites: (rest: RestaurantMockProps) => any;
    remvoFromFavorites: (rest: RestaurantMockProps) => any;
}

// @ts-ignore
export const FavoritesContext = createContext<FavoritesContextProps>({});

interface FavoritesContextProviderProps {
    children: React.ReactNode;
}

export const FavoritesContextProvider: React.FC<FavoritesContextProviderProps> = ({
    children,
}) => {
    const { user } = useContext(AuthContext);
    const [favorites, setFavorites] = useState<RestaurantMockProps[]>([]);

    const saveFavorites = async (value: any, uid: any) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(`@feasty:favorites-${uid}`, jsonValue);
        } catch (e) {
            console.log("Save favorites error");
        }
    };

    const loadFavorites = async (uid: any) => {
        try {
            const value = await AsyncStorage.getItem(
                `@feasty:favorites-${uid}`
            );
            if (value !== null) {
                setFavorites(JSON.parse(value));
            }
        } catch (e) {
            console.log("Load favorites error");
        }
    };

    const add = (restaurant: RestaurantMockProps) => {
        setFavorites([...favorites, restaurant]);
    };

    const remove = (restaurant: RestaurantMockProps) => {
        const newFavorites = favorites.filter(
            (x: RestaurantMockProps) => x.placeId !== restaurant.placeId
        );
        setFavorites(newFavorites);
    };

    useEffect(() => {
        if (user) {
            // @ts-ignore
            loadFavorites(user?.uid);
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            // @ts-ignore
            saveFavorites(favorites, user?.uid);
        }
    }, [favorites, user]);

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                addToFavorites: add,
                remvoFromFavorites: remove,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};
