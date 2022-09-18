
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import GlobalProvider from './context/Provider';
import AppNarContainer from './navigations';
import {MenuProvider} from 'react-native-popup-menu';

// import { NavigationContainer } from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// const Stack = createStackNavigator();


const App  = () => {
  return (
    <MenuProvider>
      <GlobalProvider>
        <AppNarContainer />
      </GlobalProvider>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  body:{
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor: ""
  },
  
});

export default App;
