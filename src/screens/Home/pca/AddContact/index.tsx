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
import {RF} from '@theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {useTheme} from '@react-navigation/native';
import {PCA_ContactSchema, SignUpSchema} from '@utils';
import {navigate} from '@services';
import {useKeyboardhook} from '@hooks';
import {styles} from './styles';
import {backArrow} from '@assets';

const AddContact = ({navigation}: any) => {
  const formikRef: any = useRef();
  const myTheme: any = useTheme();
  const isKeyboardVisible = useKeyboardhook();

  const initialValues = {
    email: '',
    name: '',
    mobileNo: '',
    re_email: '',
  };
  const submitHandler = () => {
    navigate('PCA_Main', {type: 'added'});
  };

  return (
    <Wrapper>
      <AppHeader
        showLeftIcon
        headerBackground
        leftIcon={backArrow}
        leftIconColor={myTheme?.colors?.border}
        title={'Add Contact'}
        headerTitleColor={myTheme?.colors?.border}
        headerstyle={styles.headerView}
        size={16}
        leftIconStyle={{width: RF(21), height: RF(21)}}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <GreyBox
          containerStyle={styles.alignTopView}
          text={
            'You must have at least one of these fields to\n transfer: an email address, or a Canadian mobile\nnumber. Make sure the information is correct.'
          }
          textSize={10}
        />
        <CustomButton
          btnStyle={styles.alignTopViewBtn}
          width={RF(200)}
          text={'Add Contact From Phone'}
          onPress={() => navigate('PCA_ContactList')}
        />

        <View
          style={{
            flex: 1,
            marginTop: RF(10),
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
                validationSchema={PCA_ContactSchema}>
                {({values, errors, touched, handleChange, handleSubmit}) => (
                  <View style={styles.emailView}>
                    <>
                      <AppTextInput
                        maxLength={20}
                        title="Name"
                        value={values.name}
                        placeholderText="Enter Contact Name"
                        onChangeText={handleChange('name')}
                        error={touched.name && errors.name ? errors.name : ''}
                      />
                      <AppTextInput
                        maxLength={20}
                        title="Email"
                        value={values.email}
                        placeholderText="Enter Contact Email Address"
                        onChangeText={handleChange('email')}
                        error={
                          touched.email && errors.email ? errors.email : ''
                        }
                      />

                      <AppTextInput
                        maxLength={40}
                        value={values.re_email}
                        title="Re-Enter Email Address"
                        keyboardType="email-address"
                        placeholderText="Re-Enter Email Address"
                        onChangeText={handleChange('re_email')}
                        error={
                          touched.re_email && errors.re_email
                            ? errors.re_email
                            : ''
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
                      <CustomButton text={'Continue'} onPress={handleSubmit} />
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

export default AddContact;
