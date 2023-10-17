import {StyleSheet, Text, FlatList, View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../SearchBar/index';
import {RF, Typography} from '@theme';
import {location} from '@assets';
import {useKeyboardhook} from '@hooks';

interface Props {
  closeModel: (params: any) => void;
}
const data_location: any = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
  {id: '4', title: 'Item 4'},
  {id: '5', title: 'Item 5'},
  {id: '6', title: 'Item 6'},
  {id: '7', title: 'Item 7'},
  {id: '8', title: 'Item 8'},
  {id: '9', title: 'Item 9'},
  {id: '10', title: 'Item 10'},
  {id: '11', title: 'Item 11'},
  {id: '12', title: 'Item 12'},
  {id: '13', title: 'Item 13'},
  {id: '14', title: 'Item 14'},
];
const BtmSheetLocationSearch = (props: Props) => {
  const {closeModel} = props;
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState<Boolean>(false);
  const [filteredData, setFilteredData] = useState<any>(data_location);
  const isKeybaordVisible = useKeyboardhook();

  const renderItem = ({item}: any) => {
    return (
      <Pressable
        style={[styles.itemContainer, {}]}
        onPress={() => closeModel(null)}>
        <Image source={location} style={styles.locationImg} />
        <Text style={styles.itemText}>{item.title}</Text>
      </Pressable>
    );
  };

  const searchFilterFunction = (text: any) => {
    if (text) {
      const newData: any = data_location.filter(function (item: any) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearchPhrase(text);
    } else {
      setFilteredData(data_location);
      setSearchPhrase(text);
    }
  };
  return (
    <View>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
        handleSearch={searchFilterFunction}
      />

      <View
        style={{
          height: isKeybaordVisible ? '73%' : '82%',
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
          keyboardShouldPersistTaps="handled"
          // keyboardDismissMode="none"
        />
      </View>
    </View>
  );
};

export default BtmSheetLocationSearch;

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    padding: RF(15),
  },
  itemText: {
    fontSize: RF(14),
    fontFamily: Typography.FONTS.TYPE.MEDIUM,
    color: '#4A5568',
  },
  locationImg: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: RF(30),
  },
});
