import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Profile from "../screens/Profile";

const PStack = createStackNavigator();

const ProfileStack: React.FC = () => {
    return (
        <PStack.Navigator headerMode="none">
            <PStack.Screen name="profile" component={Profile} />
        </PStack.Navigator>
    );
};

export default ProfileStack;
