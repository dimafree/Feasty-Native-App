import styled from "styled-components/native";

export const EmptyWrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const EmptyText = styled.Text`
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 20px;
`;
