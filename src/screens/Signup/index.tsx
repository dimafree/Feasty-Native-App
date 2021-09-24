import React, { useContext, useEffect, useState } from "react";
// prettier-ignore
import {  LoginContainer, LoginTitle, LoginWrapper, LoginSubtitle, LoginForm, LoginFormInput, LoginButton, LoginButtonText, LoginCreateWrapper, LoginErrorWrapper } from "../Login/Login.styles";
import ImageBG from "../../components/ImageBG";
import { useNavigation } from "@react-navigation/core";
import { AuthContext } from "../../services/auth/auth.context";

const Signup: React.FC = ({}) => {
    const navigation = useNavigation();
    const { onRegister, error, isLoading } = useContext(AuthContext);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [repeatedPassword, setRepeatedPassword] = useState<string>("");

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

                        <LoginFormInput
                            label="Repeat Pasword"
                            mode="flat"
                            value={repeatedPassword}
                            underlineColor="#F94144"
                            underlineColorAndroid="#F94144"
                            textContentType="password"
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={(e) => setRepeatedPassword(e)}
                        />

                        {error?.length > 0 && (
                            <LoginErrorWrapper>
                                <LoginSubtitle>{error}</LoginSubtitle>
                            </LoginErrorWrapper>
                        )}

                        <LoginButton
                            loading={isLoading}
                            onPress={() =>
                                onRegister(email, password, repeatedPassword)
                            }
                            icon="lock-open-outline"
                        >
                            <LoginButtonText>Register</LoginButtonText>
                        </LoginButton>

                        <LoginCreateWrapper
                            onPress={() => navigation.navigate("login")}
                        >
                            <LoginSubtitle>
                                Already have an account
                            </LoginSubtitle>
                        </LoginCreateWrapper>
                    </LoginForm>
                </LoginContainer>
            </ImageBG>
        </LoginWrapper>
    );
};
export default Signup;
