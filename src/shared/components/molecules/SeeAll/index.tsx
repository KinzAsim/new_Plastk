import {AppText} from '@components';
import {useTheme} from '@react-navigation/native';
import {RF, Typography} from '@theme';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const SeeAll = ({title, onPress}: {title?: any; onPress?: any}) => {
  const myTheme: any = useTheme();
  return (
    <View style={styles.mainView}>
      <AppText
        size={Typography.FONTS.SIZE.SMALL}
        color={myTheme?.colors?.border}
        semiBold>
        {title}
      </AppText>
      <TouchableOpacity onPress={onPress}>
        <AppText
          size={Typography.FONTS.SIZE.XXSMALL}
          medium
          color={myTheme?.colors?.border}>
          See All
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: RF(16),
    marginBottom: RF(5),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: RF(40),
    justifyContent: 'space-between',
  },
});

export default SeeAll;
