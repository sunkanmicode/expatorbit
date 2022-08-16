// import React from 'react';
import * as React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { FORGOTPASSWORD, LOGIN, REGISTER } from '../constants/routeNames';
import Login from "../screens/Login";
import Register from "../screens/Register"
import ForgetPassword from '../screens/ForgotPassword';


const AuthStack = createNativeStackNavigator();

const RegisterStack = ({navigation}) => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="register"
      component={Register}
      options={{headerShown: false}}
    />
    {/* <AuthStack.Screen
      name="verification"
      component={Verification}
      options={{headerShown: false}}
    /> */}
  </AuthStack.Navigator>
);

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{header: () => null}}>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={RegisterStack} />
      <AuthStack.Screen name={FORGOTPASSWORD} component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
