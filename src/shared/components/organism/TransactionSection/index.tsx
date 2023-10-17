import {data} from '@utils';
import {points} from '@assets';
import {RF, Typography} from '@theme';
import React, {useState} from 'react';
import {AppText, OpenCard} from '@components';
import {FlatList, Image, Pressable, StyleSheet, View} from 'react-native';

const TransactionSection = ({
  title,
  selected,
  setSelected,
  selected_p,
  setSelected_p,
}: {
  title?: any;
  selected?: any;
  setSelected?: any;
  selected_p?: any;
  setSelected_p?: any;
}) => {
  const [open, setOpen] = useState(-1);

  const onSelect = () => {
    if (selected_p) {
      setSelected(true);
      setSelected_p(false);
    }
  };
  const onSelect_p = () => {
    if (selected) {
      setSelected_p(true);
      setSelected(false);
    }
  };
  const onOpen = (item: any, index: any) => {
    setOpen(index);
  };

  return (
    <View>
      <AppText align size={Typography.FONTS.SIZE.XXSMALL} semiBold>
        {title} Transactions
      </AppText>
      <View style={styles.btn}>
        <Button _points={selected} onPress={onSelect} title={title} />
        <Button _points={selected_p} onPress={onSelect_p} title={title} p />
      </View>
      <FlatList
        data={data}
        renderItem={({item, index}: any) => {
          return (
            <Pressable onPress={() => onOpen(item, index)} key={index}>
              <OpenCard
                key={index}
                open={open}
                data={item}
                index={index}
                _points={'500'}
                dollar={'$149.99'}
                transaction={title}
                title={'Edifier LTD'}
                date={'September 6, 2023'}
              />
            </Pressable>
          );
        }}
      />
    </View>
  );
};

const Button = ({
  p,
  title,
  onPress,
  _points,
}: {
  p?: any;
  title?: any;
  onPress?: any;
  _points?: any;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        _points === true ? styles.bottom_view : styles.bottom_view_points,
        {
          backgroundColor:
            _points === true && title === 'Posted'
              ? '#19383A'
              : title === 'Pending' && _points === true
              ? '#2F2F2F'
              : '#fff',
        },
      ]}>
      {p && <Image source={points} style={styles.image} />}
      <AppText
        semiBold
        size={12}
        color={_points === true ? 'white' : '#19383A'}>
        {p ? '10,000' : '$200'}
      </AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {flexDirection: 'row', justifyContent: 'space-evenly'},
  bottom_view: {
    width: RF(158),
    height: RF(40),
    marginTop: RF(20),
    flexDirection: 'row',
    borderRadius: RF(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom_view_points: {
    width: RF(158),
    height: RF(40),
    borderWidth: 1.5,
    marginLeft: RF(7),
    marginTop: RF(20),
    borderRadius: RF(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#4A55681A',
  },
  image: {
    width: RF(24),
    height: RF(24),
    resizeMode: 'contain',
    marginRight: RF(10),
  },
});

export default TransactionSection;
