import {
  Header,
  GreyBox,
  Wrapper,
  BorderBox,
  AppTextInput,
  CustomButton,
} from '@components';
import {RF} from '@theme';
import {Formik} from 'formik';
import {styles} from './styles';
import {navigate} from '@services';
import React, {useRef} from 'react';
import {useKeyboardhook} from '@hooks';
import {SecurityQuestin} from '@utils';
import {ScrollView, View} from 'react-native';
import {RouteProp, useTheme} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      type?: any;
    };
  }>;
}

const PCA_Main = ({route, navigation}: Props) => {
  const {type} = route?.params;
  const formikRef: any = useRef();
  const myTheme: any = useTheme();
  const isKeyboardVisible = useKeyboardhook();

  const initialValues = {
    answer: '',
    message: '',
    question: '',
  };
  const submitHandler = () => {
    navigate('PCA_Confiramtion');
  };
  const onOpen = () => {
    navigate('PCA_Main', {type: 'added'});
  };

  return (
    <Wrapper>
      <Header
        style={{marginTop: 0}}
        navigation={navigation}
        title={'Premium Cash Advance'}
        showCrossButton={type === 'home' && true}
        showBackButton={type === 'added' && true}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <GreyBox
          containerStyle={styles.alignTopView}
          premium
          text={
            'Please note that a Premium Credit Advance fee of $5 will be\n applied for each transaction. The maximum cash advance\n transfer per-instance is $100 and per day-day is $250.'
          }
          textSize={8}
        />
        <CustomButton
          text={'Add Contact'}
          btnStyle={styles.alignTopViewBtn}
          onPress={() => navigate('PCA_AddContact')}
        />

        <BorderBox
          senderBox={true}
          type={type}
          containerStyle={styles.alignTopView}
        />
        <BorderBox
          receiverBox={true}
          contactReciverBox={type === 'added' && true}
        />
        {type !== 'added' && (
          <CustomButton
            btnStyle={styles.alignTopViewBtnBottom}
            text={'Continue'}
            onPress={onOpen}
          />
        )}

        {type === 'added' && (
          <>
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
                    validationSchema={SecurityQuestin}>
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleSubmit,
                    }) => (
                      <View style={styles.emailView}>
                        <>
                          <AppTextInput
                            maxLength={20}
                            title="Security Question*"
                            value={values.question}
                            placeholderText="Enter Security Question"
                            onChangeText={handleChange('question')}
                            error={
                              touched.question && errors.question
                                ? errors.question
                                : ''
                            }
                          />
                          <AppTextInput
                            maxLength={20}
                            title="Security Answer*"
                            value={values.answer}
                            placeholderText="Enter Security Answer"
                            onChangeText={handleChange('answer')}
                            error={
                              touched.answer && errors.answer
                                ? errors.answer
                                : ''
                            }
                          />

                          <AppTextInput
                            maxLength={40}
                            value={values.message}
                            title="Message (Optional)"
                            keyboardType="email-address"
                            placeholderText="Please don’t include banking information"
                            onChangeText={handleChange('message')}
                          />
                        </>
                        <View style={styles.viewBtn}>
                          <CustomButton
                            text={'Continue'}
                            onPress={handleSubmit}
                          />
                        </View>
                      </View>
                    )}
                  </Formik>
                </>
              </KeyboardAwareScrollView>
            </View>
          </>
        )}
      </ScrollView>
    </Wrapper>
  );
};

export default PCA_Main;
