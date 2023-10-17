import React from 'react';
import {Sentinel} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const SentinelStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Sentinel" component={Sentinel} />
    </Stack.Navigator>
  );
};

export default SentinelStack;
