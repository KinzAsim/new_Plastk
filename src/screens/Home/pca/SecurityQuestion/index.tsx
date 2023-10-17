import React, {useRef} from 'react';
import {
  AppHeader,
  AppText,
  AppTextInput,
  BorderBox,
  CustomButton,
  GreyBox,
  Header,
  Wrapper,
} from '@components';
import {ScrollView, View} from 'react-native';
import {styles} from './styles';
import {RF} from '@theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {useTheme} from '@react-navigation/native';
import {SignUpSchema} from '@utils';
import {navigate} from '@services';
import {useKeyboardhook} from '@hooks';
import {backArrow} from '@assets';

const SecurityQuestion = ({navigation}: any) => {
  const formikRef: any = useRef();
  const myTheme: any = useTheme();
  const isKeyboardVisible = useKeyboardhook();

  const initialValues = {
    dob: '',
    email: '',
    lastName: '',
    firstName: '',
    mobileNo: '',
  };
  const submitHandler = () => {
    navigate('EmailVerification');
  };

  return (
    <Wrapper>
      <AppHeader
        showLeftIcon
        headerBackground
        leftIcon={backArrow}
        leftIconColor={myTheme?.colors?.border}
        title={'Premium Cash Advance'}
        headerTitleColor={myTheme?.colors?.border}
        headerstyle={styles.headerView}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <GreyBox
          containerStyle={styles.alignTopView}
          text={
            'Please note that a Premium Credit Advance fee of $5 will be\n applied for each transaction. The maximum cash advance\n transfer per-instance is $100 and per day-day is $250.'
          }
          textSize={10}
        />
        <CustomButton
          btnStyle={styles.alignTopView}
          text={'Add Contact From Phone'}
          onPress={() => navigate('PCA_ContactList')}
        />

        <View
          style={{
            flex: 1,
            marginTop: RF(30),
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
                {({values, errors, touched, handleChange}) => (
                  <View style={styles.emailView}>
                    <>
                      <AppTextInput
                        maxLength={20}
                        title="Name"
                        value={values.firstName}
                        placeholderText="Enter Contact Name"
                        onChangeText={handleChange('firstName')}
                        error={
                          touched.firstName && errors.firstName
                            ? errors.firstName
                            : ''
                        }
                      />
                      <AppTextInput
                        maxLength={20}
                        title="Email"
                        value={values.lastName}
                        placeholderText="Enter Contact Email Address"
                        onChangeText={handleChange('lastName')}
                        error={
                          touched.lastName && errors.lastName
                            ? errors.lastName
                            : ''
                        }
                      />

                      <AppTextInput
                        maxLength={40}
                        value={values.email}
                        title="Re-Enter Email Address"
                        keyboardType="email-address"
                        placeholderText="Re-Enter Email Address"
                        onChangeText={handleChange('email')}
                        error={
                          touched.email && errors.email ? errors.email : ''
                        }
                      />
                      <AppTextInput
                        maxLength={40}
                        value={values.mobileNo}
                        title="Mobile"
                        keyboardType="numeric"
                        placeholderText="Enter Contact Mobile Number"
                        onChangeText={handleChange('mobileNo')}
                        error={
                          touched.mobileNo && errors.mobileNo
                            ? errors.mobileNo
                            : ''
                        }
                      />
                    </>
                    <View style={styles.viewBtn}>
                      <CustomButton text={'Continue'} onPress={submitHandler} />
                    </View>
                  </View>
                )}
              </Formik>
            </>
          </KeyboardAwareScrollView>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default SecurityQuestion;
