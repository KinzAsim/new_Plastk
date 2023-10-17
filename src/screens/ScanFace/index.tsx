import * as React from 'react';
import {navigate} from '@services';
import {Wrapper} from '@components';
import {StyleSheet} from 'react-native';
import {runOnJS} from 'react-native-reanimated';
import {Camera} from 'react-native-vision-camera';
import {scanFaces, Face} from 'vision-camera-face-detector';
import {useCameraDevices, useFrameProcessor} from 'react-native-vision-camera';

export default function ScanFace() {
  const devices = useCameraDevices();
  const [faces, setFaces] = React.useState<Face[]>();
  const device = devices.front;
  const [hasPermission, setHasPermission] = React.useState(false);

  React.useEffect(() => {
    if (faces?.length) {
      navigate('Login');
    } else {
      // console.log("No scan face'");
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
    runOnJS(setFaces)(scannedFaces);
  }, []);

  return device != null && hasPermission ? (
    <Wrapper
      translucent
      statusBarBagColor={'transparent'}
      statusBarStyle={'default'}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        frameProcessor={frameProcessor}
        frameProcessorFps={5}
      />
    </Wrapper>
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
