import { forSlideRight } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators';
import { StyleSheet } from 'react-native';
import DashboardScreen from '../screens/DashboardScreen';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  GoogleButton: {
    backgroundColor: "white",
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0.6
    },
  Google: {
    
  },
  Login: {
    color: "#777777"
  },
  TextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 150
  },
  userPhoto: {
    width: 70,
    height: 70,
    borderRadius: 35,
    position: 'absolute',
    right: 10,
    top: 10
  },
  DashboardScreen: {
  },
  photoHeader: {
  }
});