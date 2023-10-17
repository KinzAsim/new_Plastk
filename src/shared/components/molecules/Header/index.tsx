import React from 'react';
import {AppText} from '@components';
import {RF, Typography} from '@theme';
import {useTheme} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  Image,
} from 'react-native';
import {_cross} from '@assets';

interface HeaderProps {
  faq?: any;
  title?: any;
  profile?: any;
  navigation?: any;
  style?: ViewStyle;
  showBackButton?: boolean;
  clr?: any;
  showCrossButton?: any;
}

const Header = (props: Partial<HeaderProps>) => {
  const theme: any = useTheme();
  const styles = useStyles(theme.colors);
  const {
    style,
    title,
    navigation,
    showBackButton,
    profile,
    faq,
    clr,
    showCrossButton,
  } = props;

  return (
    <>
      {/* <NotchView /> */}
      <View style={[styles.headerContainer, style]}>
        <View>
          {!showBackButton && !showCrossButton ? null : showCrossButton ? (
            <TouchableOpacity
              style={styles.img}
              onPress={() => navigation.goBack()}>
              <Image source={_cross} style={styles.cros} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={profile ? styles.profileBackView : styles.backArrow}
              onPress={() => navigation.goBack()}>
              <AntDesign
                size={RF(20)}
                name="arrowleft"
                color={clr ? clr : '#4A5568'}
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={profile ? styles.profileView : styles.txtView}>
          <AppText
            center
            semiBold
            numberOfLines={1}
            color={clr ? clr : '#4A5568'}
            size={Typography.FONTS.SIZE.SMALL}
            style={
              faq
                ? styles.header_FAQ_Text
                : showBackButton
                ? styles.back
                : styles.headerText
            }>
            {title}
          </AppText>
        </View>
        {/* <View>
          {!showBackButton ? null : (
            <TouchableOpacity
              style={profile ? styles.profileBackView : styles.backArrow}
              onPress={() => navigation.goBack()}>
              <AntDesign
                color={profile ? 'gray' : 'white'}
                name="arrowleft"
                size={RF(20)}
              />
            </TouchableOpacity>
          )}
        </View> */}
      </View>
    </>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    img: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: RF(29),
    },
    cros: {width: RF(16), height: RF(16), resizeMode: 'contain'},
    back: {marginLeft: -30},
    profileBackView: {
      marginTop: 5,
    },
    profileView: {
      marginLeft: RF(20),
      width: '70%',
    },
    txtView: {
      width: '70%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerContainer: {
      height: RF(70),
      width: '100%',
      flexDirection: 'row',
      // backgroundColor: 'red',
      justifyContent: 'center',
      marginTop: RF(20),
    },
    backArrow: {
      // width: RF(35),
      // height: RF(35),
      shadowOpacity: 0.2,
      alignItems: 'center',
      justifyContent: 'center',
      shadowOffset: {width: 0, height: 0},
      marginTop: RF(27),
      marginRight: RF(10),
    },
    headerText: {
      // width: 60,
    },
    header_FAQ_Text: {
      width: '110%',
      numberOfLines: 1,
    },
  });

export default Header;
