import {GST, RF, SCREEN_HEIGHT, SCREEN_WIDTH} from '@theme';
import {StyleSheet} from 'react-native';

const getStyles = (colors: any) =>
  StyleSheet.create({
    textView: {
      width: RF(280),
    },
    textView1: {
      width: RF(310),
      height: SCREEN_HEIGHT / 40,
    },
    container: {
      marginTop: RF(50),
      alignItems: 'center',
    },
    emailView: {flex: 1, marginTop: RF(10)},
    inputContainer: {
      flex: 1,
      marginTop: RF(30),
      marginHorizontal: RF(20),
    },
    mrgnRight: {
      marginRight: 3,
    },
    topPad: {
      paddingTop: RF(10),
      paddingLeft: RF(20),
    },
    viewBtn: {
      width: '100%',
      marginTop: RF(20),
      alignSelf: 'center',
    },
    view: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: RF(40),
    },
  });

export default getStyles;
