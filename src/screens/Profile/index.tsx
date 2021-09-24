import React, { useContext } from "react";
// prettier-ignore
import {  ProfileAvatar, ProfileEmail, ProfileWrapper } from "./Profile.styles";
import { AuthContext } from "../../services/auth/auth.context";
import { Button } from "react-native";
import { List } from "react-native-paper";

const Profile: React.FC = ({}) => {
    const { onLogout, user } = useContext(AuthContext);

    return (
        <ProfileWrapper>
            <ProfileAvatar size={180} label="NM" />
            {/* @ts-ignore */}
            <ProfileEmail>{user && user?.email}</ProfileEmail>
            <Button title="Logout" onPress={() => onLogout()} />
        </ProfileWrapper>
    );
};
export default Profile;
