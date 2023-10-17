import React from 'react';
import {GST, RF} from '@theme';
import getStyles from './styles';
import {Image, Platform} from 'react-native';
import {navigate} from '@services';
import {hand_sign} from '@assets';
import {View} from 'react-native-animatable';
import {useTheme} from '@react-navigation/native';
import {
  CustomButton,
  TextSection,
  Wrapper,
  CustomProgressBar,
} from '@components';

const FundsReceived = () => {
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme?.colors);

  const handleSubmit = () => {
    navigate('EquifaxVerificationStart');
  };

  return (
    <Wrapper>
      <CustomProgressBar value={'50'} mt={Platform.OS === 'ios' ? 80 : 30} />
      <TextSection
        top={RF(25)}
        title={'Funds Received'}
        content={
          'Congratulations! We received your security \n funds, lets finish your account'
        }
      />

      <View style={[GST.CENTER, styles.imagView]}>
        <Image source={hand_sign} style={styles.img} />
      </View>

      <View style={[styles.viewBtn]}>
        <CustomButton text={'Next'} onPress={handleSubmit} />
      </View>
    </Wrapper>
  );
};

export default FundsReceived;
