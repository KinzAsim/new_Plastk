import React from 'react';
import {View, StyleSheet} from 'react-native';

const Ratio = ({children, ratio}: any) => {
  const aspectRatioStyle = {aspectRatio: ratio};

  return <View style={[styles.container, aspectRatioStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // You can add any additional styles for the container here
  },
});

export default Ratio;
