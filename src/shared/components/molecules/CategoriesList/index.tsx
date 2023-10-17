import {
  View,
  FlatList,
  Pressable,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {navigate} from '@services';
import {GST, RF, Typography} from '@theme';
import {AppText} from '@components';
import {useTheme} from '@react-navigation/native';
import {zig} from '@assets';

const CategoriesList = ({
  data,
  onPress,
  explore,
  mySpend,
  subCategory,
  selectedItem,
}: {
  data?: any;
  mySpend?: any;
  explore?: any;
  subCategory?: any;
  selectedItem?: any;
  onPress?: () => void;
}) => {
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme.colors);

  const onOpen_Detail = (item: any) => {
    if (item?.type == 'bap') {
      getStores_Detail(item);
    } else if (item?.type == 'bmp') {
      console.log('bmp....');
      // navigate('BMP_Promotion', {type: 'bmp', item: item});
    }
  };

  const getStores_Detail = (item: any) => {
    let params = {
      storeId: item?._id,
    };
    getStoreDetail(params)
      .then((res: any) => {
        navigate('BAP_Store_Detail', {
          type: 'bap',
          item: res?.data?.data?.promotion_detail,
        });
      })
      .catch((err: any) => {})
      .finally(() => {});
  };

  return (
    <View style={[GST.ROW]}>
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any, index: any) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <>
              {explore ? (
                <View style={styles.mt}>
                  <Pressable onPress={() => onPress(item, index)}>
                    <ImageBackground
                      source={item?.url}
                      style={styles.imagBg}
                      imageStyle={styles.img}>
                      <AppText
                        bold
                        align
                        color={myTheme?.colors.white}
                        size={Typography.FONTS.SIZE.XXXSMALL}>
                        {item?.name}
                      </AppText>
                    </ImageBackground>
                  </Pressable>
                </View>
              ) : subCategory ? (
                <View
                  style={[
                    styles.subView,
                    {
                      backgroundColor:
                        selectedItem == index
                          ? myTheme?.colors?.primary
                          : '#F5F5F5',
                      marginLeft: index == 0 ? 15 : 10,
                    },
                  ]}>
                  <Pressable onPress={() => onPress(item, index)}>
                    <AppText
                      center
                      style={{}}
                      numberOfLines={1}
                      medium
                      size={Typography.FONTS.SIZE.XXSMALL}
                      color={
                        selectedItem == index
                          ? myTheme?.colors?.white
                          : myTheme?.colors?.primary
                      }>
                      {item?.name}
                    </AppText>
                  </Pressable>
                </View>
              ) : mySpend ? (
                <View
                  key={index}
                  style={[
                    {
                      backgroundColor:
                        selectedItem == index
                          ? myTheme?.colors?.primary
                          : '#fff',
                      marginLeft: index == 0 ? 15 : 10,
                      borderWidth: 0.3,
                      borderColor: myTheme?.colors?.border,
                      paddingHorizontal: RF(12),
                      borderRadius: RF(100),
                      paddingVertical: RF(10),
                    },
                  ]}>
                  <Pressable onPress={() => onPress(item, index)}>
                    <AppText
                      center
                      style={{}}
                      numberOfLines={1}
                      medium
                      size={Typography.FONTS.SIZE.XXSMALL}
                      color={
                        selectedItem == index
                          ? myTheme?.colors?.white
                          : myTheme?.colors?.primary
                      }>
                      {item}
                    </AppText>
                  </Pressable>
                </View>
              ) : (
                <Pressable
                  onPress={() => onOpen_Detail(item)}
                  style={{
                    width: RF(55),
                    height: RF(55),
                    borderRadius: 100,
                    marginHorizontal: 3,
                    marginVertical: RF(10),
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: item?.bg_color
                      ? item?.bg_color
                      : item?.background_color
                      ? item?.background_color
                      : '#000',
                  }}>
                  <Image
                    source={{
                      uri: item?.logo
                        ? item?.logo
                        : item?.image_url
                        ? item?.image_url
                        : 'https://plastk.s3.ca-central-1.amazonaws.com/web_images/promotion_icons/Travel-and-Transportation.png',
                    }}
                    resizeMode="contain"
                    style={{
                      width: RF(45),
                      height: RF(45),
                      borderRadius: 100,
                    }}
                  />
                </Pressable>
              )}
            </>
          );
        }}
      />
    </View>
  );
};

export const getStyles = (colors: any) =>
  StyleSheet.create({
    mt: {
      marginTop: RF(10),
      width: RF(75),
      alignItems: 'center',
    },
    imagBg: {
      width: RF(68),
      height: RF(68),
      marginLeft: 6,
      justifyContent: 'center',
    },
    subView: {
      paddingHorizontal: 20,
      paddingVertical: 11,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    subCategory: {
      borderRadius: RF(50),
      height: RF(35),
    },
    img: {
      borderRadius: 100 / 2,
    },
    linearGradientContainer: {
      borderRadius: RF(50),
      height: RF(55),
      width: RF(55),
      elevation: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors?.ligh_green,
    },
    linearGradientContainerGreen: {
      borderRadius: RF(50),
      height: RF(50),
      width: RF(50),
      elevation: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default CategoriesList;
