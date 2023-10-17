import {
  StyleSheet,
  Pressable,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import {Wrapper, AppHeader} from '@components';
import {selfieExample, backArrow, zig, circleFillArrow} from '@assets';
import {RF} from '@theme';
import {navigate} from '@services';

const SelfieExample = () => {
  return (
    <Wrapper
      translucent
      statusBarBagColor={'transparent'}
      statusBarStyle={'default'}>
      <ImageBackground style={styles.mainView} source={selfieExample}>
        <AppHeader
          headerBackground
          title={'Selfie Example'}
          showLeftIcon
          showRightIcon
          leftIcon={backArrow}
          rightIcon={zig}
          headerstyle={{paddingTop: RF(40)}}
        />
        <View style={styles.bottomArrowView}>
          <Pressable onPress={() => navigate('TakeSelfie')}>
            <Image source={circleFillArrow} style={styles.imgCircle} />
          </Pressable>
        </View>
      </ImageBackground>
    </Wrapper>
  );
};

export default SelfieExample;

const styles = StyleSheet.create({
  bottomArrowView: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: RF(30),
  },
  imgCircle: {width: RF(60), height: RF(60), alignSelf: 'center'},
  mainView: {flex: 1, paddingHorizontal: RF(20)},
});
