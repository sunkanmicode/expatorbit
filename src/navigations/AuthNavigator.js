// import React from 'react';
import * as React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { LOGIN, REGISTER } from '../constants/routeNames';
import Login from "../screens/Login";
import Register from "../screens/Register"


const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{header:()=> null}}>
      <AuthStack.Screen
        name={LOGIN}
        component={Login}
      />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
