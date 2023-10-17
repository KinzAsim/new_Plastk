import {
  AppText,
  Wrapper,
  TextSection,
  BottomSheet,
  CustomButton,
  CustomLoader,
  AppTextInput,
  CustomProgressBar,
  BottomSheetOptions,
} from '@components';
import {RF} from '@theme';
import moment from 'moment';
import {Formik} from 'formik';
import styles from './styles';
import {navigate} from '@services';
import {useDispatch} from 'react-redux';
import React, {useState, useRef} from 'react';
import {LogBox, Platform, ScrollView, View} from 'react-native';
import {RouteProp, useTheme} from '@react-navigation/native';
import {SignUpSchema, data_account, data_industry, info} from '@utils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

LogBox.ignoreLogs(['An unhandled error was caught']);

interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      data?: any;
      type?: any;
    };
  }>;
}

const initialValues = {
  info: '',
  name: '',
  prgrm: '',
  employer: '',
  institute_name: '',
  jobTitle: '',
};

const EmploymentInfo = ({route}: Props) => {
  const formikRef: any = useRef();
  const {data, type} = route?.params;
  const myTheme: any = useTheme();
  let dispatch: any = useDispatch();
  const [loading, setloading] = useState(false);
  const [status, setStatus] = useState<any>('');
  const [year, setYear] = useState<any>('');
  const [showStatus, setShowStatus] = useState(false);
  const [status_visible, setStatus_Visible] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showIndustry, setShowIndustry] = useState(false);
  const [industry, setIndustry] = useState<any>('');
  const [showJobTitle, setShowJobTitle] = useState(false);
  const [jobTitle, setJobTitle] = useState<any>('');
  const [selectedDate, setSelectedDate] = useState(
    moment().format('MM-DD-YYYY'),
  );

  const submitHandler = () => {
    navigate('FinancialInfo', {data: {}, type: 'financial'});
  };
  const onOpenBottomSheet_Status = () => {
    setStatus_Visible(true);
    setShowStatus(true);
  };

  const onOpenBottomSheet_Year = () => {
    setShowDate(true);
  };
  const onOpenBottomSheet_Industry = () => {
    setShowIndustry(true);
  };
  const onOpenBottomSheet_Job = () => {
    setShowJobTitle(true);
  };
  const onClose_Year = () => {
    setTimeout(() => {
      setShowDate(false);
    }, 500);
  };
  const onOk_Industry = () => {
    setTimeout(() => {
      setShowIndustry(false);
    }, 50);
  };
  const handleModal = (type: any) => {
    if (type === 'jobTitle') {
      setShowJobTitle(false);
    } else if (type === 'industry') {
      setShowIndustry(false);
    } else if (type === 'status') {
      setShowStatus(false);
    } else if (type === 'dob') {
      setShowDate(false);
    }
  };
  const onSelect_JobTitle = (item: any) => {
    setJobTitle(item);
  };
  const onSelect_Industry = (item: any) => {
    setIndustry(item);
  };
  const onSelect_Status = (item: any) => {
    setStatus(item);
    setShowStatus(false);
  };
  const onSelect_Date = (item: any) => {
    console.log('0000', item);
    setYear(selectedDate);
  };

  return (
    <Wrapper>
      <CustomProgressBar
        mt={Platform.OS === 'ios' ? 80 : 30}
        value={type === 'employment' && '20'}
      />
      <TextSection top={RF(25)} title={'Employment Information'} />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <>
          <Formik
            innerRef={formikRef}
            onSubmit={submitHandler}
            initialValues={initialValues}
            validationSchema={SignUpSchema}>
            {({values, errors, touched, handleChange, setFieldValue}) => (
              <ScrollView
                style={styles.emailView}
                showsVerticalScrollIndicator={false}>
                {status === 'Unemployed' || status === '' ? (
                  <BottomSheetOptions
                    value={status}
                    placeholder="Select Status"
                    title={'Employment Status*'}
                    onOpenBottomSheet={onOpenBottomSheet_Status}
                  />
                ) : status === 'Student' ? (
                  <>
                    <BottomSheetOptions
                      value={status}
                      placeholder="Select Status"
                      title={'Employment Status*'}
                      onOpenBottomSheet={onOpenBottomSheet_Status}
                    />
                    <AppTextInput
                      maxLength={40}
                      value={values.institute_name}
                      title="Institution Name"
                      keyboardType="email-address"
                      onChangeText={handleChange('institute_name')}
                      placeholderText={'Enter Institution Name'}
                      error={
                        touched.institute_name && errors.institute_name
                          ? errors.institute_name
                          : ''
                      }
                    />

                    <AppTextInput
                      maxLength={40}
                      value={values.prgrm}
                      title="Program"
                      keyboardType="email-address"
                      onChangeText={handleChange('prgrm')}
                      placeholderText={'Enter Program Name'}
                      error={touched.prgrm && errors.prgrm ? errors.prgrm : ''}
                    />
                  </>
                ) : (
                  <>
                    <BottomSheetOptions
                      value={status}
                      placeholder="Select Status"
                      title={'Employment Status*'}
                      onOpenBottomSheet={onOpenBottomSheet_Status}
                    />
                    <BottomSheetOptions
                      value={moment(selectedDate).format('MM/DD/YYYY')}
                      title={'Employment Year*'}
                      placeholder="Select Starting Date"
                      onOpenBottomSheet={onOpenBottomSheet_Year}
                    />
                    <BottomSheetOptions
                      value={industry}
                      title={'Industry*'}
                      placeholder="Select Industry"
                      onOpenBottomSheet={onOpenBottomSheet_Industry}
                    />

                    <AppTextInput
                      maxLength={20}
                      value={values.jobTitle}
                      title="Job Title*"
                      keyboardType="email-address"
                      onChangeText={handleChange('jobTitle')}
                      placeholderText={'Enter Job Title'}
                      error={
                        touched.jobTitle && errors.jobTitle
                          ? errors.jobTitle
                          : ''
                      }
                    />

                    <AppTextInput
                      maxLength={20}
                      value={values.employer}
                      title="Current Employer*"
                      keyboardType="email-address"
                      placeholderText={'Enter Employer'}
                      onChangeText={handleChange('employer')}
                      error={touched.name && errors.name ? errors.name : ''}
                    />
                  </>
                )}

                <View
                  style={
                    status === 'Student' || status === 'Unemployed'
                      ? styles.v_SE
                      : styles.viewBtn
                  }>
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
              </ScrollView>
            )}
          </Formik>
        </>
      </KeyboardAwareScrollView>

      {loading && <CustomLoader />}

      {showJobTitle && (
        <BottomSheet
          showflatView
          showCloseSign
          data={data_account}
          visible={showJobTitle}
          handleModal={() => handleModal('jobTitle')}
          onSelect={(item: any) => onSelect_JobTitle(item)}
        />
      )}

      {showIndustry && (
        <BottomSheet
          height
          showflatView
          showCloseSign
          data={data_industry}
          visible={showIndustry}
          handleModal={() => handleModal('industry')}
          onSelect={(item: any) => onSelect_Industry(item)}
          okPress={onOk_Industry}
          onCancel={onOk_Industry}
        />
      )}

      {showStatus && (
        <BottomSheet
          data={info}
          showflatView
          visible={showStatus}
          handleModal={() => handleModal('status')}
          onSelect={(item: any) => onSelect_Status(item)}
        />
      )}

      {showDate && (
        <BottomSheet
          height
          showCalender
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          visible={showDate}
          handleModal={() => handleModal('dob')}
          onSelect={onSelect_Date}
          okPress={onClose_Year}
          onCancel={onClose_Year}
        />
      )}
    </Wrapper>
  );
};

export default EmploymentInfo;
