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
import {GST, RF} from '@theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {useTheme} from '@react-navigation/native';
import {SignUpSchema} from '@utils';
import {navigate} from '@services';
import {useKeyboardhook} from '@hooks';
import {backArrow} from '@assets';
import {saleOrder} from './../../../../shared/services/SaleService';

const Confirmation = ({navigation}: any) => {
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
        size={16}
        leftIconStyle={{width: RF(21), height: RF(21)}}
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <AppText
          center
          numberOfLines={2}
          size={12}
          medium
          style={{
            width: '50%',
            alignSelf: 'center',
            paddingTop: RF(20),
            paddingBottom: RF(40),
          }}>
          {'Please review the details and complete the transaction.'}
        </AppText>
        <View style={{}}>
          <BorderBox cashBox />
          <GreyBox
            containerStyle={styles.alignTopView}
            text={'This contact has autodeposit enabled.'}
            textSize={12}
          />
        </View>
        <View style={[GST.mid_row, {paddingHorizontal: RF(30)}]}>
          <CustomButton
            btnStyle={[
              styles.alignTopView,
              {
                height: 40,
              },
            ]}
            text={'Cancel'}
            width={145}
            bgClr={myTheme?.colors?.dim_gray}
            textStyle={{color: myTheme?.colors?.border}}
            onPress={() => navigate('PCA_Main', {type: 'home'})}
          />
          <CustomButton
            btnStyle={[
              styles.alignTopView,
              {
                height: 40,
              },
            ]}
            text={'Confirm'}
            width={145}
            onPress={() => navigate('Home')}
          />
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default Confirmation;
