import {StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {circle, goodBgCircle, goodUnBgCircle} from '@assets';
import {RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import {AppText} from '@components';

interface Props {
  onPress?: any;
  onClick?: any;
  type?: any;
  idConfirm?: any;
}
const CustomPhotoTypeList = (props: Props) => {
  const {onPress, onClick, type, idConfirm} = props;

  const myTheme: any = useTheme();
  const styles = getStyles(myTheme.colors);
  return (
    <>
      <Pressable style={styles.container} onPress={onPress}>
        {idConfirm ? (
          <>
            <Image
              source={onClick === type ? goodBgCircle : goodUnBgCircle}
              style={[styles.imgCircle]}
            />
          </>
        ) : (
          <Image
            source={circle}
            style={[
              styles.imgCircle,
              {
                tintColor:
                  onClick === type
                    ? myTheme?.colors?.text
                    : myTheme?.colors?.background,
              },
            ]}
          />
        )}

        <AppText
          size={18}
          color={myTheme.colors.border}
          semiBold
          style={{width: RF(140)}}>
          {type}
        </AppText>
      </Pressable>
    </>
  );
};

export default CustomPhotoTypeList;

const getStyles = (color: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: RF(13),
      alignItems: 'center',
    },
    imgCircle: {width: RF(32), height: RF(32), marginRight: RF(20)},
  });
