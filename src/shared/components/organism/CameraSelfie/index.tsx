import React, {useEffect, useState, useRef} from 'react';
import {
  Image,
  StyleSheet,
  ActivityIndicator,
  View,
  Pressable,
} from 'react-native';
import {backArrow, zig, cameraBtnWhite, circleFillArrow} from '@assets';
import {GST, RF, SCREEN_HEIGHT, SCREEN_WIDTH} from '@theme';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {AppHeader, Wrapper} from '@components';
import {navigate} from '@services';
import {useTheme} from '@react-navigation/native';
import getStyles from './styles';

export default function CameraSelfie() {
  const camera = useRef(null);
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;
  const [showCamera, setShowCamera] = useState(true);
  const [imageSource, setImageSource] = useState('');
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme.colors);

  useEffect(() => {
    async function getPermission() {
      const newCameraPermission = await Camera.requestCameraPermission();
    }
    getPermission();
  }, []);
  if (device == null) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }
  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      setImageSource(photo.path);
      setShowCamera(false);
      if (photo) {
        navigate('ProcessingFR');
      }
    }
  };
  function frameCorner(
    color: string,
    size: string | number,
    size1: string | number,
    borderLength: string | number,
    thickness: number = 2,
    borderRadius: number = 0,
  ): JSX.Element {
    return (
      <View style={{height: size, width: size1}}>
        {/* left-Top-Corner */}
        <View
          style={{
            position: 'absolute',
            height: borderLength,
            width: borderLength,
            top: -10,
            left: 0,
            borderColor: color,
            borderTopWidth: thickness,
            borderLeftWidth: thickness,
            borderTopLeftRadius: borderRadius,
          }}
        />
        {/* Right-Top-Corner */}
        <View
          style={{
            position: 'absolute',
            height: borderLength,
            width: borderLength,
            top: -10,
            right: 0,
            borderColor: color,
            borderTopWidth: thickness,
            borderRightWidth: thickness,
            borderTopRightRadius: borderRadius,
          }}
        />
        {/* left-bottom-Corner */}

        <View
          style={{
            position: 'absolute',
            height: borderLength,
            width: borderLength,
            bottom: 4,
            left: 0,
            borderColor: color,
            borderBottomWidth: thickness,
            borderLeftWidth: thickness,
            borderBottomLeftRadius: borderRadius,
          }}
        />
        {/* right-bottom-corner */}
        <View
          style={{
            position: 'absolute',
            height: borderLength,
            width: borderLength,
            bottom: 4,
            right: 0,
            borderColor: color,
            borderBottomWidth: thickness,
            borderRightWidth: thickness,
            borderBottomRightRadius: borderRadius,
          }}
        />
      </View>
    );
  }

  return (
    <Wrapper
      translucent
      statusBarStyle={'default'}
      statusBarBagColor={'transparent'}>
      <View style={[GST.row_Flex_center]}>
        <>
          <Camera
            photo={true}
            ref={camera}
            device={device}
            isActive={showCamera}
            style={[StyleSheet.absoluteFill, GST.MAIN]}></Camera>

          <View style={styles.maskContainer}>
            <View style={styles.maskTopContainer} />
            <View style={styles.maskCenterContainer}>
              <View style={styles.maskLeftContainer} />
              <View style={styles.maskRightContainer} />
            </View>
            <View style={styles.maskBottomContainer} />
          </View>
          <View style={styles.headerView}>
            <AppHeader
              headerBackground
              titleCenterAlign
              title={'Take A Selfie'}
              showLeftIcon
              showRightIcon
              leftIcon={backArrow}
              rightIcon={zig}
              headerstyle={{paddingTop: RF(30), paddingHorizontal: RF(50)}}
            />
          </View>

          <View style={styles.container}>
            {imageSource == '' && (
              <>
                {frameCorner(
                  'white',
                  SCREEN_HEIGHT / 1.87,
                  SCREEN_WIDTH / 1.6,
                  SCREEN_HEIGHT / 10,
                  6,
                  20,
                )}
              </>
            )}
          </View>
          {imageSource !== '' ? (
            <View style={styles.buttonContainer}>
              <Pressable onPress={() => navigate('Welcome')}>
                <Image source={circleFillArrow} style={styles.imgCircle} />
              </Pressable>
            </View>
          ) : (
            <View style={styles.buttonContainer}>
              <Pressable onPress={() => capturePhoto()}>
                <Image source={cameraBtnWhite} style={styles.imgCircle} />
              </Pressable>
            </View>
          )}
        </>
      </View>
    </Wrapper>
  );
}
