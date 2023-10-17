import {store} from '@redux';
import Routes from './src/routes';
import {Provider} from 'react-redux';
import {getDataFromUserDefaults, navigationRef} from '@services';
import React, {useState, useEffect} from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SCREEN_HEIGHT, darkThemeStyle, defaultTheme} from '@theme';
import {EventRegister} from 'react-native-event-listeners';
import {setIsDarkModeEnabled} from '@utils';

const App = () => {
  const colorScheme = useColorScheme();
  const [active, setActive] = useState<Boolean>(false);
  const [isEnabledOne, setIsEnabledOne] = useState<Boolean>(false);
  let appTheme = isEnabledOne ? darkThemeStyle : defaultTheme;
  useEffect(() => {
    let listener = EventRegister.addEventListener('appThemeChange', data => {
      setIsEnabledOne(data);
    });
    return () => {
      EventRegister.removeEventListener(listener as any);
    };
  }, []);

  useEffect(() => {
    (async () => {
      let isEnabled = await getDataFromUserDefaults('THEME_KEY');

      if (
        (isEnabled !== undefined && isEnabled === 'true') ||
        (isEnabled === undefined && colorScheme === 'dark')
      ) {
        setIsEnabledOne(true);
        setIsDarkModeEnabled(true);
        appTheme = darkThemeStyle;
        console.log('dark_mode');
      } else {
        console.log('light_mode');
      }
    })();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer theme={appTheme as any} ref={navigationRef}>
          <Routes />
          {/* {!active ? <Splash_Screen /> : <Routes />} */}
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;
