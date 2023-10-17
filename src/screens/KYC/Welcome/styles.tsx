import {RF} from '@theme';
import {Platform, StyleSheet} from 'react-native';

const getStyles = (colors: any) =>
  StyleSheet.create({
    margin: {marginVertical: 0},
    carousel: {
      paddingVertical: 0,
      backgroundColor: 'transparent',
    },
    clr: {color: '#19383A', fontWeight: '700', fontFamily: 'Plus Jakarta Sans'},
    imgBtn: {position: 'absolute', bottom: RF(50)},
    imgtxt: {
      width: '60%',
      textAlign: 'center',
    },
    imgStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoo: {
      width: '50%',
      top: RF(100),
      height: RF(100),
      position: 'absolute',
      alignSelf: 'center',
    },
    imgBG: {
      alignItems: 'center',
      justifyContent: 'center',
      // position: 'absolute',
      // resizeMode: 'cover',
    },

    view: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    btn: {
      position: 'absolute',
      bottom: RF(50),
    },
    logo: {
      width: '100%',
      top: Platform.OS === 'ios' ? RF(80) : RF(100),
      height: RF(287),
      position: 'absolute',
    },
    txt: {
      fontSize: RF(32),
      marginTop: Platform.OS === 'ios' ? RF(180) : RF(150),
      marginBottom: RF(10),
    },
    text: {
      width: '70%',
      alignSelf: 'center',
    },
    content: {
      backgroundColor: 'transparent',
    },
  });

export default getStyles;
