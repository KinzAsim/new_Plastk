import {useSelector} from 'react-redux';
import {RNCamera} from 'react-native-camera';
import {StyleSheet, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

interface Props {
  image: any;
  setImage: any;
}
const Camera = ({image, setImage}: Props) => {
  const cameraRef: any = useRef(null);
  const {captureFlag} = useSelector((state: any) => state.root.user);

  useEffect(() => {
    takePicture();
  }, [captureFlag]);

  const takePicture = async () => {
    if (cameraRef) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      setImage(data.base64);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        autoFocus={'on'}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
      />
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    borderWidth: 1,
    borderColor: '#4f83cc',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '10%',
    backgroundColor: '#fff',
    borderRadius: 100,
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowColor: '#414685',
    shadowOffset: {
      width: 1,
      height: 5.5,
    },
    elevation: 6,
  },
});
