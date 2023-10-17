import {Platform, View} from 'react-native';
import React, {useRef} from 'react';
import {AppText, AppTextInput, CustomButton, Wrapper} from '@components';
import {useTheme} from '@react-navigation/native';
import getStyles from './styles';
import {RF} from '@theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {navigate} from '@services';
import {Formik} from 'formik';
import {ForgotPasswordSchema} from '@utils';

const initialValues = {
  email: '',
};

const ForgotPassword = () => {
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme.colors);
  const formikRef: any = useRef();

  const submitHandler = () => {
    navigate('Login');
  };

  return (
    <Wrapper>
      <View style={styles.container}>
        <AppText
          size={Platform.OS === 'ios' ? 28 : 32}
          semiBold
          color={myTheme?.colors?.primary}
          style={[styles.textView]}>
          {'Forgot Password'}
        </AppText>
        <View style={styles.topPad}>
          <AppText
            size={Platform.OS === 'ios' ? 14 : 12.1}
            regular
            color={myTheme?.colors?.primary}
            style={[styles.textView1]}>
            To reset your password, please enter your email
          </AppText>
          <AppText
            center
            size={Platform.OS === 'ios' ? 14 : 12.1}
            regular
            color={myTheme?.colors?.primary}
            style={[styles.textView1, {}]}>
            address here,we'll send you a link.
          </AppText>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <>
            <Formik
              innerRef={formikRef}
              onSubmit={submitHandler}
              initialValues={initialValues}
              validationSchema={ForgotPasswordSchema}>
              {({values, errors, touched, handleChange, setFieldValue}) => (
                <View style={styles.emailView}>
                  <>
                    <AppTextInput
                      maxLength={40}
                      value={values.email}
                      title="Email Address"
                      keyboardType="email-address"
                      placeholderText="Email Address"
                      onChangeText={handleChange('email')}
                      error={touched.email && errors.email ? errors.email : ''}
                    />
                  </>
                  <View style={styles.viewBtn}>
                    <CustomButton text={'Submit'} onPress={submitHandler} />
                  </View>
                </View>
              )}
            </Formik>
          </>
        </KeyboardAwareScrollView>
      </View>
    </Wrapper>
  );
};

export default ForgotPassword;
