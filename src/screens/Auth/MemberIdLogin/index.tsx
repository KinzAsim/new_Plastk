import {
  AppText,
  RememberMe,
  AppTextInput,
  SignUp_Section,
  SocialLoginBtn,
  TextSection,
  Wrapper,
} from '@components';
import {Formik} from 'formik';
import useStyles from './style';
import {LoginSchema} from '@utils';
import React, {useState} from 'react';
import {fb, g_logo, ios, verify} from '@assets';
import {useTheme} from '@react-navigation/native';
import {View, Text, ScrollView, Image} from 'react-native';
import {GST} from '../../../shared/theme/globalStyles';
import {navigate} from '@services';

export default function MemberID_Login() {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const [secureEntry, setSecureEntry] = useState<Boolean>(true);
  const [modalVisible, setModalVisible] = useState<Boolean>(true);
  const [rememberEmail, setRememberEmail] = useState<Boolean>(true);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const onPressToggleButton = () => {
    setRememberEmail(!rememberEmail);
  };
  const onClick = () => {};
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleSecureEntry = () => {
    setSecureEntry(!secureEntry);
  };
  const updateSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const onHandleSubmit = () => {
    navigate('VerifyGetStarted');
  };

  const initialValues = {
    email: '',
    password: '',
  };
  const submitHandler = (values: any) => {
    let params = {
      email: values?.email,
      password: values?.password,
    };
  };
  const onBackToLogin = () => {
    navigate('Login');
  };
  const onSignUp = () => {
    navigate('MemberID_SignUp');
  };

  return (
    <Wrapper>
      <ScrollView
        style={[{...GST.MAIN}]}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <Formik
          onSubmit={submitHandler}
          initialValues={initialValues}
          validationSchema={LoginSchema}>
          {({values, errors, touched, handleChange}) => (
            <View style={[styles.wrapContainer]}>
              <TextSection
                top={25}
                wdContent={200}
                title={'Get Started'}
                content={
                  'If you already have a Rewards App account, sign in here'
                }
              />
              <Image source={verify} style={styles.img} />
              <View style={styles.emailView}>
                <AppTextInput
                  title="Email"
                  maxLength={40}
                  value={values.email}
                  keyboardType="email-address"
                  placeholderText={'Email Address'}
                  onChangeText={handleChange('email')}
                  error={touched.email && errors.email ? errors.email : ''}
                />
                <AppTextInput
                  _secure
                  maxLength={25}
                  title="Password"
                  value={values.password}
                  keyboardType="email-address"
                  placeholderText={'Password'}
                  onPress={updateSecureTextEntry}
                  secureTextEntry={secureTextEntry}
                  onChangeText={handleChange('password')}
                />

                <RememberMe
                  rememberMe
                  onClick={onClick}
                  title={'Remember Me'}
                  isToggle={rememberEmail}
                  onPress={onPressToggleButton}
                />

                <SignUp_Section
                  mt={10}
                  onSignUp={onSignUp}
                  title={'Back to Login'}
                  handleSubmit={onHandleSubmit}
                  onAlreadyAccount={onBackToLogin}
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </Wrapper>
  );
}
