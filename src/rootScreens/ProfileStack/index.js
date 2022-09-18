import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../../screens/Profile';
import ProfileEdit from '../../screens/ProfileEdit';
// import Timeline from '../../screens/Timeline';
// import CreateTimeline from '../../screens/createTimeline';
import Media from '../../screens/Media';
import Members from '../../screens/Members';
import ViewMemberInfo from '../../screens/ViewMeberInfo';
import MemberStack from '../MemberStack';


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
        name="MemberStack"
        component={MemberStack}
        options={{headerShown: false}}
      />

      {/* <HomeStack.Screen
        name="Members"
        component={Members}
        options={{headerShown: false}}
      /> */}
      {/* <HomeStack.Screen
        name="ViewMemberInfo"
        component={ViewMemberInfo}
        options={{headerShown: false}}
      /> */}
      {/* <HomeStack.Screen
        name="CreateTimeline"
        component={CreateTimeline}
        options={{headerShown: false}}
      /> */}
      <HomeStack.Screen
        name="Media"
        component={Media}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

export default ProfileStack