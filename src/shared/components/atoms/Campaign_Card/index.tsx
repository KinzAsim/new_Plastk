import {
  View,
  Pressable,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {navigate} from '@services';
import PointsCard from '../PointsCard';
import {RF, Typography} from '@theme';
import {AppText} from '@components';

const Campaign_Card = ({item, onFavorite}: {item?: any; onFavorite?: any}) => {
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme?.colors);
  const [loading, setLoading] = useState(false);
  const {user} = useSelector((state: any) => state.root.user);

  const click = (store_id: any, campaign_id: any, type: any) => {
    onFavorite(store_id, campaign_id, type);
  };
  const onClick_BMP = () => {
    navigate('BMP_Promotion', {type: 'bmp', item: item});
  };

  return (
    <View style={[styles.container, {}]}>
      <Pressable onPress={onClick_BMP}>
        <ImageBackground
          source={item?.card_image_url}
          imageStyle={styles.imgStyle}>
          <View style={[styles.outerContainer]}>
            <PointsCard
              item={item}
              pointsValue={item?.points}
              textColor={
                item?.type === 'bap'
                  ? myTheme?.colors.primary
                  : myTheme?.colors?.white
              }
              bgColor={
                item?.type === 'bmp'
                  ? myTheme?.colors.primary
                  : myTheme?.colors?.white
              }
              dark={item?.type === 'bmp' ? false : item?.explore ? false : true}
            />
            <Pressable
              style={styles.iconView}
              onPress={() =>
                click(item?.store_id, item?.campaign_id, item?.type)
              }
              // onPress={() => onFavorite(item?.store_id, item?.campaign_id)}
            >
              {item?.isFavourite ? (
                <AntDesign
                  name={'heart'}
                  color={myTheme?.colors?.pink_light}
                  size={RF(18)}
                />
              ) : (
                <AntDesign
                  color={
                    item?.type === 'bmp'
                      ? myTheme?.colors?.primary
                      : myTheme?.colors?.white
                  }
                  name="hearto"
                  size={RF(18)}
                />
              )}
            </Pressable>
          </View>
          <View style={styles.leftView}>
            <View style={styles.innerContainer}>
              {item?.type === 'bmp' && (
                <View style={{}}>
                  <Image source={item?.logo} style={styles.innerImage} />
                  <AppText
                    numberOfLines={2}
                    medium
                    size={Typography.FONTS.SIZE.XXSMALL}
                    color={myTheme?.colors?.primary}
                    style={{marginTop: 10, marginBottom: 0}}>
                    {item?.miniTxt}
                  </AppText>
                </View>
              )}
              {item?.type == 'bap' && (
                <>
                  <AppText
                    numberOfLines={2}
                    medium
                    size={Typography.FONTS.SIZE.XSMALL}
                    color={'white'}
                    style={{marginTop: 20, marginBottom: 6}}>
                    {item?.miniTxt}
                  </AppText>
                  <AppText
                    numberOfLines={2}
                    medium
                    size={Typography.FONTS.SIZE.XXXSMALL}
                    color={'white'}
                    style={{width: RF(120)}}>
                    {item?.content}
                  </AppText>
                </>
              )}
            </View>
            <View>
              <Image source={item?.img} style={styles.outerImage} />
            </View>
          </View>
        </ImageBackground>
      </Pressable>

      {loading && (
        <View style={{marginTop: -90}}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </View>
  );
};

const getStyles = (colors: any) =>
  StyleSheet.create({
    imgStyle: {
      width: '100%',
      height: RF(160),
      borderRadius: RF(22),
      resizeMode: 'stretch',
    },
    innerContainer: {
      flexDirection: 'column',
    },
    outerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 5,
      marginLeft: RF(16),
    },

    iconView: {
      alignItems: 'flex-end',
      marginRight: RF(5),
      marginTop: RF(-10),
      padding: 10,
    },
    container: {
      width: '100%',
      height: RF(160),
      // elevation: 1,
      borderRadius: RF(22),
      marginVertical: 5,
      // shadowColor: '#000',
      // shadowOffset: {width: 0, height: 0.5},
      // shadowOpacity: 0.5,
      // shadowRadius: 1,
      backgroundColor: 'white',
      borderWidth: 0.4,
      borderColor: colors.border,
    },
    innerImage: {
      width: RF(114),
      height: RF(34),
      resizeMode: 'contain',
      marginTop: RF(15),
    },
    outerImage: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      marginTop: -20,
      // marginLeft: -50,
    },
    leftView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
  });

export default Campaign_Card;
