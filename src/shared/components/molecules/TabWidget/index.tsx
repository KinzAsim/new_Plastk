import React from 'react';
import {AppText} from '@components';
import {RF, Typography} from '@theme';
import {useTheme} from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ScoreIcon from 'react-native-vector-icons/Foundation';
import {StyleSheet, Pressable, View, FlatList} from 'react-native';

interface TabWidgetProps {
  tabs?: any;
  width?: any;
  f_clr?: any;
  scoreIcon?: any;
  containerStyle?: any;
  firstIconName?: string;
  firstIconFamily?: string;
  innerContainerStyle?: any;
  tabSelectedIndex?: number;
  setTabSelectedIndex?: any;
}
const TabWidget = (props: Partial<TabWidgetProps>) => {
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme.colors);
  const {
    scoreIcon,
    firstIconName,
    containerStyle,
    firstIconFamily,
    tabSelectedIndex,
    setTabSelectedIndex,
    innerContainerStyle,
    f_clr,
    tabs,
    width,
  } = props;

  return (
    <View style={styles.gradientContainerStyle}>
      <View style={[styles.widgetContainerStyle, containerStyle]}>
        <FlatList
          horizontal
          data={tabs}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 1, paddingHorizontal: 2}}
          renderItem={({item, index}: any) => {
            return (
              <Pressable
                onPress={() => setTabSelectedIndex(index)}
                style={[
                  styles?.tab,
                  {
                    width: width ? width : RF(105),
                    backgroundColor:
                      tabSelectedIndex === index
                        ? myTheme?.colors.white
                        : 'transparent',

                    elevation: tabSelectedIndex === index ? 4 : 0,
                  },
                ]}>
                <View style={[styles.offerInnerStyle, innerContainerStyle]}>
                  {firstIconName && firstIconFamily == 'EvilIcons' && (
                    <EvilIcons
                      name={firstIconName}
                      color={
                        tabSelectedIndex === 0
                          ? myTheme?.colors.white
                          : myTheme?.colors?.label
                      }
                      size={27}
                      style={{paddingRight: RF(5)}}
                    />
                  )}

                  {scoreIcon && (
                    <View
                      style={[
                        styles.iconView,
                        {
                          borderColor:
                            tabSelectedIndex === 0
                              ? myTheme?.colors?.score
                              : myTheme?.colors?.label,
                        },
                      ]}>
                      <ScoreIcon
                        name={'dollar'}
                        color={
                          tabSelectedIndex === 0
                            ? myTheme?.colors?.score
                            : myTheme?.colors?.label
                        }
                        size={RF(25)}
                      />
                    </View>
                  )}

                  <AppText
                    semiBold
                    color={f_clr ? f_clr : myTheme?.colors?.border}
                    size={Typography.FONTS.SIZE.XXXSMALL}>
                    {item?.title}
                  </AppText>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </View>
  );
};
export default TabWidget;

export const getStyles = (colors: any) =>
  StyleSheet.create({
    tab: {
      height: RF(38),
      borderRadius: RF(40),
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
      justifyContent: 'center',
      alignItems: 'center',
      width: RF(25),
      height: RF(25),
    },
    iconView: {
      borderRadius: RF(27),
      borderWidth: 1,
      width: RF(27),
      height: RF(27),
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: RF(5),
    },
    text: {},
    widgetContainerStyle: {
      borderRadius: RF(40),
      flexDirection: 'row',
      height: RF(40),
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: colors?.dim_gray,
      marginHorizontal: RF(10),
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0.5},
      shadowOpacity: 0.5,
      shadowRadius: 1,
      width: '90%',
      elevation: 2,
      alignSelf: 'center',
    },
    offerInnerStyle: {
      flexDirection: 'row',
    },
    redeemStyle: {
      borderRadius: RF(40),
      height: RF(40),
      justifyContent: 'center',
      alignItems: 'center',
      width: '50%',
    },
    redeemInnerStyle: {
      flexDirection: 'row',
    },
    gradientContainerStyle: {
      paddingVertical: RF(15),
    },
  });

{
  /* <Pressable
          onPress={() => {
            setTabSelectedIndex(1);
          }}
          style={[
            thirdTab ? styles.thirdStyle : styles.redeemStyle,
            {
              backgroundColor:
                tabSelectedIndex === 1 ? myTheme?.colors?.white : 'transparent',
              elevation: tabSelectedIndex == 1 ? 5 : 0,
            },
          ]}>
          <View style={[styles.redeemInnerStyle, innerContainerStyle]}>
            {secondIconName && secondIconFamily == 'Ionicons' && (
              <Ionicons
                name={secondIconName}
                color={
                  tabSelectedIndex === 1
                    ? myTheme?.colors?.white
                    : myTheme?.colors?.label
                }
                size={RF(20)}
                style={{paddingRight: RF(5)}}
              />
            )}

            {sentinel && (
              <ImageBackground
                source={personal_information}
                style={styles.img}
                resizeMode="contain"></ImageBackground>
            )}

            <AppText
              color={clr ? clr : myTheme?.colors?.border}
              size={Typography.FONTS.SIZE.XXXSMALL}
              semiBold>
              {secondTabTitle}
            </AppText>
          </View>
        </Pressable> */
}

{
  /* {thirdTab && (
          <Pressable
            onPress={() => {
              setTabSelectedIndex(2);
            }}
            style={[
              thirdTab ? styles.thirdStyle : styles.redeemStyle,
              {
                backgroundColor:
                  tabSelectedIndex === 2
                    ? myTheme?.colors?.white
                    : 'transparent',
                elevation: tabSelectedIndex === 2 ? 5 : 0,
              },
            ]}>
            <View style={[styles.redeemInnerStyle, innerContainerStyle]}>
              {secondIconName && secondIconFamily == 'Ionicons' && (
                <Ionicons
                  name={secondIconName}
                  color={
                    tabSelectedIndex === 2
                      ? myTheme?.colors?.white
                      : myTheme?.colors?.label
                  }
                  size={RF(20)}
                  style={{paddingRight: RF(5)}}
                />
              )}

              {sentinel && (
                <ImageBackground
                  source={personal_information}
                  style={styles.img}
                  resizeMode="contain"></ImageBackground>
              )}

              <AppText
                color={clr ? clr : myTheme?.colors?.border}
                size={Typography.FONTS.SIZE.XXXSMALL}
                semiBold>
                {thirdTabTitle}
              </AppText>
            </View>
          </Pressable>
        )} */
}
