import {
  AppText,
  Wrapper,
  MemberID,
  TextSection,
  BottomSheet,
  AppTextInput,
  CustomButton,
  CustomProgressBar,
  BottomSheetOptions,
} from '@components';
import {RF} from '@theme';
import moment from 'moment';
import {Formik} from 'formik';
import styles from './styles';
import {View} from 'react-native';
import {navigate} from '@services';
import {SignUpSchema} from '@utils';
import React, {useRef, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const initialValues = {
  dob: '',
  email: '',
  lastName: '',
  firstName: '',
  homeAddress: '',
};

export default function MemberID_SignUp({navigation: any}) {
  const myTheme: any = useTheme();
  const formikRef: any = useRef();
  const [dob, setDob] = useState<any>('');
  const [showDob, setShowDob] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    moment().format('MM-DD-YYYY'),
  );
  const [homeAddress, setHomeAddress] = useState('');
  const [showHomeAddress, setShowHomeAddress] = useState(false);

  const onClose_Dob = (item: any) => {
    setDob(selectedDate);
    setTimeout(() => {
      setShowDob(false);
    }, 500);
  };
  const submitHandler = () => {
    navigate('EmailVerification');
  };
  const onOpenSheet = () => {};
  const onOpenBottomSheet_DatePicker = () => {
    setShowDob(true);
  };
  const onClose_HomeAddress = (item: any) => {
    setHomeAddress(item);
    setTimeout(() => {
      setShowHomeAddress(false);
    }, 500);
  };
  const handleModal = () => {
    setShowHomeAddress(false);
  };
  const onOpenBottomSheet_HomeAddress = () => {
    setShowHomeAddress(true);
  };

  return (
    <Wrapper>
      <CustomProgressBar value={5} />
      <TextSection
        top={20}
        title={'Member ID'}
        content={'Information from your Rewards App'}
      />

      <MemberID id={'PRU32 3890 A2C3 0045'} />

      <Section
        dob={dob}
        myTheme={myTheme}
        formikRef={formikRef}
        homeAddress={homeAddress}
        onOpenSheet={onOpenSheet}
        submitHandler={submitHandler}
        onOpenBottomSheet_DatePicker={onOpenBottomSheet_DatePicker}
        onOpenBottomSheet_HomeAddress={onOpenBottomSheet_HomeAddress}
      />
      {showDob && (
        <BottomSheet
          showCalender
          showCloseSign
          visible={showDob}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          onClose={(item: any) => onClose_Dob(item)}
          okPress={(item: any) => onClose_Dob(item)}
        />
      )}
      {showHomeAddress && (
        <BottomSheet
          visible={showHomeAddress}
          handleModel={handleModal}
          showHomeAddress={showHomeAddress}
          onClose={(item: any) => onClose_HomeAddress(item)}
          okPress={(item: any) => onClose_HomeAddress(item)}
        />
      )}
    </Wrapper>
  );
}

const Section = ({
  myTheme,
  dob,
  formikRef,
  onOpenSheet,
  homeAddress,
  submitHandler,
  isKeyboardVisible,
  onOpenBottomSheet_HomeAddress,
  onOpenBottomSheet_DatePicker,
}: {
  dob?: any;
  myTheme?: any;
  homeAddress?: any;
  formikRef?: any;
  onOpenSheet?: any;
  submitHandler?: any;
  isKeyboardVisible?: any;
  onOpenBottomSheet_DatePicker?: any;
  onOpenBottomSheet_HomeAddress?: any;
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
            {({values, errors, touched, handleChange}) => (
              <View style={styles.emailView}>
                <>
                  <AppTextInput
                    maxLength={20}
                    title="First Name"
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
                    title="Last Name"
                    value={values.lastName}
                    placeholderText="Last Name"
                    onChangeText={handleChange('lastName')}
                    error={
                      touched.lastName && errors.lastName ? errors.lastName : ''
                    }
                  />
                  <BottomSheetOptions
                    value={dob}
                    placeholder="MM/DD/YYYY"
                    title={'Date of Birth'}
                    onOpenBottomSheet={onOpenBottomSheet_DatePicker}
                  />
                  {touched.dob && errors.dob ? (
                    <AppText style={styles.errorStyle}>{errors.dob} </AppText>
                  ) : null}

                  <BottomSheetOptions
                    value={homeAddress}
                    placeholder="Home Address"
                    title={'Home Address'}
                    onOpenBottomSheet={onOpenBottomSheet_HomeAddress}
                  />

                  <AppTextInput
                    maxLength={40}
                    value={values.email}
                    title="Email"
                    keyboardType="email-address"
                    placeholderText="Email Address"
                    onChangeText={handleChange('email')}
                    error={touched.email && errors.email ? errors.email : ''}
                  />
                </>
                <View style={styles.viewBtn}>
                  <CustomButton text={'Next'} onPress={submitHandler} />
                  <View style={styles.view}>
                    <AppText
                      color={myTheme?.colors?.text}
                      semiBold
                      size={12}
                      onPress={() => navigate('Login')}>
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
