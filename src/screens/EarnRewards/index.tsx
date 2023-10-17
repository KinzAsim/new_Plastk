import {
  Maps,
  Wrapper,
  TabWidget,
  HomeHeader,
  SearchBarTextInput,
} from '@components';
import styles from './styles';
import MapView from 'react-native-maps';
import {useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import {PermissionsAndroid, Platform, View} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {RF} from '@theme';
import {markerArray_merchant, markerArray_offfers} from '@utils';

const EarnRewards = () => {
  const theme: any = useTheme();
  const mapViewRef = useRef<MapView>(null);
  const [coords, setCoords] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState<any>('');
  const [emptySearch, setEmptySearch] = useState<any>('');
  const [stores_logo, setStores_Logo] = useState<any>([]);
  const [currentlatLon, setCurrentlatLon] = useState<any>();
  const {user} = useSelector((state: any) => state.root.user);
  const [modalVisible, setModalVisible] = useState<any>(false);
  const [tabSelectedIndex, setTabSelectedIndex] = useState<any>(0);

  const getCurrentLocationApi = () => {
    Geolocation.getCurrentPosition(
      info => {
        const {latitude, longitude} = info.coords;
        let obj = {lat: latitude, lon: longitude};
        setCurrentlatLon(obj);
        // getStores_byLocation();
      },
      err => console.log(err),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const getCurrentLocation = async () => {
    if (Platform.OS === 'ios') {
      let permiss = await Geolocation.requestAuthorization('whenInUse');
      if (permiss == 'granted') {
        getCurrentLocationApi();
      } else {
        // showToast('Failed!', 'Location not Enabled', false);
      }
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Device current location permission',
            message: 'Allow app to get your current location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocationApi();
        } else {
          showToast('Failed!', 'Location not Enabled', false);
        }
      } catch (err) {
        console.warn('eroorrrrr', err);
      }
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const onChangeText = (val: any) => {
    setSearchText(val);
  };

  const onChangeSearchText = () => {
    setSearchText('');
  };
  useEffect(() => {}, [searchText]);

  const onOpenOverlay = () => {
    setModalVisible(!modalVisible);
  };
  const onLongPressButton = () => {};

  return (
    <Wrapper>
      <HomeHeader
        title={'Spend & Earn'}
        cardText={'Visit Reward Store'}
        backgroundColor={theme?.colors?.primary}
      />

      <SearchBarTextInput
        mapSearch
        type={searchText}
        onChangeText={onChangeText}
        placeholder={'Search'}
        // onPress_CrossBtn={onChangeSearchText}
      />

      <View style={{marginLeft: RF(5)}}>
        <TabWidget
          secondTabTitle={'Offers'}
          firstTabTitle={'Plastk Merchants'}
          tabSelectedIndex={tabSelectedIndex}
          setTabSelectedIndex={setTabSelectedIndex}
        />
      </View>

      <View style={styles.parent}>
        <View style={styles.child}>
          <Maps
            coords={coords}
            onPress={onOpenOverlay}
            mapViewRef={mapViewRef}
            currentlatLon={currentlatLon}
            onLongPressButton={onLongPressButton}
            markerArray={
              tabSelectedIndex == 0 ? markerArray_merchant : markerArray_offfers
            }
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default EarnRewards;
