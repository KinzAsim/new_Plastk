import React from 'react';
import {AppText} from '@components';
import {useTheme} from '@react-navigation/native';
import {RF} from '@theme';
import {Image, Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import {_home, _question, dp, question} from '@assets';

interface HeaderProps {
  title?: any;
  navigation?: any;
  style?: ViewStyle;
  bgClr?: any;
  text_Clr?: any;
  img1?: any;
  img2?: any;
}

const MainHeader = (props: Partial<HeaderProps>) => {
  const theme: any = useTheme();
  const {style, title, navigation, bgClr, text_Clr, img1, img2} = props;

  return (
    <View
      style={[
        styles?.main,
        {
          backgroundColor: bgClr ? bgClr : theme?.colors?.white,
        },
      ]}>
      <Pressable
        style={styles?.imgView}
        onPress={() => {
          // navigation.openDrawer();
        }}>
        <Image source={dp} style={styles.img} />
      </Pressable>

      <View style={styles.view}>
        <AppText
          size={16}
          medium
          color={text_Clr ? text_Clr : theme?.colors?.white}>
          {title}
        </AppText>
        {img1 ? (
          <Image source={question} style={styles.img1} />
        ) : img2 ? (
          <Image source={_question} style={styles.img1} />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img1: {
    width: RF(13),
    height: RF(13),
    resizeMode: 'contain',
    marginTop: RF(3),
    marginLeft: RF(5),
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
  },
  main: {
    width: '100%',
    flexDirection: 'row',
    height: RF(80),
    alignItems: 'center',
    paddingHorizontal: RF(25),
  },
  imgView: {
    width: RF(47),
    height: RF(47),
    borderRadius: RF(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {width: '100%', height: RF(70), resizeMode: 'contain'},
});

export default MainHeader;
