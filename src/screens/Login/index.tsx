import React, { useContext, useEffect, useState } from "react";
// prettier-ignore
import {  LoginContainer, LoginTitle, LoginWrapper, LoginSubtitle, LoginForm, LoginFormInput, LoginButton, LoginButtonText, LoginCreateWrapper, LoginErrorWrapper } from "./Login.styles";
import ImageBG from "../../components/ImageBG";
import { useNavigation } from "@react-navigation/core";
import { AuthContext } from "../../services/auth/auth.context";

const Login: React.FC = ({}) => {
    const navigation = useNavigation();
    const { onLogin, error, isLoading } = useContext(AuthContext);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <LoginWrapper>
            <ImageBG>
                <LoginContainer>
                    <LoginTitle>Feasty</LoginTitle>
                    <LoginSubtitle>Anywhere. Everywhere</LoginSubtitle>

                    <LoginForm>
                        <LoginFormInput
                            label="Email"
                            mode="flat"
                            underlineColor="#F94144"
                            value={email}
                            underlineColorAndroid="#F94144"
                            onChangeText={(e) => setEmail(e)}
                            textContentType="emailAddress"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                        <LoginFormInput
                            label="Password"
                            mode="flat"
                            value={password}
                            underlineColor="#F94144"
                            underlineColorAndroid="#F94144"
                            textContentType="password"
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={(e) => setPassword(e)}
                        />

                        {error?.length > 0 && (
                            <LoginErrorWrapper>
                                <LoginSubtitle>{error}</LoginSubtitle>
                            </LoginErrorWrapper>
                        )}

                        <LoginButton
                            loading={isLoading}
                            onPress={() => onLogin(email, password)}
                            icon="lock-open-outline"
                        >
                            <LoginButtonText>Login</LoginButtonText>
                        </LoginButton>

                        <LoginCreateWrapper
                            onPress={() => navigation.navigate("signup")}
                        >
                            <LoginSubtitle>Create an account</LoginSubtitle>
                        </LoginCreateWrapper>
                    </LoginForm>
                </LoginContainer>
            </ImageBG>
        </LoginWrapper>
    );
};
export default Login;
