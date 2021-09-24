import styled from "styled-components/native";
import { ImageBackground } from "react-native";

export const ImageBGWrapper = styled(ImageBackground)`
    flex: 1;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 110%;
`;

export const Overlay = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.63);
`;
