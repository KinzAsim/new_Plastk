import React from 'react';
import {RF} from '@theme';
import AppText from '../../atoms/AppText';
import {Platform, StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

const TextSection = ({
  title,
  mh,
  wd,
  content,
  top,
  wdContent,
}: {
  title?: any;
  mh?: any;
  wd?: any;
  content?: any;
  top?: any;
  wdContent?: any;
}) => {
  const myTheme: any = useTheme();

  return (
    <View
      style={[
        styles.viewTxt,
        {marginHorizontal: mh ? 20 : 0, marginTop: top ? top : RF(50)},
      ]}>
      <AppText
        align
        size={Platform.OS === 'ios' ? 28 : 32}
        semiBold
        color={myTheme?.colors?.text}
        style={[{width: wd ? wd : RF(300)}]}>
        {title}
      </AppText>

      {content && (
        <AppText
          center
          medium
          size={12}
          color={myTheme?.colors?.text}
          style={[styles.wText, {width: wdContent ? wdContent : RF(300)}]}>
          {content}
        </AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewTxt: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wText: {paddingTop: RF(16)},
});

export default TextSection;
