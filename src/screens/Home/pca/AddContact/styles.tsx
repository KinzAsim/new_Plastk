import {RF} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  alignTopView: {marginTop: RF(15)},
  alignTopViewBtn: {marginTop: RF(30)},

  scrollView: {flexGrow: 1, paddingBottom: RF(70)},
  viewBtn: {
    width: '100%',
    marginTop: RF(20),
    alignSelf: 'center',
    marginBottom: RF(40),
  },
  emailView: {flex: 1, marginTop: RF(0)},
  headerView: {
    paddingLeft: RF(40),
  },
});
