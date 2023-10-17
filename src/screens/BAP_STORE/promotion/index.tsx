import React, {useState, useRef, useEffect} from 'react';
import {RouteProp} from '@react-navigation/native';
import {Wrapper, CurvedView} from '@components';
import {markerArray, nearYou} from '@utils';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      type?: any;
      data?: any;
      item?: any;
    };
  }>;
}

const BAP_Promotion = ({route, navigation}: Props) => {
  const [coords, setCoords] = useState<any>();
  const [visits, setVisits] = useState<any>(1);
  const [offer_type, setOffer_type] = useState<any>('');
  const [totalVisits, setTotalVisits] = useState<any>(4);
  const [currentlatLon, setCurrentlatLon] = useState<any>();
  const mapRef: any = useRef();
  const [animate, setAnimate] = useState<any>();

  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);

  // const getCurrentLocation = async () => {
  //   if (Platform.OS === 'ios') {
  //     let permiss = await Geolocation.requestAuthorization('whenInUse');
  //     if (permiss == 'granted') {
  //       getCurrentLocationApi();
  //     } else {
  //       console.log("Location not Enabled'");
  //       // showToast('Failed!', 'Location not Enabled', false);
  //     }
  //   } else {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //         {
  //           title: 'Device current location permission',
  //           message: 'Allow app to get your current location',
  //           buttonNeutral: 'Ask Me Later',
  //           buttonNegative: 'Cancel',
  //           buttonPositive: 'OK',
  //         },
  //       );
  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         getCurrentLocationApi();
  //       } else {
  //         // showToast('Failed!', 'Location not Enabled', false);
  //         console.log('Location not Enabled');
  //       }
  //     } catch (err) {
  //       console.warn('eroorrrrr', err);
  //     }
  //   }
  // };
  // const getCurrentLocationApi = () => {
  //   Geolocation.getCurrentPosition(
  //     info => {
  //       const {latitude, longitude} = info.coords;
  //       let obj = {lat: latitude, lon: longitude};
  //       setCurrentlatLon(obj);
  //     },
  //     err => console.log(err),
  //     {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  //   );
  // };

  return (
    <Wrapper
      translucent
      statusBarBagColor={'transparent'}
      statusBarStyle={'default'}>
      <CurvedView
        initial={animate}
        mapRef={mapRef}
        coords={coords}
        visits={visits}
        // item={nearYou}
        navigation={navigation}
        totalVisits={totalVisits}
        offer_type={offer_type}
        currentlatLon={currentlatLon}
      />
    </Wrapper>
  );
};

export default BAP_Promotion;
