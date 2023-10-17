import React from 'react';
import {points} from '@assets';
import {AppText} from '@components';
import {RF, Typography} from '@theme';
import {Image, StyleSheet, TextInput, View} from 'react-native';

const EditableField = ({
  title,
  placeholder,
}: {
  title?: any;
  placeholder?: any;
}) => {
  return (
    <View style={styles.view}>
      <AppText size={Typography.FONTS.SIZE.XXSMALL} style={styles.ml}>
        {title}
      </AppText>

      <View style={styles.input}>
        {title === 'Points' && (
          <Image
            source={points}
            style={{width: RF(24), height: RF(24), resizeMode: 'contain'}}
          />
        )}
        <TextInput
          textAlign="center"
          keyboardType="numeric"
          style={styles.inputField}
          placeholder={placeholder}
          placeholderTextColor={'#ADADAD'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml: {marginBottom: RF(15)},
  inputField: {
    // width: RF(100),
  },
  view: {
    marginTop: RF(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: RF(276),
    height: RF(45),
    borderRadius: RF(30),
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default EditableField;
