import {RF, GST, SCREEN_WIDTH, SCREEN_HEIGHT} from '@theme';
import {StyleSheet} from 'react-native';

const getStyles = (colors: any) =>
  StyleSheet.create({
    progressView: {
      paddingHorizontal: RF(30),
    },
    checkBoxView: {
      ...GST.CENTER,
      paddingBottom: RF(20),
    },
    checkBoxMainView: {...GST.ROW, alignItems: 'center'},
    checkBox: {position: 'relative', bottom: 6},
    conatinerView: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: RF(30),
    },
    termsView: {
      flexDirection: 'column',
    },
    scanView: {
      alignItems: 'center',
      paddingTop: RF(20),
    },
    scanImageBgView: {
      ...GST.CENTER,
      height: SCREEN_HEIGHT / 3,
    },
    scanImage: {
      width: 200,
      height: 200,
    },
    circleImageBgView: {
      flex: 1,
      flexDirection: 'row',
      ...GST.CENTER,
    },
    circleImage: {
      width: RF(35),
      height: RF(35),
      justifyContent: 'center',
      marginRight: RF(10),
    },
    img: {
      tintColor: '#19383A',
    },
  });

export default getStyles;
