import {RF} from '@theme';
import {Platform, StyleSheet} from 'react-native';

const getStyles = (colors: any) =>
  StyleSheet.create({
    viewBtn: {
      flex: 1,
      height: Platform.OS === 'ios' ? RF(150) : RF(200),
      justifyContent: 'flex-end',
      // paddingTop: RF(70),
      alignSelf: 'center',
    },
    imagView: {
      paddingTop: RF(20),
    },
    img: {
      width: RF(200),
      height: RF(150),
      resizeMode: 'contain',
    },
    timerStyle: {
      justifyContent: 'center',
      paddingTop: RF(30),
      alignItems: 'center',
    },
    tImg: {width: '10%', height: RF(18), tintColor: 'green'},
    view: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: RF(20),
    },
    padTop: {
      paddingTop: RF(20),
    },
  });

export default getStyles;
