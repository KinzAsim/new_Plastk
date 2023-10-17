import {
  AppText,
  Wrapper,
  TextSection,
  BottomSheet,
  CustomButton,
  CustomLoader,
  AppTextInput,
  MaskedTextInput,
  CustomProgressBar,
  BottomSheetOptions,
} from '@components';
import {RF} from '@theme';
import {Formik} from 'formik';
import styles from './styles';
import {navigate} from '@services';
import {useDispatch} from 'react-redux';
import {LogBox, Platform, View} from 'react-native';
import React, {useState, useRef} from 'react';
import {RouteProp, useTheme} from '@react-navigation/native';
import {SignUpSchema, cardReason, emboss} from '@utils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';

LogBox.ignoreLogs(['An unhandled error was caught']);

interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      data?: any;
    };
  }>;
}

const initialValues = {
  dob: '',
  code: '',
  phoneNumber: '',
  insuranceNo: '',
};

const AccountDetail = ({route}: Props) => {
  const formikRef: any = useRef();
  const {data} = route?.params;
  const myTheme: any = useTheme();
  let dispatch: any = useDispatch();
  const [showDob, setShowDob] = useState(false);
  const [loading, setloading] = useState(false);
  const [aboutUs, setAboutUs] = useState<any>('');
  const [showEmboss, setShowEmboss] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [embossValue, setEmbossValue] = useState<any>('');
  const [card_reasons, setCard_Reasons] = useState<any>('');
  const [showCardReason, setShowCardReason] = useState(false);
  const [showHomeAddress, setShowHomeAddress] = useState(false);
  const [homeAddress, setHomeAddress] = useState('');
  const [selectedDate, setSelectedDate] = useState();
  const [year_selected, setYear_Selected] = useState<Boolean>(false);
  const [socialAccountName, setSocialAccountName] = useState<any>('');

  const submitHandler = () => {
    navigate('EmploymentInfo', {data: {}, type: 'employment'});
  };
  const onOpenBottomSheet = () => {
    setShowEmboss(true);
  };
  const onOpenBottomSheet_CardReason = () => {
    setShowCardReason(true);
  };
  const onOpenBottomSheet_DatePicker = () => {
    setShowDob(true);
  };
  const onOpenBottomSheet_AboutUs = () => {
    setShowAboutUs(true);
  };
  const onOpenBottomSheet_HomeAddress = () => {
    setShowHomeAddress(true);
  };
  const onClose_HomeAddress = (item: any) => {
    setHomeAddress(item);
    setTimeout(() => {
      setShowHomeAddress(false);
    }, 500);
  };
  const onSelect_Emboss = (item: any) => {
    setEmbossValue(item);
  };
  const onSelect_AboutUs = (item: any) => {
    setSocialAccountName(item);
  };
  const onSelect_CardReason = (item: any) => {
    setCard_Reasons(item);
  };
  const onSelect_Dob = () => {
    // setYear_Selected(!year_selected);
    // setDob(selectedDate);
    setShowDob(false);
  };
  const handleMask = (text: string, setFieldValue: any) => {
    setFieldValue('phoneNumber', text);
  };
  const handleInsurance = (text: string, setFieldValue: any) => {
    setFieldValue('insuranceNo', text);
  };
  const handleModal = (type: any) => {
    if (type === 'card') {
      setShowCardReason(false);
    } else if (type === 'emboss') {
      setShowEmboss(false);
    } else if (type === 'address') {
      setShowHomeAddress(false);
    } else if (type === 'dob') {
      setShowDob(false);
    } else if (type === 'aboutUs') {
      setShowAboutUs(false);
    }
  };

  const on_OkPress = (type: any) => {
    if (type == 'emboss') {
      setShowEmboss(false);
    } else if (type == 'dob') {
      setShowDob(false);
    } else if (type == 'card') {
      setShowCardReason(false);
    } else if (type == 'aboutUs') {
      setAboutUs(socialAccountName);
      setShowAboutUs(false);
    }
  };
  const on_CancelPress = (type: any) => {
    if (type == 'emboss') {
      setShowEmboss(false);
    } else if (type == 'dob') {
      setShowDob(false);
    } else if (type == 'card') {
      setShowCardReason(false);
    } else if (type == 'aboutUs') {
      setShowAboutUs(false);
    }
  };

  return (
    <Wrapper>
      <CustomProgressBar value={10} mt={Platform.OS === 'ios' ? 80 : 30} />
      <TextSection top={RF(25)} title={'Account Details'} />
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
                  <BottomSheetOptions
                    value={embossValue}
                    title={'Emboss Name*'}
                    placeholder="Select option"
                    onOpenBottomSheet={onOpenBottomSheet}
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
                    value={moment(selectedDate).format('MM/DD/YYYY')}
                    placeholder="MM/DD/YYYY"
                    title={'Date of Birth*'}
                    onOpenBottomSheet={onOpenBottomSheet_DatePicker}
                  />
                  {touched.dob && errors.dob ? (
                    <AppText style={styles.errorStyle}>{errors.dob} </AppText>
                  ) : null}

                  <BottomSheetOptions
                    value={homeAddress}
                    placeholder="Home Address"
                    title={'Home Address*'}
                    onOpenBottomSheet={onOpenBottomSheet_HomeAddress}
                  />

                  <BottomSheetOptions
                    value={card_reasons}
                    placeholder="Select option"
                    title={'Why do you want the card?*'}
                    onOpenBottomSheet={onOpenBottomSheet_CardReason}
                  />

                  <BottomSheetOptions
                    value={aboutUs}
                    placeholder="Select option"
                    title={'How did you hear about us?'}
                    onOpenBottomSheet={onOpenBottomSheet_AboutUs}
                  />

                  <AppTextInput
                    maxLength={10}
                    value={values.code}
                    keyboardType="numeric"
                    placeholderText={'Input Code'}
                    onChangeText={handleChange('code')}
                    title="Please enter referral code if you have one"
                    error={touched.code && errors.code ? errors.code : ''}
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

      {loading && <CustomLoader />}
      {showAboutUs && (
        <BottomSheet
          showFlatSocialAcconts
          showCloseSign
          visible={showAboutUs}
          handleModal={() => handleModal('aboutUs')}
          onSelect={(item: any) => onSelect_AboutUs(item)}
          okPress={() => on_OkPress('aboutUs')}
          onCancel={() => on_CancelPress('aboutUs')}
        />
      )}
      {showEmboss && (
        <BottomSheet
          showflatView
          showCloseSign
          data={emboss}
          visible={showEmboss}
          handleModal={() => handleModal('emboss')}
          onSelect={(item: any) => onSelect_Emboss(item)}
          okPress={() => on_OkPress('emboss')}
          onCancel={() => on_CancelPress('emboss')}
        />
      )}

      {showDob && (
        <BottomSheet
          height={450}
          showCalender
          setYear={setYear_Selected}
          visible={showDob}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          // onSelect={onSelect_Dob}
          handleModal={() => handleModal('dob')}
          okPress={() => on_OkPress('dob')}
          onCancel={() => on_CancelPress('dob')}
        />
      )}

      {showHomeAddress && (
        <BottomSheet
          visible={showHomeAddress}
          handleModel={() => handleModal('')}
          showHomeAddress={showHomeAddress}
          onSelect={(item: any) => onClose_HomeAddress(item)}
          handleModal={() => handleModal('address')}
        />
      )}

      {showCardReason && (
        <BottomSheet
          showflatView
          showCloseSign
          data={cardReason}
          visible={showCardReason}
          onSelect={(item: any) => onSelect_CardReason(item)}
          handleModal={() => handleModal('card')}
          okPress={() => on_OkPress('card')}
          onCancel={() => on_CancelPress('card')}
        />
      )}
    </Wrapper>
  );
};

export default AccountDetail;
