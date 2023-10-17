import {RF, SCREEN_HEIGHT, SCREEN_WIDTH} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  termsView: {
    width: SCREEN_WIDTH / 1.4,
    marginTop: RF(5),
  },
  l_text: {
    flexDirection: 'row',
    marginTop: RF(10),
    marginLeft: RF(10),
  },
  t: {marginTop: RF(4)},
  terms: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: RF(10),
  },
  t_Text: {flexDirection: 'row', alignItems: 'center'},
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

  text: {marginHorizontal: RF(20), marginTop: RF(20)},
  emailView: {
    flex: 1,
    marginTop: RF(20),
    marginHorizontal: RF(20),
  },
  errorStyle: {
    color: 'red',
    paddingTop: RF(3),
    paddingLeft: RF(20),
  },
  main: {flexDirection: 'row', paddingLeft: 10, paddingTop: 20},
  textOption: {paddingLeft: RF(20)},
  image: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: 5,
    marginTop: 3,
  },

  termsText: {
    flex: 1,
    paddingTop: RF(5),
  },
  circleImage: {
    width: RF(20),
    height: RF(20),
    resizeMode: 'contain',
  },
  circle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    marginRight: 5,
    flexDirection: 'row',
    borderWidth: 0.8,
    marginTop: 4,
    borderColor: '#4A556859',
  },
});

export default styles;
