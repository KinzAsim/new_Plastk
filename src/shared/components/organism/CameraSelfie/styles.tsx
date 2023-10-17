import {RF, SCREEN_HEIGHT, SCREEN_WIDTH} from '@theme';
import {StyleSheet} from 'react-native';

const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      top: RF(180),
      position: 'absolute',
    },
    buttonContainer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 0,
      padding: 30,
    },
    cameraViewBg: {
      width: RF(400),
      height: RF(380),
    },
    imgCircle: {
      width: RF(80),
      height: RF(80),
    },
    frameView: {
      // paddingTop: 100,
      // marginHorizontal: 40,
    },
    maskContainer: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    },
    maskTopContainer: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT / 3.99,
      backgroundColor: 'rgba(255,255,255,0.7)',
    },
    maskCenterContainer: {
      alignSelf: 'center',
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT / 1.9,
      alignItems: 'center',
    },
    maskLeftContainer: {
      width: '20%',
      height: SCREEN_HEIGHT / 1.9,
      backgroundColor: 'rgba(255,255,255,0.7)',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
    maskRightContainer: {
      width: '20%',
      height: SCREEN_HEIGHT / 1.9,
      backgroundColor: 'rgba(255,255,255,0.7)',
      position: 'absolute',
      right: 0,
      bottom: 0,
    },
    maskBottomContainer: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT / 2,
      backgroundColor: 'rgba(255,255,255,0.7)',
    },
    headerView: {
      position: 'absolute',
      top: 10,
      left: 10,
      right: 10,
    },
  });

export default getStyles;
