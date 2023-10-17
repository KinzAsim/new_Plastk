import React from 'react';
import {StyleSheet} from 'react-native';
import {Pagination} from 'react-native-snap-carousel';
import {RF} from '@theme';

const CustomPagination = ({
  activeSlide,
  splash,
  data,
  welcome,
}: {
  data?: any;
  splash?: any;
  activeSlide?: any;
  welcome?: any;
}) => {
  return (
    <Pagination
      inactiveDotScale={1}
      dotStyle={styles.dot}
      animatedDuration={100}
      inactiveDotOpacity={0.4}
      activeDotIndex={activeSlide}
      inactiveDotColor={'rgb(170, 170, 170)'}
      inactiveDotStyle={styles.inaciveDot}
      dotsLength={splash && data?.length}
      dotColor={
        (splash && activeSlide === 0) || 1
          ? welcome
            ? 'white'
            : 'black'
          : 'black'
      }
      containerStyle={splash ? styles.container : styles.containerView}
      dotContainerStyle={splash ? {marginHorizontal: RF(2)} : null}
    />
  );
};

const styles = StyleSheet.create({
  inaciveDot: {
    width: RF(5),
    height: RF(5),
  },
  dot: {
    width: RF(12),
    height: RF(5),
  },
  container: {
    bottom: 250,
    width: RF(50),
    paddingVertical: 0,
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
  },
  containerView: {
    marginTop: RF(160),
    alignSelf: 'center',
  },
});

export default CustomPagination;
