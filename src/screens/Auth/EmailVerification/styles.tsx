import {RF} from '@theme';
import {StyleSheet} from 'react-native';

const getStyles = (colors: any) =>
  StyleSheet.create({
    text: {marginBottom: RF(25)},
    txt: {fontSize: RF(12), fontWeight: '600'},
    viewBtn: {
      width: '100%',
      marginTop: RF(90),
      paddingBottom: RF(30),
      flex: 1,
    },
    view: {
      marginBottom: RF(40),
      justifyContent: 'center',
      alignItems: 'center',
    },
    timerStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: RF(30),
    },
    tImg: {width: '10%', height: RF(18)},
    field: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: RF(20),
    },
  });

export default getStyles;
