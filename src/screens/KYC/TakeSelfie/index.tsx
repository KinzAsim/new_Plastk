import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GST} from '@theme';
import {CameraSelfie, Wrapper} from '@components';

export default function TakeSelfie() {
  const styles = getStyles();
  return (
    <Wrapper
      translucent
      statusBarStyle={'default'}
      statusBarBagColor={'transparent'}>
      <View style={[GST.row_Flex_center]}>
        <>
          <CameraSelfie />
        </>
      </View>
    </Wrapper>
  );
}
const getStyles = () =>
  StyleSheet.create({
    headerView: {
      position: 'absolute',
      top: 10,
      left: 10,
      right: 10,
    },
  });
