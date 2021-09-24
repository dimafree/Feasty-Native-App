import styled from "styled-components/native";
import MapView from "react-native-maps";

export const MapWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const Map = styled(MapView)`
    width: 100%;
    height: 100%;
`;

export const MapSearch = styled.View`
    position: absolute;
    top: 5px;
    left: 20px;
    right: 20px;
`;
