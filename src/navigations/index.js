// import React from "react"
import React, {useContext, useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, ImageBackground} from 'react-native';

import getUserId from '../context/actions/expatsActions/getUserId';

const AppNarContainer = () => {
   const {
     expatsDispatch,
     expatsState:{getUser_Id, isLoading}
   } = useContext(GlobalContext);
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
  const [authLoad, setAuthLoad] = useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      const token = await AsyncStorage.getItem('token');
      console.log({user,token}, 'user200')

      if (user || token) {
        setAuthLoad(true);
        setIsAuthenticated(true);
      } else {
        setAuthLoad(true);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getUser();
    getUserId()(expatsDispatch);
  }, []);

  
  useEffect(() => {
    if (authLoad) {
      SplashScreen.hide();
    }
  }, [authLoad]);

  console.log(isLoggedIn, 'isLoggedIn');

  console.log(isAuthenticated, 'isLoggedIn22');

  return (
    <>
      {authLoad ? (
        <NavigationContainer>
          {isLoggedIn || isAuthenticated ? (
            <DrawerNavigator />
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      ) : ( null
        // <ActivityIndicator style={{flex: 1}} />
        // <VideoPlayer
        //   resizeMode="cover"
        //   hideShutterView={true}
        //   // paused={true}
        //   source={require('../assets/videos/expat.mp4')}
        //   // controls={true}
        //   style={{width: '100%', height: '100%'}}
        //   // style={styles.mediaBox}
        // />
      )}
    </>
  );
};
export default AppNarContainer;
