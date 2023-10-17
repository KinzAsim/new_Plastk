import {
  View,
  Platform,
  Pressable,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import React from 'react';
import {AppText} from '@components';
import {RF, light_grey} from '@theme';
import {useTheme} from '@react-navigation/native';

interface Props extends TextInputProps {
  title?: any;
  value?: any;
  error?: any;
  margin?: any;
  optional?: any;
  txtStyle?: any;
  txtMargin?: any;
  placeholder?: any;
  containerStyle?: any;
  onOpenBottomSheet?: any;
}

const BottomSheetOptions = (props: Partial<Props>) => {
  const {
    value,
    title,
    error,
    margin,
    txtStyle,
    optional,
    txtMargin,
    placeholder,
    containerStyle,
    onOpenBottomSheet,
  } = props;

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
              style={txtStyle}
              color={theme.colors.border}>
              {title}
            </AppText>
          )}
          <AppText style={styles.OptionalText}>{optional}</AppText>
        </View>

        <Pressable
          style={styles.iconInputContainer}
          onPress={onOpenBottomSheet}>
          <AppText style={value ? styles.txt : styles.placeHolder}>
            {value ? value : placeholder}
          </AppText>
        </Pressable>

        {!!error && (
          <AppText size={12} style={styles.errorStyle}>
            {error}
          </AppText>
        )}
      </View>
    </>
  );
};
export default BottomSheetOptions;

const styles = StyleSheet.create({
  txt: {
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
  errorStyle: {
    color: 'red',
    paddingTop: RF(3),
    paddingLeft: RF(20),
  },
  inputContainer: {
    paddingVertical: RF(10),
  },
  iconInputContainer: {
    backgroundColor: '#F9FAFB',
    height: Platform.OS === 'ios' ? RF(40) : RF(45),
    borderRadius: RF(50),
    paddingLeft: RF(10),
    paddingTop: RF(11),
    paddingRight: RF(15),
  },
  textContainer: {
    marginHorizontal: RF(20),
  },
  OptionalText: {
    color: '#4A5568',
    fontSize: RF(11),
  },
});
