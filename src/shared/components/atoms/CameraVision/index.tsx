import {navigate} from '@services';
import {cameraBtnWhite, frame, id_card} from '@assets';
import {GST, RF, SCREEN_WIDTH} from '@theme';
import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Image,
  Easing,
  Animated,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {Pressable} from 'react-native';

interface Props {
  scanCard?: any;
  handleFrontCard?: any;
}

function CameraVision(props: Props) {
  const {handleFrontCard, scanCard} = props;
  const camera = useRef(null);
  const timeoutRef: any = useRef<any>(null);
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;
  const [showCamera, setShowCamera] = useState(true);
  const [imageSource, setImageSource] = useState('');
  const translateAnim = useRef(new Animated.Value(0)).current;
  const cameraOptions: any = {};

  const handleBarcodeDetection = ({barcodes}: any) => {
    if (barcodes && barcodes.length > 0) {
      // Process the detected barcode data (ID card information)
      console.log('cddcd', barcodes[0].data);
    }
  };

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateAnim, {
          toValue: -1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(translateAnim, {
          toValue: 170,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    async function getPermission() {
      const newCameraPermission = await Camera.requestCameraPermission();
      console.log(newCameraPermission);
    }
    getPermission();
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      setImageSource(photo.path);
      setShowCamera(false);
      if (photo) {
        if (scanCard) {
          timeoutRef.current = setTimeout(() => {
            console.log('Timeout completed!');
            handleFrontCard();
            setShowCamera(true);
          }, 2000);
        } else {
          clearTimeout(timeoutRef);
          setShowCamera(false);
          navigate('ProcessingID');
        }
      }
    }
  };

  if (device == null) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  return (
    <View style={styles.container}>
      {showCamera ? (
        <>
          <View style={styles.container}>
            <ImageBackground
              source={frame}
              resizeMode="contain"
              style={[styles.cameraViewBg]}
              imageStyle={{}}>
              <View style={styles.overlayCamera}>
                {/* <View style={styles.overlay}>
                  <Animated.View
                    style={[
                      styles.line,
                      {transform: [{translateY: translateAnim}]},
                    ]}
                  />
                </View> */}
                <Camera
                  ref={camera}
                  photo={true}
                  device={device}
                  style={styles.camera}
                  isActive={showCamera}
                  // onInitialized={startAnimation}
                />
              </View>
            </ImageBackground>
          </View>

          <View style={styles.buttonContainer}>
            <Pressable onPress={() => capturePhoto()}>
              <Image source={cameraBtnWhite} style={styles.imgCircle} />
            </Pressable>
          </View>
        </>
      ) : (
        <>
          {imageSource !== '' ? (
            <Image
              style={styles.image}
              source={{
                uri: `file://'${imageSource}`,
              }}
            />
          ) : (
            <View style={styles.cameraView}>
              <ImageBackground
                source={frame}
                resizeMode="contain"
                style={[styles.cameraViewBg]}
                imageStyle={{}}>
                <Image source={id_card} style={styles.id_image} />
              </ImageBackground>
            </View>
          )}

          <View style={styles.buttonContainer}>
            <Pressable onPress={() => capturePhoto()}>
              <Image source={cameraBtnWhite} style={styles.imgCircle} />
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    zIndex: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: 300,
    height: 2,
    backgroundColor: 'red', // You can customize the color and style of the animation line
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    padding: 20,
  },
  image: {
    width: SCREEN_WIDTH * 0.82,
    height: SCREEN_WIDTH / 2,
    alignSelf: 'center',
  },
  cameraView: {...GST.CENTER, flex: 1},
  cameraViewBg: {
    width: '100%',
    aspectRatio: 135 / 71,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
  },
  // camera: {
  //   width: '100%',
  //   height: '100%',
  //   alignSelf: 'center',
  // },
  id_image: {
    width: SCREEN_WIDTH * 0.82,
    height: SCREEN_WIDTH / 2,
  },
  overlayCamera: {
    width: SCREEN_WIDTH * 0.82,
    height: SCREEN_WIDTH / 2,
    borderRadius: 6,
    overflow: 'hidden',
  },
  imgCircle: {
    width: RF(80),
    height: RF(80),
  },
});

export default CameraVision;
