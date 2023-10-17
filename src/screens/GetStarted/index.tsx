import React from 'react';
import {GST} from '@theme';
import getStyles from './style';
import {navigate} from '@services';
import {Image, View} from 'react-native';
import {plastk_card, plastk_name} from '@assets';
import {useTheme} from '@react-navigation/native';
import {PrimaryButton, Wrapper} from '@components';

const GetStarted = () => {
  const myTheme: any = useTheme();
  const style = getStyles(myTheme.colors);

  return (
    <Wrapper>
      <Image source={plastk_name} style={style.platkImageName} />
      <View style={{...GST.MAIN}}>
        <Image source={plastk_card} style={style.platKImageCard} />
      </View>
      <View style={style.btnView}>
        <PrimaryButton
          bgColor={myTheme.colors.light_dark}
          title={'Get Started'}
          onPress={() => navigate('Login')}
        />
      </View>
    </Wrapper>
  );
};

export default GetStarted;
