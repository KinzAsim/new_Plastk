import {Image, View, Platform} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Wrapper,
  AppText,
  TextSection,
  BottomSheet,
  CustomButton,
  AppTextInput,
  Custom_CheckBox,
  MaskedTextInput,
  CustomProgressBar,
  BottomSheetOptions,
} from '@components';
import {RF} from '@theme';
import {Formik} from 'formik';
import styles from './styles';
import {eqifax} from '@assets';
import {navigate} from '@services';
import {SignUpSchema} from '@utils';
import {useTheme} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const initialValues = {
  dob: '',
  code: '',
  address: '',
  lastName: '',
  firstName: '',
  insuranceNo: '',
  phoneNumber: '',
};

const EquifaxVerifyInformation = () => {
  const myTheme: any = useTheme();
  const formikRef: any = useRef();
  const [dob, setDob] = useState<any>('');
  const [showDob, setShowDob] = useState(false);
  const [homeAddress, setHomeAddress] = useState('');
  const [dob_visible, setDob_Visible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [showHomeAddress, setShowHomeAddress] = useState(false);

  const submitHandler = () => {
    navigate('EquifaxQuestion');
  };
  const handleMask = (text: string, setFieldValue: any) => {
    setFieldValue('phoneNumber', text);
  };
  const onOpenBottomSheet_DatePicker = () => {
    setDob_Visible(true);
    setShowDob(true);
  };
  const handleInsurance = (text: string, setFieldValue: any) => {
    setFieldValue('insuranceNo', text);
  };
  const onOpenBottomSheet_HomeAddress = () => {
    setShowHomeAddress(true);
  };
  const onClose_Dob = (item: any) => {
    // setDob(item);
    setTimeout(() => {
      setDob_Visible(false);
      setShowDob(false);
    }, 500);
  };

  const onClose_HomeAddress = (item: any) => {
    setHomeAddress(item);
    setTimeout(() => {
      setShowHomeAddress(false);
    }, 500);
  };

  return (
    <Wrapper>
      <CustomProgressBar value={'70'} mt={Platform.OS === 'ios' ? 80 : 30} />
      <TextSection top={RF(20)} title={'Verify Information'} />
      <Image style={styles.img} source={eqifax} />
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
                    title="First Name*"
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
                    title="Last Name*"
                    value={values.lastName}
                    placeholderText="Last Name"
                    onChangeText={handleChange('middleName')}
                  />

                  <MaskedTextInput
                    icon
                    mask={[
                      '(',
                      /\d/,
                      /\d/,
                      /\d/,
                      ')',
                      '-',
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                    maxLength={14}
                    title={'Phone Number*'}
                    value={values.phoneNumber}
                    placeholder={'(000) - 000 - 0000'}
                    error={
                      touched.phoneNumber && errors.phoneNumber
                        ? errors.phoneNumber
                        : ''
                    }
                    onChangeText={(val: any) => handleMask(val, setFieldValue)}
                  />
                  <BottomSheetOptions
                    value={dob}
                    placeholder="MM/DD/YYYY"
                    title={'Date of Birth*'}
                    onOpenBottomSheet={onOpenBottomSheet_DatePicker}
                  />
                  {touched.dob && errors.dob ? (
                    <AppText style={styles.errorStyle}>{errors.dob} </AppText>
                  ) : null}

                  <MaskedTextInput
                    mask={[
                      /\d/,
                      /\d/,
                      /\d/,
                      '',
                      /\d/,
                      /\d/,
                      /\d/,
                      '',
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                    maxLength={14}
                    value={values.insuranceNo}
                    placeholder={'000 000 000'}
                    title={'Social Insurance Number'}
                    error={
                      touched.insuranceNo && errors.insuranceNo
                        ? errors.insuranceNo
                        : ''
                    }
                    onChangeText={(val: any) =>
                      handleInsurance(val, setFieldValue)
                    }
                  />
                  <BottomSheetOptions
                    value={homeAddress}
                    placeholder="123 Mission Ave, Ontario Canada"
                    title={'Home Address*'}
                    onOpenBottomSheet={onOpenBottomSheet_HomeAddress}
                  />

                  <Section
                    myTheme={myTheme}
                    toggleCheckBox={toggleCheckBox}
                    setToggleCheckBox={setToggleCheckBox}
                  />
                </>

                <View style={styles.viewBtn}>
                  <CustomButton
                    text={'Submit'}
                    onPress={submitHandler}
                    disabled={toggleCheckBox ? false : true}
                    bgClr={
                      toggleCheckBox
                        ? myTheme?.colors?.primary
                        : myTheme?.colors?.dim_gray
                    }
                    textStyle={{
                      color: toggleCheckBox ? '#fff' : myTheme?.colors?.border,
                    }}
                  />
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
        {showDob && (
          <BottomSheet
            height={450}
            showCalender
            visible={dob_visible}
            onClose={(item: any) => onClose_Dob(item)}
            handleModel={(item: any) => onClose_Dob(item)}
            okPress={(item: any) => onClose_Dob(item)}
          />
        )}

        {showHomeAddress && (
          <BottomSheet
            // showCloseSign
            visible={showHomeAddress}
            showHomeAddress={showHomeAddress}
            onClose={(item: any) => onClose_HomeAddress(item)}
            handleModel={(item: any) => onClose_HomeAddress(item)}
            okPress={(item: any) => onClose_HomeAddress(item)}
          />
        )}
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

const Section = ({
  setToggleCheckBox,
  myTheme,
  toggleCheckBox,
}: {
  setToggleCheckBox?: any;
  myTheme?: any;
  toggleCheckBox?: any;
}) => {
  return (
    <View style={styles.contentView}>
      <AppText
        color={myTheme?.colors?.border}
        medium
        size={8}
        style={{textAlign: 'justify'}}>
        ¹ “Equifax Canada Co. (“Equifax”) is a registered Canadian credit bureau
        that maintains your Canadian consumer credit file, which has been used
        by Plastk Financial & Rewards Inc. as permitted by you, to provide you
        with your educational Equifax credit score. The Equifax credit score
        provided here is current as of the date indicated by Plastk Financial &
        Rewards Inc. ”{'\n\n\n'} ² “the Equifax Risk Score [or Equifax credit
        score] is based on Equifax’s proprietary model and may not be the same
        score used by third parties to assess your creditworthiness. The
        provision of this score to you is intended for your own educational use.
        Third parties will take into consideration other information in addition
        to a credit score when evaluating your creditworthiness.'
      </AppText>
      <AppText
        size={13}
        regular
        color={myTheme.colors.text}
        style={{paddingTop: RF(30)}}>
        You are confirming that all of the personal{'\n'}information is correct.
        Please note that once completed, this process cannot be undone.{'\n'}
        {'\n'}
        <AppText size={13} regular_italic color={myTheme.colors.text}>
          If you spot an error, please
        </AppText>
        <AppText
          belowLine
          size={12}
          regular_italic
          color={myTheme.colors.light_blue}>
          {'  '}
          Contact Us.
        </AppText>
      </AppText>
      <View style={styles.checkBoxView}>
        <View style={[]}>
          <Custom_CheckBox
            isSelected={toggleCheckBox}
            title={'I understand, All Information is Correct'}
            setSelection={() => setToggleCheckBox(!toggleCheckBox)}
          />
        </View>
      </View>
    </View>
  );
};

export default EquifaxVerifyInformation;
