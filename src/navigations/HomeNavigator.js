
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {  MEMBERS, SETTINGS, PROFILE, GROUPS, MESSAGES, PROFILESTACK, MESSAGESTACK, VIEWMEMBER, MEMBERSTACK, INVITE, HOMESTACKSCREEN, TIMELINESTACK, MESSAGESSTACK, ACCOUNTSTACK } from '../constants/routeNames';
import Icon from '../conponent/CustomIcon/index'
import colors from '../assets/themes/colors';
import Groups from '../screens/Groups';
import MessageStack from '../rootScreens/MessageStack';
import MemberStack from '../rootScreens/MemberStack';
import ProfileStack from '../rootScreens/ProfileStack';
import Invite from '../screens/Invite';
import HomeStackScreen from '../rootScreens/HomeStackScreen';
import TimelineStack from '../rootScreens/TimelineStack';
import Account from '../screens/Account';
import AccountStack from '../rootScreens/AccountStack';



// const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();





const HomeNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HOMESTACKSCREEN"
      screenOptions={({route}) => ({
        header: () => null,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, size, color, type}) => {
          // console.log(route, 'route');
          let iconName;
          if (route.name === 'HOMESTACKSCREEN') {
            iconName = 'home';
            type = 'Entypo';
            size = focused ? 20 : 18;
            color = focused ? colors.primary : colors.grey;
          } else if (route.name === 'TIMELINESTACK') {
            iconName = 'compass';
            type = 'Ionicons';
            color = focused ? colors.primary : colors.grey;
            size = focused ? 20 : 18;
          } else if (route.name === 'MESSAGESSTACK') {
            iconName = 'envelope';
            type = 'FontAwesome';
            size = focused ? 20 : 18;
            color = focused ? colors.primary : colors.grey;
          } else if (route.name === 'ACCOUNTSTACK') {
            iconName = 'user';
            type = 'Entypo';
            size = focused ? 20 : 18;
            color = focused ? colors.primary : colors.grey;
          }
          return <Icon type={type} name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="HOMESTACKSCREEN" component={HomeStackScreen} />
      <Tab.Screen name={TIMELINESTACK} component={TimelineStack} />
      <Tab.Screen name="MESSAGESSTACK" component={MessageStack} />
      <Tab.Screen name="ACCOUNTSTACK" component={AccountStack} />

      {/* 
      <Tab.Screen name={PROFILE} component={ProfileStack} />
      <Tab.Screen name={GROUPS} component={Groups} />
      <Tab.Screen name={MEMBERSTACK} component={MemberStack} /> */}
      {/* <Tab.Screen name={INVITE} component={Invite} /> */}
    </Tab.Navigator>
  );
};
export default HomeNavigator;
