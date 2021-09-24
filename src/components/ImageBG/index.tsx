import React from "react";
import { ImageBGWrapper, Overlay } from "./ImageBG.styles";

interface ImageBGProps {
    children: React.ReactNode;
}

const ImageBG: React.FC<ImageBGProps> = ({ children }) => {
    return (
        <ImageBGWrapper
            source={require("../../../assets/images/bg.jpg")}
            resizeMode="cover"
        >
            <Overlay />
            {children}
        </ImageBGWrapper>
    );
};
export default ImageBG;
