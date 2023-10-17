import {StyleSheet, Linking, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

interface Props {
  fingerPrintHeading?: any;
  fingerPrintImage?: any;
  fingerPrintFirstContent?: any;
  fingerPrintSecondContent?: any;
  showFingerprint1?: any;
}
const FingerprintVerification = (props: Props) => {
  const mytheme: any = useTheme();
  const styles = getStyles(mytheme.colors);
  const [biometryType, setBiometryType] = useState(null);

  useEffect(() => {
    FingerprintScanner.isSensorAvailable()
      .then((biometryType: any) => {
        setBiometryType(biometryType);
        if (biometryType !== null) {
          showAuthenticationDialog();
        }
      })
      .catch(error => {
        // Failure code if the user's device does not have touchID or faceID enabled
        console.log('isSensorAvailable error => ', error.message);
        Alert.alert(
          'Error',
          error.message,
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
            {text: 'OK', onPress: () => openFingerprintSettings()},
          ],
          {cancelable: false},
        );
      });

    return () => {
      FingerprintScanner.release();
    };
  }, []);

  const openFingerprintSettings = () => {
    Linking.openSettings();
  };
  const getMessage = () => {
    if (biometryType === 'Face ID') {
      return 'Scan your Face on the device to continue';
    } else {
      return 'Scan your Fingerprint on the device scanner to continue';
    }
  };
  const showAuthenticationDialog = async () => {
    if (biometryType !== null || biometryType !== undefined) {
      try {
        await FingerprintScanner.authenticate({
          description: getMessage(),
          title: 'Fingerprint Log In',
          subTitle: '',
          cancelButton: 'Cancel',
          onAttempt: () => {
            console.log('=============');
          },
          // fallbackEnabled: true,
        });
        console.log('Fingerprint authenticated successfully.');
        // AlertIOS.alert('Authenticated Successfully');
      } catch (error: any) {
        if (error.name === 'FingerprintScannerNotEnrolled') {
          // Alert.alert('Error', error.name);
          console.log(error.name);
          // Add your logic for handling the not enrolled error here.
        } else {
          console.log('Fingerprint authentication failed:', error.message);
          // Add your error handling logic here.
        }
      }
    } else {
      console.log('Biometric Authentication is not available');
    }
  };

  return (
    // <View style={[GST.CENTER]}>
    //   <AppText medium size={20} style={styles.paddingView}>
    //     {/* {!biometryType == null ? 'Fingerprint Log In' : 'Set Fingerprint'} */}
    //   </AppText>
    //   <Pressable onPress={showAuthenticationDialog}>
    //     <Image source={fingerprint} style={styles.fingerPrintImage} />
    //   </Pressable>
    //   <AppText
    //     regular
    //     size={12}
    //     center
    //     style={[{paddingTop: RF(20), paddingHorizontal: RF(10)}]}>
    //     {props?.fingerPrintFirstContent}
    //   </AppText>
    //   {/* <AppText medium size={15} center style={[styles.paddingView]}>
    //     {props?.fingerPrintSecondContent}
    //   </AppText> */}
    // </View>
    <></>
  );
};

export default FingerprintVerification;

const getStyles = (colors: any) =>
  StyleSheet.create({
    fingerPrintImage: {
      resizeMode: 'contain',
      width: 75,
      height: 75,
    },
    paddingView: {
      paddingBottom: 30,
    },
  });
