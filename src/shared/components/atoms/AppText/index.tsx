import React from 'react';
import {RF} from '@theme';
import {
  StyleSheet,
  Text as RNText,
  TextProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

interface Props extends TextProps {
  top?: any;
  bold?: any;
  size?: any;
  right?: any;
  align?: any;
  style?: StyleProp<TextStyle>;
  color?: any;
  bolder?: any;
  center?: any;
  medium?: any;
  boldest?: any;
  regular?: any;
  semiBold?: any;
  onPress?: () => void;
  numberOfLines?: number;
  belowLine?: any;
  regular_italic?: any;
  medium_italic?: any;
}
const Text = (props: Partial<Props>) => {
  const {
    top,
    bold,
    size,
    right,
    style,
    color,
    align,
    center,
    bolder,
    medium,
    boldest,
    onPress,
    regular,
    semiBold,
    numberOfLines,
    belowLine,
    regular_italic,
    medium_italic,
  } = props;
  const myTheme = useTheme();
  return (
    <RNText
      {...props}
      onPress={onPress}
      allowFontScaling={false}
      numberOfLines={numberOfLines && numberOfLines}
      style={[
        styles.text,
        bold && styles.bold,
        right && styles.right,
        center && styles.center,
        bolder && styles.bolder,
        medium && styles.medium,
        boldest && styles.boldest,
        regular && styles.regular,
        semiBold && styles.semiBold,
        regular_italic && styles.regular_italic,
        medium_italic && styles.medium_italic,
        size && {fontSize: RF(size)},
        {color: color ? color : myTheme.colors.border},
        align && {textAlign: 'center'},
        top && {marginTop: RF(25)},
        belowLine && {textDecorationLine: 'underline'},
        style,
      ]}>
      {props.children}
    </RNText>
  );
};
export default Text;

const styles = StyleSheet.create({
  text: {
    fontSize: RF(12.5),
    fontFamily: 'Plus Jakarta Sans',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  regular: {
    fontFamily: 'PlusJakartaSans-Regular',
  },
  medium: {
    fontFamily: 'PlusJakartaSans-Medium',
  },
  medium_italic: {
    fontFamily: 'PlusJakartaSans-MediumItalic',
  },
  semiBold: {
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  bold: {
    fontFamily: 'PlusJakartaSans-Bold',
  },
  bolder: {
    fontFamily: 'PlusJakartaSans-ExtraBold',
  },
  boldest: {
    fontFamily: 'PlusJakartaSans-ExtraBoldItalic',
  },
  regular_italic: {
    fontFamily: 'PlusJakartaSans-Italic',
  },
});
