import * as React from 'react';
import firebase from 'firebase/app';
import "firebase/auth";
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import LoadingScreen from './screens/LoadingScreen';
import UserContext from './context/UserContext';

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

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [authenticated, setAuthenticated] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<firebase.User | null>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {//If user not logged in will redirect to login screen
      if (user) {
        console.log(user);
        setAuthenticated(true);
        setIsLoading(false);
        setUser(user);
      } else {
        setAuthenticated(false);
        setIsLoading(false);
      }
    });

    return () => { };
  }, []);



  if (authenticated) {
    return (
      <UserContext.Provider value={user}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen name="Dashboard" component={DashboardScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    )
  } else {
    return (
      <NavigationContainer>
        < Stack.Navigator>
          {isLoading ?  <Stack.Screen name="Loading" component={LoadingScreen}/> : <Stack.Screen name="Login" component={LoginScreen} />}
        </Stack.Navigator >
      </NavigationContainer >
    )
  }
}


