import React from "react";
import { LoadingAnimation, LoadingWrapper } from "./Loading.styles";
import loadAnimation from "../../../assets/animations/loading.json";

const Loading: React.FC = ({}) => {
    return (
        <LoadingWrapper>
            <LoadingAnimation source={loadAnimation} autoPlay loop />
        </LoadingWrapper>
    );
};
export default Loading;
