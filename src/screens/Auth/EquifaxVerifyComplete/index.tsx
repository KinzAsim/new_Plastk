import React from 'react';
import {GST} from '@theme';
import getStyles from './styles';
import {Image, Platform, Pressable} from 'react-native';
import {navigate} from '@services';
import {plastkVisa_card, circleFillArrow} from '@assets';
import {View} from 'react-native-animatable';
import {useTheme} from '@react-navigation/native';
import {
  CustomButton,
  TextSection,
  Wrapper,
  CustomProgressBar,
} from '@components';

const EquifaxVerifyComplete = (props: any) => {
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme?.colors);
  const {type} = props?.route?.params;

  const handleSubmit = () => {
    navigate('VerifyGetStarted', {type: ''});
  };
  const handleSubmitArrow = () => {
    navigate('Welcome');
  };

  return (
    <Wrapper>
      {type == 'document' && (
        <CustomProgressBar value={100} mt={Platform.OS === 'ios' ? 80 : 30} />
      )}
      <TextSection
        top={Platform.OS === 'ios' ? 80 : 20}
        title={
          type == 'document'
            ? 'Your Plastk Secured Credit Card'
            : 'Verification Complete'
        }
        content={
          type == 'document'
            ? ''
            : 'Congratulations! Equifax was able to verify you \n Enjoy your new Plastk Secured Credit Card'
        }
        wd={type == 'document' ? 370 : 300}
      />

      <View style={[GST.CENTER, styles.imagView]}>
        <Image source={plastkVisa_card} style={styles.img} />
      </View>

      <View style={[styles.viewBtn]}>
        {type == 'document' ? (
          <Pressable onPress={handleSubmitArrow}>
            <Image source={circleFillArrow} style={styles.imgCircle} />
          </Pressable>
        ) : (
          <CustomButton text={'Done'} onPress={handleSubmit} />
        )}
      </View>
    </Wrapper>
  );
};

export default EquifaxVerifyComplete;
