// import React from 'react';
import * as React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CONTACT_LIST, CONTACT_DETAILS, CREATE_CONTACT, SETTINGS } from '../constants/routeNames';
import Contacts from "../screens/Contacts"
import ContactDetails from '../screens/ContactDetails';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';



const HomeStack = createNativeStackNavigator();



const HomeNavigator = () => {

  return (
    <HomeStack.Navigator initialRouteName='CONTACT_LIST'>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetails} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
