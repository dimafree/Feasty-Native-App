import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import firebase from "firebase/app";
// prettier-ignore
import { Nunito_400Regular, Nunito_700Bold, Nunito_800ExtraBold} from "@expo-google-fonts/nunito";
import { Sarina_400Regular } from "@expo-google-fonts/sarina";
import Header from "./src/components/Header";
import Routes from "./src/routes";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/restaurants/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";
import { AuthContextProvider } from "./src/services/auth/auth.context";

const firebaseConfig = {
    apiKey: "AIzaSyBU247HJ2pUpl0borV4TjA5JO15Zxhqbjw",
    authDomain: "feasty-956e6.firebaseapp.com",
    projectId: "feasty-956e6",
    storageBucket: "feasty-956e6.appspot.com",
    messagingSenderId: "962074381478",
    appId: "1:962074381478:web:5901235a194e844d4af867",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default function App() {
    const [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_700Bold,
        Nunito_800ExtraBold,
        Sarina_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        // @ts-ignore
        <ThemeProvider theme={theme}>
            <StatusBar style="auto" />
            <AuthContextProvider>
                <FavoritesContextProvider>
                    <LocationContextProvider>
                        <RestaurantsContextProvider>
                            <Header />
                            <Routes />
                        </RestaurantsContextProvider>
                    </LocationContextProvider>
                </FavoritesContextProvider>
            </AuthContextProvider>
        </ThemeProvider>
    );
}
