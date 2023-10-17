import {RF, SCREEN_HEIGHT} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  v_SE: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  viewBtn: {
    // flex: 0.5,
    // justifyContent: 'flex-end',
    // paddingBottom: RF(30),
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RF(40),
  },

  text: {marginHorizontal: RF(20), marginTop: RF(20)},
  emailView: {
    flex: 1,
    marginTop: RF(40),
    marginHorizontal: RF(20),
  },
  errorStyle: {
    color: 'red',
    paddingTop: RF(3),
    paddingLeft: RF(20),
  },
});

export default styles;
