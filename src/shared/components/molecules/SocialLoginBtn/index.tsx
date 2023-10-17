import * as React from 'react';
import {Image, Platform, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {RF} from '@theme';
import {AppText} from '@components';

const SocialLoginBtn = ({
  title,
  onPress,
  btnStyle,
  disable,
  disabled,
  textStyle,
  children,
  bgClr,
  width,
  src,
  textColor,
}: {
  src?: any;
  width?: any;
  bgClr?: any;
  title?: any;
  disable?: any;
  children?: any;
  btnStyle?: any;
  disabled?: any;
  textStyle?: any;
  textColor?: any;
  onPress?: () => void;
}) => {
  const mytheme: any = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        btnStyle,
        disable && styles.disable,
        {
          backgroundColor: bgClr ? bgClr : mytheme.colors.toggleColor,
          width: width ? width : Platform.OS === 'ios' ? RF(268) : RF(310),
        },
      ]}>
      <Image source={src} style={styles.img} />
      <AppText
        style={[styles.text, textStyle]}
        size={13}
        medium
        color={textColor ? mytheme.colors.border : mytheme.colors.white}>
        {title}
      </AppText>
      {children}
    </TouchableOpacity>
  );
};

export default SocialLoginBtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: RF(40),
    alignItems: 'center',
    borderRadius: RF(6),
    elevation: 3,
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 0},
    marginTop: RF(10),
    marginBottom: RF(10),
    alignSelf: 'center',
    paddingLeft: 20,
  },
  disable: {
    flexDirection: 'row',
    width: '100%',
    height: RF(50),
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RF(10),
    elevation: 3,
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 0},
    marginTop: RF(10),
  },
  text: {
    fontSize: RF(12),
  },
  img: {
    resizeMode: 'contain',
    width: RF(15),
    height: RF(15),
    marginRight: RF(10),
  },
});
