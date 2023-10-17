import {Platform, StyleSheet} from 'react-native';
import {GST, RF, SCREEN_HEIGHT} from '@theme';

const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: RF(20),
    },
    viewBtn: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: RF(20),
    },
    view: {
      alignItems: 'center',
      paddingTop: 240,
    },
    cellView: {
      marginRight: RF(22),
      marginTop: RF(16),
    },
    textView: {
      paddingTop: RF(32),
    },
    topMargin: {
      paddingTop: RF(20),
    },
  });

export default getStyles;
