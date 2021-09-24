import * as firebase from "firebase";

export const loginRequest = (email: string, password: string) => {
    // @ts-ignore
    return firebase.auth().signInWithEmailAndPassword(email, password);
};
