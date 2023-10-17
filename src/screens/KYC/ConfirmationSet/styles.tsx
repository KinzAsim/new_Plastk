import {RF, SCREEN_WIDTH, GST} from '@theme';
import {Platform, StyleSheet} from 'react-native';

const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    containerView: {
      flex: 1,
      justifyContent: 'flex-end',
    },

    cancelView: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: RF(30),
    },

    imgCircle: {width: RF(32), height: RF(32), marginRight: RF(20)},
    main: {
      flex: 1,
      ...GST.CENTER,
      paddingTop: RF(60),
    },
    mainView: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: RF(10),
    },
    overlayView: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.45)',
      opacity: 0.6,
    },
    img: {
      height: '100%',
    },
  });

export default getStyles;
