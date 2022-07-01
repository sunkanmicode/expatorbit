// import React from "react"
import  React, { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import AuthNavigator from './AuthNavigator';
import { GlobalContext } from '../context/Provider';

const AppNarContainer = ()=>{
  // const isLoggedIn = true;

  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  console.log(isLoggedIn, 'isLoggedIn');



      return (
        <NavigationContainer>
          {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      );
}
export default AppNarContainer;