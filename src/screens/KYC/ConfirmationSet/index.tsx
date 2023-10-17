import {View, Image, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {plastkVerifyPerson, goodBgCircle} from '@assets';
import {useTheme} from '@react-navigation/native';
import getStyles from './styles';
import {AppText, CustomButton, Wrapper} from '@components';
import {navigate} from '@services';
import {GST} from '@theme';

const ConfirmationSet = (props: any) => {
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme.colors);
  const [flag, setFlag] = useState<any>('unset');
  const submitHandler = () => {
    navigate('EquifaxVerifyComplete', {type: 'document'});
  };
  setTimeout(() => {
    setFlag('set');
  }, 3000);

  return (
    <Wrapper
      translucent
      statusBarBagColor={'transparent'}
      statusBarStyle={'default'}>
      <ImageBackground
        style={[GST.MAIN]}
        source={plastkVerifyPerson}
        imageStyle={styles.img}>
        <View style={styles.overlayView} />
        <View style={[styles.main]}>
          <View style={styles.mainView}>
            <Image source={goodBgCircle} style={[styles.imgCircle]} />
            <AppText size={32} semiBold color={myTheme?.colors.white}>
              All Set!
            </AppText>
          </View>

          {flag == 'unset' && (
            <AppText size={12} regular color={myTheme?.colors?.white} center>
              Thank you for providing your security information.{'\n'}You will
              receive a confirmation in the next 2{'\n'} business days. Please
              wait for confirmation.
            </AppText>
          )}
        </View>
        <View style={[styles.cancelView]}>
          {flag == 'set' && (
            <CustomButton
              text={'Done'}
              bgClr={myTheme?.colors?.toggleColor}
              onPress={submitHandler}
            />
          )}
        </View>
      </ImageBackground>
    </Wrapper>
  );
};

export default ConfirmationSet;
