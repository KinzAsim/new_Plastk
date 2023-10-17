import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {RF} from '@theme';
import {useSelector} from 'react-redux';

const Svg_ProgressBar = ({
  visits,
  progress,
  setProgress,
  totalVisits,
}: {
  visits?: any;
  progress?: any;
  setProgress?: any;
  totalVisits?: any;
}) => {
  let animation = useRef(new Animated.Value(0));

  return (
    <View style={styles.parentBottom}>
      <View style={styles.childBottom}>
        <Animated.View
          style={[
            styles.absoluteFill,
            {
              backgroundColor: '#8BED4F',
              width: progress,
            },
          ]}
        />
      </View>
    </View>
  );
};
export default Svg_ProgressBar;

const styles = StyleSheet.create({
  parentBottom: {
    height: RF(40),
    width: '100%',
    transform: [{scaleX: 2}, {rotate: '180deg'}],
    borderBottomStartRadius: RF(200),
    borderBottomEndRadius: RF(200),
    overflow: 'hidden',
    zIndex: 10,
    backgroundColor: '#8F92A1',
  },
  childBottom: {
    flex: 1,
    transform: [{scaleX: 0.15}, {rotate: '180deg'}],
    alignItems: 'center',
  },
  absoluteFill: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  container: {
    height: '100%',
  },
  imageContainer: {
    height: '30%',
  },
  parent: {
    height: '30%',
    transform: [{scaleX: 2}, {rotate: '180deg'}],
    borderBottomStartRadius: RF(200),
    borderBottomEndRadius: 200,
    overflow: 'hidden',
    zIndex: 10,
    marginTop: -30,
  },
  child: {
    flex: 1,
    transform: [{scaleX: 0.5}, {rotate: '180deg'}],
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  progressBar: {
    borderColor: '#000',
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
});
