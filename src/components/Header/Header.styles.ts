import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const HeaderWrapper = styled.SafeAreaView`
    background-color: #fff;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: ${StatusBar.currentHeight || 0}px;
    padding: 20px 20px 10px;
`;

export const HeaderMenu = styled.TouchableOpacity`
    flex: 1;
`;

export const HeaderTitle = styled.Text`
    flex: 1.5;
    font-family: ${(props) => props.theme.fonts.title};
    color: #222;
    font-size: 30px;
    text-align: center;
`;

export const HeaderAvatar = styled.TouchableOpacity`
    flex: 1;
    align-items: flex-end;
`;
