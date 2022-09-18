import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Timeline from '../../screens/Timeline';
import Comments from '../../screens/Comments';
import Account from '../../screens/Account';
import Profile from '../../screens/Profile';
import ProfileStack from '../ProfileStack';

const HomeStack = createNativeStackNavigator();
const AccountStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
      {/* <HomeStack.Screen
        name="Notification"
        component={Notifications}
        options={{headerShown: false}}
      /> */}
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

export default AccountStack;
