import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Profile} from '@screens';

const Stack = createStackNavigator();

const ProfileStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
