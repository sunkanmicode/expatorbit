import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Timeline from '../../screens/Timeline';
import Comments from '../../screens/Comments';
import CreateTimeline from '../../screens/createTimeline';

const HomeStack = createNativeStackNavigator();
const TimelineStack = () => {
  return (
    <HomeStack.Navigator>
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
      <HomeStack.Screen
        name="Comments"
        component={Comments}
        // options={{headerShown: false}}
      />
      {/* <HomeStack.Screen
        name="Notifications"
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

export default TimelineStack;
