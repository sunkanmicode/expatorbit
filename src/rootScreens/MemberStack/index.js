import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Members from '../../screens/Members';
import ViewMember from '../../screens/ViewMember';
// import { MEMBERS, VIEWMEMBER } from '../../constants/routeNames';
import ViewMemberInfo from '../../screens/ViewMeberInfo';

const HomeStack = createNativeStackNavigator();
const MemberStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Members"
        component={Members}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name='ViewMember'
        component={ViewMember}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="ViewMemberInfo"
        component={ViewMemberInfo}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

export default MemberStack