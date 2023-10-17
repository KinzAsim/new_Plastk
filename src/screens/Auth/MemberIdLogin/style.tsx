import {Platform, StyleSheet} from 'react-native';
import {GST, RF} from '@theme';

const useStyles = (colors: any) =>
  StyleSheet.create({
    img: {
      width: RF(200),
      height: RF(150),
      resizeMode: 'contain',
      marginTop: RF(40),
      alignSelf: 'center',
    },
    emailView: {flex: 1, marginTop: RF(30)},
    wrapContainer: {
      flex: 1,
      // marginTop: RF(20),
      paddingBottom: RF(30),
      marginHorizontal: RF(20),
    },
  });

export default useStyles;
