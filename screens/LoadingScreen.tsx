import * as React from "react";
import styles from "../Styling/styles";
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { ActivityIndicator } from 'react-native';

const LoadingScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

    React.useEffect(() => { //called checkIfLoggedIn function when app starts
        checkIfLoggedIn();

        return () => { };

    }, []);

    const checkIfLoggedIn = () => {//If user not logged in will redirect to login screen
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log(user);
                navigation.navigate('DashboardScreen');
            } else {
                navigation.navigate('LoginScreen');
            }
        });
    }

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    )
}

export default LoadingScreen;