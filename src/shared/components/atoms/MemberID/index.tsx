import React from 'react';
import Text from '../AppText';
import {StyleSheet, View} from 'react-native';
import {RF, Typography, ligh_green} from '@theme';

const MemberID = ({id}: {id?: any}) => {
  return (
    <View style={styles.container}>
      <Text color={ligh_green} size={Typography.FONTS.SIZE.XXSMALL} bold>
        Member ID
      </Text>
      <Text
        medium
        color={'#fff'}
        style={{marginRight: 15}}
        size={Typography.FONTS.SIZE.XXSMALL}>
        {id}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '88%',
    height: RF(40),
    marginTop: RF(30),
    alignSelf: 'center',
    paddingHorizontal: 15,
    borderRadius: 50,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#000',
    justifyContent: 'space-between',
    marginHorizontal: RF(20),
  },
  mainView: {
    marginBottom: RF(40),
  },
  imgView: {
    flexDirection: 'row',
    marginVertical: RF(20),
    justifyContent: 'center',
  },
  img: {width: RF(20), height: RF(20), marginRight: RF(5)},
});

export default MemberID;
