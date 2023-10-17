import {Platform, StyleSheet} from 'react-native';
import {RF, SCREEN_WIDTH} from '@theme';

export const styles = StyleSheet.create({
  appLogo: {
    width: RF(100),
    height: RF(100),
  },
  view: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSafeArea: {
    backgroundColor: 'white',
  },
  plastkImageName: {
    height: RF(60),
    width: RF(100),
    alignSelf: 'center',
    resizeMode: 'contain',
    // marginTop: RF(60),
    marginTop: Platform.OS === 'ios' ? RF(20) : RF(70),
  },
  plastkImageCard: {
    width: SCREEN_WIDTH,
    height: '100%',
    marginTop: RF(10),
    resizeMode: Platform.OS === 'ios' ? 'contain' : 'stretch',
  },
  btnView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: RF(30),
    paddingBottom: RF(30),
  },
});
