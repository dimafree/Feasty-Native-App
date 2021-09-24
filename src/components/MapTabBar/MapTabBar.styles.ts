import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const MapTabBarWrapper = styled.View`
    height: 70px;
    width: 70px;
    background-color: ${(props) => props.theme.colors.ui.primary};
    border-radius: 40px;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`;

export const MapTabIcon = styled(MaterialIcons)`
    margin-top: 0px;
`;
