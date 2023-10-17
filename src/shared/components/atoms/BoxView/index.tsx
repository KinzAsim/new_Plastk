import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {GST, RF} from '@theme';
import {AppText} from '@components';
import {useTheme} from '@react-navigation/native';

interface Props {
  top?: any;
  text?: any;
  content?: any;
  img?: any;
}

const BoxView = (props: Props) => {
  const myTheme = useTheme();
  const {top, text, content, img} = props;

  return (
    <View style={[styles.boxView, {marginTop: top ? top : 10}]}>
      <View style={styles.amountBox}>
        <View style={[GST.row_center, GST.mid_row]}>
          <View>
            <AppText color={myTheme.colors.text} size={12} medium>
              {text}
            </AppText>
            <AppText color={myTheme.colors.border} size={10} medium>
              {content}
            </AppText>
          </View>
          <View>
            {/* <AppText color={myTheme.colors.light_green} size={16} semiBold>
              {'$100.00'}
            </AppText> */}
            <Image
              style={{width: 35, height: 35, resizeMode: 'contain'}}
              source={img}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BoxView;

const styles = StyleSheet.create({
  amountView: {
    ...GST.CENTER,
    paddingTop: RF(20),
  },

  amountBox: {
    width: '100%',
    height: RF(95),
    borderRadius: RF(15),
    borderWidth: 1,
    borderColor: '#EBECF3',
    padding: RF(22),
    justifyContent: 'center',
  },
  boxView: {
    ...GST.CENTER,
  },
});
