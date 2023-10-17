import React from 'react';
import {RF, Typography} from '@theme';
import {AppText, CustomButton} from '@components';
import {Image, StyleSheet, View} from 'react-native';

const Success = ({
  title,
  heading,
  scan,
  onPress,
  onClick,
}: {
  scan?: any;
  title?: any;
  heading?: any;
  onPress?: any;
  onClick?: any;
}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      {!scan && (
        <AppText
          align
          regular
          semiBold={true}
          size={
            scan ? Typography.FONTS.SIZE.MEDIUM : Typography.FONTS.SIZE.MEDIUM
          }>
          {heading ? heading : 'Thank You!'}
        </AppText>
      )}
      <View style={styles.checkView}>
        {!scan && (
          <>
            {/* <Image source={tick_} style={styles.img} /> */}
            <AppText
              align
              medium
              size={Typography.FONTS.SIZE.MEDIUM}
              style={styles.innerAppText}
              numberOfLines={2}>
              {title}
            </AppText>
          </>
        )}
        {scan && (
          <>
            {/* <Image source={tick_} style={styles.img_s} /> */}
            <AppText
              align
              regular
              semiBold={true}
              style={{marginTop: RF(10)}}
              size={
                scan
                  ? Typography.FONTS.SIZE.MEDIUM
                  : Typography.FONTS.SIZE.MEDIUM
              }>
              {heading ? heading : 'Thank You!'}
            </AppText>
            <AppText
              align
              medium
              size={Typography.FONTS.SIZE.MEDIUM}
              style={styles.innerAppText2}
              numberOfLines={2}>
              You have successfully connected your Plastk Rewards Account to a
              Plastk Merchant Terminal.
            </AppText>
            <AppText
              align
              medium
              size={Typography.FONTS.SIZE.MEDIUM}
              style={styles.innerAppText3}
              numberOfLines={2}>
              Visit the Insights page on your Plastk Rewards App to see all
              purchase transactions!
            </AppText>
          </>
        )}

        <View style={[styles.btn, {bottom: scan ? RF(100) : 50}]}>
          <CustomButton
            text={scan ? 'Home' : 'Continue'}
            onPress={scan ? onPress : onClick}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img_s: {
    width: RF(90),
    height: RF(90),
    resizeMode: 'contain',
    marginTop: RF(-80),
  },
  img: {
    width: RF(60),
    height: RF(60),
    resizeMode: 'contain',
    marginTop: RF(-80),
  },
  innerAppText: {
    width: '90%',
    marginTop: RF(16),
    marginBottom: RF(25),
  },
  innerAppText2: {
    width: '77%',
    marginTop: RF(15),
    // marginBottom: RF(15),
  },
  innerAppText3: {
    width: '77%',
    marginTop: RF(15),
    marginBottom: RF(25),
  },
  checkView: {
    flex: 1,
    // marginTop: RF(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    position: 'absolute',
    width: '100%',
  },
});

export default Success;
