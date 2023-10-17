import {RF} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewBtn: {
    width: '100%',
    marginTop: RF(20),
    alignSelf: 'center',
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RF(40),
  },

  text: {marginHorizontal: RF(20), marginTop: RF(20)},
  emailView: {flex: 1, marginTop: RF(10), marginHorizontal: RF(20)},
  errorStyle: {
    color: 'red',
    paddingTop: RF(3),
    paddingLeft: RF(20),
  },
});

export default styles;
