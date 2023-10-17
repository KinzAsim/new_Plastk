import {RF} from '@theme';
import * as React from 'react';
import {AppText} from '@components';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity} from 'react-native';

const CustomButton = ({
  text,
  onPress,
  btnStyle,
  disable,
  disabled,
  textStyle,
  children,
  bgClr,
  width,
}: {
  width?: any;
  bgClr?: any;
  text?: any;
  disable?: any;
  children?: any;
  btnStyle?: any;
  disabled?: any;
  textStyle?: any;
  onPress?: () => void;
}) => {
  const myTheme: any = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        btnStyle,
        disable && styles.disable,
        {
          backgroundColor: bgClr ? bgClr : myTheme?.colors?.primary,
          width: width ? width : RF(180),
        },
      ]}>
      <AppText
        align
        semiBold
        size={12}
        color={'white'}
        style={[styles.text, textStyle]}>
        {text}
      </AppText>

      {children}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: RF(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RF(60),
    elevation: 0,
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 0},
    marginTop: RF(10),
    marginBottom: RF(10),
    alignSelf: 'center',
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
    color: 'white',
    fontSize: RF(13),
    fontWeight: '600',
    fontFamily: 'Plus Jakarta Sans',
  },
});
