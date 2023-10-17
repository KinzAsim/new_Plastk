import {View, Image, StatusBar, SafeAreaView} from 'react-native';
import {plastk_card, plastk_name, splash_logo} from '@assets';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {CustomButton, PrimaryButton} from '@components';
import {navigate} from '@services';
import {GST} from '@theme';
import {useTheme} from '@react-navigation/native';

const Splash_Screen = () => {
  const myTheme: any = useTheme();
  const [activeSlide, setActiveSlide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActiveSlide(true);
    }, 3000);
  }, []);

  return (
    <>
      <SafeAreaView style={styles.bottomSafeArea}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor={'#fff'}
        />
      </SafeAreaView>
      <View style={styles.view}>
        {activeSlide ? (
          <>
            <Image source={plastk_name} style={styles.plastkImageName} />
            <View style={GST.MAIN}>
              <Image source={plastk_card} style={styles.plastkImageCard} />
            </View>
            <View style={styles.btnView}>
              <CustomButton
                text={'Get Started'}
                bgClr={myTheme?.colors?.btnClr}
                onPress={() => navigate('Login')}
              />
            </View>
          </>
        ) : (
          <Image source={splash_logo} style={styles.appLogo} />
        )}
      </View>
    </>
  );
};

export default Splash_Screen;
