import React from 'react';
import {StyleSheet, View} from 'react-native';
import {hasNotch} from 'react-native-device-info';
import {useTheme} from '@react-navigation/native';
import {isIOS} from '@theme';

interface NotchViewProps {
  colors: any;
}

const NotchView = (props: Partial<NotchViewProps>) => {
  const myTheme: any = useTheme();
  return isIOS ? (
    <View
      style={[styles.notchView, {backgroundColor: myTheme?.colors.white}]}
    />
  ) : null;
};

const styles = StyleSheet.create({
  notchView: {
    width: '100%',
    height: hasNotch() ? 35 : 20,
  },
});
export default NotchView;
