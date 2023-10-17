import React from 'react';
import {
  Home,
  Buy_Redeem_Points,
  PCA_Main,
  AddContact,
  ContactList,
  Confirmation,
  SecurityQuestion,
} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {RF} from '@theme';

const Stack = createStackNavigator();

const HomeStack = ({route, navigation}: any) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Buy_Redeem_Points') {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({
        tabBarStyle: {
          width: '90%',
          height: '8%',
          borderWidth: 0,
          borderTopWidth: 0,
          paddingBottom: RF(10),
          backgroundColor: 'white',
          justifyContent: 'center',
          alignSelf: 'center',
          borderRadius: RF(100),
          position: 'absolute',
          bottom: 15,
          left: 20,
          right: 20,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 0.5},
          shadowOpacity: 0.5,
          shadowRadius: 1,
        },
      });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Buy_Redeem_Points" component={Buy_Redeem_Points} />
      <Stack.Screen name="PCA_Main" component={PCA_Main} />
      <Stack.Screen name="PCA_AddContact" component={AddContact} />
      <Stack.Screen name="PCA_ContactList" component={ContactList} />
      <Stack.Screen name="PCA_Confiramtion" component={Confirmation} />
      <Stack.Screen name="PCA_SecurityQuestion" component={SecurityQuestion} />
    </Stack.Navigator>
  );
};

export default HomeStack;
