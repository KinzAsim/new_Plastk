import {View, Image, ImageBackground} from 'react-native';
import React from 'react';
import {plastkVerifyPerson, plastk_name_white} from '@assets';
import {useTheme} from '@react-navigation/native';
import getStyles from './styles';
import {AppText, CustomButton, Wrapper} from '@components';
import {navigate} from '@services';
import {GST} from '@theme';

const VerifyGetStarted = (props: any) => {
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme.colors);
  const submitHandler = () => {
    navigate('SafeSecureCarousel');
  };

  return (
    <Wrapper
      translucent
      statusBarBagColor={'transparent'}
      statusBarStyle={'default'}>
      <ImageBackground
        style={[GST.MAIN]}
        source={plastkVerifyPerson}
        imageStyle={{
          height: '100%',
        }}>
        <Image source={plastk_name_white} style={styles.platkImageName} />
        <View style={[styles.containerView]}>
          <AppText
            center
            color={myTheme?.colors?.white}
            semiBold
            size={32}
            style={styles.padBottom}>
            {'Plastk Verification'}
          </AppText>
          <AppText
            center
            color={myTheme?.colors?.white}
            regular
            size={12}
            style={styles.padBottom}>
            {`We’re partnered with Vouched to securely \n capture and verify your information.\n Get started to see how it work!`}
          </AppText>
          <View style={[styles.cancelView, {}]}>
            <CustomButton
              text={'Continue'}
              bgClr={myTheme?.colors?.toggleColor}
              onPress={submitHandler}
            />

            <AppText
              color={myTheme?.colors?.white}
              semiBold
              size={12}
              onPress={() => {
                navigate('Login');
              }}>
              Cancel
            </AppText>
          </View>
        </View>
      </ImageBackground>
    </Wrapper>
  );
};

export default VerifyGetStarted;
