import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Members from '../../screens/Members';
import ViewMember from '../../screens/ViewMember';
import { MEMBERS, VIEWMEMBER } from '../../constants/routeNames';

const HomeStack = createNativeStackNavigator();
const MemberStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={MEMBERS}
        component={Members}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={VIEWMEMBER}
        component={ViewMember}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

export default MemberStack