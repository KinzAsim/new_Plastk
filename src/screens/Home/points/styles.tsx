import {RF} from '@theme';
import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  topSection: {
    width: '80%',
    flexDirection: 'row',
    marginTop: RF(20),
    justifyContent: 'space-between',
  },
  imgView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RF(8),
  },
  img: {width: RF(28), height: RF(28), resizeMode: 'contain'},
  header: {
    marginTop: 10,
    alignItems: 'center',
    // marginTop: Platform.OS === 'ios' ? 0 : RF(25),
  },
  view: {
    width: '100%',
    // height: RF(250),
    alignItems: 'center',
    transform: [{scaleX: 0.6}, {rotate: '360deg'}],
  },
  txt: {marginTop: RF(8)},
});
