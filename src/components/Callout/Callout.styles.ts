import styled from "styled-components/native";
import WebView from "react-native-webview";

export const CalloutWrapper = styled.View`
    padding: 10px;
`;

export const CalloutTitle = styled.Text``;

export const CalloutImage = styled.Image`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

export const CalloutImageWeb = styled(WebView)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;
