import styled from "styled-components/native";
import { Avatar } from "react-native-paper";
import { List } from "react-native-paper";

export const ProfileWrapper = styled.View`
    flex: 1;
    padding: 0 25px;
    align-items: center;
`;

export const ProfileAvatar = styled(Avatar.Text)`
    margin: 20px 0;
`;

export const ProfileEmail = styled.Text`
    margin: 10px 0;
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: 18px;
`;

export const ProfileActions = styled(List.Item)`
    color: #222;
`;
