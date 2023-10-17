import {Image, Platform, View} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {
  Wrapper,
  CustomProgressBar,
  TextSection,
  CustomButton,
  AppText,
  AppTextInput,
} from '@components';
import {RF} from '@theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {SignUpSchema} from '@utils';
import {useTheme} from '@react-navigation/native';
import getStyles from './styles';
import {navigate} from '@services';
import {eqifax} from '@assets';

const initialValues = {
  question1: '',
  question2: '',
  question3: '',
  question4: '',
  question5: '',
};

const EquifaxQuestion = () => {
  const myTheme: any = useTheme();
  const formikRef: any = useRef();
  const styles = getStyles(myTheme?.colors);

  const submitHandler = () => {
    navigate('EquifaxVerifyIncomplete');
  };

  return (
    <Wrapper>
      <CustomProgressBar value={'80'} mt={Platform.OS === 'ios' ? 80 : 30} />
      <TextSection top={RF(25)} title={'Security Questions'} />
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
                    title="Question 1"
                    value={values.question1}
                    placeholderText="Enter Answer"
                    onChangeText={handleChange('question1')}
                    error={
                      touched.question1 && errors.question1
                        ? errors.question1
                        : ''
                    }
                  />
                  <AppTextInput
                    maxLength={20}
                    title="Question 2"
                    value={values.question2}
                    placeholderText="Select Answer"
                    onChangeText={handleChange('question2')}
                  />
                  <AppTextInput
                    maxLength={20}
                    title="Question 3"
                    value={values.question3}
                    placeholderText="Select Answer"
                    onChangeText={handleChange('question3')}
                  />
                  <AppTextInput
                    maxLength={20}
                    title="Question 4"
                    value={values.question4}
                    placeholderText="Select Answer"
                    onChangeText={handleChange('question4')}
                  />
                  <AppTextInput
                    maxLength={20}
                    title="Question 5"
                    value={values.question5}
                    placeholderText="Select Answer"
                    onChangeText={handleChange('question5')}
                  />
                </>
                <View style={styles.contentView}>
                  <AppText
                    color={myTheme?.colors?.border}
                    medium
                    size={8}
                    style={{textAlign: 'justify'}}>
                    ¹ “Equifax Canada Co. (“Equifax”) is a registered Canadian
                    credit bureau that maintains your Canadian consumer credit
                    file, which has been used by Plastk Financial & Rewards Inc.
                    as permitted by you, to provide you with your educational
                    Equifax credit score. The Equifax credit score provided here
                    is current as of the date indicated by Plastk Financial &
                    Rewards Inc. ”{'\n\n\n'} ² “the Equifax Risk Score [or
                    Equifax credit score] is based on Equifax’s proprietary
                    model and may not be the same score used by third parties to
                    assess your creditworthiness. The provision of this score to
                    you is intended for your own educational use. Third parties
                    will take into consideration other information in addition
                    to a credit score when evaluating your creditworthiness.'
                  </AppText>
                </View>

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
    </Wrapper>
  );
};

export default EquifaxQuestion;
