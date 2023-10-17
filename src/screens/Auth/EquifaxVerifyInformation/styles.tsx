import {RF, GST, SCREEN_WIDTH, SCREEN_HEIGHT} from '@theme';
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
  emailView: {flex: 1, marginHorizontal: RF(20), marginTop: RF(10)},
  errorStyle: {
    color: 'red',
    paddingTop: RF(3),
    paddingLeft: RF(20),
  },
  checkBoxView: {
    paddingTop: RF(20),
  },
  checkBoxMainView: {...GST.ROW, alignItems: 'center'},
  checkBox: {position: 'relative', bottom: -2},
  conatinerView: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: RF(30),
  },
  termsView: {
    flexDirection: 'column',
  },
  img: {
    width: '100%',
    height: RF(40),
    resizeMode: 'contain',
    // paddingHorizontal: 30,
    marginBottom: RF(20),
    marginTop: RF(30),
  },
  contentView: {
    paddingHorizontal: RF(20),
    paddingTop: RF(20),
  },
});

export default styles;
