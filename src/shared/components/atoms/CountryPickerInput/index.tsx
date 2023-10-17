import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  Modal,
  FlatList,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {cross} from '@assets';
import {GST, RF} from '@theme';
import MaskInput from 'react-native-mask-input';
import {countryPickerList} from '@utils';

const windowHeight = Dimensions.get('window').height;

interface Props {
  country?: any;
  placeholder?: string;
  image?: any;
  value?: any;
  countryModal?: any;
  handleCountryModal?: any;
  onchange?: any;
  hanldeCountryPicker?: any;
  handleCountryFlagSign?: any;
  flagSign?: any;
}
const CountryPickerInput = (props: Props) => {
  const {
    country,
    placeholder,
    countryModal,
    hanldeCountryPicker,
    handleCountryModal,
    handleCountryFlagSign,
    flagSign,
  } = props;
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);
  const [searchData, setSearchdata] = useState([]);
  const [stringTosearch, setStringtosearch] = useState('');
  const [countryList, setCountrylist] = useState(countryPickerList);
  const [phone, setPhone] = React.useState('');

  const searchFilterFunction = (text: any) => {
    const formattedQuery = text.toLowerCase();
    const data: any = countryList?.filter((item: any) => {
      if (
        item?.name?.toLowerCase()?.includes(formattedQuery) ||
        item?.dial_code?.toLowerCase()?.includes(formattedQuery)
      ) {
        return true;
      }
    });
    setSearchdata(data);
  };
  useEffect(() => {
    searchFilterFunction(stringTosearch);
  }, [stringTosearch]);
  const onChangeSearch = (query: any) => setStringtosearch(query);

  return (
    <View>
      <View style={[GST.MAIN]}>
        <Modal
          visible={countryModal}
          animationType="slide"
          onRequestClose={() => handleCountryModal()}>
          <View style={[GST.row_center]}>
            <TouchableOpacity
              onPress={() => {
                handleCountryModal(), setStringtosearch('');
              }}
              style={styles.crossView}>
              <Image
                source={cross}
                style={styles.crossImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TextInput
              onChangeText={onChangeSearch}
              value={stringTosearch}
              maxLength={25}
              placeholder="Enter country name"
              placeholderTextColor={'gray'}
              style={styles.searchText}
            />
          </View>
          <FlatList
            decelerationRate={'fast'}
            data={stringTosearch ? searchData : countryList}
            renderItem={item => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    hanldeCountryPicker(item?.item?.callingCode),
                      handleCountryModal();
                    setStringtosearch('');
                    handleCountryFlagSign(item?.item?.flag);
                  }}
                  style={styles.flatView}>
                  <Image
                    source={{uri: item?.item?.flag}}
                    style={styles.flagImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.countryname}>{item?.item?.name}</Text>
                  <Text style={styles.textCode}>
                    {'+' + item?.item?.callingCode}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </Modal>
      </View>

      <Text style={styles.placholderText}>{placeholder}</Text>
      <View style={styles.container}>
        <View style={[GST.ROW]}>
          <TouchableOpacity
            onPress={() => handleCountryModal()}
            style={[
              styles.countryView,
              {backgroundColor: myTheme.colors.white},
            ]}>
            <View style={styles.countryCodeView}>
              <Image
                source={{uri: flagSign}}
                style={styles.flagImage}
                resizeMode="contain"
              />
              <Text style={styles.countryText}>{country}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.maskView}>
            <MaskInput
              value={phone}
              onChangeText={(masked, unmasked) => {
                setPhone(masked);
              }}
              placeholder="(905) - 299 - 6644"
              style={styles.maskText}
              mask={[
                '(',
                /\d/,
                /\d/,
                /\d/,
                ')',
                '-',
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
              keyboardType={'numeric'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CountryPickerInput;

const useStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 60,
      backgroundColor: colors.light_grey,
      borderRadius: 40,
      justifyContent: 'center',
      paddingHorizontal: RF(10),
    },
    countryView: {
      width: '30%',
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Input: {
      width: '80%',
      marginLeft: '5%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.text,
    },
    countryname: {
      color: 'black',
      fontSize: 14,
      paddingLeft: '2%',
    },
    countryCodeView: {
      flexDirection: 'row',
    },
    searchText: {
      height: windowHeight * 0.07,
      width: '90%',
      color: 'black',
    },
    flatView: {
      flexDirection: 'row',
      paddingHorizontal: '3%',
      paddingVertical: '4%',
      borderBottomWidth: 1,
      alignItems: 'center',
      borderBottomColor: colors.line,
    },
    crossView: {width: '8%', marginLeft: '3%'},
    crossImage: {height: 20, width: 20, tintColor: 'black'},
    flagImage: {height: 20, width: 20},
    textCode: {color: 'black', paddingLeft: '1%'},
    placholderText: {
      paddingLeft: RF(20),
      marginVertical: 10,
      color: colors.text,
      fontFamily: 'Plus Jakarta Sans',
      fontWeight: '700',
      fontSize: RF(18),
    },
    countryText: {color: colors.text, paddingLeft: RF(10)},
    maskView: {paddingLeft: RF(10), width: '70%'},
    maskText: {fontSize: 20},
  });
