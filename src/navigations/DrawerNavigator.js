// import React from 'react';
import * as React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import { HOMENAVIGATOR } from '../constants/routeNames';



const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {



  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={HOMENAVIGATOR}
        component={HomeNavigator}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
