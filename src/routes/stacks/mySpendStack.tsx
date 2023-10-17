import React from 'react';
import {MySpend} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MySpendStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MySpend" component={MySpend} />
    </Stack.Navigator>
  );
};

export default MySpendStack;
