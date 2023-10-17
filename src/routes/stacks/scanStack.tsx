import React from 'react';
// import {Scan} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '@screens';

const Stack = createStackNavigator();

const ScanStack = ({route}: any) => {
  return (
    <Stack.Navigator
      // defaultScreenOptions={Scan}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Home'} component={Home} />
      {/* <Stack.Screen name="Scan" component={Scan} /> */}
    </Stack.Navigator>
  );
};

export default ScanStack;
