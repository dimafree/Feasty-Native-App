import React from "react";
import { EmptyText, EmptyWrapper } from "./Empty.styles";

const Empty: React.FC = ({}) => {
    return (
        <EmptyWrapper>
            <EmptyText>Nothing Found..</EmptyText>
        </EmptyWrapper>
    );
};
export default Empty;
