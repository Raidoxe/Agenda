import * as React from "react";
import styles from "../Styling/styles";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import GoogleImage from '../components/images/Google';
import * as Google from 'expo-auth-session/providers/google';
import firebase from 'firebase/app';

const LoginScreen: React.FC<{}> = () => {
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        clientId: '282524803708-4q9lv6t7b4jq2dm2cdg0g4k44fvqpuco.apps.googleusercontent.com'
    });

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { id_token } = response.params;
      
            const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
            firebase.auth().signInWithCredential(credential);
        }
    }, [response]);
    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => promptAsync()}>
                <View style={styles.GoogleButton} >
                    <GoogleImage style={styles.Google} />
                    <View style={styles.TextContainer}>
                        <Text style={styles.Login}>Login With Google</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen;