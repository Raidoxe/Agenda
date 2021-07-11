import * as React from "react";
import styles from "../Styling/styles";
import { Text, View } from 'react-native';

const DashboardScreen: React.FC<{}> = () => {
    return (
        <View style={styles.container}>
            <Text>DashboardScreen</Text>
        </View>
    )
}

export default DashboardScreen;