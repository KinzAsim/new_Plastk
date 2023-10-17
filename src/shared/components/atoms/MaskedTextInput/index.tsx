import React from 'react';
import {flag} from '@assets';
import {Image, Platform} from 'react-native';
import {AppText} from '@components';
import {RF, light_grey} from '@theme';
import MaskInput from 'react-native-mask-input';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, View, ViewStyle, Text} from 'react-native';

interface Props {
  icon: any;
  mask: any;
  value: any;
  error: any;
  title?: any;
  optional: any;
  maxLength?: any;
  placeholder: any;
  containerStyle: ViewStyle;
  onChangeText: (txt: any) => void;
}

const MaskedTextInput = (props: Partial<Props>) => {
  const {
    icon,
    mask,
    title,
    error,
    value,
    optional,
    maxLength,
    placeholder,
    onChangeText,
    containerStyle,
  } = props;
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme.colors);
  return (
    <>
      <View style={[styles.inputContainer, containerStyle]}>
        <View style={styles.textContainer}>
          <AppText bold>{title}</AppText>
          <View style={styles.txt}>
            <Text style={styles.OptionalText}>{optional}</Text>
          </View>
        </View>
        <View style={styles.iconInputContainer}>
          {icon && (
            <Image source={flag} resizeMode="contain" style={styles.icon} />
          )}
          <MaskInput
            mask={mask}
            value={value}
            maxLength={maxLength}
            keyboardType="phone-pad"
            placeholder={placeholder}
            onChangeText={onChangeText}
            style={value ? styles.ml : styles.placeHolder}
            placeholderTextColor={'gray'}
          />
        </View>
      </View>
      {!!error && <Text style={styles.errorStyle}>{error}</Text>}
    </>
  );
};

export default MaskedTextInput;

const getStyles = (colors: any) =>
  StyleSheet.create({
    placeHolder: {
      flex: 1,
      width: '100%',
      opacity: 0.5,
      height: RF(40),
      fontWeight: '500',
      paddingLeft: RF(15),
      borderRadius: RF(50),
      backgroundColor: light_grey,
      fontFamily: 'Plus Jakarta Sans',
      fontSize: Platform.OS === 'ios' ? RF(12) : RF(13.5),
    },
    ml: {marginLeft: 5},
    errorStyle: {
      color: 'red',
      paddingTop: 3,
      fontSize: RF(10),
      marginLeft: RF(20),
    },
    inputContainer: {},
    iconInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: light_grey,
      borderRadius: 40,
      height: RF(45),
      paddingLeft: 5,
    },
    input: {
      flex: 1,
      height: 40 > 50 ? 50 : 40,
      fontSize: 12.5,
    },
    icon: {width: RF(70), height: RF(40)},
    placeholderText: {},
    textContainer: {
      marginLeft: 20,
      marginTop: 15,
    },
    OptionalText: {
      color: '#a1c452',
      fontSize: 11,
    },
    txt: {
      flex: 1,
      alignItems: 'flex-end',
      marginRight: 10,
      paddingRight: 10,
    },
  });
