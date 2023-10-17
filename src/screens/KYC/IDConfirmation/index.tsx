import {
  Wrapper,
  AppText,
  TextSection,
  CustomProgressBar,
  CustomPhotoTypeList,
} from '@components';
import {RF, GST} from '@theme';
import {navigate} from '@services';
import React, {useState} from 'react';
import {circleFillArrow} from '@assets';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, View, Image, Pressable} from 'react-native';

const IDConfirmation = () => {
  const myTheme: any = useTheme();
  const styles = getStyles(myTheme.colors);
  const [onClick, setOnClick] = useState<any>('Drivers License');

  const on_Click = async (type: any) => {
    setOnClick(type);
    setTimeout(async () => {
      if (type === 'Drivers License') {
        // navigate('');
      }
      if (type === 'Take A Selfie') {
        navigate('TakeSelfie');
      }
      // setOnClick('');
    }, 100);
  };

  return (
    <Wrapper>
      <CustomProgressBar value={94} mt={30} />
      <TextSection
        top={20}
        title={'Your Id Checks Out'}
        content={'You’re almost done! We just need a \n quick selfie'}
      />
      <View style={styles.mainView}>
        <CustomPhotoTypeList
          idConfirm={true}
          type={'Drivers License'}
          onClick={onClick}
          onPress={() => on_Click('Drivers License')}
        />
        <CustomPhotoTypeList
          idConfirm={true}
          type={'Take A Selfie'}
          onClick={onClick}
          onPress={() => on_Click('Take A Selfie')}
        />
      </View>

      <View style={styles.bottomArrowView}>
        <Pressable
          style={styles.selfieBtn}
          onPress={() => navigate('SelfieExample')}>
          <AppText color={myTheme.colors.primary} size={13}>
            {'Selfie Example'}
          </AppText>
        </Pressable>
        <Pressable onPress={() => navigate('TakeSelfie')}>
          <Image source={circleFillArrow} style={styles.imgCircle} />
        </Pressable>
      </View>
    </Wrapper>
  );
};

export default IDConfirmation;

const getStyles = (colors: any) =>
  StyleSheet.create({
    mainView: {
      flex: 3,
      ...GST.CENTER,
    },
    appLogo: {
      width: RF(150),
      height: RF(150),
    },
    bottomArrowView: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: RF(30),
    },
    imgCircle: {width: RF(60), height: RF(60), alignSelf: 'center'},
    selfieBtn: {
      width: RF(135),
      height: RF(50),
      borderRadius: 30,
      borderWidth: 0.4,
      ...GST.CENTER,
      alignSelf: 'center',
      marginBottom: RF(30),
      borderColor: colors.border,
    },
  });
