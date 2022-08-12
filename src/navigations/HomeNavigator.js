// import React from 'react';
import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {  MEMBERS, SETTINGS, PROFILE, GROUPS, MESSAGES } from '../constants/routeNames';
import Profile from '../screens/Profile';
// import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from '../conponent/CustomIcon/index'
import colors from '../assets/themes/colors';
import Groups from '../screens/Groups';
import Members from '../screens/Members';
import Messages from '../screens/Messages';
import Chat from '../screens/Chat';



const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const MessageStack = ({navigation}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Message"
      component={Messages}
      options={{headerShown: false}}
    />
    <HomeStack.Screen
      name="Chat"
      component={Chat}
    />
  </HomeStack.Navigator>
);

const MembersStack = ({navigation}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="members"
      component={Members}
      options={{headerShown: false}}
    />
    <HomeStack.Screen
      name="profile"
      component={Profile}
      options={{headerShown: false}}
    />
  </HomeStack.Navigator>
);


const HomeNavigator = () => {

  return (
    <Tab.Navigator
      initialRouteName="PROFILE"
      screenOptions={({route}) => ({
        header: () => null,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, size, color}) => {
          // console.log(route, 'route');
          let iconName;
          if (route.name === 'profile') {
            iconName = 'user';
            size = focused ? 20 : 18;
            color = focused ? colors.primary : colors.grey;
          } else if (route.name === 'Groups') {
            iconName = 'users';
            color = focused ? colors.primary : colors.grey;
            size = focused ? 20 : 18;
          } else if (route.name === 'MEMBERS') {
            iconName = 'user';
            color = focused ? colors.primary : colors.grey;
            size = focused ? 20 : 18;
          } else if (route.name === 'Messages') {
            iconName = 'wechat';
            size = focused ? 20 : 18;
            color = focused ? colors.primary : colors.grey;
          } else if (route.name === 'Setting') {
            iconName = 'sign-out-alt';
            size = focused ? 20 : 18;
            color = focused ? colors.primary : colors.grey;
          }
          return (
            <Icon
              type="FontAwesome"
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}>
      {/* <Tab.Screen name={PROFILE} component={Profile} /> */}
      <Tab.Screen name={GROUPS} component={Groups} />
      <Tab.Screen name={MEMBERS} component={MembersStack} />
      <Tab.Screen name={MESSAGES} component={MessageStack} />
    </Tab.Navigator>
  );
};
export default HomeNavigator;
