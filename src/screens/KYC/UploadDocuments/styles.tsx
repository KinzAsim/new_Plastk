import {RF} from '@theme';
import {StyleSheet} from 'react-native';

const getStyles = (colors: any) =>
  StyleSheet.create({
    bottomArrowView: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: RF(30),
      paddingTop: RF(20),
    },
    imgCircle: {width: RF(60), height: RF(60), alignSelf: 'center'},
    container: {
      paddingHorizontal: RF(30),
      paddingTop: RF(30),
      paddingBottom: RF(20),
    },
    documentView: {
      marginTop: RF(50),
      paddingHorizontal: RF(50),
    },
  });

export default getStyles;
