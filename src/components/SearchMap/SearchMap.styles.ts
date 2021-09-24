import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { Platform } from "react-native";

export const SearchMapWrapper = styled.View`
    padding: 0 15px;
    position: absolute;
    top: ${Platform.OS === "ios" ? "40" : "20"}px;
    width: 100%;
    z-index: 999;
`;

export const SearchMapInput = styled(Searchbar)`
    border-radius: 12px;
    font-size: 14px;
    color: #c0c0c0;
`;
