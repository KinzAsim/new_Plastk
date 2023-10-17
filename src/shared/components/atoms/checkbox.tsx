import React from 'react';
import {checkbox, checkboxGreen} from '@assets';
import {RF} from '@theme';
import {View, StyleSheet, Image, Pressable} from 'react-native';
import {AppText} from '@components';

const Custom_CheckBox = ({
  title,
  isSelected,
  setSelection,
}: {
  title?: any;
  isSelected?: any;
  setSelection?: any;
}) => {
  return (
    <View style={styles.view}>
      <Pressable onPress={setSelection}>
        {isSelected ? (
          <Image
            source={checkboxGreen}
            resizeMode="contain"
            style={{width: RF(18), height: RF(18), marginTop: 3}}
          />
        ) : (
          <View style={styles.borderView} />
        )}
      </Pressable>
      <AppText size={12} bold color={'#4A5568'} style={{paddingLeft: 10}}>
        {title}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  borderView: {
    width: RF(18),
    height: RF(18),
    borderRadius: 5,
    borderWidth: 1,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: RF(10),
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {},
  label: {
    margin: 8,
  },
});

export default Custom_CheckBox;
