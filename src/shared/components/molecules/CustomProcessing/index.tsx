import React from 'react';
import {splash_logo} from '@assets';
import {RF, SCREEN_HEIGHT} from '@theme';
import TextSection from '../TextSection';
import {Image, StyleSheet, View} from 'react-native';
import {CustomProgressBar} from '@components';

const CustomProcessing = ({title, content}: {title?: any; content?: any}) => {
  return (
    <>
      <CustomProgressBar value={title == 'Hang Tight' ? 92 : 96} />
      <TextSection
        top={20}
        title={title}
        content={content}
        wdContent={RF(212)}
      />
      <View style={styles.logoView}>
        <Image source={splash_logo} style={styles.appLogo} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logoView: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: SCREEN_HEIGHT / 1.6,
  },
  appLogo: {
    width: RF(150),
    height: RF(150),
  },
});

export default CustomProcessing;
