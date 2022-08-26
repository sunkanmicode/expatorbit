import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Messages from '../../screens/Messages';
import Chat from '../../screens/Chat';
const HomeStack = createNativeStackNavigator();

const MessageStack
 = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Message"
        component={Messages}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="Chat" component={Chat} />
    </HomeStack.Navigator>
  );
}

export default MessageStack
