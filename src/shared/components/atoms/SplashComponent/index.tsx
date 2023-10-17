import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {SCREEN_HEIGHT, Typography} from '@theme';
import {splash_logo} from '@assets';

const SplashComponent = () => {
  return (
    <View style={style.main}>
      <Image source={splash_logo} style={[style.appLogo]} />
    </View>
  );
};

export default SplashComponent;

const style = StyleSheet.create({
  appLogo: {
    height: SCREEN_HEIGHT / 4,
    resizeMode: 'contain',
  },
  loadingText: {
    fontSize: Typography.FONTS.SIZE.MEDIUM,
    fontFamily: Typography.FONTS.TYPE.LIGHT,
    fontWeight: '700',
    paddingTop: Typography.PADDING.NORMAL,
  },
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
