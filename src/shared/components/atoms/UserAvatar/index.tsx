import {RF} from '@theme';
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const UserAvatar = ({imageUrl, iconName, size = 45, text = ''}: any) => {
  return (
    <View style={[styles.avatarContainer, {width: size, height: size}]}>
      {imageUrl ? (
        <Image source={{uri: imageUrl}} style={styles.imageAvatar} />
      ) : (
        <Image source={iconName} style={styles.imageAvatar} />
        // <Icon name={iconName} size={size * 0.6} color="white" />
      )}
      {text && <Text style={styles.textAvatar}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
    borderRadius: 50,
  },
  imageAvatar: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  textAvatar: {
    color: 'white',
  },
  img: {width: '100%', height: RF(70), resizeMode: 'contain'},
});

export default UserAvatar;
