import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";

export const LoginWrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    border: 2px solid #222;
`;

export const LoginTitle = styled.Text`
    font-family: ${(props) => props.theme.fonts.title};
    color: #fff;
    font-size: 40px;
    text-align: center;
`;

export const LoginSubtitle = styled.Text`
    color: #fff;
    font-size: 12px;
    text-align: center;
`;

export const LoginContainer = styled.View`
    width: 80%;
    z-index: 3;
`;

export const LoginForm = styled.View`
    margin-top: 20px;
`;
export const LoginFormInput = styled(TextInput)`
    padding: 1px;
    margin: 10px 0;
`;

export const LoginButton = styled(Button).attrs({
    color: "#fff",
})`
    margin-top: 20px;
    background: ${(props) => props.theme.colors.ui.primary};
    color: #fff;
`;

export const LoginButtonText = styled.Text`
    color: #fff;
    font-size: 20px;
    text-align: center;
`;

export const LoginCreateWrapper = styled.TouchableOpacity`
    margin-top: 20px;
`;

export const LoginErrorWrapper = styled.View`
    margin: 10px 0;
`;
