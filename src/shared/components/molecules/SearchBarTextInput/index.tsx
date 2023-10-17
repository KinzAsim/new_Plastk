import React from 'react';
import {useTheme} from '@react-navigation/native';
import Cross from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  View,
  Pressable,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {RF, Typography} from '@theme';
import {useSelector} from 'react-redux';
import {AppText} from '@components';

const SearchBarTextInput = ({
  type,
  marginR,
  style,
  onSearch,
  mapSearch,
  placeholder,
  onChangeText,
  onEndEditing,
  onPress_CrossBtn,
  value,
}: {
  onSearch?: any;
  marginR?: any;
  style?: any;
  type?: any;
  mapSearch?: any;
  placeholder?: any;
  onChangeText?: any;
  onEndEditing?: any;
  onPress_CrossBtn?: any;
  value?: any;
}) => {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);
  const {colorCode} = useSelector((state: any) => state.root.user);

  return (
    <View style={style ? style : styles.view}>
      {mapSearch && (
        <View
          style={[
            styles.txt,
            {backgroundColor: type == '' ? myTheme?.colors?.white : colorCode},
          ]}>
          <AppText
            bold
            numberOfLines={1}
            size={Typography.FONTS.SIZE.XXSMALL}
            color={
              type == '' ? myTheme?.colors?.primary : myTheme?.colors?.white
            }
            style={{opacity: type == '' ? 0.5 : 1, width: 70}}>
            {type == '' ? 'Location Services' : type}
          </AppText>
          <Pressable onPress={onPress_CrossBtn}>
            <Cross
              size={18}
              color={myTheme?.colors?.white}
              name={'cross'}
              style={{
                marginTop: 2,
                opacity: 0.5,
              }}
            />
          </Pressable>
        </View>
      )}
      <>
        <TextInput
          // value={value}
          onEndEditing={onEndEditing}
          onSubmitEditing={onSearch}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor={myTheme?.colors?.border}
          style={[styles.txtInput, {left: mapSearch ? 40 : 0}]}
        />
        <TouchableOpacity
          onPress={onSearch}
          style={{marginRight: marginR ? 5 : 15}}>
          <AntDesign
            name={'search1'}
            color={myTheme?.colors?.border}
            size={15}
          />
        </TouchableOpacity>
      </>
    </View>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    txt: {
      marginLeft: 10,
      width: RF(110),
      height: RF(30),
      borderRadius: RF(20),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors?.primary,
    },
    view: {
      // elevation: 2,
      width: '90%',
      height: RF(40),
      marginTop: RF(5),
      borderRadius: RF(40),
      borderBottomWidth: 0,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: RF(15),
      paddingHorizontal: RF(10),
      backgroundColor: '#F9FAFB',
      justifyContent: 'space-around',
    },
    txtInput: {
      // left: 40,
      width: '80%',
      fontSize: RF(12),
      fontWeight: '500',
      color: colors?.label,
      fontFamily: 'Plus Jakarta Sans',
    },
  });

export default SearchBarTextInput;
