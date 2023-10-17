import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Image, Pressable} from 'react-native';
import {GOOGLE_PLACES_API_KEY} from '@utils';
import {GST, light_grey, RF, txt_gray} from '@theme';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {cross, leftArrow, location} from '@assets';
import {useTheme} from '@react-navigation/native';
import {AppText} from '@components';

interface Props {
  colors: any;
  title?: any;
  onChange: (data: any, details: any) => void;
  handleCloseModal?: any;
}

const GooglePlaceComplete = (props: Partial<Props>) => {
  const {onChange, title, handleCloseModal} = props;
  const mytheme: any = useTheme();
  const placesRef: any = useRef();
  const [searchPhrase, setSearchPhrase] = useState<any>('');
  const clearSearch = () => {
    setSearchPhrase('');
    placesRef.current.clear();
  };
  const renderLocationList = (row: any) => {
    return (
      <>
        <View style={[GST.ROW]}>
          <Image source={location} style={styles.locationImg} />
          <AppText medium size={12}>
            {row?.description}
          </AppText>
        </View>
      </>
    );
  };

  return (
    <>
      <GooglePlacesAutocomplete
        listViewDisplayed
        fetchDetails={true}
        placeholder={title}
        keyboardShouldPersistTaps="handled"
        nearbyPlacesAPI="GoogleReverseGeocoding"
        onPress={(data: any, details = null) => {
          if (onChange) {
            onChange(data, details);
          }
        }}
        // currentLocation={true}
        enableHighAccuracyLocation
        enablePoweredByContainer={false}
        renderDescription={(row: any) => renderLocationList(row)}
        ref={placesRef}
        textInputProps={{
          color: mytheme?.colors?.border,
          clearButtonMode: 'never',
          onChangeText: (txt: any) => {
            setSearchPhrase(txt);
          },
        }}
        styles={{
          textInput: [styles.inputStyle],
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
          listView: {
            zIndex: 1000,
            width: '100%',
          },
        }}
        query={{
          language: 'en',
          types: 'geocode',
          components: 'country:ca',
          key: GOOGLE_PLACES_API_KEY,
        }}
        // listEmptyComponent={() => (
        //   <View style={{flex: 1}}>
        //     <Text>No results were found</Text>
        //   </View>
        // )}
      />
      <View style={styles.searchView}>
        <Pressable onPress={() => handleCloseModal()}>
          <Image source={leftArrow} style={styles.img} />
        </Pressable>
        <Pressable onPress={clearSearch}>
          <Image
            source={cross}
            style={[styles.img, {tintColor: mytheme?.colors?.border}]}
          />
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: RF(13),
    borderRadius: RF(50),
    backgroundColor: light_grey,
    paddingHorizontal: RF(50),
    fontWeight: '500',
    fontFamily: 'Plus Jakarta Sans',
  },
  placeholderText: {
    marginTop: RF(25),
  },
  img: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  searchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: RF(10),
    position: 'absolute',
    top: 5,
    left: 0,
    right: 0,
  },
  locationImg: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: '#4A5568',
    marginRight: RF(20),
  },
});

export default GooglePlaceComplete;
