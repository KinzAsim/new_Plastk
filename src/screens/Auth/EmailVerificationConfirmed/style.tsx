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
      height: RF(234),
      width: RF(200),
      resizeMode: 'contain',
    },
  });

export default getStyles;
