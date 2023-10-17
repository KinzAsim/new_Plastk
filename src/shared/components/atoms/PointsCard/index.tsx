import React from 'react';
import {useSelector} from 'react-redux';
import {points} from '@assets';
import {Image, View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {RF, Typography} from '@theme';
import {AppText} from '@components';

const PointsCard = ({
  item,
  dark,
  mini,
  back,
  textColor,
  bgColor,
  margin,
  backgroundColor,
  pointsValue,
  miniStyle,
}: {
  mini?: any;
  dark?: any;
  item?: any;
  back?: any;
  margin?: any;
  bgColor?: any;
  textColor?: any;
  backgroundColor?: any;
  pointsValue?: any;
  miniStyle?: StyleProp<ViewStyle>;
}) => {
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme?.colors);

  return (
    <View
      style={[
        mini ? styles.p_img_Mini_View : styles.p_img_View,

        {
          marginTop: RF(10),
          backgroundColor: bgColor,
        },
        miniStyle,
      ]}>
      <Image style={[styles.txtimage]} resizeMode="contain" source={points} />
      <AppText
        semiBold
        color={textColor}
        numberOfLines={1}
        style={{paddingLeft: 10, marginTop: -3}}
        size={Typography.FONTS.SIZE.XXSMALL}>
        {pointsValue}
        {back && '% Back'}
      </AppText>
    </View>
  );
};

const getStyles = (colors: any) =>
  StyleSheet.create({
    p_img_Mini_View: {
      width: RF(80),
      height: RF(32),
      borderRadius: RF(10),
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: RF(16),
      justifyContent: 'center',
      backgroundColor: colors?.white,
      borderWidth: 1,
      borderColor: 'lightgray',
    },
    p_img_View: {
      height: RF(40),
      width: RF(110),
      borderRadius: RF(10),
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: RF(16),
      justifyContent: 'center',
      backgroundColor: colors?.white,
    },
    txtimage: {
      width: RF(19),
      height: RF(19),
    },
  });

export default PointsCard;
