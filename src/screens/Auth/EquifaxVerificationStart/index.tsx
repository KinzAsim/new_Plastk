import React from 'react';
import {GST, RF, SCREEN_HEIGHT, SCREEN_WIDTH} from '@theme';
import getStyles from './styles';
import {Image, Platform, ScrollView} from 'react-native';
import {navigate} from '@services';
import {eqifax, plastkBubble} from '@assets';
import {View} from 'react-native-animatable';
import {useTheme} from '@react-navigation/native';
import {
  CustomButton,
  TextSection,
  Wrapper,
  CustomProgressBar,
  AppText,
} from '@components';

const EquifaxVerificationStart = () => {
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme?.colors);

  const handleSubmit = () => {
    navigate('EquifaxVerifyInformation', {data: {}});
  };

  return (
    <Wrapper>
      <CustomProgressBar value={'60'} mt={Platform.OS === 'ios' ? 80 : 30} />
      <TextSection top={RF(25)} title={'Get Verified'} />

      <Image style={styles.img} source={eqifax} />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={{}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <AppText
            bold
            size={8}
            color={myTheme.colors.border}
            style={{textAlign: 'justify'}}>
            ¹ “Equifax Canada Co. (“Equifax”) is a registered Canadian credit
            bureau that maintains your Canadian consumer credit file, which has
            been used by Plastk Financial & Rewards Inc. as permitted by you, to
            provide you with your educational Equifax credit score. The Equifax
            credit score provided here is current as of the date indicated by
            Plastk Financial & Rewards Inc. ”{'\n\n'} ² “the Equifax Risk Score
            [or Equifax credit score] is based on Equifax’s proprietary model
            and may not be the same score used by third parties to assess your
            creditworthiness. The provision of this score to you is intended for
            your own educational use. Third parties will take into consideration
            other information in addition to a credit score when evaluating your
            creditworthiness.”{'\n\n'} ¹ “Equifax Canada Co. (“Equifax”) is a
            registered Canadian credit bureau that maintains your Canadian
            consumer credit file, which has been used by Plastk Financial &
            Rewards Inc. as permitted by you, to provide you with your
            educational Equifax credit score. The Equifax credit score provided
            here is current as of the date indicated by Plastk Financial &
            Rewards Inc. ”{'\n\n'}² “the Equifax Risk Score [or Equifax credit
            score] is based on Equifax’s proprietary model and may not be the
            same score used by third parties to assess your creditworthiness.
            The provision of this score to you is intended for your own
            educational use. Third parties will take into consideration other
            information in addition to a credit score when evaluating your
            creditworthiness.”{'\n\n'} ¹ “Equifax Canada Co. (“Equifax”) is a
            registered Canadian credit bureau that maintains your Canadian
            consumer credit file, which has been used by Plastk Financial &
            Rewards Inc. as permitted by you, to provide you with your
            educational Equifax credit score. The Equifax credit score provided
            here is current as of the date indicated by Plastk Financial &
            Rewards Inc. ”{'\n\n'} ² “the Equifax Risk Score [or Equifax credit
            score] is based on Equifax’s proprietary model and may not be the
            same score used by third parties to assess your creditworthiness.
            The provision of this score to you is intended for your own
            educational use. Third parties will take into consideration other
            information in addition to a credit score when evaluating your
            creditworthiness.”
          </AppText>
        </View>

        <View style={styles.v_SE}>
          <CustomButton text={'Next'} onPress={handleSubmit} />
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
    </Wrapper>
  );
};

export default EquifaxVerificationStart;
