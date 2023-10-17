import React from 'react';
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  Dimensions,
} from 'react-native';
import {AppText} from '@components';
import {RF, Typography} from '@theme';

const GreyBox = ({
  text,
  premium,
  containerStyle,
  textWidth,
  textSize,
}: {
  text?: any;
  premium?: any;
  textWidth?: any;
  containerStyle?: StyleProp<ViewStyle>;
  textSize?: any;
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <AppText
        center
        numberOfLines={3}
        medium
        size={textSize}
        style={{
          width: textWidth ? textWidth : '100%',
        }}>
        {text}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: RF(80),
    borderRadius: RF(15),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#117D921A',
  },
});

export default GreyBox;
