import {
  View,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  TextInput as RNTextInput,
  Image,
  Platform,
} from 'react-native';
import React from 'react';
import {AppText} from '@components';
import {RF, light_grey} from '@theme';
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

const AppTextInput = (props: Partial<Props>) => {
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

  return (
    <>
      <View
        style={[
          containerStyle,
          styles.inputContainer,
          {marginTop: margin ? RF(10) : RF(0)},
        ]}>
        <View style={[styles.textContainer, {marginTop: txtMargin && RF(10)}]}>
          {title && (
            <AppText
              bold
              size={13}
              color={theme.colors.border}
              style={txtStyle}>
              {title}
            </AppText>
          )}
          <AppText style={styles.OptionalText}>{optional}</AppText>
        </View>

        <View style={styles.iconInputContainer}>
          <RNTextInput
            multiline={multiline}
            placeholder={placeholderText}
            placeholderTextColor={
              placeHolderClr ? placeHolderClr : theme.colors.border
            }
            style={
              !value
                ? styles.placeHolder
                : [
                    txtInput
                      ? txtInput
                      : multiline
                      ? styles.multilineView
                      : styles.input,
                    {
                      width,
                      textAlignVertical: multiline ? 'top' : 'center',
                      color: theme.colors.text,
                    },
                  ]
            }
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
            <TouchableOpacity
              onPress={onPress}
              style={{
                height: RF(40),
                justifyContent: 'center',
                alignItems: 'center',
                width: 40,
              }}>
              {secureTextEntry ? (
                <Image
                  source={unsecure}
                  style={{
                    resizeMode: 'contain',
                    width: 20,
                    height: 20,
                    tintColor: '#1C1C1E',
                  }}
                />
              ) : (
                <Image
                  source={secure}
                  style={{
                    resizeMode: 'contain',
                    width: 20,
                    height: 20,
                    tintColor: '#1C1C1E',
                  }}
                />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
      {!!error && (
        <AppText size={12} style={styles.errorStyle}>
          {error}
        </AppText>
      )}
    </>
  );
};
export default AppTextInput;

const styles = StyleSheet.create({
  placeHolder: {
    flex: 1,
    opacity: 0.5,
    height: RF(40),
    fontWeight: '500',
    paddingLeft: RF(15),
    borderRadius: RF(50),
    backgroundColor: light_grey,
    fontFamily: 'Plus Jakarta Sans',
    fontSize: Platform.OS === 'ios' ? RF(12) : RF(13.5),
  },
  errorStyle: {
    color: 'red',
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
    backgroundColor: '#F9FAFB',
    height: Platform.OS === 'ios' ? RF(40) : RF(45),
    borderRadius: RF(50),
    padding: 10,
  },
  multilineView: {
    backgroundColor: 'green',
    height: RF(200),
    borderRadius: 20,
    paddingLeft: RF(25),
  },
  input: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    height: RF(40),
    borderRadius: RF(50),
    fontSize: RF(13),
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
});
