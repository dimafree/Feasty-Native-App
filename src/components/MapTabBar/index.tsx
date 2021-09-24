import React from "react";
import { MapTabBarWrapper, MapTabIcon } from "./MapTabBar.styles";
import { MaterialIcons } from "@expo/vector-icons";

interface MapTabBarProps {
    size: number;
    color: string;
}

const MapTabBar: React.FC<MapTabBarProps> = ({ size, color }) => {
    return (
        <MapTabBarWrapper>
            <MapTabIcon name="place" size={35} color="#fff" />
        </MapTabBarWrapper>
    );
};
export default MapTabBar;
