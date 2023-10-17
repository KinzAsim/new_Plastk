import {RF, light_grey} from '@theme';
import {Platform, StyleSheet} from 'react-native';

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
  addres: {
    opacity: 0.5,
    fontWeight: '500',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: Platform.OS === 'ios' ? RF(12) : RF(12.5),
  },
  sheet: {
    height: RF(40),
    // width: '100%',
    borderRadius: RF(50),
    marginTop: RF(10),
    backgroundColor: light_grey,
    justifyContent: 'center',
    paddingLeft: RF(20),
  },
  text: {marginHorizontal: RF(20), marginTop: RF(20)},
  emailView: {flex: 1, marginTop: RF(10)},
  errorStyle: {
    color: 'red',
    paddingTop: RF(3),
    paddingLeft: RF(20),
  },
  txt: {
    // flex: 1,
    // alignItems: 'flex-end',
    // marginRight: RF(10),
    // paddingRight: RF(10),
  },
  inputContainer: {
    paddingVertical: RF(10),
  },
  iconInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gray',
    height: Platform.OS ? RF(40) : RF(45),
    borderRadius: RF(50),
    padding: 10,
  },
  multilineView: {
    backgroundColor: 'yellow',
    height: RF(200),
    borderRadius: 20,
    paddingLeft: RF(25),
  },
  input: {
    flex: 1,
    backgroundColor: 'gray',
    height: RF(40),
    borderRadius: RF(50),
    fontSize: Platform.OS ? RF(11) : RF(12.5),
    opacity: 1,
    paddingLeft: RF(15),
    fontWeight: '500',
    fontFamily: 'Plus Jakarta Sans',
  },
  icon: {
    marginRight: RF(5),
  },
  placeholderText: {},
  textContainer: {
    marginHorizontal: RF(20),
  },
  OptionalText: {
    color: '#4A5568',
    fontSize: RF(11),
  },
});

export default styles;
