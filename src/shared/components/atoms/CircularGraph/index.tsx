import {RF} from '@theme';
import React from 'react';
import {AppText} from '@components';
import {useTheme} from '@react-navigation/native';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {CircularProgress} from 'react-native-progress-circle-gradient';

const CircularGraph = ({
  progress,
  radius,
  size,
  title,
  clr,
  percentage,
  clrText,
  type,
  loadingGraph,
}: {
  progress?: any;
  radius?: any;
  size?: any;
  title?: any;
  clr?: any;
  percentage?: any;
  clrText?: any;
  type?: any;
  loadingGraph?: any;
}) => {
  const theme: any = useTheme();

  return (
    <View
      style={[
        styles.view,
        {
          paddingTop: title ? 10 : 20,
          paddingHorizontal: title ? 5 : 10,
        },
      ]}>
      <CircularProgress
        radius={radius}
        easing={'quad'}
        duration={3000}
        strokeWidth={title ? 2 : 4.5}
        backgroundColor={'#EFEFEF'}
        percentageComplete={progress}
        colors={
          type === 'good'
            ? ['#42BAA2', '#BBF613', '#16BC4E']
            : type === 'moderate'
            ? ['#E4AD1D', '#FFF8B9', '#FFF8B9']
            : type === 'caution'
            ? ['#FEAD6E', '#FF6B95']
            : type === 'risk'
            ? ['#FE3340', '#B10683']
            : ['#fff', '#fff']
        }
      />
      <View
        style={{
          width: 120,
          height: 120,
          borderRadius: 100,
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {loadingGraph ? (
          <ActivityIndicator size={24} style={{marginTop: RF(10)}} />
        ) : progress >= 0 && !loadingGraph ? (
          <AppText
            // center
            semiBold
            size={size}
            style={{marginTop: 15}}
            // style={title ? styles.tT : styles.txt}
            color={clrText ? theme?.colors?.app_green : theme?.colors?.border}>
            {progress}%
          </AppText>
        ) : null}
      </View>

      {title && (
        <AppText center medium style={styles._txt} color={clr} size={size}>
          {title}
        </AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tT: {position: 'absolute', top: RF(25)},
  _txt: {position: 'absolute', top: RF(40)},
  view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {position: 'absolute', top: RF(57), left: RF(45)},
});

export default CircularGraph;
