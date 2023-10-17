import React from 'react';
import {GST, RF} from '@theme';
import {navigate} from '@services';
import {CustomButton, AppText} from '@components';
import {useTheme} from '@react-navigation/native';
import {View, Pressable, StyleSheet} from 'react-native';

const SignUp_Section = ({
  handleSubmit,
  title,
  onAlreadyAccount,
  mt,
  onSignUp,
}: {
  mt?: any;
  handleSubmit?: any;
  title?: any;
  onAlreadyAccount?: any;
  onSignUp?: any;
}) => {
  const mytheme: any = useTheme();

  return (
    <View style={[styles.viewBtn, {marginTop: mt ? mt : RF(30)}]}>
      <CustomButton
        text={'Sign In'}
        onPress={handleSubmit}
        textStyle={styles.txt}
      />

      <View style={[styles.view, styles.padTop10]}>
        <AppText color={mytheme.colors.text} medium size={13}>
          Don’t Have an Account?{''}
        </AppText>
        <Pressable
          onPress={onSignUp}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <AppText color={mytheme.colors.light_blue} medium size={14}>
            Sign Up
          </AppText>
        </Pressable>
      </View>
      <View style={[GST.CENTER, styles.padTop10]}>
        <Pressable
          onPress={onAlreadyAccount}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <AppText color={mytheme.colors.light_blue} medium size={14}>
            {title ? title : 'Already a Rewards Member?'}
          </AppText>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBtn: {
    width: '100%',

    alignSelf: 'center',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txt: {fontSize: RF(14), fontWeight: '600'},
  padTop10: {
    paddingTop: RF(15),
  },
});

export default SignUp_Section;
