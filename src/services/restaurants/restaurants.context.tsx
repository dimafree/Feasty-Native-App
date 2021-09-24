// prettier-ignore
import React, { useState, useContext, useEffect, useMemo, createContext} from "react";
import { LocationContext } from "./location/location.context";
import { restaurantRequest, restaurantTransform } from "./restaurants.service";

interface ContextProps {
    restaurants: any[];
    isLoading: boolean;
    error: string | undefined | null;
}

export const RestaurantsContext = createContext<ContextProps>({
    restaurants: [],
    isLoading: false,
    error: "",
});

interface RestaurantContextProviderProps {
    children: React.ReactNode;
}

export const RestaurantsContextProvider: React.FC<RestaurantContextProviderProps> = ({
    children,
}) => {
    const { location } = useContext(LocationContext);
    const [restaurant, setRestaurant] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const retrieveRestaurants = (value: string) => {
        setIsLoading(true);
        setRestaurant([]);

        setTimeout(async () => {
            await restaurantRequest(value)
                .then(restaurantTransform)
                .then((results) => {
                    setError("");
                    setIsLoading(false);
                    setRestaurant(results);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setError(err);
                });
        }, 2000);
    };

    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationString);
        }
    }, [location]);

    return (
        <RestaurantsContext.Provider
            value={{ restaurants: restaurant, isLoading, error }}
        >
            {children}
        </RestaurantsContext.Provider>
    );
};
