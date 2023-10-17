import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import * as React from 'react';
import AppText from '../../atoms/AppText';
import {RF, Typography} from '@theme';
import {useTheme} from '@react-navigation/native';

interface Props extends TouchableOpacityProps {
  clr?: any;
  title?: any;
  bgColor?: any;
  disableBackgroundColor?: any;
  buttonStyle?: StyleProp<ViewStyle>;
}

const PrimaryButton = (props: Props) => {
  const colorTheme: any = useTheme();
  const {disableBackgroundColor, bgColor, buttonStyle, title, clr} = props;
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.container,
        buttonStyle,
        {
          backgroundColor: bgColor ? bgColor : colorTheme?.colors?.primary,
          borderColor:
            !disableBackgroundColor == false ? '' : colorTheme?.colors?.border,
          borderWidth: !disableBackgroundColor == false ? 0.2 : 0,
        },
      ]}>
      <AppText
        medium
        size={Typography.FONTS.SIZE.XXSMALL}
        color={clr ? clr : colorTheme?.colors?.white}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    width: RF(180),
    height: RF(55),
    borderRadius: RF(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: RF(13),
  },
});
