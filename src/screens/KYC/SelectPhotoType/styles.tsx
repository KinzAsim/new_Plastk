import {RF, GST} from '@theme';
import {StyleSheet} from 'react-native';

const getStyles = (colors: any) =>
  StyleSheet.create({
    progressView: {
      paddingHorizontal: RF(30),
    },
    photoTypeView: {flex: 4, ...GST.CENTER},
    bottomArrowView: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: RF(30),
    },
    imgCircle: {width: RF(60), height: RF(60), alignSelf: 'center'},
  });

export default getStyles;
