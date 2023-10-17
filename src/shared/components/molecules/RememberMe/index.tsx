import React from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {RF, ligh_green} from '@theme';
import {View, StyleSheet, Pressable, ViewStyle, Platform} from 'react-native';
import {AppText} from '@components';
import {useTheme} from '@react-navigation/native';

const RememberMe = ({
  onPressForgotPass,
  title,
  style,
  onPress,
  onClick,
  viewStyle,
  rememberMe,
  theme,
  onToggle,
  isEnabled,
  storeTheme,
  isToggle,
}: {
  title?: any;
  style?: any;
  rememberMe?: any;
  onPress?: () => void;
  onClick?: () => void;
  viewStyle?: ViewStyle;
  onPressForgotPass?: () => void;
  theme?: any;
  onToggle?: any;
  isEnabled?: any;
  storeTheme?: any;
  isToggle?: any;
}) => {
  const mytheme: any = useTheme();

  return (
    <View style={[styles.forgotView, viewStyle]}>
      <View style={[viewStyle, styles.toggle]}>
        <ToggleSwitch
          onColor={ligh_green}
          offColor={'#dcdcdc'}
          isOn={isToggle}
          onToggle={onPress}
          size="medium"
        />
        <AppText style={[styles.txt, style]}>{title}</AppText>
      </View>

      {rememberMe && (
        <Pressable onPress={onClick}>
          <AppText
            semiBold
            color={mytheme.colors?.border}
            style={styles.passwordText}
            onPress={onPressForgotPass}>
            Forgot Password
          </AppText>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  toggle: {
    marginLeft: RF(10),
    flexDirection: 'row',
    paddingTop: RF(12),
  },
  passwordText: {
    fontWeight: '600',
    marginRight: RF(25),
    fontFamily: 'Plus Jakarta Sans',
    fontSize: Platform.OS === 'ios' ? RF(11) : RF(12),
    marginTop: RF(15),
  },
  forgotView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: RF(5),
  },
  txt: {
    fontWeight: '600',
    color: '#4A5568',
    fontSize: Platform.OS === 'ios' ? RF(11) : RF(12),
    alignSelf: 'center',
    fontFamily: 'Plus Jakarta Sans',
    marginLeft: RF(10),
  },
});

export default RememberMe;
