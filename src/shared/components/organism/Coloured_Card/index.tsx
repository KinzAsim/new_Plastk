import {
  View,
  Pressable,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
// import PointsCard from './atoms/pointsCard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {navigate} from '@services';
import {RF, Typography} from '@theme';
import {useTheme} from '@react-navigation/native';
import {AppText, PointsCard} from '@components';

const Coloured_Card = ({
  item,
  dark,
  explore,
  see_All,
  onFavorite,
  blurRadius,
  index,
  currentIndex,
  isForme,
  seeAll,
}: {
  see_All?: any;
  dark?: any;
  explore?: any;
  item?: any;
  onFavorite?: any;
  blurRadius?: any;
  index?: any;
  currentIndex?: any;
  isForme?: any;
  seeAll?: any;
}) => {
  const myTheme: any = useTheme();
  const click = (store_id: any, campaign_id: any, type: any) => {
    onFavorite(store_id, campaign_id, type);
  };

  const getTop = () => {
    if (currentIndex === 1) {
      if (index === 2) return 80;
    } else if (currentIndex === 0) {
      if (index === 1) return 80;
    } else if (currentIndex === 2) {
      if (index === 3) return 80;
    } else if (currentIndex === 4) {
      if (index === 0) return 80;
    } else if (currentIndex === 3) {
      if (index === 0) return 50;
      if (index === 4) return 38;
    }
  };

  const getHeight = () => {
    if (currentIndex === 1) {
      if (index === 0) return 80;
    } else if (currentIndex === 0) {
      if (index === 4) return 38;
      if (index === 3) return 50;
    } else if (currentIndex === 2) {
      if (index === 0) return 50;
      if (index === 1) return 38;
    } else if (currentIndex === 3) {
      if (index === 2) return 38;
      if (index === 1) return 50;
    } else if (currentIndex === 4) {
      if (index === 3) return 38;
      if (index === 2) return 50;
    }
  };

  const onClick_BAP = () => {
    navigate('BAP_Promotion', {type: 'bap', item: item});
  };
  const onClick_BMP = () => {
    navigate('BMP_Promotion', {type: 'bmp', item: item});
  };

  return (
    <View
      style={[
        styles.container,
        {
          bottom: getHeight(),
          top: getTop(),
          backgroundColor: see_All
            ? !blurRadius
              ? 'white'
              : 'transparent'
            : '',
          opacity: see_All ? (!blurRadius ? 0.7 : 1) : 2,
        },
      ]}>
      <Pressable
        onPress={() => {
          if (item?.type == 'bap') {
            onClick_BAP();
          } else {
            onClick_BMP();
          }
        }}>
        <ImageBackground source={item?.url} imageStyle={styles.imgStyle}>
          <View style={styles.outerContainer}>
            <PointsCard
              item={item}
              pointsValue={item?.points}
              textColor={myTheme?.colors?.border}
              bgColor={myTheme?.colors?.white}
              dark={item?.type === 'bmp' ? true : false}
            />

            <TouchableOpacity
              style={styles.iconView}
              onPress={() =>
                click(item?.store_id, item?.campaign_id, item?.type)
              }
              // onPress={onFavorite}
            >
              {item?.isFavourite ? (
                <AntDesign
                  name={'heart'}
                  color={myTheme?.colors?.pink_light}
                  size={RF(20)}
                />
              ) : (
                <AntDesign
                  name="hearto"
                  size={RF(20)}
                  color={
                    item?.type === 'bmp'
                      ? myTheme?.colors?.primary
                      : myTheme?.colors?.white
                  }
                />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.innerContainer}>
            <View style={styles.textView}>
              {item?.type !== 'bmp' && (
                <AppText
                  semiBold
                  size={Typography.FONTS.SIZE.SMALL}
                  color={myTheme?.colors?.white}>
                  {item?.txt}
                </AppText>
              )}

              <AppText
                medium
                numberOfLines={3}
                size={Typography.FONTS.SIZE.XXXSMALL}
                color={
                  item?.type === 'bmp'
                    ? myTheme?.colors?.primary
                    : myTheme?.colors?.white
                }
                style={[
                  item?.type === 'bmp' ? styles.mini_Img : styles.miniText,
                  {width: seeAll ? '40%' : explore ? RF(150) : '18%'},
                ]}>
                {item?.miniTxt}
              </AppText>
            </View>
            {/* <Image
                      style={{
                        left: 0,
                        top: 0,
                        width: 500,
                        height: 500,
                        marginRight: 1,
                      }}
                      source={featured}
                    /> */}
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  txtimage: {
    width: RF(20),
    height: RF(20),
  },
  innerContainer: {
    flexDirection: 'row',
  },
  textView: {
    marginLeft: 16,
    marginTop: 10,
  },
  textStyle: {marginLeft: -8},
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 8,
  },
  imgStyle: {
    width: '100%',
    height: RF(160),
    borderRadius: RF(22),
  },
  container: {
    width: '100%',
    height: RF(160),
    borderRadius: RF(20),
    elevation: 3,
  },
  miniText: {width: '18%', marginTop: RF(8)},
  mini_Img: {marginTop: RF(50), marginLeft: RF(5)},
  p_image: {
    width: RF(20),
    height: RF(20),
  },
  iconView: {
    alignItems: 'flex-end',
    marginRight: RF(10),
  },
  p_img_View: {
    width: RF(74),
    height: RF(32),
    borderRadius: RF(10),
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: RF(16),
    marginLeft: RF(16),
    justifyContent: 'space-evenly',
  },
});

export default Coloured_Card;
