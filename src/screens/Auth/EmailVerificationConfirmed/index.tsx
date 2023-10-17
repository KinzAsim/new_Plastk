import React from 'react';
import {GST} from '@theme';
import getStyles from './style';
import {Image} from 'react-native';
import {navigate} from '@services';
import {plastkBubble} from '@assets';
import {View} from 'react-native-animatable';
import {useTheme} from '@react-navigation/native';
import {CustomButton, TextSection, Wrapper} from '@components';

const EmailVerificationConfirmed = () => {
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme?.colors);

  const handleSubmit = () => {
    navigate('AccountDetail', {data: {}});
  };

  return (
    <Wrapper>
      <TextSection
        title={'Thank You'}
        content={'Your email has been verified'}
      />

      <View style={[GST.CENTER, styles.imagView]}>
        <Image source={plastkBubble} style={styles.img} />
      </View>

      <View style={[styles.viewBtn]}>
        <CustomButton text={'Continue'} onPress={handleSubmit} />
      </View>
    </Wrapper>
  );
};

export default EmailVerificationConfirmed;
