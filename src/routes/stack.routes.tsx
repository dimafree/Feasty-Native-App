import React from "react";
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";

import Home from "../screens/Home";
import Detail from "../screens/Detail";

const AppStack = createStackNavigator();

const StackRoutes: React.FC = () => {
    return (
        <AppStack.Navigator
            headerMode="none"
            screenOptions={{
                ...TransitionPresets.ModalPresentationIOS,
            }}
        >
            <AppStack.Screen name="allRestaurants" component={Home} />
            <AppStack.Screen name="detail" component={Detail} />
        </AppStack.Navigator>
    );
};

export default StackRoutes;
