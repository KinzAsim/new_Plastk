import React from 'react';
import {useTheme} from '@react-navigation/native';
import {greenCard, install, points} from '@assets';
import {RF, Typography, primaryDarkColor} from '@theme';
import {View, Image, StyleSheet, ImageBackground} from 'react-native';
import {AppText, CategoriesList, CustomButton, LinearBar} from '@components';

const StatementCard = ({
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
  index?: any;
  dollar?: any;
  _points?: any;
  onClick?: any;
  transaction?: any;
}) => {
  const theme: any = useTheme();
  const styles = useStyles(theme);

  const getAllYears = () => {
    const startYear = 1900;
    const endYear = new Date().getFullYear();
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };
  const allYears = getAllYears().reverse();

  return (
    <View style={open == index ? styles._open : styles.main}>
      {open == index ? (
        <View style={styles.pt}>
          <Section title={'Current'} styles={styles} theme={theme} />
          <ImageBackground
            source={greenCard}
            style={styles.image}
            imageStyle={styles.imgStyle}>
            <View style={styles.textView}>
              <AppText
                semiBold
                color={'white'}
                size={Typography.FONTS.SIZE.XXSMALL}>
                {data?.date}
              </AppText>
              <View style={[styles.rowView, {marginTop: RF(17)}]}>
                <AppText color={'white'} size={Typography.FONTS.SIZE.XXXSMALL}>
                  Statement Balance
                </AppText>
                <AppText color={'white'} size={Typography.FONTS.SIZE.XXXSMALL}>
                  {data?.statement_balance}
                </AppText>
              </View>
              <View style={styles.rowView}>
                <AppText color={'white'} size={Typography.FONTS.SIZE.XXXSMALL}>
                  Minimum Payment
                </AppText>
                <AppText color={'white'} size={Typography.FONTS.SIZE.XXXSMALL}>
                  {data?.minimum_payment}
                </AppText>
              </View>
              <View style={styles.rowView}>
                <AppText color={'white'} size={Typography.FONTS.SIZE.XXXSMALL}>
                  Due By
                </AppText>
                <AppText color={'white'} size={Typography.FONTS.SIZE.XXXSMALL}>
                  {data?.due_by}
                </AppText>
              </View>
              <View style={styles.rowView}>
                <AppText color={'white'} size={Typography.FONTS.SIZE.XXXSMALL}>
                  Points Earned
                </AppText>
                <View style={styles.imgV}>
                  <Image source={points} style={[styles.img]} />
                  <AppText
                    color={'white'}
                    size={Typography.FONTS.SIZE.XXXSMALL}>
                    {data?.points}
                  </AppText>
                </View>
              </View>
            </View>

            <CustomButton
              bgClr={'white'}
              width={RF(150)}
              text={'View PDF'}
              btnStyle={styles.btnH}
              textStyle={styles.btnTxt}
            />
          </ImageBackground>
          <LinearBar email={'kinza@plastk.ca'} />
          <Section title={'Previous'} styles={styles} theme={theme} />
          <View style={{flexDirection: 'row'}}>
            <View style={styles.last}>
              <AppText
                regular
                color={'white'}
                size={Typography.FONTS.SIZE.XXXSMALL}>
                Last 6 Statements
              </AppText>
            </View>
            <CategoriesList mySpend data={allYears} />
          </View>
        </View>
      ) : (
        <View style={styles.imgView}>
          <AppText semiBold size={Typography.FONTS.SIZE.XXSMALL}>
            {title}
          </AppText>
          <View style={styles.vImg}>
            <Image source={install} style={[styles.img]} />
            <AppText medium size={Typography.FONTS.SIZE.XXXSMALL}>
              {_points}
            </AppText>
          </View>
        </View>
      )}
    </View>
  );
};

const Section = ({
  title,
  theme,
  styles,
}: {
  title?: any;
  theme?: any;
  styles?: any;
}) => {
  return (
    <View style={styles.view}>
      <AppText
        medium
        color={theme?.colors?.border}
        size={Typography.FONTS.SIZE.XXSMALL}>
        {title} {title === 'Current' ? 'Statement' : 'Statements'}
      </AppText>
      <AppText
        semiBold
        style={{marginTop: -5}}
        color={theme?.colors?.border}
        size={Typography.FONTS.SIZE.XXSMALL}>
        {' '}
        ......................................
      </AppText>
    </View>
  );
};

const useStyles = (theme: any) =>
  StyleSheet.create({
    last: {
      width: RF(118),
      alignItems: 'center',
      borderRadius: RF(100),
      justifyContent: 'center',
      backgroundColor: primaryDarkColor,
      marginLeft: RF(10),
    },
    btnH: {height: RF(40), marginTop: RF(55)},
    btnTxt: {
      fontWeight: '600',
      color: theme?.colors?.primary,
      fontSize: Typography.FONTS.SIZE.XSMALL,
    },
    imgV: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: RF(5),
    },
    textView: {paddingHorizontal: RF(40), paddingTop: RF(20)},
    imgView: {
      width: '90%',
      height: RF(50),
      borderWidth: 0.2,
      borderRadius: RF(10),
      alignSelf: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: RF(15),
    },
    pt: {paddingTop: RF(10)},
    view: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: RF(10),
      justifyContent: 'center',
    },
    vImg: {
      width: RF(16),
      height: RF(16),
      resizeMode: 'contain',
    },
    img: {
      width: RF(19),
      height: RF(19),
    },
    _open: {
      marginBottom: RF(10),
    },
    main: {},
    imgStyle: {
      borderRadius: RF(20),
      alignItems: 'center',
      marginHorizontal: RF(10),
    },
    image: {
      width: '95%',
      height: RF(245),
      alignSelf: 'center',
      //   flexDirection: 'row',
    },
  });

export default StatementCard;
