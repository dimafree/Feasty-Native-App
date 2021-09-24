import React, { useContext, useEffect, useState } from "react";
import SearchMap from "../../components/SearchMap";
import { LocationContext } from "../../services/restaurants/location/location.context";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";
import { Map, MapWrapper } from "./Map.styles";
import { Marker, Callout } from "react-native-maps";
import CalloutMap from "../../components/Callout";
import { useNavigation } from "@react-navigation/core";

const FullMap: React.FC = ({}) => {
    const navigation = useNavigation();
    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext);

    const [latDelta, setLatDelta] = useState(0);

    useEffect(() => {
        if (location?.viewport) {
            const northeastLat = location?.viewport.northeast.lat;
            const southeastLat = location?.viewport.southwest.lat;

            setLatDelta(northeastLat - southeastLat);
        }
    }, [location, location?.viewport]);

    return (
        <MapWrapper>
            <SearchMap />
            <Map
                region={{
                    latitude: location?.lat as any,
                    longitude: location?.lng as any,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02,
                }}
            >
                {restaurants.map((restaurant) => {
                    return (
                        <Marker
                            key={restaurant.name}
                            title={restaurant.name}
                            coordinate={{
                                latitude: restaurant.geometry.location.lat,
                                longitude: restaurant.geometry.location.lng,
                            }}
                        >
                            <Callout
                                onPress={() =>
                                    navigation.navigate("detail", {
                                        data: restaurant,
                                    })
                                }
                            >
                                <CalloutMap restaurant={restaurant} />
                            </Callout>
                        </Marker>
                    );
                })}
            </Map>
        </MapWrapper>
    );
};
export default FullMap;
