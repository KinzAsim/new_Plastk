import {RF} from '@theme';
import React from 'react';
import {copy} from '@assets';
import {AppText} from '@components';
import {useTheme} from '@react-navigation/native';
import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LinearBar = ({email}: {email?: any}) => {
  const theme: any = useTheme();

  return (
    <LinearGradient
      style={styles.linear}
      end={{x: 0.5, y: 0}}
      start={{x: 0, y: 0.7}}
      colors={['#000000', '#000000', '#262626', '#262626']}>
      <View style={styles.v}>
        <AppText color={'white'} bold size={12}>
          DPID
        </AppText>
        <AppText color={'white'} bold size={12} style={styles.txt}>
          {email}
        </AppText>
      </View>
      <View
        style={[
          styles._v,
          {
            backgroundColor: theme?.colors?.toggleColor,
          },
        ]}>
        <AppText size={8} bold color={'black'}>
          COPY
        </AppText>
        <Image source={copy} style={styles.img} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  txt: {marginLeft: RF(5)},
  linear: {
    width: '90%',
    height: RF(40),
    marginBottom: 20,
    borderRadius: RF(30),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: RF(20),
    paddingHorizontal: RF(10),
  },
  v: {flexDirection: 'row', marginLeft: RF(10)},
  _v: {
    width: RF(65),
    height: RF(28),
    borderRadius: RF(30),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: RF(20),
  },
  img: {
    width: RF(12),
    height: RF(12),
    resizeMode: 'contain',
    tintColor: '#000',
    marginLeft: RF(5),
  },
});

export default LinearBar;
