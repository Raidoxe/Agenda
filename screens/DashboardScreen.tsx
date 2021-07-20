import * as React from "react";
import styles from "../Styling/styles";
import { Text, View, TouchableOpacity, Image } from 'react-native';
import firebase from 'firebase/app';
import UserContext from '../context/UserContext';
import Feed from "../components/Feed";



const DashboardScreen: React.FC<{}> = () => {
    const user = React.useContext(UserContext);
    const userPhotoUrl = user != null ? { uri: user.photoURL ? user.photoURL : 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' } : { uri: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' };

    React.useEffect(() => {
        console.log(userPhotoUrl);
        console.log(user);
    }, []);

    const logoutUser = () => {
        firebase.auth().signOut();
    }

    return (
        <View style={styles.DashboardScreen}>
            <View style={styles.photoHeader}>
                <Image source={userPhotoUrl} style={styles.userPhoto} />
            </View>
            <TouchableOpacity onPress={logoutUser}>
                <Text>Logout</Text>
            </TouchableOpacity>
            <Feed />
        </View>
    )
}

export default DashboardScreen;