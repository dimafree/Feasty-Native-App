import React from "react";
import { RestaurantMockProps } from "../../utils/types";
// prettier-ignore
import { CalloutImage, CalloutTitle, CalloutWrapper, CalloutImageWeb} from "./Callout.styles";
import { Platform } from "react-native";

interface CalloutProps {
    restaurant: RestaurantMockProps;
}

const isAndroid = Platform.OS === "android";

const CalloutMap: React.FC<CalloutProps> = ({ restaurant }) => {
    const { name, photos } = restaurant;
    const Image = isAndroid ? CalloutImageWeb : CalloutImage;

    return (
        <CalloutWrapper>
            {/* @ts-ignore */}
            <Image source={{ uri: photos[0] }} />
            <CalloutTitle>{name}</CalloutTitle>
        </CalloutWrapper>
    );
};
export default CalloutMap;
