import {RF, SCREEN_HEIGHT, SCREEN_WIDTH} from '@theme';
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
      height: SCREEN_HEIGHT / 2.5,
      width: SCREEN_WIDTH / 1.3,
      resizeMode: 'contain',
    },
  });

export default getStyles;
