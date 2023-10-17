import React from 'react';
import {points, starbucks} from '@assets';
import {AppText} from '@components';
import {RF, Typography} from '@theme';
import {useTheme} from '@react-navigation/native';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

const OpenCard = ({
  data,
  date,
  open,
  title,
  dollar,
  _points,
  onClick,
  transaction,
  index,
}: {
  data?: any;
  date?: any;
  open?: any;
  title?: any;
  dollar?: any;
  _points?: any;
  onClick?: any;
  transaction?: any;
  index?: any;
}) => {
  const theme: any = useTheme();
  const styles = useStyles(theme);

  return (
    <View style={open == index ? styles._open : styles.main}>
      {open == index ? (
        <ImageBackground
          source={starbucks}
          style={styles.image}
          imageStyle={styles.imgStyle}>
          <View style={styles.padding}>
            <AppText bold size={Typography.FONTS.SIZE.SMALL} color={'white'}>
              {data?.name}
            </AppText>
            <AppText
              medium
              color={'white'}
              style={styles.wd}
              size={Typography.FONTS.SIZE.XXXSMALL}>
              {data?.address}
            </AppText>
            <AppText
              medium
              color={'white'}
              size={Typography.FONTS.SIZE.XXXSMALL}>
              {data?.date}
            </AppText>
            <AppText
              medium
              color={'white'}
              size={Typography.FONTS.SIZE.XXXSMALL}>
              {data?.time}
            </AppText>

            <AppText
              semiBold
              color={'white'}
              style={styles.mt}
              size={Typography.FONTS.SIZE.XXSMALL}>
              Points Breakdown
            </AppText>
            <AppText
              regular
              color={'white'}
              size={Typography.FONTS.SIZE.XXXSMALL}>
              {data?.rewardPoints}
            </AppText>
            <AppText
              regular
              color={'white'}
              size={Typography.FONTS.SIZE.XXXSMALL}>
              {data?.accPoints}
            </AppText>
          </View>

          <View style={styles.view}>
            <Image source={points} style={styles.imgV} />
            <AppText semiBold size={Typography.FONTS.SIZE.XXSMALL}>
              {data?._p}
            </AppText>
          </View>
        </ImageBackground>
      ) : (
        <>
          <View>
            <AppText semiBold size={Typography.FONTS.SIZE.XXSMALL}>
              {title}
            </AppText>
            <AppText medium size={Typography.FONTS.SIZE.XXXSMALL}>
              {date}
            </AppText>
          </View>

          <View>
            <AppText semiBold size={Typography.FONTS.SIZE.XXSMALL}>
              {dollar}
            </AppText>
            <View style={styles.vImg}>
              <Image
                source={points}
                style={[
                  styles.img,
                  {
                    tintColor:
                      transaction === 'Pending'
                        ? '#B3B3B3'
                        : theme?.colors?.green,
                  },
                ]}
              />
              <AppText medium size={Typography.FONTS.SIZE.XXXSMALL}>
                {_points}
              </AppText>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const useStyles = (theme: any) =>
  StyleSheet.create({
    imgV: {width: RF(24), height: RF(24), resizeMode: 'contain'},
    view: {
      width: RF(85),
      height: RF(40),
      backgroundColor: 'white',
      borderRadius: RF(10),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-end',
      marginBottom: RF(20),
    },
    mt: {marginTop: RF(15)},
    wd: {width: RF(190)},
    padding: {padding: RF(20)},
    imgStyle: {borderRadius: RF(20), alignItems: 'center'},
    image: {
      width: '100%',
      height: RF(195),
      flexDirection: 'row',
    },
    _open: {
      width: '95%',
      height: RF(200),
      alignItems: 'center',
      marginVertical: RF(20),
      justifyContent: 'center',
      marginHorizontal: RF(10),
    },
    vImg: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: RF(16),
      justifyContent: 'center',
    },
    img: {width: RF(13), height: RF(13), resizeMode: 'contain'},
    main: {
      borderWidth: 0.2,
      marginVertical: RF(10),
      borderColor: theme?.colors?.border,
      width: '90%',
      height: RF(80),
      borderRadius: RF(10),
      alignItems: 'center',
      justifyContent: 'space-between',
      alignSelf: 'center',
      marginHorizontal: RF(10),
      flexDirection: 'row',
      paddingHorizontal: RF(20),
    },
  });

export default OpenCard;
