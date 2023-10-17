import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {GST, RF, SCREEN_WIDTH} from '@theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme} from '@react-navigation/native';
import {sports} from '@assets';
import {AppText} from '@components';

const ImageHeader = ({
  bap,
  logo,
  detail,
  profile,
  source,
  favourite,
  navigation,
  setFavourite,
}: {
  bap?: any;
  detail?: any;
  logo?: any;
  source?: any;
  profile?: any;
  favourite?: any;
  navigation?: any;
  setFavourite?: any;
}) => {
  const myTheme: any = useTheme();

  return (
    <View style={styles.mainView}>
      <ImageBackground source={sports} style={styles.imgBackground}>
        <View style={[GST.mid_row]}>
          <TouchableOpacity
            style={styles.backArrow}
            onPress={() => navigation.goBack()}>
            <AntDesign
              color={myTheme?.colors?.white}
              name="arrowleft"
              size={RF(20)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.backArrow} disabled>
            {favourite ? (
              <AntDesign
                name={'heart'}
                color={myTheme?.colors?.pink_light}
                size={RF(20)}
              />
            ) : (
              <AntDesign
                color={myTheme?.colors?.white}
                name="hearto"
                size={RF(20)}
              />
            )}
          </TouchableOpacity>
        </View>
        <AppText
          center
          size={30}
          bold
          color={'white'}
          style={{
            position: 'relative',
            top: 50,
          }}>
          DETOUR
        </AppText>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backArrow: {
    width: RF(35),
    height: RF(35),
    shadowOpacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 0},
  },
  mainView: {
    alignSelf: 'center',
    width: SCREEN_WIDTH,
    overflow: 'hidden',
    height: SCREEN_WIDTH,
    backgroundColor: 'transparent',
  },
  imgBackground: {
    width: undefined,
    height: undefined,
    aspectRatio: 1,
    paddingHorizontal: RF(20),
    paddingTop: RF(40),
  },
});

export default ImageHeader;
