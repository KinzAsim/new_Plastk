import {RF} from '@theme';
import {StyleSheet} from 'react-native';

const getStyles = (colors: any) =>
  StyleSheet.create({
    viewBtn: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: RF(33),
    },
    imagView: {
      flex: 5,
    },
    img: {
      height: RF(290),
      width: RF(322),
      resizeMode: 'contain',
    },
    imgCircle: {width: RF(60), height: RF(60), alignSelf: 'center'},
  });

export default getStyles;
