import {Platform, StyleSheet} from 'react-native';
import {GST, RF} from '@theme';

const useStyles = (colors: any) =>
  StyleSheet.create({
    emailView: {flex: 1, marginTop: RF(30)},
    wrapContainer: {
      flex: 1,
      paddingBottom: RF(30),
      // marginTop: RF(20),
    },
    wrapView: {
      paddingTop: 10,
      paddingBottom: 0,
      paddingHorizontal: 0,
    },
    topMarginView: {
      paddingTop: RF(32),
    },
    imgView: {
      height: RF(220),
      backgroundColor: '#fff',
    },
    img: {
      width: '100%',
      height: RF(300),
      marginTop: -20,
    },
    wrapRememberSection: {
      ...GST.mid_row,
      paddingHorizontal: RF(12),
      paddingTop: RF(10),
    },
    wrapButton: {
      ...GST.mid_row,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: RF(32),
    },
    progressBar: {
      height: 20,
      flexDirection: 'row',
      backgroundColor: 'red',
      borderRadius: 20,
    },
    or: {marginTop: RF(-8), marginHorizontal: RF(10)},
    line_v: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: RF(35),
      paddingBottom: RF(12),
    },
    line: {
      width: RF(135),
      height: 1.5,
      backgroundColor: '#4A556840',
    },
  });

export default useStyles;
