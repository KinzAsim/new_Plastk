import React from 'react';
import {BAP_Promotion, BMP_Promotion, EarnRewards, Explore} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ExploreStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="BAP_Promotion" component={BAP_Promotion} />
      <Stack.Screen name="BMP_Promotion" component={BMP_Promotion} />
      <Stack.Screen name="EarnRewards" component={EarnRewards} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
