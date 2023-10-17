import {RF, SCREEN_WIDTH, SCREEN_HEIGHT} from '@theme';
import {StyleSheet} from 'react-native';

const getStyles = (colors: any) =>
  StyleSheet.create({
    viewBtn: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: RF(33),
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: RF(23),
    },
    img: {
      width: SCREEN_WIDTH / 2.8,
      height: SCREEN_HEIGHT / 5.9,
      resizeMode: 'contain',
      alignSelf: 'center',
      paddingHorizontal: 30,
    },
    v_SE: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingTop: 30,
    },
    view: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: RF(40),
    },
    contentView: {
      maxHeight: SCREEN_HEIGHT / 2.5,
    },
  });

export default getStyles;
