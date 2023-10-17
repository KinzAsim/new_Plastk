import React, {useEffect, useState} from 'react';
import {RF} from '@theme';
import MapView, {Marker} from 'react-native-maps';
import {
  Image,
  ImageBackground,
  View,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {green_marker, map_marker, _marker} from '@assets';
// import Geolocation from '@react-native-community/geolocation';
import Geolocation from 'react-native-geolocation-service';
// import {markerArray} from '@utils';

const Maps = ({
  home,
  coords,
  marker,
  onPress,
  mapViewRef,
  markerArray,
  currentlatLon,
  onLongPressButton,
  initial,
}: {
  home?: any;
  coords?: any;
  marker?: any;
  onPress?: any;
  mapViewRef?: any;
  markerArray?: any;
  currentlatLon?: any;
  onLongPressButton?: () => void;
  initial?: any;
}) => {
  const [position, setPosition] = useState({
    latitude: 31.5195054,
    longitude: 74.3490907,
    latitudeDelta: 0.02,
    longitudeDelta: 0.04,
  });

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    if (Platform.OS === 'ios') {
      let permiss: any = await Geolocation.requestAuthorization('whenInUse');
      if (permiss == 'granted') {
        getCurrentLocationApi();
      } else {
        console.log("Location not Enabled'");
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
          // showToast('Failed!', 'Location not Enabled', false);
          console.log('Location not Enabled');
        }
      } catch (err) {
        console.warn('eroorrrrr', err);
      }
    }
  };
  const getCurrentLocationApi = () => {
    Geolocation.getCurrentPosition(
      info => {
        const crd = info.coords;
        setPosition({
          latitude: crd.latitude,
          longitude: crd.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.04,
        });
      },
      err => console.log(err),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return (
    <View style={{flex: 1}}>
      <MapView
        ref={mapViewRef}
        style={{flex: 1}}
        maxZoomLevel={50}
        zoomEnabled={true}
        zoomTapEnabled={true}
        initialRegion={position}
        showsCompass={false}
        showsPointsOfInterest={false}
        showsMyLocationButton={false}
        customMapStyle={[
          {
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },

          {
            elementType: 'geometry',
            stylers: [
              {
                color: '#19383A',
              },
            ],
          },
          {
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            elementType: 'labels.text.fill',
            stylers: [
              {
                // color: '#757575',
                color: '#FFFFFF',
              },
            ],
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#FFFFFF',
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'administrative',
            elementType: 'geometry',
            stylers: [
              {
                color: '#19383A',
              },
            ],
          },
          {
            featureType: 'administrative.country',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#19383A',
                // visibility: 'on',
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'administrative.country',
            elementType: 'labels.text',
            stylers: [
              {
                // visibility: 'on',
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'administrative.land_parcel',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#bdbdbd',
              },
            ],
          },
          {
            featureType: 'administrative.province',
            elementType: 'labels.text',
            stylers: [
              {
                // visibility: 'on',
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'administrative.province',
            elementType: 'labels.text.fill',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'administrative.province',
            elementType: 'labels.text.stroke',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#19383A',
              },
            ],
          },
          {
            featureType: 'poi.attraction',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi.business',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi.government',
            elementType: 'labels.text.fill',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi.medical',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
              {
                color: '#19383A',
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#19383A',
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#19383A',
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi.place_of_worship',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi.place_of_worship',
            elementType: 'labels.text.fill',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi.school',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi.sports_complex',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'geometry.fill',
            stylers: [
              {
                // color: '#c4c3c0',
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#c4c3c0',
                visibility: 'off',
              },
              {
                weight: 1,
              },
            ],
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
              {
                color: '#c4c3c0',
              },
              {
                weight: 0.0001,
              },
            ],
          },

          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
              {
                color: '#FFFFFF',
              },
              {
                weight: 0.001,
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#FFFFFF',
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#FFFFFF',
              },
            ],
          },

          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [
              {
                color: '#19383A',
              },
            ],
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#19383A',
              },
            ],
          },
          {
            featureType: 'transit',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#19383A',
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#19383A',
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#19383A',
              },
            ],
          },
        ]}>
        {home && (
          <Marker coordinate={position}>
            <Image
              source={_marker}
              style={{
                width: RF(30),
                height: RF(30),
                resizeMode: 'contain',
                tintColor: 'white',
              }}
            />
          </Marker>
        )}
        {markerArray &&
          markerArray.map((item: any, index: any) => {
            return (
              <Marker onPress={onPress} coordinate={item?.region}>
                <Image
                  source={item?.url}
                  style={{
                    width: RF(42),
                    height: RF(42),
                    resizeMode: 'contain',
                  }}
                />
              </Marker>
            );
          })}
      </MapView>
    </View>
  );
};

export default Maps;
