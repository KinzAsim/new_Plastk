import {RF, Typography} from '@theme';
import React from 'react';
import {AppText, NotchView, UserAvatar} from '@components';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Platform,
  Pressable,
  StatusBar,
} from 'react-native';
import {dp} from '@assets';
import {useTheme} from '@react-navigation/native';
import {navigate} from '@services';

const HomeHeader = ({
  title,
  rewards,
  cardText,
  backgroundColor,
  menuButtonPressed,
}: {
  title?: any;
  rewards?: any;
  cardText?: any;
  backgroundColor?: any;
  menuButtonPressed?: () => void;
}) => {
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme.colors);

  return (
    <>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <NotchView />
      <View style={styles.nameContainer}>
        <View style={styles.view}>
          <Pressable onPress={menuButtonPressed}>
            <UserAvatar iconName={dp} />
          </Pressable>
          <AppText
            style={styles.ml}
            size={Typography.FONTS.SIZE.SMALL}
            semiBold
            color={myTheme?.colors?.border}>
            {title}
          </AppText>
        </View>

        {rewards && (
          <TouchableOpacity
            style={[
              styles.middleView,
              {
                backgroundColor: backgroundColor,
              },
            ]}
            onPress={() => {
              navigate('EarnRewards');
            }}>
            <AppText
              align
              medium
              color={myTheme?.colors?.white}
              size={Typography.FONTS.SIZE.XXXSMALL}>
              {cardText}
            </AppText>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default HomeHeader;

export const getStyles = (colors: any) =>
  StyleSheet.create({
    ml: {marginLeft: RF(12)},
    view: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    img: {
      width: RF(14),
      height: RF(14),
      marginRight: RF(5),
    },
    middleView_Card: {
      width: RF(125),
      height: RF(40),
      borderRadius: RF(50),
      alignItems: 'center',
      backgroundColor: colors?.toggleColor,
      justifyContent: 'center',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: colors?.light_grey,
    },
    middleView: {
      width: '40%',
      height: RF(42),
      borderRadius: RF(50),
      alignItems: 'center',
      backgroundColor: colors?.primary,
      justifyContent: 'center',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: colors?.light_grey,
    },
    nameContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: Platform.OS === 'ios' ? RF(25) : RF(20),
      marginHorizontal: RF(15),
      paddingBottom: RF(16),
      // backgroundColor: 'red',
    },
    nameTextStyle: {
      fontSize: RF(20),
      marginTop: RF(5),
      fontWeight: '700',
      fontFamily: Typography.FONTS.TYPE.mulish_bold,
      color: colors?.white,
    },
    welcomeTextStyle: {
      fontSize: RF(15),
      marginTop: RF(5),
      fontWeight: '600',
      fontFamily: Typography.FONTS.TYPE.mulish_regular,
    },
  });
