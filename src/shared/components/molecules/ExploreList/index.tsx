import React from 'react';
import {useTheme} from '@react-navigation/native';
import {
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {elevation} from '@assets';
import {GST, RF, Typography} from '@theme';
import {AppText} from '@components';
import AntDesign from 'react-native-vector-icons/AntDesign';
const ExploreList = ({
  data,
  onPress,
  onGoBack,
}: {
  data?: any;
  onPress?: () => void;
  onGoBack?: any;
}) => {
  const myTheme: any = useTheme();

  return (
    <View style={[GST.MAIN]}>
      <View style={styles.view}>
        <Pressable onPress={onGoBack}>
          <AntDesign
            color={myTheme?.colors.black}
            name="arrowleft"
            size={RF(15)}
            style={styles.arrowLeft}
          />
        </Pressable>
        <AppText
          semiBold
          size={Typography.FONTS.SIZE.MEDIUM}
          style={styles.txt}
          color={myTheme?.colors?.border}>
          Categories
        </AppText>
      </View>
      <View style={styles.flatView}>
        <FlatList
          scrollEnabled
          showsVerticalScrollIndicator={false}
          data={data}
          numColumns={3}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyExtractor={(item: any, index: any) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <View style={styles.columnView}>
                <Pressable onPress={() => onPress(item, index)}>
                  <ImageBackground
                    source={item?.url}
                    imageStyle={styles.outerImgBg}>
                    <ImageBackground
                      source={elevation}
                      style={styles.innerImgBG}
                      imageStyle={styles.imgBorder}>
                      <AppText
                        center
                        semiBold
                        color={myTheme?.colors?.white}
                        size={Typography.FONTS.SIZE.XXSMALL}
                        style={styles.innerImg}>
                        {item?.category_name ? item?.category_name : item?.name}
                      </AppText>
                    </ImageBackground>
                  </ImageBackground>
                </Pressable>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerImgBg: {
    width: RF(108),
    height: RF(108),
    borderRadius: RF(20),
  },
  innerImg: {
    top: RF(60),
    height: RF(50),
    width: RF(100),
  },
  innerImgBG: {
    width: RF(108),
    height: RF(108),
    resizeMode: 'contain',
    alignItems: 'center',
  },
  view: {
    marginTop: RF(30),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: RF(20),
  },
  txt: {marginTop: 3, marginLeft: RF(0)},
  backArrow: {
    width: '100%',
    height: RF(35),
    shadowOpacity: 0.2,
    marginLeft: RF(10),
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 0},
  },
  flatView: {
    marginHorizontal: RF(10),
    marginTop: RF(17),
    marginBottom: RF(130),
    alignItems: 'center',
  },
  imgBorder: {
    borderRadius: RF(20),
  },
  columnView: {
    paddingVertical: 3,
    padding: 3,
  },
  arrowLeft: {
    paddingTop: RF(5),
    paddingRight: RF(10),
  },
});

export default ExploreList;
