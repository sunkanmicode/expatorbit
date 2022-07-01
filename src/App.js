
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

// import { NavigationContainer } from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// const Stack = createStackNavigator();


const App  = () => {
  return (
    <GlobalProvider>
      <AppNarContainer />
    </GlobalProvider>
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
