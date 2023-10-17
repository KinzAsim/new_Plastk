import React from 'react';
import {useSelector} from 'react-redux';
import {borrowell, koho, points} from '@assets';
import {Image, View, StyleSheet} from 'react-native';
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
}) => {
  const {user, colorCode} = useSelector((state: any) => state.root.user);

  return (
    <View
      style={[
        dark
          ? [
              styles.p_img_View_dark,
              {
                backgroundColor: bgColor ? bgColor : colorCode,
              },
            ]
          : mini
          ? [styles.p_img_Mini_View, {backgroundColor: backgroundColor}]
          : styles.p_img_View,
        {
          marginTop: RF(10),
        },
      ]}>
      {user?.user_type == 'Borrowell' ? (
        <Image
          style={[
            styles.txtimage,
            {tintColor: item?.type == 'bmp' ? 'white' : colorCode},
          ]}
          resizeMode="contain"
          source={borrowell}
        />
      ) : user?.user_type == 'KOHO' ? (
        <Image
          style={[
            styles.txtimage,
            {tintColor: item.type == 'bmp' ? 'white' : colorCode},
          ]}
          resizeMode="contain"
          source={koho}
        />
      ) : (
        <Image
          style={[
            styles.txtimage,
            // {tintColor: item.type == 'bmp' ? WHITE : primaryDarkColor},
          ]}
          resizeMode="contain"
          source={points}
        />
      )}

      <AppText
        semiBold
        color={textColor}
        numberOfLines={1}
        style={{paddingLeft: 5}}
        size={Typography?.FONTS?.SIZE?.XXSMALL}
        // color={dark ? WHITE : mini ? textColor : paginationGray}
      >
        {pointsValue}
        {/* {back && '% Back'} */}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  p_img_Mini_View: {
    borderRadius: RF(10),
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
    width: RF(75),
    height: RF(32),
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  p_img_View: {
    width: RF(100),
    height: RF(40),
    // paddingHorizontal: 10,
    borderRadius: RF(10),
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: RF(16),
    justifyContent: 'center',
    // justifyContent: 'space-evenly',
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  p_img_View_dark: {
    width: RF(110),
    height: RF(40),
    borderRadius: RF(10),
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: RF(16),
    justifyContent: 'center',
    // justifyContent: 'space-evenly',
  },
  txtimage: {
    width: RF(19),
    height: RF(19),
  },
  // textStyle: {marginLeft: -17},
});

export default PointsCard;
