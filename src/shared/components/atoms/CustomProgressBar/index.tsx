import React from 'react';
import {RF} from '@theme';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {AppText} from '@components';

interface Props {
  value?: any;
  isMarginH?: any;
  mt?: any;
  customstyle?: any;
  clr?: any;
}

const CustomProgressBar = React.memo((props: Partial<Props>) => {
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme.colors);

  let style;
  style = {
    opacity: 1,
    width: `${props?.value}%`,
    backgroundColor: myTheme?.colors?.toggleColor,
  };

  return (
    <>
      <View
        style={
          props?.customstyle
            ? props?.customstyle
            : [
                styles.progressBarView,
                {
                  marginHorizontal: props.isMarginH ? props.isMarginH : RF(30),
                  marginTop: props?.mt ? props?.mt : RF(20),
                },
              ]
        }>
        <LinearGradient
          end={{x: 1, y: 0}}
          start={{x: 0, y: 0}}
          // locations={[0, 0.5, 0.6]}
          colors={
            props?.clr
              ? props?.clr
              : ['#59C587', '#42BAA2', '#7FD85B', '#B0F020', '#B0F020']
          }
          style={[styles.progressBar, style]}></LinearGradient>
      </View>
    </>
  );
});

export default CustomProgressBar;

const getStyles = (colors: any) =>
  StyleSheet.create({
    progressBarView: {
      height: RF(8),
      flexDirection: 'row',
      backgroundColor: colors.background,
      borderRadius: RF(20),
      marginHorizontal: RF(20),
      width: '75%',
      alignSelf: 'center',
    },
    progressBar: {
      borderTopRightRadius: RF(10),
      borderBottomRightRadius: RF(10),
      borderTopLeftRadius: RF(10),
      borderBottomLeftRadius: RF(10),
    },
  });
