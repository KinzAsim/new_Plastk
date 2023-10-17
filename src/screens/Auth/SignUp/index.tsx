import {
  AppText,
  Wrapper,
  TextSection,
  AppTextInput,
  CustomButton,
} from '@components';
import {RF} from '@theme';
import {Formik} from 'formik';
import styles from './styles';
import {View} from 'react-native';
import {navigate} from '@services';
import {SignUpSchema} from '@utils';
import React, {useRef, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const initialValues = {
  email: '',
  lastName: '',
  password: '',
  firstName: '',
  confirmPassword: '',
};

export default function SignUp() {
  const myTheme: any = useTheme();
  const formikRef: any = useRef();
  const [securePassword, setSecurePassword] = useState(true);
  const [secure_CPassword, setSecure_CPassword] = useState(true);

  const submitHandler = () => {
    navigate('EmailVerification');
  };
  const onOpenSheet = () => {};
  const updateSecureTextEntry = (type: any) => {
    if (type === 'p') {
      setSecurePassword(!securePassword);
    }
    if (type === 'cp') {
      setSecure_CPassword(!secure_CPassword);
    }
  };
  const onHandleClick_Password = () => {};

  return (
    <Wrapper>
      <TextSection
        title={'Get Started'}
        content={'Create your account'}
        wd={RF(190)}
      />
      <Section
        myTheme={myTheme}
        formikRef={formikRef}
        onOpenSheet={onOpenSheet}
        submitHandler={submitHandler}
        securePassword={securePassword}
        secure_CPassword={secure_CPassword}
        updateSecureTextEntry={updateSecureTextEntry}
        onHandleClick_Password={onHandleClick_Password}
      />
    </Wrapper>
  );
}

const Section = ({
  myTheme,
  formikRef,
  onOpenSheet,
  submitHandler,
  securePassword,
  secure_CPassword,
  isKeyboardVisible,
  updateSecureTextEntry,
  onHandleClick_Password,
}: {
  myTheme?: any;
  formikRef?: any;
  onOpenSheet?: any;
  submitHandler?: any;
  securePassword?: any;
  secure_CPassword?: any;
  isKeyboardVisible?: any;
  updateSecureTextEntry?: any;
  onHandleClick_Password?: any;
}) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: RF(35),
        marginHorizontal: RF(20),
        marginBottom: isKeyboardVisible ? 150 : 0,
      }}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <>
          <Formik
            innerRef={formikRef}
            onSubmit={submitHandler}
            initialValues={initialValues}
            validationSchema={SignUpSchema}>
            {({values, errors, touched, handleChange, setFieldValue}) => (
              <View style={styles.emailView}>
                <>
                  <AppTextInput
                    maxLength={20}
                    title="First Name *"
                    value={values.firstName}
                    placeholderText="First Name"
                    onChangeText={handleChange('firstName')}
                    error={
                      touched.firstName && errors.firstName
                        ? errors.firstName
                        : ''
                    }
                  />
                  <AppTextInput
                    maxLength={20}
                    title="Middle Name"
                    // value={firstCapitalize(values.middleName)}
                    placeholderText="Middle Name"
                    onChangeText={handleChange('middleName')}
                  />
                  <AppTextInput
                    title="Last Name *"
                    maxLength={20}
                    value={values.lastName}
                    placeholderText="Last Name"
                    onChangeText={handleChange('lastName')}
                    error={
                      touched.lastName && errors.lastName ? errors.lastName : ''
                    }
                  />
                  <AppTextInput
                    maxLength={40}
                    value={values.email}
                    title="Email Address"
                    keyboardType="email-address"
                    placeholderText="Email Address"
                    onChangeText={handleChange('email')}
                    error={touched.email && errors.email ? errors.email : ''}
                  />

                  <AppTextInput
                    _secure
                    txtMargin
                    maxLength={25}
                    title="Password"
                    value={values.password}
                    onPress={() => updateSecureTextEntry('p')}
                    placeholderText="Password"
                    secureTextEntry={securePassword}
                    onChangeText={handleChange('password')}
                    error={
                      touched.password && errors.password ? errors.password : ''
                    }
                  />
                  <AppTextInput
                    _secure
                    maxLength={25}
                    title="Confirm Password"
                    value={values.confirmPassword}
                    placeholderText="Password"
                    secureTextEntry={secure_CPassword}
                    onPress={() => updateSecureTextEntry('cp')}
                    onChangeText={handleChange('confirmPassword')}
                    error={
                      touched.confirmPassword && errors.confirmPassword
                        ? errors.confirmPassword
                        : ''
                    }
                  />
                </>
                <View style={styles.viewBtn}>
                  <CustomButton text={'Next'} onPress={submitHandler} />
                  <View style={styles.view}>
                    <AppText
                      color={myTheme?.colors?.text}
                      semiBold
                      size={12}
                      onPress={() => {
                        navigate('Login');
                      }}>
                      Cancel
                    </AppText>
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </>
      </KeyboardAwareScrollView>
    </View>
  );
};

{
  /* <AppText
                      bold
                      size={12}
                      color={txt_gray}
                      style={styles.text}>
                      Home Address *
                    </AppText>

                    <Pressable style={styles.sheet} onPress={onOpenSheet}>
                      <AppText style={styles.addres} numberOfLines={1}>
                        {values?.address ? values?.address : 'Home Address'}
                      </AppText>
                      {touched.address && errors.address ? (
                        <AppText style={styles.errorStyle}>
                          {errors.address}
                        </AppText>
                      ) : null}
                    </Pressable> */
}
