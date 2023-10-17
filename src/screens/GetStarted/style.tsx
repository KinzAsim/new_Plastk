import {StyleSheet} from 'react-native';
import {RF, SCREEN_WIDTH} from '@theme';

const getStyles = (colors: any) =>
  StyleSheet.create({
    platkImageName: {
      height: SCREEN_WIDTH / 9,
      resizeMode: 'center',
      alignSelf: 'center',
      marginTop: RF(40),
    },
    platKImageCard: {
      width: '100%',
      height: '100%',
      // maxHeight: 500,
      resizeMode: 'contain',
      marginTop: RF(10),
    },
    btnView: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingTop: RF(30),
      paddingBottom: RF(30),
    },
  });

export default getStyles;
