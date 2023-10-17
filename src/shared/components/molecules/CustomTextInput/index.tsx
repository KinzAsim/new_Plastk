import {
  View,
  Image,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  TextInput as RNTextInput,
} from 'react-native';
import React from 'react';
import {AppText} from '@components';
import {RF, Typography} from '@theme';
import {secure, unsecure} from '@assets';
import {useTheme} from '@react-navigation/native';

interface Props extends TextInputProps {
  txtStyle?: any;
  width?: any;
  title?: any;
  value?: any;
  error?: any;
  margin?: any;
  _secure?: any;
  onPress?: any;
  optional?: any;
  txtMargin?: any;
  txtInput?: any;
  multiline?: any;
  maxLength?: any;
  isEditable?: any;
  keyboardType?: any;
  defaultValue?: any;
  onChangeText?: any;
  placeHolderClr?: any;
  containerStyle?: any;
  onSubmitEditing?: any;
  placeholderText?: any;
  secureTextEntry?: any;
}

const CustomTextInput = (props: Partial<Props>) => {
  const {
    txtStyle,
    title,
    width,
    value,
    error,
    margin,
    onPress,
    _secure,
    optional,
    txtMargin,
    txtInput,
    maxLength,
    multiline,
    isEditable,
    keyboardType,
    defaultValue,
    onChangeText,
    containerStyle,
    placeholderText,
    placeHolderClr,
    secureTextEntry,
    onSubmitEditing,
  } = props;
  let maxLen = maxLength === undefined ? 100 : maxLength;
  let editable = isEditable === undefined ? true : isEditable;
  const theme: any = useTheme();
  const styles = getStyles(theme.colors);

  return (
    <>
      <View
        style={[
          containerStyle,
          styles.inputContainer,
          {marginTop: margin ? RF(10) : RF(5)},
        ]}>
        <View style={[styles.textContainer, {marginTop: txtMargin && RF(10)}]}>
          {title && (
            <AppText
              bold
              size={Typography.FONTS.SIZE.LARGE}
              color={theme.colors.light_grey}
              style={txtStyle}>
              {title}
            </AppText>
          )}
          <AppText style={styles.OptionalText}>{optional}</AppText>
          <AppText></AppText>
        </View>

        <View style={styles.iconInputContainer}>
          <RNTextInput
            multiline={multiline}
            placeholder={placeholderText}
            placeholderTextColor={
              placeHolderClr ? placeHolderClr : theme.colors.border
            }
            style={[
              txtInput
                ? txtInput
                : multiline
                ? styles.multilineView
                : styles.input,
              {
                width,
                textAlignVertical: multiline ? 'top' : 'center',
                color: theme.colors.border,
              },
            ]}
            value={value}
            maxLength={maxLen}
            editable={editable}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            defaultValue={defaultValue}
            secureTextEntry={secureTextEntry}
            onSubmitEditing={onSubmitEditing}
          />
          {_secure && (
            <TouchableOpacity onPress={onPress} style={styles.secureView}>
              {secureTextEntry ? (
                <Image source={unsecure} style={styles.secureImage} />
              ) : (
                <Image source={secure} style={styles.secureImage} />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
      {!!error && (
        <AppText size={Typography.FONTS.SIZE.MEDIUM} style={styles.errorStyle}>
          {error}
        </AppText>
      )}
    </>
  );
};
export default CustomTextInput;

const getStyles = (colors: any) =>
  StyleSheet.create({
    errorStyle: {
      color: colors.toggleColor,
      paddingTop: RF(3),
      paddingLeft: RF(20),
    },
    txt: {
      flex: 1,
      alignItems: 'flex-end',
      marginRight: RF(10),
      paddingRight: RF(10),
    },
    inputContainer: {
      paddingVertical: RF(10),
    },
    iconInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.light_grey,
      height: RF(45),
      borderRadius: RF(50),
      padding: 10,
    },
    multilineView: {
      backgroundColor: colors.border,
      height: RF(200),
      borderRadius: 20,
      paddingLeft: RF(25),
    },
    input: {
      flex: 1,
      backgroundColor: colors.light_grey,
      height: RF(40),
      borderRadius: RF(50),
      fontSize: RF(12.5),
      opacity: 1,
      paddingLeft: RF(15),
      fontWeight: '500',
      fontFamily: 'Plus Jakarta Sans',
    },
    icon: {
      marginRight: RF(5),
    },
    placeholderText: {},
    textContainer: {
      marginHorizontal: RF(20),
    },
    OptionalText: {
      color: '#4A5568',
      fontSize: RF(11),
    },
    secureImage: {
      resizeMode: 'contain',
      width: 20,
      height: 20,
      tintColor: '#1C1C1E',
    },
    secureView: {
      height: RF(40),
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
    },
  });
