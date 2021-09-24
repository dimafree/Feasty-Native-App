import React from "react";
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";

import Login from "../screens/Login";
import Signup from "../screens/Signup";

const LStack = createStackNavigator();

const LoginStack: React.FC = () => {
    return (
        <LStack.Navigator
            headerMode="none"
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            <LStack.Screen name="login" component={Login} />
            <LStack.Screen name="signup" component={Signup} />
        </LStack.Navigator>
    );
};

export default LoginStack;
