import React from 'react';
import {AppText} from '@components';
import {RF, Typography} from '@theme';
import {FlatList, Image, Pressable, StyleSheet, View} from 'react-native';

const ImageTextCard = ({
  img,
  data,
  open,
  title,
  setOpen,
  subTitle,
}: {
  img?: any;
  data?: any;
  open?: any;
  title?: any;
  setOpen?: any;
  subTitle?: any;
}) => {
  const onPress = () => {
    setOpen(!open);
  };
  return (
    <Pressable
      style={[open ? styles.openStyle : styles.view]}
      onPress={onPress}>
      <View style={open ? styles.openV : styles._view}>
        <View style={styles.imgView}>
          <Image source={img} style={styles.img} />
          <AppText size={Typography.FONTS.SIZE.XXSMALL} semiBold>
            {title}
          </AppText>
        </View>
        <AppText size={Typography.FONTS.SIZE.XXSMALL} semiBold>
          {subTitle}
        </AppText>
      </View>

      {open && (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}: any) => {
            return (
              <>
                <View style={styles.o_view} key={index}>
                  <AppText
                    semiBold
                    style={styles.ml}
                    size={Typography.FONTS.SIZE.XXSMALL}>
                    {item?.name}
                  </AppText>
                  <AppText
                    semiBold
                    style={styles.mr}
                    size={Typography.FONTS.SIZE.XXSMALL}>
                    {item?.spend}
                  </AppText>
                </View>
                <View style={styles.border} />
              </>
            );
          }}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mr: {
    marginRight: -15,
  },
  ml: {
    marginLeft: 30,
  },
  border: {
    width: '90%',
    borderWidth: 0.5,
    borderColor: '#4A55681A',
    marginVertical: RF(20),
  },
  o_view: {
    width: '79%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  openV: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: RF(20),
    justifyContent: 'space-between',
  },
  img: {
    width: RF(24),
    height: RF(24),
    resizeMode: 'contain',
    marginRight: RF(10),
  },
  imgView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  openStyle: {
    width: '90%',
    height: RF(267),
    borderWidth: 1,
    borderRadius: RF(20),
    borderColor: '#4A55681A',
    marginHorizontal: RF(20),
    alignItems: 'center',
    paddingHorizontal: RF(20),
    marginTop: RF(10),
  },
  view: {
    width: '90%',
    height: RF(60),
    borderWidth: 1,
    borderRadius: RF(20),
    borderColor: '#4A55681A',
    marginHorizontal: RF(20),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: RF(20),
    marginTop: RF(10),
  },
  _view: {
    width: '100%',
    height: RF(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ImageTextCard;
