import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../../screens/Profile';
import ProfileEdit from '../../screens/ProfileEdit';
import Timeline from '../../screens/Timeline';
import CreateTimeline from '../../screens/createTimeline';


const HomeStack = createNativeStackNavigator();
const ProfileStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Timeline"
        component={Timeline}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="CreateTimeline"
        component={CreateTimeline}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

export default ProfileStack