import React, {useState} from 'react';
import MainTabs from './tabs/mainTabs';
import {useSelector} from 'react-redux';
import AuthStack from './stacks/authStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Routes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(true);
  // const {isLoggedIn} = useSelector((state: any) => state.root.user);

  return (
    <SafeAreaProvider>
      {isLoggedIn ? <MainTabs /> : <AuthStack />}
    </SafeAreaProvider>
  );
};

export default Routes;
