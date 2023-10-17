import * as React from 'react';
import {runOnJS} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {useCameraDevices, useFrameProcessor} from 'react-native-vision-camera';
import {Camera} from 'react-native-vision-camera';
import {scanFaces, Face, DetectedObject} from 'vision-camera-face-detector';
import {navigate} from '@services';

export default function FaceDetector() {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = React.useState(false);
  const [faces, setFaces] = React.useState<Face[]>();
  const [objects, setObjects] = React.useState<DetectedObject[]>();
  const devices = useCameraDevices();
  const device = devices.front;

  React.useEffect(() => {
    if (faces?.length) {
      navigation.goBack();
    } else {
    }
  }, [faces]);

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    const scannedFaces = scanFaces(frame);
    // if (scannedFaces?.length) {
    //   navigate('VerifyGetStarted');
    // } else {
    //   console.log('No scan face');
    // }

    runOnJS(setFaces)(scannedFaces);
  }, []);

  return device != null && hasPermission ? (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      frameProcessor={frameProcessor}
      frameProcessorFps={5}
    />
  ) : null;
}

// import React from 'react';
// import {StyleSheet} from 'react-native';
// import {
//   Camera,
//   useCameraDevices,
//   useFrameProcessor,
// } from 'react-native-vision-camera';
// import {runOnJS} from 'react-native-reanimated';

// import {Ratio} from '@components';

// import {scanFaces, Face} from 'vision-camera-face-detector';

// const FaceDetector = React.memo(() => {
//   const devices = useCameraDevices();
//   const [cameraDevice, setCameraDevice] = React.useState('front');
//   const [hasVideoPermission, setHasVideoPermissions] = React.useState(false);
//   const [faces, setFaces] = React.useState<Face[]>();

//   React.useEffect(() => {
//     const requestCameraPermission = async () => {
//       const cameraPermission = await Camera.getCameraPermissionStatus();

//       if (cameraPermission !== 'authorized') {
//         const newCameraPermission = await Camera.requestCameraPermission();

//         if (newCameraPermission === 'authorized') {
//           setHasVideoPermissions(true);
//         }
//       } else {
//         setHasVideoPermissions(true);
//       }
//     };

//     requestCameraPermission();
//   }, []);

//   const frameProcessor = useFrameProcessor(frame => {
//     'worklet';

//     const scannedFaces = scanFaces(frame);
//     runOnJS(setFaces)(scannedFaces);
//   }, []);

//   const device = cameraDevice === 'front' ? devices.front : devices.back;

//   if (device !== null && hasVideoPermission) {
//     return (
//       <Ratio ratio={4 / 3}>
//         <Camera
//           style={StyleSheet.absoluteFill}
//           device={device}
//           isActive={true}
//           video={true}
//           audio={false}
//           frameProcessor={frameProcessor}
//           frameProcessorFps={5}
//         />
//       </Ratio>
//     );
//   }

//   // TODO show message that there is no device
//   return null;
// });

// export default FaceDetector;
