import {GST, RF, SCREEN_HEIGHT, SCREEN_WIDTH} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  copyView: {
    paddingTop: RF(20),
    flexDirection: 'row',
    ...GST.CENTER,
  },
  copyImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: RF(10),
  },
  v_SE: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 30,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RF(40),
  },
  image: {
    width: SCREEN_WIDTH / 5.3,
    height: SCREEN_HEIGHT / 15,
    resizeMode: 'contain',
  },
  flatView: {
    marginTop: RF(20),
    alignItems: 'center',
  },
  flatContainer: {
    paddingHorizontal: 4,
    paddingVertical: 3,
  },
  amountView: {
    ...GST.CENTER,
    paddingTop: RF(20),
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.8,
    marginHorizontal: RF(40),
    paddingTop: 30,
  },
  amountBox: {
    width: SCREEN_WIDTH / 1.2,
    height: RF(95),
    borderRadius: RF(15),
    borderWidth: 0.5,
    borderColor: '#4A5568',
    padding: 20,
  },
  boxView: {
    marginTop: RF(20),
    flex: 1,
    ...GST.CENTER,
  },
  text: {
    paddingTop: RF(10),
    width: RF(268),
  },
  contentMainView: {
    paddingTop: RF(20),
    paddingBottom: RF(32),
    paddingHorizontal: RF(50),
  },
  content1: {
    paddingTop: RF(10),
  },
  textView: {width: RF(300), marginLeft: RF(50), marginTop: RF(20)},
  contentView: {width: 320, height: RF(92)},
});

export default styles;
