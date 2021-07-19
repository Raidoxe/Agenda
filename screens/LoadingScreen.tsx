import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from '../Styling/styles';

const LoadingScreen: React.FC<{}> = ({}) => {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View >
    )
}

export default LoadingScreen;