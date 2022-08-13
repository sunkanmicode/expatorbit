import React from 'react'
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import  FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Member page</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Group page</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile page</Text>
    </View>
  );
}
function MoreScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>MOre page</Text>
    </View>
  );
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{header: () => null}}>
    {/* // <Tab.Navigator
    //   screenOptions={({route}) => ({
    //     header: () => null,
    //     tabBarIcon:({focused, size, color})=>{
    //         let iconName;
    //         if(route.name === "Home23"){

    //         }else if(route.name === "Settings24"){

    //         }else if(route.name ==="Profile"){

    //         }else if(route.name === "More"){

    //         }
    //   })}
    //   > */}
      <Tab.Screen name="Home23" component={HomeScreen} />
      <Tab.Screen name="Settings24" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator
