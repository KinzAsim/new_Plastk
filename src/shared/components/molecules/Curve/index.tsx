import {RF} from '@theme';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Curve = ({
  bgClr,
  children,
  style,
  height,
  onPress,
  linearColor,
}: {
  bgClr?: any;
  children?: any;
  style?: any;
  height?: any;
  onPress?: any;
  linearColor?: any;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={
        style
          ? style
          : {
              overflow: 'hidden',
              borderBottomEndRadius: RF(200),
              borderBottomStartRadius: RF(200),
              transform:
                height == '280'
                  ? [{scaleX: 1}, {rotate: '360deg'}]
                  : height == '290'
                  ? [{scaleX: 1}, {rotate: '360deg'}]
                  : height == '220'
                  ? [{scaleX: 0.99}, {rotate: '360deg'}]
                  : height == '230'
                  ? [{scaleX: 0.99}, {rotate: '360deg'}]
                  : [{scaleX: 1.75}, {rotate: '360deg'}],
            }
      }>
      <LinearGradient
        end={{x: 1, y: 0}}
        start={{x: 0, y: 0}}
        style={[styles.gradient, {height: RF(height)}]}
        colors={
          bgClr === '#000'
            ? ['#000', '#000', '#000', '#000', '#000']
            : bgClr === '#fff'
            ? ['#fff', '#fff', '#fff', '#fff', '#fff']
            : bgClr === '#FE3340'
            ? ['#BBF613', '#16BC4E', '#42BAA2', '#16BC4E', '#BBF613']
            : ['#19383A', '#19383A', '#19383A', '#19383A', '#19383A']
        }>
        {children}
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
  },
});

export default Curve;
