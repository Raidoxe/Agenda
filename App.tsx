import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import firebase from 'firebase/app';
import "firebase/auth";
import { createSwitchNavigator, createAppContainer } from 'react-navigation'; 
import styles from "./Styling/styles";
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';


const firebaseConfig = {
  apiKey: "AIzaSyAHfTL41XLhciCMFf5N3pLrsrifql4H5Rc",
  authDomain: "agenda-ffbe7.firebaseapp.com",
  projectId: "agenda-ffbe7",
  storageBucket: "agenda-ffbe7.appspot.com",
  messagingSenderId: "282524803708",
  appId: "1:282524803708:web:ed6139bdd8a0f1054a9ff9",
  measurementId: "G-F9L4JHHQF6"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

export default function App() {
  const AppSwitchNavigator = createSwitchNavigator({
    LoadingScreen: LoadingScreen,
    LoginScreen: LoginScreen,
    DashboardScreen: DashboardScreen
  });
  
  const AppNavigator = createAppContainer(AppSwitchNavigator);

  React.useEffect(() => {
  }, []);


  return (
    <AppNavigator />
  );
}


