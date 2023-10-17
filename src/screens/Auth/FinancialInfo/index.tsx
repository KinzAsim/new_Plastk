import {
  AppText,
  Wrapper,
  TextSection,
  BottomSheet,
  CustomButton,
  CustomLoader,
  AppTextInput,
  CustomProgressBar,
} from '@components';
import {Formik} from 'formik';
import styles from './styles';
import {navigate} from '@services';
import {RF, ligh_green, SCREEN_WIDTH} from '@theme';
import {
  View,
  Image,
  LogBox,
  FlatList,
  Pressable,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {SignUpSchema, info, terms_data} from '@utils';
import {RouteProp, useTheme} from '@react-navigation/native';
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
  rent: '',
  credit: '',
  annual: '',
  income: '',
};

const FinancialInfo = ({route}: Props) => {
  const formikRef: any = useRef();
  const myTheme: any = useTheme();
  const {data, type} = route?.params;
  const [loading, setloading] = useState(false);
  const [status, setStatus] = useState<any>('');
  const [showStatus, setShowStatus] = useState(false);
  const [select, setSelect] = useState<any>(false);
  const [status_visible, setStatus_Visible] = useState(false);
  const [termsData, setTermsData] = useState<any>(terms_data);
  const [nextbtnDisable, setNextbtnDisable] = useState<any>(false);

  const submitHandler = () => {
    navigate('FundsRequested');
  };
  const onClose_AboutUs = (item: any) => {
    setStatus(item);
    setTimeout(() => {
      setStatus_Visible(false);
      setShowStatus(false);
    }, 500);
  };
  const toggleCircleSelection = (id: any) => {
    setTermsData((prevData: any) => {
      return prevData.map((item: any) => {
        if (item.id === id) {
          return {...item, selected: !item.selected};
        }
        return item;
      });
    });
  };
  const togglePrivacy = () => {
    setSelect(!select);
  };

  return (
    <Wrapper>
      <CustomProgressBar
        value={type === 'financial' && '30'}
        mt={Platform.OS === 'ios' ? 80 : 30}
      />
      <TextSection top={RF(25)} title={'Financial Information'} />
      <ScrollView style={{flex: 1}}>
        <KeyboardAwareScrollView
          contentContainerStyle={{flex: 1, flexGrow: 1}}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
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
                      value={values.credit}
                      keyboardType="numeric"
                      placeholderText={'$0.00'}
                      onChangeText={handleChange('credit')}
                      title="Request Credit Limit*"
                      error={
                        touched.credit && errors.credit ? errors.credit : ''
                      }
                    />
                    <AppTextInput
                      maxLength={20}
                      value={values.annual}
                      keyboardType="numeric"
                      placeholderText={'$0.00'}
                      onChangeText={handleChange('annual')}
                      title="Annual Salary Before Taxes"
                      error={
                        touched.annual && errors.annual ? errors.annual : ''
                      }
                    />
                    <AppTextInput
                      maxLength={40}
                      value={values.income}
                      keyboardType="numeric"
                      placeholderText={'$0.00'}
                      onChangeText={handleChange('income')}
                      title="Other House Income Before Taxes"
                      error={
                        touched.income && errors.income ? errors.income : ''
                      }
                    />
                    <AppTextInput
                      maxLength={40}
                      value={values.rent}
                      keyboardType="numeric"
                      placeholderText={'$0.00'}
                      onChangeText={handleChange('rent')}
                      title="Monthly Rent or  Mortgage"
                      error={touched.rent && errors.rent ? errors.rent : ''}
                    />
                  </>

                  <AppText
                    bold
                    size={13}
                    style={styles.text}
                    color={myTheme.colors.border}>
                    {'By clicking Submit'}
                  </AppText>
                  <Section
                    select={select}
                    termsData={termsData}
                    togglePrivacy={togglePrivacy}
                    toggleCircleSelection={toggleCircleSelection}
                  />
                </View>
              )}
            </Formik>

            <View style={styles.v_SE}>
              <CustomButton
                text={'Next'}
                onPress={submitHandler}
                disabled={
                  select && termsData[0].selected && termsData[1].selected
                    ? false
                    : true
                }
                bgClr={
                  select && termsData[0].selected && termsData[1].selected
                    ? myTheme?.colors?.text
                    : myTheme?.colors?.dim_gray
                }
                textStyle={[
                  {
                    color:
                      select && termsData[0].selected && termsData[1].selected
                        ? myTheme?.colors?.white
                        : myTheme?.colors?.light_grey,
                  },
                ]}
              />
              <View style={styles.view}>
                <AppText
                  semiBold
                  size={12}
                  onPress={() => {
                    navigate('Login');
                  }}
                  color={myTheme?.colors?.text}>
                  Cancel
                </AppText>
              </View>
            </View>
          </>
        </KeyboardAwareScrollView>
      </ScrollView>

      {loading && <CustomLoader />}

      {showStatus && (
        <BottomSheet
          data={info}
          showflatView
          visible={status_visible}
          onClose={(item: any) => onClose_AboutUs(item)}
          handleModel={(item: any) => onClose_AboutUs(item)}
          //okPress={(item: any) => onClose_AboutUs(item)}
        />
      )}
    </Wrapper>
  );
};

export default FinancialInfo;

const Section = ({
  termsData,
  select,
  toggleCircleSelection,
  togglePrivacy,
}: {
  select?: any;
  termsData?: any;
  togglePrivacy?: any;
  toggleCircleSelection?: any;
}) => {
  const myTheme: any = useTheme();

  return (
    <>
      <View style={{marginTop: RF(10), marginHorizontal: RF(10)}}>
        <FlatList
          data={termsData}
          renderItem={({item}: any) => {
            return (
              <View style={styles.terms} key={item?.id}>
                <View style={styles.t_Text}>
                  <Pressable
                    style={[
                      styles.circle,
                      {
                        backgroundColor: item?.selected ? ligh_green : 'white',
                      },
                    ]}
                    onPress={() => toggleCircleSelection(item?.id)}
                  />
                  <AppText size={11} style={styles.t}>
                    {item.text}
                  </AppText>
                </View>
                <Pressable>
                  <Image source={item?.image} style={styles.circleImage} />
                </Pressable>
              </View>
            );
          }}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <View style={styles.l_text}>
        <Pressable
          style={[
            styles.circle,
            {
              backgroundColor: select ? ligh_green : 'white',
            },
          ]}
          onPress={() => togglePrivacy()}
        />
        <View style={styles.termsView}>
          <AppText size={11}>
            I agree to allow Plastk Financial & Rewards Inc. to contact {'\n'}
            me by email regarding products, services, marketing,{'\n'}
            promotions, and events. I understand I may withdraw my consent at
            any time. .{'\n'}
          </AppText>

          <AppText size={11}>
            Your Personal information is strictly protected. For more
            information, please refer to our{' '}
            <AppText belowLine color={myTheme?.colors?.light_blue}>
              Privacy Policy
            </AppText>
          </AppText>

          <AppText size={11} style={{marginTop: 10}}>
            Plastk Financial & Rewards Inc., 620 12th Ave SW, Calfary, Alberta
            T2R 0H5.
          </AppText>
        </View>
      </View>
    </>
  );
};

{
  /* <View style={styles.termsView}>
                    <FlatList
                      data={termsData}
                      renderItem={({item}: any) => {
                        return (
                          <View style={[GST.mid_row, {paddingVertical: 5}]}>
                            <Pressable
                              onPress={() => toggleCircleSelection(item?.id)}
                              style={[
                                styles.circle,
                                {
                                  backgroundColor: item?.selected
                                    ? ligh_green
                                    : 'white',
                                },
                              ]}
                            />

                            <AppText
                              size={12}
                              medium
                              style={[
                                styles.termsText,
                                {
                                  width: item?.id == 3 ? '90%' : '100%',
                                },
                              ]}>
                              {item.text}
                              {item.id == 3 && (
                                <AppText
                                  medium
                                  size={11}
                                  style={{
                                    textDecorationLine: 'underline',
                                  }}
                                  color={myTheme?.colors?.light_blue}>
                                  {'Privacy Policy'}
                                </AppText>
                              )}
                              {item?.id == 3 && (
                                <AppText
                                  medium
                                  size={11}
                                  color={myTheme.colors.border}>
                                  {
                                    '\n\nPlastk Financial & Rewards Inc., 620 12th Ave SW, Calfary, Alberta T2R 0H5.'
                                  }
                                </AppText>
                              )}
                            </AppText>

                            <Pressable>
                              <Image
                                source={item.image}
                                style={styles.circleImage}
                              />
                            </Pressable>
                          </View>
                        );
                      }}
                      keyExtractor={item => item.id.toString()}
                    />
                  </View> */
}
