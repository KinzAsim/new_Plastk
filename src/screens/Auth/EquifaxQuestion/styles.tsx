import {RF} from '@theme';
import {StyleSheet} from 'react-native';

const getStyles = (colors: any) =>
  StyleSheet.create({
    viewBtn: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: RF(33),
      paddingTop: RF(30),
    },
    v_SE: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingTop: 20,
    },
    view: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: RF(40),
    },
    emailView: {flex: 1, marginTop: RF(20), marginHorizontal: RF(20)},
    img: {
      // width: SCREEN_WIDTH / 2.8,
      // height: SCREEN_HEIGHT / 5.9,
      width: '100%',
      height: RF(40),
      resizeMode: 'contain',
      alignSelf: 'center',
      marginBottom: RF(10),
      marginTop: RF(20),
      // paddingHorizontal: 30,
    },
    contentView: {
      paddingHorizontal: RF(15),
      paddingTop: RF(20),
    },
  });

export default getStyles;
