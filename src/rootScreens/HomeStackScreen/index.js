import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Invite from '../../screens/Invite';
import Notifications from '../../screens/Notifications';

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Invite"
        component={Invite}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
      {/* <HomeStack.Screen
        name="CreateTimeline"
        component={CreateTimeline}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Media"
        component={Media}
        options={{headerShown: false}}
      /> */}
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
