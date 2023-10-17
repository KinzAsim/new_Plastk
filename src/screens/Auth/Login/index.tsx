import {
  Wrapper,
  RememberMe,
  TextSection,
  BottomSheet,
  AppTextInput,
  SignUp_Section,
  SocialLoginBtn,
  FingerprintVerification,
} from '@components';
import {GST} from '@theme';
import {Formik} from 'formik';
import useStyles from './style';
import {navigate} from '@services';
import React, {useState} from 'react';
import {fb, g_logo, ios} from '@assets';
import {useTheme} from '@react-navigation/native';
import {View, Text, ScrollView} from 'react-native';
import {LoginSchema, verfiaction_options} from '@utils';
import {setIsLoggedIn} from '@redux';
import {useDispatch} from 'react-redux';

export default function Login({navigation}: any) {
  const dispatch: any = useDispatch();
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [showVerification, setShowVerification] = useState(false);
  const [modalVisible, setModalVisible] = useState<Boolean>(true);
  const [rememberEmail, setRememberEmail] = useState<Boolean>(true);
  const [selectedItemVerify, setSelectedItemVerify] = useState<any>('');
  const [verifyFlag, setVerifyFlag] = useState<Boolean>(false);

  const onPressToggleButton = () => {
    setShowVerification(true);
    setRememberEmail(!rememberEmail);
  };

  const onClick = () => {};

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const updateSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const onHandleSubmit = () => {
    // navigate('VerifyGetStarted', {type: ''});
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
    if (values.email !== '' && values?.password !== '') {
      console.log('hhh');

      dispatch(setIsLoggedIn(true));
    }
  };

  const onAlreadyAccount = () => {
    navigate('MemberID_Login');
  };

  const onSignUp = () => {
    navigate('SignUp');
  };

  const onClose_Verification = () => {
    setTimeout(() => {
      if (selectedItemVerify === 'Fingerprint') {
        setVerifyFlag(true);
      } else if (selectedItemVerify === 'Code/ PIN') {
        setVerifyFlag(true);
      } else if (selectedItemVerify === 'Facial Recognition') {
        setVerifyFlag(true);
      } else {
        setSelectedItemVerify('');
        setVerifyFlag(false);
      }
    });
    setShowVerification(false);
  };

  const onSelect_Verification = (item: any) => {
    setSelectedItemVerify('');
    setVerifyFlag(false);
    setSelectedItemVerify(item);
  };
  const renderVerificationMethod = () => {
    if (verifyFlag && selectedItemVerify === 'Fingerprint') {
      return <FingerprintVerification />;
    }
    if (verifyFlag && selectedItemVerify === 'Code/ PIN') {
      navigate('PinCode');
    }
    if (verifyFlag && selectedItemVerify === 'Facial Recognition') {
      navigate('ScanFace');
    }
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setVerifyFlag(false);
      setSelectedItemVerify('');
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <Wrapper isPaddingH>
      <ScrollView
        style={[GST.MAIN]}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <Formik
          onSubmit={submitHandler}
          initialValues={initialValues}
          validationSchema={LoginSchema}>
          {({values, errors, touched, handleChange, handleSubmit}) => (
            <View style={[styles.wrapContainer]}>
              <TextSection title={'Welcome to Plastk'} top={30} />
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
                  title="Password"
                  value={values.password}
                  keyboardType="email-address"
                  placeholderText={'Password'}
                  _secure
                  maxLength={25}
                  onPress={updateSecureTextEntry}
                  secureTextEntry={secureTextEntry}
                  onChangeText={handleChange('password')}
                  error={
                    touched.password && errors.password ? errors.password : ''
                  }
                />

                <RememberMe
                  rememberMe
                  onClick={onClick}
                  onPressForgotPass={() => navigate('ForgotPassword')}
                  title={'Stay Signed In'}
                  isToggle={rememberEmail}
                  onPress={onPressToggleButton}
                />

                <View style={styles.line_v}>
                  <View style={styles.line} />
                  <Text style={styles.or}>Or</Text>
                  <View style={styles.line} />
                </View>

                <SocialLoginBtn
                  src={fb}
                  bgClr={myTheme.colors.blue}
                  title={'Sign Up with Facebook'}
                />
                <SocialLoginBtn
                  src={g_logo}
                  bgClr={myTheme.colors.white}
                  title={'Sign Up with Google'}
                  // onPress={handleLoginWithGoogle}
                  textColor={myTheme.colors.border}
                />
                <SocialLoginBtn
                  src={ios}
                  bgClr={myTheme.colors.black}
                  title={'Sign Up with Apple'}
                />
                <SignUp_Section
                  onSignUp={onSignUp}
                  handleSubmit={handleSubmit}
                  onAlreadyAccount={onAlreadyAccount}
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
      {showVerification && (
        <BottomSheet
          showflatView
          showCloseSign
          data={verfiaction_options}
          visible={showVerification}
          title={'Verification Options'}
          onSelect={(item: any) => onSelect_Verification(item)}
          okPress={onClose_Verification}
          onCancel={onClose_Verification}
        />
      )}
      {renderVerificationMethod()}
    </Wrapper>
  );
}
