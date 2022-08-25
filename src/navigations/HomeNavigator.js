
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {  MEMBERS, SETTINGS, PROFILE, GROUPS, MESSAGES, PROFILESTACK, MESSAGESTACK, VIEWMEMBER, MEMBERSTACK } from '../constants/routeNames';
import Icon from '../conponent/CustomIcon/index'
import colors from '../assets/themes/colors';
import Groups from '../screens/Groups';
import MessageStack from '../rootScreens/MessageStack';
import MemberStack from '../rootScreens/MemberStack';
import ProfileStack from '../rootScreens/ProfileStack';



// const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();





const HomeNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="PROFILE"
      screenOptions={({route}) => ({
        header: () => null,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, size, color, type}) => {
          // console.log(route, 'route');
          let iconName;
          if (route.name === 'profile') {
            iconName = 'user';
            type = 'AntDesign';
            size = focused ? 20 : 18;
            color = focused ? colors.primary : colors.grey;
          } else if (route.name === 'Groups') {
            iconName = 'groups';
            type = 'MaterialIcons';
            color = focused ? colors.primary : colors.grey;
            size = focused ? 20 : 18;
          } else if (route.name === 'MEMBERSTACK') {
            iconName = 'user-friends';
            type = 'FontAwesome5';
            color = focused ? colors.primary : colors.grey;
            size = focused ? 20 : 18;
          } else if (route.name === 'Messages') {
            iconName = 'message';
            type = 'Entypo';
            size = focused ? 20 : 18;
            color = focused ? colors.primary : colors.grey;
          } else if (route.name === 'Setting') {
            iconName = 'logout';
            type = 'AntDesign';
            size = focused ? 20 : 18;
            color = focused ? colors.primary : colors.grey;
          }
          return <Icon type={type} name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name={PROFILE} component={ProfileStack} />
      <Tab.Screen name={GROUPS} component={Groups} />
      <Tab.Screen name={MEMBERSTACK} component={MemberStack} />
      <Tab.Screen name={MESSAGES} component={MessageStack} />
    </Tab.Navigator>
  );
};
export default HomeNavigator;
