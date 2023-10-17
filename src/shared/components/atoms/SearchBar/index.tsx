import {RF} from '@theme';
import React from 'react';
import {cross, leftArrow} from '@assets';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, TextInput, View, Pressable, Image} from 'react-native';

interface Props {
  clicked: any;
  setClicked: any;
  handleSearch: any;
  searchPhrase: any;
  setSearchPhrase: any;
}
const SearchBar = (props: Props) => {
  const {searchPhrase, setClicked, setSearchPhrase, clicked, handleSearch} =
    props;
  const myTheme: any = useTheme();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchBar__unclicked}>
          <Image
            source={leftArrow}
            style={{width: 30, height: 30, resizeMode: 'contain'}}
          />
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={searchPhrase}
            onChangeText={text => handleSearch(text)}
            onFocus={() => {
              setClicked(true);
            }}
            // autoFocus={true}
          />
          {clicked && (
            <Pressable
              onPress={() => {
                setSearchPhrase('');
              }}>
              <Image
                source={cross}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                  tintColor: myTheme.colors.border,
                }}
              />
            </Pressable>
          )}
        </View>
        {/* {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              props.setClicked(false);
            }}></Button>
        </View>
      )} */}
      </View>
    </>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: RF(45),
  },
  searchBar__unclicked: {
    paddingHorizontal: RF(10),
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#F9FAFB',
    borderRadius: 20,
    alignItems: 'center',
  },
  input: {
    fontSize: 14,
    marginLeft: 10,
    width: '80%',
    backgroundColor: '#F9FAFB',
  },
});
